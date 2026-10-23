import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Team from './pages/Team';
import CompanyDetails from './pages/CompanyDetails';
import ContactUs from './pages/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/team" element={<Team />} />
            <Route path="/company-details" element={<CompanyDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
