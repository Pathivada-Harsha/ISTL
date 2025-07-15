// "use client"
// import { useNavigate } from "react-router-dom"
// import "../components_css/footer.css"

// export default function Footer() {
//   const navigate = useNavigate()

//   const handleLocationClick = () => {
//     // Replace with your actual company location coordinates
//     window.open("https://maps.google.com/?q=12.9716,77.5946", "_blank")
//   }

//   const handlePhoneClick = () => {
//     window.open("tel:+918012345678", "_self")
//   }

//   const handleEmailClick = () => {
//     window.open("mailto:info@istlabs.com", "_self")
//   }

//   const handleSocialClick = (platform) => {
//     const socialLinks = {
//       facebook: "https://facebook.com/istlabs",
//       instagram: "https://instagram.com/istlabs",
//       linkedin: "https://linkedin.com/company/istlabs",
//       twitter: "https://twitter.com/istlabs",
//     }
//     window.open(socialLinks[platform], "_blank")
//   }

//   return (
//     <footer className="foot-redesigned">
//       <div className="foot-container">
//         {/* Top Contact Bar */}
//         <div className="foot-top-bar">
//           <div className="foot-contact-item" onClick={handleLocationClick}>
//             <div className="foot-contact-icon">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//               </svg>
//             </div>
//             <div className="foot-contact-details">
//               <span className="foot-contact-label">Visit Our Office</span>
//               <span className="foot-contact-value">123 Innovation Drive, Tech City, Bangalore 560001</span>
//             </div>
//           </div>

//           <div className="foot-contact-item" onClick={handlePhoneClick}>
//             <div className="foot-contact-icon">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//               </svg>
//             </div>
//             <div className="foot-contact-details">
//               <span className="foot-contact-label">Call Us</span>
//               <span className="foot-contact-value">+91 80 1234 5678</span>
//             </div>
//           </div>

//           <div className="foot-contact-item" onClick={handleEmailClick}>
//             <div className="foot-contact-icon">
//               <svg viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//               </svg>
//             </div>
//             <div className="foot-contact-details">
//               <span className="foot-contact-label">Email Us</span>
//               <span className="foot-contact-value">info@istlabs.com</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Footer Content */}
//         <div className="foot-main-content">
//           {/* Company Info Section */}
//           <div className="foot-company">
//             <div className="foot-logo">
//               <span className="foot-logo-icon">⚡</span>
//               <span className="foot-logo-text">ISTLabs</span>
//             </div>
//             <p className="foot-description">
//               Leading automation company providing innovative solutions for smart infrastructure, industrial control
//               systems, and sustainable energy solutions.
//             </p>
//           </div>

//           {/* Products Section */}
//           <div className="foot-section">
//             <h3 className="foot-section-title">Products</h3>
//             <ul className="foot-links">
//               <li>
//                 <button onClick={() => navigate("/products/ccms")} className="foot-link-btn">
//                   ISTL CCMS
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => navigate("/products/itms")} className="foot-link-btn">
//                   ISTL ITMS
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => navigate("/products/mcms")} className="foot-link-btn">
//                   ISTL MCMS
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => navigate("/smart-lights")} className="foot-link-btn">
//                   Smart Street Lights
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Services Section */}
//           <div className="foot-section">
//             <h3 className="foot-section-title">Services</h3>
//             <ul className="foot-links">
//               <li>
//                 <button onClick={() => navigate("/epc/substations")} className="foot-link-btn">
//                   ISTL Substations
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => navigate("/epc/solar-panels")} className="foot-link-btn">
//                   ISTL Solar Panels
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Smart Meters Section */}
//           <div className="foot-section">
//             <h3 className="foot-section-title">Smart Meters</h3>
//             <ul className="foot-links">
//               <li>
//                 <button onClick={() => navigate("/smart-meters/single-phase")} className="foot-link-btn">
//                   Single Phase Meter
//                 </button>
//               </li>
//               <li>
//                 <button onClick={() => navigate("/smart-meters/three-phase")} className="foot-link-btn">
//                   Three Phase Meter
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="foot-bottom">
//           <div className="foot-bottom-content">
//             <div className="foot-copyright">
//               <p>&copy; {new Date().getFullYear()} IScientific TechSolutions Labs. All rights reserved.</p>
//               <div className="foot-legal">
//                 <span>Privacy Policy</span>
//                 <span>Terms of Service</span>
//                 <span>Cookie Policy</span>
//               </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="foot-social">
//               <button
//                 onClick={() => handleSocialClick("facebook")}
//                 className="foot-social-btn foot-facebook"
//                 aria-label="Facebook"
//               >
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </button>

