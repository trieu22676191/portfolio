import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { 
  FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHome 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Invalid email format.";
    if (!formData.subject.trim()) return "Subject is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const errorMsg = validateForm();
    if (errorMsg) {
      toast.error(errorMsg);
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm('service_fs5h4zj', 'template_bgf6dik', form.current, 'vw8fUo0S1agvu7Vbq')
      .then((result) => {
          toast.success("Message sent successfully!");
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
      }, (error) => {
          toast.error("Failed to send message. Please try again later.");
          setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        
        <div className="contact-wrapper">
          {/* Left Column - Form */}
          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <p className="contact-desc">
              Have a project in mind or an opportunity you'd like to discuss? Feel free to send me a message. I'll get back to you as soon as possible.
            </p>
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="e.g.Nguyen Van A" 
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="e.g.nguyenvana@gmail.com" 
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="e.g.Hiring for Front-End Position" 
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  placeholder="e.g.Hello Trieu, I would like to discuss..." 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? <span className="spinner"></span> : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="contact-info-container">
            <h3>Contact Information</h3>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>trieu22676191@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Phone</h4>
                  <p>0362356676</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Current Address</h4>
                  <p>An Hoi Dong Ward,<br/>Ho Chi Minh City,<br/>Vietnam</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><FaHome /></div>
                <div>
                  <h4>Hometown</h4>
                  <p>Tan Long Commune,<br/>Dong Thap Province,<br/>Vietnam</p>
                </div>
              </div>
            </div>

            <div className="social-media-section">
              <h4>Social Media</h4>
              <div className="social-icons">
                <a href="https://github.com/trieu22676191" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/nguyenphutrieu2004" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.facebook.com/teerius" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com/_teerius_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@_teerius.04?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
