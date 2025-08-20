import { NavLink ,useNavigate} from 'react-router-dom';
import '../components_css/contactform.css';

function ContactForm() {
const navigate = useNavigate();

  const handleContactClick = () => {
    // Navigate to book-demo page with scroll instruction
    navigate('/book-demo', { 
      state: { scrollToForm: true } 
    });
  };

  return (
    <div className="hf-contact-container">
      <div className="hf-contact-wrapper">
        
        {/* Left Side - Get In Touch */}
        <div className="hf-contact-info custom-margin">
          <div className="hf-get-in-touch-section">
            <h2 className="hf-section-title">GET IN TOUCH</h2>
            <p className="hf-section-description">
              Request a quote or make an enquiry, and we will get back to you at the earliest!
            </p>
          </div>
        </div>

        {/* Right Side - Head Office */}
        <div className="hf-contact-info">
          <div className="hf-head-office-section">
            <h3 className="hf-office-title">HEAD OFFICE</h3>
            <div className="hf-office-address">
              <p>iScientific Tech Solutions Labs Pvt. Ltd. 133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India – 500051, India</p>
            </div>
            <div className="hf-contact-email">
              <span className="hf-email-icon">✉</span>
              <span className="hf-email-text">info@istlabs.in</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Us Button */}
       <div className="hf-button-container">
      <button 
        className="hf-contact-button"
        onClick={handleContactClick}
      >
        CONTACT US →
      </button>
    </div>
    </div>
  );
}

export default ContactForm;