//               <button
//                 onClick={() => handleSocialClick("instagram")}
//                 className="foot-social-btn foot-instagram"
//                 aria-label="Instagram"
//               >
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </button>

//               <button
//                 onClick={() => handleSocialClick("linkedin")}
//                 className="foot-social-btn foot-linkedin"
//                 aria-label="LinkedIn"
//               >
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </button>

//               <button
//                 onClick={() => handleSocialClick("twitter")}
//                 className="foot-social-btn foot-twitter"
//                 aria-label="Twitter"
//               >
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }
"use client"
import { NavLink, useNavigate } from "react-router-dom"

export default function Footer() {
  const navigate = useNavigate()

  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=17.46777323228562,78.60309692135613", "_blank")
  }

  const handlePhoneClick = () => {
    window.open("tel:+91-6301377549", "_self")
  }

  const handleEmailClick = () => {
    window.open("mailto:info@istlabs.in", "_self")
  }

  const handleSocialClick = (platform) => {
    const socialLinks = {
      facebook: "https://www.facebook.com/ISTL.HYD",
      instagram: "https://instagram.com/istlabs",
      linkedin: "https://www.linkedin.com/company/istlabs",
      twitter: "https://twitter.com/istlabs",
    }
    window.open(socialLinks[platform], "_blank")
  }

  return (
    <footer className="footer-redesigned">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-company">
          <div className="footer-logo">
            <span className="footer-logo-icon">⚡</span>
            <span className="footer-logo-text">ISTLabs</span>
          </div>
          <p className="footer-description">
            Leading automation company providing innovative solutions for smart infrastructure, industrial control
            systems, and sustainable energy solutions.
          </p>
        </div>

        {/* Products Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">Products</h3>
          <ul className="footer-links">
            <li>
              <button onClick={() => navigate("/products/istl-ccms")} className="footer-link-btn">
                CCMS
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/products/istl-itms")} className="footer-link-btn">
                ITMS
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/products/istl-mcms")} className="footer-link-btn">
                MCMS
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/products/smart-street-lights")} className="footer-link-btn">
                Smart Street Lights
              </button>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">Services</h3>
          <ul className="footer-links">
            <li>
              <button onClick={() => navigate("/products/epc/power_td")} className="footer-link-btn">
                Power T&D
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/products/epc/substations")} className="footer-link-btn">
                ISTL Substations
              </button>
            </li>
            <li>
              <button
                onClick={() => window.open("https://sesolaenergy.com", "_blank", "noopener,noreferrer")}
                className="footer-link-btn"
              >
                Sesola Power Projects
              </button>
            </li>

          </ul>
        </div>

        {/* Smart Meters Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">Smart Meters</h3>
          <ul className="footer-links">
            <li>
              <button onClick={() => navigate("/products/smart-meters/single-phase")} className="footer-link-btn">
                Single Phase Meter
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/products/smart-meters/three-phase")} className="footer-link-btn">
                Three Phase Meter
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-section-title">Contact</h3>
          <ul className="footer-contact">
            <li className="contact-item" onClick={handlePhoneClick}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+91-63013 77549</span>
            </li>
            <li className="contact-item" onClick={handleEmailClick}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@istlabs.in</span>
            </li>
            <li className="contact-item" onClick={handleLocationClick}>
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>
                133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India</span>
            </li>
            <li className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Mon - Sat: 10:00 AM - 6:30 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} iScientific TechSolutions Labs Pvt. Ltd. All rights reserved.</p>
            <div className="footer-legal">
              <NavLink to="/privacy-policy">
                <span>Privacy Policy</span>
              </NavLink>
              <NavLink to="/Terms">
                <span>Terms of Service</span>
              </NavLink>
              <NavLink to="/Cookie">
                <span>Cookie Policy</span>
              </NavLink>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social">
            <button onClick={() => handleSocialClick("facebook")} className="social-btn facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              onClick={() => handleSocialClick("instagram")}
              className="social-btn instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </button>

            <button onClick={() => handleSocialClick("linkedin")} className="social-btn linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>

            <button onClick={() => handleSocialClick("twitter")} className="social-btn twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-redesigned {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: white;
          padding: 2.5rem 0 0;
          position: relative;
          overflow: hidden;
        }

        .footer-redesigned::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          pointer-events: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.2fr;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-company {
          padding-right: 1rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .footer-logo-icon {
          font-size: 1.75rem;
          color: #00d4ff;
          margin-right: 0.5rem;
        }

        .footer-logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #00d4ff, #0099cc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: #b8c5d6;
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-section-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #00d4ff;
          position: relative;
        }

        .footer-section-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 25px;
          height: 2px;
          background: linear-gradient(90deg, #00d4ff, transparent);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-link-btn {
          background: none;
          border: none;
          color: #b8c5d6;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
          text-align: left;
          width: 100%;
          position: relative;
        }

        .footer-link-btn:hover {
          color: #00d4ff;
          padding-left: 0.75rem;
        }

        .footer-link-btn::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: #00d4ff;
          transition: width 0.3s ease;
        }

        .footer-link-btn:hover::before {
          width: 6px;
        }

        .footer-contact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
          color: #b8c5d6;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.3rem 0;
          border-radius: 4px;
        }

        .contact-item:hover {
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.05);
          padding-left: 0.5rem;
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          color: #00d4ff;
          flex-shrink: 0;
        }

        .footer-bottom {
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copyright p {
          margin: 0 0 0.4rem 0;
          color: #b8c5d6;
          font-size: 0.85rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.2rem;
        }

        .footer-legal span {
          color: #8a9ba8;
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-legal span:hover {
          color: #00d4ff;
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-btn svg {
          width: 18px;
          height: 18px;
          position: relative;
          z-index: 2;
        }

        .social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .social-btn:hover::before {
          opacity: 1;
        }

        .facebook {
          background: rgba(24, 119, 242, 0.1);
          color: #1877f2;
          border: 1px solid rgba(24, 119, 242, 0.2);
        }

        .facebook::before {
          background: #1877f2;
        }

        .facebook:hover {
          color: white;
        }

        .instagram {
          background: rgba(225, 48, 108, 0.1);
          color: #e1306c;
          border: 1px solid rgba(225, 48, 108, 0.2);
        }

        .instagram::before {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }

        .instagram:hover {
          color: white;
        }

        .linkedin {
          background: rgba(10, 102, 194, 0.1);
          color: #0a66c2;
          border: 1px solid rgba(10, 102, 194, 0.2);
        }

        .linkedin::before {
          background: #0a66c2;
        }

        .linkedin:hover {
          color: white;
        }

        .twitter {
          background: rgba(29, 161, 242, 0.1);
          color: #1da1f2;
          border: 1px solid rgba(29, 161, 242, 0.2);
        }

        .twitter::before {
          background: #1da1f2;
        }

        .twitter:hover {
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-container {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .footer-company {
            grid-column: 1 / -1;
            padding-right: 0;
            margin-bottom: 1rem;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .footer-redesigned {
            padding: 2rem 0 0;
          }

          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }

          .footer-company {
            margin-bottom: 1rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
            padding: 0 1rem;
          }

          .footer-legal {
            justify-content: center;
          }

          .footer-social {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-social {
            gap: 0.5rem;
          }

          .social-btn {
            width: 36px;
            height: 36px;
          }

          .footer-legal {
            flex-direction: column;
            gap: 0.4rem;
          }
        }

        @media (max-width: 360px) {
          .footer-redesigned {
            padding: 1.5rem 0 0;
          }

          .footer-container {
            padding: 0 0.75rem;
          }

          .footer-logo-text {
            font-size: 1.3rem;
          }

          .footer-description {
            font-size: 0.85rem;
          }

          .contact-item {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </footer>
  )
}
