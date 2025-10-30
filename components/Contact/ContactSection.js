// components/Contact/ContactSection.js
'use client';
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../../styles/Contact/contact.css';

const ContactSection = () => {
  useEffect(() => {
    // EmailJS initialization with your API key
    emailjs.init("public_UdnmYRxIVWFH2DX66");
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
          // Send email to yourself
          const result = await emailjs.sendForm(
            'service_gnrm9u5',    // Your service ID
            'template_dqpcrb8',   // Your template ID for receiving messages
            this                  // form element
          );

          // Auto-reply to the user who sent the message
          const userEmail = this.querySelector('#email').value;
          const userName = this.querySelector('#name').value;
          
          await emailjs.send(
            'service_gnrm9u5',    // Your service ID
            'template_fe40ini', // You need to create this template for auto-reply
            {
              to_email: userEmail,
              to_name: userName,
              from_name: 'Abul Ala Moududi',
              reply_to: 'moududi2002@gmail.com'
            }
          );
          
          if (result.status === 200) {
            showToast('Message sent successfully! I will connect to you very soon', 'success');
            this.reset();
          } else {
            showToast('Error sending message. Please try again.', 'error');
          }
        } catch (error) {
          console.error('Email sending error:', error);
          showToast('Error sending message. Please try again.', 'error');
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
    }

    // Toast notification function
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = message;
        toast.className = 'toast ' + type;
        toast.classList.add('show');
        
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }
    }

    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-layout">
          {/* Bottom Row: Contact Info + Additional Info + Form */}
          <div className="contact-bottom-row">
            {/* Contact Information Card */}
            <div className="contact-info-card">
              <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-detail">
                  <i className="fas fa-envelope"></i>
                  <div className="contact-detail-content">
                    <h4>Email</h4>
                    <a href="mailto:moududi2002@gmail.com">moududi2002@gmail.com</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <i className="fas fa-phone"></i>
                  <div className="contact-detail-content">
                    <h4>Phone</h4>
                    <a href="tel:+8801644793189">+8801644-793189</a>
                  </div>
                </div>
                <div className="contact-detail">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="contact-detail-content">
                    <h4>Location</h4>
                    <p>Savar, Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://www.facebook.com/abul.ala.moududi.98" target="_blank" className="social-link"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/abul_ala_moududi" target="_blank" className="social-link"><i className="fab fa-instagram"></i></a>
                  <a href="https://x.com/moududi2002" target="_blank" className="social-link"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/abul-ala-moududi/" target="_blank" className="social-link"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://wa.link/twgy68" target="_blank" className="social-link"><i className="fab fa-whatsapp"></i></a>
                  <a href="https://t.me/moududi2002" target="_blank" className="social-link"><i className="fab fa-telegram"></i></a>
                </div>
              </div>
            </div>

            {/* Additional Information Card */}
            <div className="contact-info-card">
              <div className="contact-info">
                <h3>Additional Information</h3>
                <div className="contact-additional-info">
                  {/* Office Hours Card */}
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="info-content">
                      <h4>Office Hours</h4>
                      <p>Sun - Thus : 9AM - 5PM</p>
                    </div>
                    <div className="info-right">
                      <span className="status-badge available">Available</span>
                    </div>
                  </div>
                  
                  {/* Download Resume Card */}
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-file-download"></i>
                    </div>
                    <div className="info-content">
                      <h4>Download Resume</h4>
                      <p>Latest CV & Portfolio</p>
                    </div>
                    <div className="info-right">
                      <a href="Curriculum_Vitae_of_Abul_Ala_Moududi.pdf" target="_blank" className="download-btn">
                        <i className="fas fa-file-download"></i> Download PDF
                      </a>
                    </div>
                  </div>
                  
                  {/* Current Status Card */}
                  <div className="info-card">
                    <div className="info-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <div className="info-content">
                      <h4>Current Status</h4>
                      <p>Open for Research Collaboration</p>
                      <p>Open for Join any Paid Project or Job</p>
                    </div>
                    <div className="info-right">
                      <span className="status-badge active">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Meeting Card */}
            <div className="contact-info-card">
              <div className="contact-info">
                <h3>Schedule Meeting</h3>
                <div className="meeting-form-container">
                  <form className="meeting-form">
                    <div className="form-group">
                      <label htmlFor="meeting-date">Preferred Date</label>
                      <input type="date" id="meeting-date" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="meeting-time">Preferred Time</label>
                      <input type="time" id="meeting-time" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="meeting-subject">Meeting Subject</label>
                      <input type="text" id="meeting-subject" className="form-control" placeholder="e.g., Project Discussion" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="meeting-agenda">Meeting Agenda</label>
                      <textarea id="meeting-agenda" className="form-control" placeholder="Briefly describe agenda..." rows="2"></textarea>
                    </div>
                    <button type="submit" className="btn meeting-btn">
                      <i className="fas fa-calendar-check"></i>
                      Request Meeting
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="contact-form-card">
              <div className="contact-form">
                <h3>Send Me a Message</h3>
                <form id="contactForm">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" name="subject" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className="form-control" required></textarea>
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
                {/* Notification Toast */}
                <div id="toast" className="toast"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;