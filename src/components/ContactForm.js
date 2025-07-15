import { useState } from 'react';
import '../components_css/contactform.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    company: '',
    country: '',
    city: '',
    description: '',
    inquiry: 'You are here to'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="hf-contact-container">
      <div className="hf-contact-wrapper">
        
        {/* Left Side - Contact Information */}
        <div className="hf-contact-info">
          <div className="hf-get-in-touch-section">
            <h2 className="hf-section-title">GET IN TOUCH</h2>
            <p className="hf-section-description">
              Request a quote or make an enquiry, and we will get back to you at the earliest!
            </p>
          </div>
          
          <div className="hf-head-office-section">
            <h3 className="hf-office-title">HEAD OFFICE</h3>
            <div className="hf-office-address">
              <p>iScientific Tech Solutions Labs Pvt. ltd. 133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India – 500051, India</p>
            </div>
            <div className="hf-contact-email">
              <span className="hf-email-icon">✉</span>
              <span className="hf-email-text">info@istlabs.in</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="hf-form-section">
          <form className="hf-contact-form" onSubmit={handleSubmit}>
            <div className="hf-form-row">
              <div className="hf-form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="hf-form-input"
                  required
                />
              </div>
              <div className="hf-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="hf-form-input"
                  required
                />
              </div>
            </div>

            <div className="hf-form-row">
              <div className="hf-form-group">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="hf-form-input"
                  required
                />
              </div>
              <div className="hf-form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="hf-form-input"
                />
              </div>
            </div>

            <div className="hf-form-row">
              <div className="hf-form-group hf-full-width">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="hf-form-input"
                  required
                />
              </div>
            </div>

            <div className="hf-form-row">
              <div className="hf-form-group hf-full-width">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="hf-form-input"
                  required
                />
              </div>
            </div>

            <div className="hf-form-row">
              <div className="hf-form-group">
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="hf-form-textarea"
                  rows="4"
                ></textarea>
              </div>
              <div className="hf-form-group">
                <select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleInputChange}
                  className="hf-form-select"
                >
                  <option value="You are here to">You are here to</option>
                  <option value="Request a Quote">Request a Quote</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Career Opportunities">Career Opportunities</option>
                </select>
                
                <button type="submit" className="hf-submit-button">
                  SUBMIT FORM →
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;