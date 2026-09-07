import { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', comment: '' });
  };

  return (
    <div className="contact-page-wrapper position-relative">
      <div className="container py-5">
        
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>

        {/* Page Title */}
        <h2 className="fw-bold mb-5 letter-spacing-wide">CONTACT</h2>

        <div className="row g-5">
          {/* Left Side: Contact Form */}
          <div className="col-12 col-lg-6">
            <h5 className="fw-bold mb-3">To Order in Bulk:</h5>
            <p className="text-muted mb-4">
              Use the form below to send us a message or contact us by mail at: 
              <br/>
              <a href="mailto:infoluxipk@gmail.com" className="text-dark">infoLuxepk@gmail.com</a>
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control rounded-0 shadow-none" id="name" name="name" value={formData.name} onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control rounded-0 shadow-none" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                <input type="email" className="form-control rounded-0 shadow-none" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="mb-4">
                <label htmlFor="comment" className="form-label">Comment <span className="text-danger">*</span></label>
                <textarea className="form-control rounded-0 shadow-none" id="comment" name="comment" rows="5" value={formData.comment} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn btn-dark rounded-0 px-5 py-2">SEND MESSAGE</button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="col-12 col-lg-5 offset-lg-1">
            <div className="contact-info-section mt-lg-0 mt-5">
              <h5 className="fw-bold mb-3">Get In Touch!</h5>
              <p className="text-muted mb-4">
                For bulk orders, contact us for pricing and custom options:
              </p>

              <ul className="list-unstyled mb-4">
                <li className="d-flex align-items-center gap-3 mb-3">
                  <MessageCircle size={20} className="text-dark" />
                  <span>WhatsApp: 03159416118</span>
                </li>
                <li className="d-flex align-items-center gap-3 mb-4">
                  <Mail size={20} className="text-dark" />
                  <span>infoLuxepk@gmail.com</span>
                </li>
              </ul>

              <p className="text-muted mb-4 line-height-large">
                We are Located in the Peoples colony no 2, shop # 11 Muhammadi chowk (FAISALABAD). Pakistan
              </p>

              <hr className="my-4 text-muted opacity-25" />

              <div className="opening-hours">
                <p className="mb-2 text-muted">Opening Hours:</p>
                <p className="mb-1 text-muted">MON to SAT: 9:00AM - 10:00PM</p>
                <p className="mb-0 text-muted">SUN: 10:00AM - 6:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/923058973929" target="_blank" rel="noreferrer" className="whatsapp-float shadow-lg">
        <MessageCircle size={30} color="white" />
      </a>
    </div>
  );
}

export default Contact;