"use client"
import { useEffect, useRef } from "react"
import "../../components_css/documents/privacy_policy.css"

const PrivacyPolicyPage = () => {
  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("privacy-animate-in")
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
    <div className="privacy-page">
      {/* Header Section */}
      <section className="privacy-header" ref={headerRef}>
        <div className="privacy-container">
          <div className="privacy-header-content">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">
              iScientific Tech Solutions Labs Pvt Ltd
              <br />
              <a href="https://istlabs.in" target="_blank" rel="noopener noreferrer" style={{color:"orange"}}
              className="privacy-website-link">
                https://istlabs.in
              </a>
            </p>
            <p className="privacy-last-updated">Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content" ref={contentRef}>
        <div className="privacy-container">
          {/* Overview */}
          <div id="overview" className="privacy-section">
            <h2>Overview</h2>
            <p>
              At iScientific Tech Solutions Labs Pvt Ltd ("we," "our," or "us"), we are committed to protecting your
              privacy and ensuring the security of your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website{" "}
              <strong>https://istlabs.in/</strong>, use our technology solutions and services, or interact with us in any
              capacity.
            </p>
            <p>
              As a leading technology solutions provider specializing in innovative scientific and technical solutions,
              we understand the critical importance of data privacy and are committed to maintaining the highest
              standards of data protection in compliance with applicable privacy laws and regulations, including the
              Information Technology Act, 2000, and other relevant Indian and international data protection standards.
            </p>
          </div>

          {/* Information Collection */}
          <div id="information-collection" className="privacy-section">
            <h2>Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>
              When you visit istlabs.in or engage with our services, we may collect the following types of personal
              information:
            </p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Full name, email address, phone number, mailing address, company
                details
              </li>
              <li>
                <strong>Professional Information:</strong> Company name, job title, industry sector, business
                requirements, project specifications
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, account preferences, service configurations,
                and user settings
              </li>
              <li>
                <strong>Communication Data:</strong> Records of your communications with us, including emails, phone
                calls, chat logs, support tickets, and consultation requests
              </li>
              <li>
                <strong>Project Information:</strong> Technical requirements, project specifications, research data, and
                solution preferences
              </li>
              <li>
                <strong>Payment Information:</strong> Billing address, payment method details, transaction history
                (processed securely through third-party payment processors)
              </li>
              <li>
                <strong>Feedback and Reviews:</strong> Your opinions, feedback, testimonials, and reviews about our
                services
              </li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information when you use our website and services:</p>
            <ul>
              <li>
                <strong>Device Information:</strong> IP address, browser type and version, operating system, device
                identifiers, screen resolution
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, click-through rates, referral sources,
                search queries, navigation patterns
              </li>
              <li>
                <strong>Log Data:</strong> Server logs, error reports, performance metrics, system diagnostics, and
                access logs
              </li>
              <li>
                <strong>Location Data:</strong> General geographic location based on IP address for service optimization
                and localization
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> Website preferences, session information, analytics data,
                and user behavior patterns
              </li>
            </ul>
          </div>

          {/* Information Use */}
          <div id="information-use" className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for the following legitimate business purposes:</p>

            <div className="privacy-use-grid">
              <div className="privacy-use-item">
                <h4>Service Delivery & Management</h4>
                <p>
                  To provide, maintain, and improve our technology solutions, scientific services, and technical
                  consulting offerings
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Customer Communication</h4>
                <p>
                  To respond to inquiries, provide customer support, send project updates, and deliver important service
                  notifications
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Personalization & Customization</h4>
                <p>
                  To personalize your experience on istlabs.in and tailor our services to your specific technical
                  requirements and preferences
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Analytics & Optimization</h4>
                <p>
                  To analyze usage patterns, improve website performance, optimize user experience, and enhance our
                  service offerings
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Research & Development</h4>
                <p>
                  To conduct research, develop new technologies, improve existing solutions, and advance our scientific
                  capabilities
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Marketing & Communications</h4>
                <p>
                  To send promotional materials, service updates, technical insights, and industry developments (with
                  your explicit consent)
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Legal Compliance & Security</h4>
                <p>
                  To comply with legal obligations, protect our rights and interests, ensure data security, and prevent
                  fraudulent activities
                </p>
              </div>
              <div className="privacy-use-item">
                <h4>Business Operations</h4>
                <p>
                  To manage our business operations, process transactions, maintain records, and provide administrative
                  services
                </p>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div id="information-sharing" className="privacy-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              only in the following specific and limited circumstances:
            </p>

            <div className="privacy-sharing-list">
              <div className="privacy-sharing-item">
                <h4>Trusted Service Providers</h4>
                <p>
                  With carefully vetted third-party service providers who assist us in operating our business, such as
                  cloud hosting providers, payment processors, email services, analytics platforms, and technical
                  infrastructure partners. All such providers are bound by strict confidentiality agreements and data
                  protection requirements.
                </p>
              </div>
              <div className="privacy-sharing-item">
                <h4>Authorized Business Partners</h4>
                <p>
                  With authorized technology partners, research collaborators, and strategic business partners when
                  necessary to provide comprehensive solutions or deliver requested services, and only with your
                  explicit consent and for the specific purposes disclosed to you.
                </p>
              </div>
              <div className="privacy-sharing-item">
                <h4>Legal and Regulatory Requirements</h4>
                <p>
                  When required by Indian law, court orders, government regulations, or legal processes, or to protect
                  our rights, property, safety, or that of our users, employees, and the general public. We will notify
                  you of such disclosures unless prohibited by law.
                </p>
              </div>
              <div className="privacy-sharing-item">
                <h4>Business Transfers and Transactions</h4>
                <p>
                  In connection with a merger, acquisition, corporate restructuring, or sale of assets, where your
                  information may be transferred as part of the business transaction, subject to the same privacy
                  protections outlined in this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div id="data-security" className="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement comprehensive technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. Our multi-layered
              security approach includes:
            </p>
            <ul>
              <li>
                <strong>Data Encryption:</strong> End-to-end encryption of data in transit using SSL/TLS protocols and
                encryption of data at rest using industry-standard encryption algorithms
              </li>
              <li>
                <strong>Access Controls:</strong> Multi-factor authentication, role-based access controls, regular
                access reviews, and principle of least privilege implementation
              </li>
              <li>
                <strong>Security Monitoring:</strong> 24/7 security monitoring, intrusion detection systems, automated
                threat response, and real-time security alerts
              </li>
              <li>
                <strong>Regular Security Assessments:</strong> Periodic security audits, vulnerability assessments,
                penetration testing, and compliance evaluations
              </li>
              <li>
                <strong>Employee Training:</strong> Comprehensive data protection training, security awareness programs,
                and regular updates on privacy best practices
              </li>
              <li>
                <strong>Infrastructure Security:</strong> Secure data centers with physical security measures,
                environmental controls, and redundant systems
              </li>
              <li>
                <strong>Backup and Recovery:</strong> Regular automated data backups, secure off-site storage, disaster
                recovery procedures, and business continuity planning
              </li>
              <li>
                <strong>Incident Response:</strong> Established incident response procedures, breach notification
                protocols, and remediation processes
              </li>
            </ul>
            <p>
              While we implement industry-leading security measures and continuously monitor and update our security
              practices, no method of transmission over the internet or electronic storage is 100% secure. We cannot
              guarantee absolute security but are committed to maintaining the highest level of protection possible and
              will promptly notify you of any security incidents that may affect your personal information.
            </p>
          </div>

          {/* Cookies */}
          <div id="cookies" className="privacy-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience on istlabs.in,
              analyze website usage, and provide personalized content and services. Cookies are small data files stored
              on your device that help us understand how you interact with our website.
            </p>

            <h3>Types of Cookies We Use:</h3>
            <div className="privacy-cookies-grid">
              <div className="privacy-cookie-item">
                <h4>Essential Cookies</h4>
                <p>
                  Required for basic website functionality, security, user authentication, and core features. These
                  cookies cannot be disabled as they are necessary for the website to function properly.
                </p>
              </div>
              <div className="privacy-cookie-item">
                <h4>Performance Cookies</h4>
                <p>
                  Help us understand how visitors interact with istlabs.in by collecting information about page views,
                  traffic sources, and user behavior to improve website performance and user experience.
                </p>
              </div>
              <div className="privacy-cookie-item">
                <h4>Functional Cookies</h4>
                <p>
                  Remember your preferences, settings, and choices to provide a more personalized and convenient
                  experience when you return to our website.
                </p>
              </div>
              <div className="privacy-cookie-item">
                <h4>Analytics Cookies</h4>
                <p>
                  Collect information about website usage, traffic patterns, user engagement metrics, and help us
                  analyze and improve our services and content offerings.
                </p>
              </div>
            </div>

            <p>
              <strong>Cookie Management:</strong> You can control cookies through your browser settings and choose to
              accept, reject, or delete cookies. However, disabling certain cookies may affect the functionality and
              user experience of our website. Most browsers allow you to view, manage, and delete cookies, block cookies
              from specific websites, and set preferences for cookie handling.
            </p>
          </div>

          {/* User Rights */}
          <div id="user-rights" className="privacy-section">
            <h2>Your Rights and Choices</h2>
            <p>
              Under applicable data protection laws, including Indian privacy regulations and international standards,
              you have the following rights regarding your personal information:
            </p>

            <div className="privacy-rights-list">
              <div className="privacy-right-item">
                <h4>Right to Access</h4>
                <p>
                  Request access to the personal information we hold about you, including details about how it's
                  processed, stored, and used
                </p>
              </div>
              <div className="privacy-right-item">
                <h4>Right to Correction</h4>
                <p>
                  Request correction, updating, or rectification of inaccurate, incomplete, or outdated personal
                  information
                </p>
              </div>
              <div className="privacy-right-item">
                <h4>Right to Deletion</h4>
                <p>
                  Request deletion or erasure of your personal information, subject to legal and contractual
                  requirements and legitimate business needs
                </p>
              </div>
              <div className="privacy-right-item">
                <h4>Right to Data Portability</h4>
                <p>
                  Request transfer of your personal information to another service provider in a structured,
                  machine-readable format
                </p>
              </div>
              <div className="privacy-right-item">
                <h4>Right to Opt-out</h4>
                <p>
                  Unsubscribe from marketing communications, promotional emails, and non-essential communications at any
                  time through provided unsubscribe links
                </p>
              </div>
              <div className="privacy-right-item">
                <h4>Right to Restriction</h4>
                <p>
                  Request restriction or limitation of processing of your personal information under certain
                  circumstances and legal grounds
                </p>
              </div>
            </div>

            <p>
              <strong>Exercising Your Rights:</strong> To exercise any of these rights, please contact us using the
              information provided in the "Contact Us" section below. We will respond to your request within 30 days and
              may require verification of your identity to protect your privacy and security. There is no charge for
              most requests, but we may charge a reasonable fee for excessive or repetitive requests.
            </p>
          </div>

          {/* Data Retention */}
          <div className="privacy-section">
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. The retention
              period varies depending on the type of information and the purpose for which it was collected:
            </p>
            <ul>
              <li>
                <strong>Account Information:</strong> Retained for the duration of your account relationship with us
                plus 3 years after account closure for legal and business purposes
              </li>
              <li>
                <strong>Project and Service Data:</strong> Retained for the project duration plus 7 years for legal,
                compliance, and warranty purposes
              </li>
              <li>
                <strong>Communication Records:</strong> Retained for 5 years for customer service, legal, and quality
                assurance purposes
              </li>
              <li>
                <strong>Payment and Financial Data:</strong> Retained as required by Indian tax and accounting laws,
                typically 7-10 years
              </li>
              <li>
                <strong>Marketing and Analytics Data:</strong> Retained until you opt-out or for 2 years of inactivity,
                whichever comes first
              </li>
              <li>
                <strong>Technical Logs and Security Data:</strong> Retained for 1-2 years for security monitoring and
                system optimization
              </li>
            </ul>
          </div>

          {/* International Transfers */}
          <div className="privacy-section">
            <h2>International Data Transfers</h2>
            <p>
              Your personal information may be transferred to and processed in countries other than India for service
              delivery, technical support, or business operations. When we transfer your information internationally, we
              ensure appropriate safeguards are in place to protect your data:
            </p>
            <ul>
              <li>Adequacy decisions by relevant data protection authorities</li>
              <li>Standard contractual clauses approved by regulatory bodies</li>
              <li>Binding corporate rules for intra-group transfers</li>
              <li>Certification schemes and codes of conduct</li>
              <li>Explicit consent for specific transfers where required</li>
            </ul>
            <p>
              We ensure that all international transfers comply with applicable Indian data protection laws and provide
              the same level of protection as required within India.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services at istlabs.in are intended for businesses, professionals, and individuals over the age of 18.
              We do not knowingly collect personal information from children under the age of 18. If we become aware
              that we have collected personal information from a child under 18, we will take immediate steps to delete
              such information from our systems.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information, please
              contact us immediately using the contact information provided below, and we will promptly address your
              concerns.
            </p>
          </div>

          {/* Third Party Links */}
          <div className="privacy-section">
            <h2>Third-Party Links and Services</h2>
            <p>
              Our website istlabs.in may contain links to third-party websites, applications, or services that are not
              owned or controlled by us. This Privacy Policy does not apply to these third-party services, and we are
              not responsible for their privacy practices or content.
            </p>
            <p>
              We encourage you to review the privacy policies and terms of service of any third-party services before
              providing your personal information or engaging with their services. We recommend exercising caution and
              reviewing the privacy practices of all websites and services you visit.
            </p>
          </div>

          {/* Updates */}
          <div className="privacy-section">
            <h2>Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, or other factors. We will notify you of any material changes through the following methods:
            </p>
            <ul>
              <li>Posting the updated Privacy Policy on istlabs.in with a new "Last Updated" date</li>
              <li>Sending email notifications to registered users for significant changes</li>
              <li>Displaying prominent notices on our website for major policy updates</li>
              <li>Providing direct notifications through our services for substantial modifications</li>
            </ul>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use,
              and protect your information. Your continued use of our services after any changes indicates your
              acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact */}
          <div id="contact" className="privacy-section privacy-contact">
            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please don't hesitate to contact us through any of the following methods:
            </p>

            <div className="privacy-contact-info">
              <div className="privacy-contact-item">
                <h4>Company Information</h4>
                <p>
                  <strong>iScientific Tech Solutions Labs Pvt Ltd</strong>
                  <br />
                  Registered in India
                </p>
              </div>
              <div className="privacy-contact-item">
                <h4>Website</h4>
                <p>
                  <a
                    href="https://istlabs.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-contact-link"
                  >
                    https://istlabs.in
                  </a>
                </p>
              </div>
              <div className="privacy-contact-item">
                <h4>Privacy Inquiries</h4>
                <p>
                  <a href="mailto:privacy@istlabs.in" className="privacy-contact-link">
                    noreply@istlabs.in
                  </a>
                </p>
              </div>
              <div className="privacy-contact-item">
                <h4>General Contact</h4>
                <p>
                  <a href="mailto:contact@istlabs.in" className="privacy-contact-link">
                    info@istlabs.in
                  </a>
                </p>
              </div>
              <div className="privacy-contact-item">
                <h4>Phone</h4>
                <p>+91-63013 77549</p>
                <p>
                 
                </p>
              </div>
              <div className="privacy-contact-item">
                <h4>Registered Address</h4>
                <p>
                  133/1/B, 1st Floor Phase ll,
                  <br />
                 IDA Cherlapally, Hyderabad
                  <br />
                  India
                </p>
                <p>
                </p>
              </div>
            </div>

            <div className="privacy-response-commitment">
              <h4>Our Response Commitment</h4>
              <p>We are committed to addressing your privacy concerns promptly and transparently:</p>
              <ul>
                <li>We will acknowledge receipt of your inquiry within 48 hours</li>
                <li>We will provide a substantive response within 30 days of receipt</li>
                <li>For complex matters, we will keep you informed of our progress</li>
                <li>We will work diligently to resolve any privacy-related issues to your satisfaction</li>
              </ul>
            </div>

            {/* <p className="privacy-response-time">
              <strong>Data Protection Officer:</strong> For specific data protection queries and rights requests, you
              may also contact our designated Data Protection Officer at{" "}
              <a href="mailto:dpo@istlabs.in" className="privacy-contact-link">
                dpo@istlabs.in
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
