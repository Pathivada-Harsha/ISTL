"use client"
import { useEffect, useRef } from "react"
import "../../components_css/documents/terms_of_service.css"

const TermsOfServicePage = () => {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("terms-animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (headerRef.current) observer.observe(headerRef.current)
    if (contentRef.current) observer.observe(contentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="terms-page">
      {/* Header Section */}
      <section className="terms-header" ref={headerRef}>
        <div className="terms-container">
          <div className="terms-header-content">
            <h1 className="terms-title">Terms of Service</h1>
            <p className="terms-subtitle">
              iScientific Tech Solutions Labs Pvt Ltd
              <br />
              <a href="https://istlabs.in" target="_blank" rel="noopener noreferrer" className="terms-website-link" style={{color:"orange"}}>
                https://istlabs.in
              </a>
            </p>
            <p className="terms-last-updated">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content" ref={contentRef}>
        <div className="terms-container">
          {/* All your existing sections remain the same */}
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to iScientific Tech Solutions Labs Pvt Ltd ("Company," "we," "our," or "us"). These Terms of
              Service ("Terms") govern your use of our website located at <strong>istlabs.in</strong> and all related
              services, products, and solutions provided by us (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do
              not agree to these Terms, please do not use our Services. These Terms constitute a legally binding
              agreement between you and iScientific Tech Solutions Labs Pvt Ltd.
            </p>
          </div>

          {/* Section 2 */}
          <div className="terms-section">
            <h2>2. Description of Services</h2>
            <p>
              iScientific Tech Solutions Labs Pvt Ltd provides technology solutions and scientific consulting services.
              Our Services include but are not limited to:
            </p>
            <ul>
              <li>Technology consulting and implementation services</li>
              <li>Scientific research and development solutions</li>
              <li>Software development and system integration</li>
              <li>Technical support and maintenance services</li>
              <li>Laboratory solutions and scientific analysis</li>
              <li>Digital transformation consulting</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with
              reasonable notice to users.
            </p>
          </div>

          {/* Section 3 */}
          <div className="terms-section">
            <h2>3. User Eligibility and Registration</h2>
            <h3>3.1 Eligibility Requirements</h3>
            <p>To use our Services, you must:</p>
            <ul>
              <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Provide accurate and complete information during any registration process</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3>3.2 Account Registration</h3>
            <p>
              Some Services may require account creation. You are responsible for maintaining the confidentiality of
              your account credentials and for all activities that occur under your account. You must notify us
              immediately of any unauthorized use of your account.
            </p>
          </div>

          {/* Section 4 */}
          <div className="terms-section">
            <h2>4. Acceptable Use Policy</h2>
            <p>You agree to use our Services only for lawful purposes. You agree not to:</p>
            <ul>
              <li>Use the Services for any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Transmit or procure the sending of any harmful, threatening, abusive, or harassing content</li>
              <li>Infringe upon or violate our intellectual property rights or the rights of others</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Introduce any viruses, malware, or other malicious or technologically harmful material</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="terms-section">
            <h2>5. Intellectual Property Rights</h2>
            <h3>5.1 Our Intellectual Property</h3>
            <p>
              The Services and their original content, features, and functionality are and will remain the exclusive
              property of iScientific Tech Solutions Labs Pvt Ltd and its licensors. The Services are protected by
              copyright, trademark, and other intellectual property laws.
            </p>

            <h3>5.2 User Content</h3>
            <p>
              You retain ownership of any intellectual property rights in content you submit to us ("User Content"). By
              submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce,
              modify, and distribute such content in connection with our Services.
            </p>

            <h3>5.3 Feedback</h3>
            <p>
              Any feedback, comments, or suggestions you provide regarding our Services will be deemed non-confidential
              and may be used by us without restriction for any purpose.
            </p>
          </div>

          {/* Section 6 */}
          <div className="terms-section">
            <h2>6. Payment Terms</h2>
            <h3>6.1 Fees and Charges</h3>
            <p>
              Certain Services may require payment of fees. All fees are stated in Indian Rupees (INR) unless otherwise
              specified. You agree to pay all applicable fees as described on our website or in your service agreement.
            </p>

            <h3>6.2 Payment Methods</h3>
            <p>
              We accept various payment methods including bank transfers, credit cards, and other approved payment
              methods.
            </p>

            <h3>6.3 Billing and Collection</h3>
            <p>
              Invoices will be sent to your registered email address. Payment is due within thirty (30) days of invoice
              date unless otherwise specified. Late payments may incur additional charges as permitted by law.
            </p>

            <h3>6.4 Refunds</h3>
            <p>
              Refunds are handled on a case-by-case basis depending on the specific service provided. Custom development
              work and consulting services are generally non-refundable once work has commenced.
            </p>
          </div>

          {/* Section 7 */}
          <div className="terms-section">
            <h2>7. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy
              Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the
              collection and use of your information as outlined in our Privacy Policy.
            </p>
          </div>

          {/* Section 8 */}
          <div className="terms-section">
            <h2>8. Disclaimers and Warranties</h2>
            <h3>8.1 Service Availability</h3>
            <p>
              Our Services are provided "as is" and "as available." We do not guarantee that our Services will be
              uninterrupted, secure, or error-free.
            </p>

            <h3>8.2 Professional Advice Disclaimer</h3>
            <p>
              Our Services may include general information and recommendations, but they should not be considered as
              professional advice for your specific situation. You should consult with appropriate professionals for
              advice tailored to your circumstances.
            </p>

            <h3>8.3 Third-Party Services</h3>
            <p>
              Our Services may integrate with or link to third-party services. We are not responsible for the content,
              privacy policies, or practices of third-party services.
            </p>
          </div>

          {/* Section 9 */}
          <div className="terms-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, iScientific Tech Solutions Labs Pvt Ltd shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p>
              Our total liability to you for all damages shall not exceed the amount paid by you to us in the twelve
              (12) months preceding the event giving rise to the liability.
            </p>
          </div>

          {/* Section 10 */}
          <div className="terms-section">
            <h2>10. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless iScientific Tech Solutions Labs Pvt Ltd, its officers,
              directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities,
              costs, or expenses arising from:
            </p>
            <ul>
              <li>Your use of and access to the Services</li>
              <li>Your violation of any term of these Terms</li>
              <li>Your violation of any third-party right, including intellectual property rights</li>
              <li>Any harmful act toward any other user of the Services</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="terms-section">
            <h2>11. Termination</h2>
            <h3>11.1 Termination by You</h3>
            <p>You may terminate your account and stop using our Services at any time by contacting us.</p>

            <h3>11.2 Termination by Us</h3>
            <p>
              We may terminate or suspend your account and access to our Services immediately, without prior notice, for
              any reason, including breach of these Terms.
            </p>

            <h3>11.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to use the Services will cease immediately. We may delete your account and
              all related information, subject to our data retention policies and legal obligations.
            </p>
          </div>

          {/* Section 12 */}
          <div className="terms-section">
            <h2>12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising
              under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts
              located in [Your City], India.
            </p>
          </div>

          {/* Section 13 */}
          <div className="terms-section">
            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least thirty (30) days' notice prior to any new terms taking effect. Your continued use of our
              Services after the effective date of any changes constitutes acceptance of the new Terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className="terms-section">
            <h2>14. Miscellaneous</h2>
            <h3>14.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and us
              regarding the use of our Services.
            </p>

            <h3>14.2 Severability</h3>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will
              remain in full force and effect.
            </p>

            <h3>14.3 Assignment</h3>
            <p>
              You may not assign or transfer these Terms without our prior written consent. We may assign these Terms
              without restriction.
            </p>
          </div>

          {/* Contact Section */}
          <div className="terms-section terms-contact">
            <h2>15. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
                <strong>Email:</strong> <a href="mailto:legal@istlabs.in">info@istlabs.in</a>
              </p>
              <p>
                <strong>General Inquiries:</strong> <a href="mailto:contact@istlabs.in">noreply@istlabs.in</a>
              </p>
              <p>
                <strong>Address:</strong> 133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfServicePage
