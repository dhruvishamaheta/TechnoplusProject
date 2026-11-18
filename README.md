# **Technoplus Solutions Website**

Technoplus Solutions is a modern business website for a software development, cloud infrastructure, and digital engineering company.

The project includes company information, services, projects, blog articles, careers, team details, FAQs, contact inquiries, and job applications with resume uploads.

## Features

- Responsive React user interface
- Modern animated design
- Company and service pages
- Project portfolio
- Technical blog section
- Open job positions and career applications
- Portfolio/GitHub/LinkedIn links
- Resume upload in PDF, DOC, or DOCX format
- Career applications delivered through email
- Applications saved in MongoDB
- Contact inquiry form
- Nodemailer Gmail SMTP integration
- REST API backend
- MongoDB Atlas database support

## Tech Stack

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- Multer
- CORS
- dotenv

## Pages

- `/` - Home
- `/about` - About Us
- `/services` - Services
- `/services/:id` - Service Details
- `/projects` - Projects
- `/blog` - Blog
- `/blog/:id` - Blog Details
- `/careers` - Careers
- `/faq` - Frequently Asked Questions
- `/team` - Team
- `/company-details` - Company Details
- `/contact` - Contact Us

## Project Structure

```text
TechnoplusProject/
├── TechnoPulseWeb/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── data/
│       └── pages/
├── server/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── package.json
└── README.md
