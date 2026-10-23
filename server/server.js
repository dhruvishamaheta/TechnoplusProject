import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import dns from 'node:dns';

// Fix for Windows DNS resolving issues with MongoDB Atlas SRV records
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn('DNS server override notice:', e.message);
}

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
let isMongoConnected = false;
const mongoUri = process.env.MONGO_URI;

if (
  mongoUri &&
  !mongoUri.includes('<username>') &&
  !mongoUri.includes('<password>') &&
  !mongoUri.includes('<db_password>')
) {
  mongoose
    .connect(mongoUri, { dbName: 'technoplusdata' })
    .then(() => {
      isMongoConnected = true;
      console.log('Successfully connected to MongoDB Atlas (Database: technoplusdata)');
    })
    .catch((err) => {
      console.error('MongoDB Atlas connection error:', err.message);
    });
} else {
  console.log('MongoDB Atlas URI pending configuration in server/.env');
}

// Contact Schema & Model
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    emailDelivered: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: 'contacts' }
);

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

// Nodemailer Transporter Setup
const emailUser = process.env.EMAIL_USER?.trim() || 'dhruvishamaheta284@gmail.com';
const emailPass = (process.env.EMAIL_PASS || 'dgcywvubstgtpkhz').replace(/\s+/g, '');
const receiverEmail = process.env.RECEIVER_EMAIL?.trim() || emailUser;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

// Verify mail transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error('Nodemailer verification failed:', error.message);
  } else {
    console.log(`Nodemailer is ready to dispatch emails using: ${emailUser}`);
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    database: isMongoConnected ? 'connected (technoplusdata)' : 'disconnected/pending-uri',
    mailer: `ready for ${receiverEmail}`,
    timestamp: new Date().toISOString()
  });
});

// Contact endpoint - Saves to Mongo Atlas & sends email
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are all required.'
      });
    }

    // 1. Save to MongoDB Atlas if connected
    let savedDoc = null;
    if (isMongoConnected || mongoose.connection.readyState === 1) {
      try {
        savedDoc = await ContactMessage.create({
          name,
          email,
          message,
          emailDelivered: false
        });
        console.log(`Saved contact inquiry from ${name} to MongoDB Atlas.`);
      } catch (dbErr) {
        console.error('Failed to save to MongoDB:', dbErr.message);
      }
    }

    // 2. Prepare Email Notification
    const mailOptions = {
      from: `"Technoplus Inquiries" <${emailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Inquiry from ${name} - Technoplus Solutions`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border: 1px solid #334155; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #38bdf8); padding: 24px; text-align: center;">
            <h1 style="margin: 0; color: #0f172a; font-size: 24px; font-weight: 700;">Technoplus Solutions</h1>
            <p style="margin: 4px 0 0 0; color: #082f49; font-size: 14px;">New Website Contact Submission</p>
          </div>
          
          <div style="padding: 28px 24px;">
            <p style="font-size: 15px; line-height: 1.6; margin-top: 0; color: #cbd5e1;">
              You have received a new contact inquiry through your website contact form:
            </p>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #1e293b; border-radius: 8px; overflow: hidden;">
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #334155; font-weight: 600; color: #94a3b8; width: 100px;">Sender:</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #334155; color: #ffffff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; border-bottom: 1px solid #334155; font-weight: 600; color: #94a3b8;">Email:</td>
                <td style="padding: 12px 16px; border-bottom: 1px solid #334155; color: #38bdf8;">
                  <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: 600; color: #94a3b8; vertical-align: top;">Message:</td>
                <td style="padding: 12px 16px; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re:%20Inquiry%20regarding%20Technoplus%20Solutions" style="display: inline-block; background: #0ea5e9; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; font-size: 14px;">
                Reply to ${name}
              </a>
            </div>
          </div>

          <div style="background: #090d16; padding: 14px 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b;">
            Technoplus Solutions Private Limited &bull; Notification System
          </div>
        </div>
      `
    };

    // 3. Send email via Nodemailer
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully delivered to ${receiverEmail}`);

    // 4. Update status in DB if saved
    if (savedDoc) {
      savedDoc.emailDelivered = true;
      await savedDoc.save();
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully and received by our team!',
      savedToDatabase: !!savedDoc
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An error occurred while sending your message. Please try again later.'
    });
  }
});

// Endpoint to view stored messages (admin utility)
app.get('/api/messages', async (req, res) => {
  try {
    if (!isMongoConnected && mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        error: 'MongoDB Atlas is not connected yet. Please provide valid MONGO_URI in .env'
      });
    }
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`TechnoPulse Backend Server running on port ${PORT}`);
});
