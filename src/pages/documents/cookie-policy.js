"use client"
import { useEffect, useRef, useState } from "react"
import "../../components_css/documents/cookie_policy.css"

const CookiePolicyPage = () => {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    performance: false,
    functional: false,
    marketing: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cookie-animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  const handleCookieToggle = (type) => {
    if (type === "essential") return
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  const saveCookiePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookieSettings))
    alert("Cookie preferences saved successfully!")
  }

  return (
    <div className="cookie-page">
      {/* Header Section */}
      <section className="cookie-header" ref={headerRef}>
        <div className="cookie-container">
          <div className="cookie-header-content">
            <h1 className="cookie-title">Cookie Policy</h1>
            <p className="cookie-subtitle">
              iScientific Tech Solutions Labs Pvt Ltd
              <br />
              <a href="https://istlabs.in" target="_blank" rel="noopener noreferrer" style={{color:"orange"}} className="cookie-website-link">
                https://istlabs.in
              </a>
            </p>
            <p className="cookie-last-updated">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="cookie-content" ref={contentRef}>
        <div className="cookie-container">
          {/* Section 1 */}
          <section className="cookie-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit
              our website <strong>istlabs.in</strong>. They help us provide you with a better browsing experience by
              remembering your preferences and analyzing how you use our website.
            </p>
            <p>
              This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you
              can control your cookie preferences. This policy should be read alongside our Privacy Policy and Terms of
              Service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="cookie-section">
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Website Functions:</strong> To enable core website features and security
              </li>
              <li>
                <strong>Performance Analysis:</strong> To understand how visitors interact with our website
              </li>
              <li>
                <strong>Personalization:</strong> To remember your preferences and provide customized content
              </li>
              <li>
                <strong>Analytics:</strong> To analyze website usage and improve our services
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="cookie-section">
            <h2>3. Types of Cookies We Use</h2>

            <h3>3.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be disabled. They enable core
              functionality such as security, network management, and accessibility.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Session management and user authentication</li>
              <li>Security and fraud prevention</li>
              <li>Load balancing and website performance</li>
              <li>Accessibility features</li>
            </ul>
            <p>
              <strong>Duration:</strong> Session or up to 1 year
            </p>

            <h3>3.2 Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website. All information is aggregated and
              anonymous, helping us understand user behavior and improve our services.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Google Analytics for website traffic analysis</li>
              <li>Page load times and performance metrics</li>
              <li>Error tracking and debugging information</li>
              <li>User journey and navigation patterns</li>
            </ul>
            <p>
              <strong>Duration:</strong> Up to 2 years
            </p>

            <h3>3.3 Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences and
              providing customized features.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Language and region preferences</li>
              <li>Theme and display settings</li>
              <li>Form data and user preferences</li>
              <li>Chat and support widget settings</li>
            </ul>
            <p>
              <strong>Duration:</strong> Up to 1 year
            </p>

            <h3>3.4 Marketing Cookies</h3>
            <p>
              These cookies are used to deliver advertisements relevant to you and track the effectiveness of our
              marketing campaigns.
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <ul>
              <li>Social media integration and sharing</li>
              <li>Advertising campaign tracking</li>
              <li>Retargeting and remarketing</li>
              <li>Conversion tracking</li>
            </ul>
            <p>
              <strong>Duration:</strong> Up to 1 year
            </p>
          </section>

          {/* Section 4 */}
          <section className="cookie-section">
            <h2>4. Cookie Preferences</h2>
            <p>
              You can control the cookies we use on our website. Use the settings below to customize your cookie
              preferences:
            </p>

            <div className="cookie-preferences">
              <div className="cookie-preference-item">
                <div className="cookie-info">
                  <h4>Essential Cookies</h4>
                  <p>Required for basic website functionality</p>
                </div>
                <div className="cookie-control">
                  <input type="checkbox" id="essential" checked={cookieSettings.essential} disabled />
                  <label htmlFor="essential">Always Active</label>
                </div>
              </div>

              <div className="cookie-preference-item">
                <div className="cookie-info">
                  <h4>Performance Cookies</h4>
                  <p>Help us analyze website usage and improve performance</p>
                </div>
                <div className="cookie-control">
                  <input
                    type="checkbox"
                    id="performance"
                    checked={cookieSettings.performance}
                    onChange={() => handleCookieToggle("performance")}
                  />
                  <label htmlFor="performance">{cookieSettings.performance ? "Enabled" : "Disabled"}</label>
                </div>
              </div>

              <div className="cookie-preference-item">
                <div className="cookie-info">
                  <h4>Functional Cookies</h4>
                  <p>Enable enhanced features and personalization</p>
                </div>
                <div className="cookie-control">
                  <input
                    type="checkbox"
                    id="functional"
                    checked={cookieSettings.functional}
                    onChange={() => handleCookieToggle("functional")}
                  />
                  <label htmlFor="functional">{cookieSettings.functional ? "Enabled" : "Disabled"}</label>
                </div>
              </div>

              <div className="cookie-preference-item">
                <div className="cookie-info">
                  <h4>Marketing Cookies</h4>
                  <p>Used for advertising and marketing purposes</p>
                </div>
                <div className="cookie-control">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={cookieSettings.marketing}
                    onChange={() => handleCookieToggle("marketing")}
                  />
                  <label htmlFor="marketing">{cookieSettings.marketing ? "Enabled" : "Disabled"}</label>
                </div>
              </div>

              <div className="cookie-actions">
                <button onClick={saveCookiePreferences} className="save-btn">
                  Save Preferences
                </button>
                <button
                  onClick={() =>
                    setCookieSettings({
                      essential: true,
                      performance: false,
                      functional: false,
                      marketing: false,
                    })
                  }
                  className="reset-btn"
                >
                  Reset to Default
                </button>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="cookie-section">
            <h2>5. Browser Cookie Settings</h2>
            <p>
              You can also control cookies through your web browser settings. Most browsers allow you to view, manage,
              and delete cookies:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
              </li>
            </ul>
            <p>
              <strong>Note:</strong> Disabling cookies may affect the functionality of our website and other websites
              you visit.
            </p>
          </section>

          {/* Section 6 */}
          <section className="cookie-section">
            <h2>6. Third-Party Cookies</h2>
            <p>
              Some cookies on our website are set by third-party services that we use to enhance functionality and
              analyze user behavior:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> Provides website analytics and user behavior insights
              </li>
              <li>
                <strong>Social Media Platforms:</strong> Integration for sharing and social login functionality
              </li>
              <li>
                <strong>Customer Support Tools:</strong> Live chat and support widgets
              </li>
            </ul>
            <p>
              You can opt-out of Google Analytics using the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section className="cookie-section">
            <h2>7. Data Protection and Privacy</h2>
            <p>
              We are committed to protecting your privacy and handling your data responsibly. Our use of cookies
              complies with applicable data protection laws, including:
            </p>
            <ul>
              <li>Information Technology Act, 2000 (India)</li>
              <li>General Data Protection Regulation (GDPR) for EU visitors</li>
              <li>Other applicable international privacy regulations</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="cookie-section">
            <h2>8. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or
              legal requirements. When we make significant changes, we will notify you by:
            </p>
            <ul>
              <li>Updating the "Effective Date" at the top of this policy</li>
              <li>Posting a notice on our website</li>
              <li>Sending email notifications to registered users (for major changes)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="cookie-section cookie-contact">
            <h2>9. Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
            <div className="contact-details">
              <p>
                <strong>Company:</strong> iScientific Tech Solutions Labs Pvt. Ltd.
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://istlabs.in" target="_blank" rel="noopener noreferrer">
                  https://istlabs.in
                </a>
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:privacy@istlabs.in">noreply@istlabs.in</a>
              </p>
              <p>
                <strong>General Contact:</strong> <a href="mailto:contact@istlabs.in">info@istlabs.in</a>
              </p>
              <p>
                <strong>Address:</strong>133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India
              </p>
            </div>
            <p>We will respond to your cookie-related inquiries within 30 days of receipt.</p>
          </section>
        </div>
      </section>
    </div>
  )
}

export default CookiePolicyPage
