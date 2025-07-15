"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../../components_css/smartmeters/SinglePhase.css"
import single1 from "../../images/Home/Home_smart2.png"
import single2 from "../../images/smartmeters/threephase4.png"
import single3 from "../../images/smartmeters/singlephase2.png"
import single4 from "../../images/smartmeters/singlephase3.png"
import single5 from "../../images/smartmeters/singlephase4.png"
import single6 from "../../images/smartmeters/singlephase.jpeg"

import ccms1 from "../../images/ccms/ccms15.png"
const SinglePhase = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const sectionRefs = {
    hero: "sp-hero",
    overview: "sp-overview",
    productOverview: "sp-product-overview",
    bisSection: "sp-bis-section",
    features: "sp-features",
    whyChoose: "sp-why-choose",
    specifications: "sp-specifications",
    applications: "sp-applications",
    cta: "sp-cta",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".sp-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "BIS Certified Quality",
      description: "Bureau of Indian Standards certified for highest quality and reliability",
      icon: "🏆",
      details: ["IS 16444 Compliant", "Quality Assured", "End-End Security","Reliability Tested"],
    },
    {
      title: "Smart Communication",
      description: "Advanced communication protocols for seamless data transmission",
      icon: "📡",
      details: ["Optical Communication", "GSM/GPRS/2G/4G Support", "Quad Band (800/900/1800/1900MHz)", "SIM card exchangeable/ replaceable infield"],
    },
    {
      title: "Precise Measurement",
      description: "High accuracy measurement with tamper detection capabilities",
      icon: "⚡",
      details: ["1.0 Accuracy Class", "Tamper Detection", "Load Profiling", "Real-time Monitoring"],
    },
    {
      title: "Remote Management",
      description: "Complete remote monitoring and control capabilities",
      icon: "🔧",
      details: ["Remote Reading", "Load Disconnect/Reconnect", "Parameter Setting", "Firmware Updates"],
    },
  ]

  const specifications = {
    electrical: [
      { parameter: "Voltage Range", value: "180V - 280V AC" },
      { parameter: "Current Range", value: "5A - 30A" },
      { parameter: "Frequency", value: "50Hz ± 5%" },
      { parameter: "Accuracy Class", value: "1.0 / 0.5" },
      { parameter: "Power Factor Range", value: "0.8 lag to 0.8 lead" },
    ],
    communication: [
      { parameter: "Protocol", value: "DLMS/COSEM/TCB" },
      { parameter: "Interface", value: "Optical + GSM" },
      { parameter: "Data Storage", value: "45 days load profile" },
      { parameter: "Display", value: "STN LCD with backlight" },
      { parameter: "Security", value: "AES-128 Encryption" },
    ],
    environmental: [
      { parameter: "Operating Temp", value: "-10°C to +55°C" },
      { parameter: "Storage Temp", value: "-25°C to +70°C" },
      { parameter: "Operating Humidity", value: "Up to 95%" },
      { parameter: "IP Rating", value: "IP51" },
      { parameter: "Altitude", value: "Up to 2000m" },
    ],
  }

  return (
    <div className="sp-page">
   

      {/* Hero Section */}
      <section className="sp-hero" id={sectionRefs.hero}>
        <div className="sp-hero-background">
          <img src={single2} alt="Background" />
          <div className="sp-hero-overlay"></div>
        </div>
        <div className="sp-container">
          <div className="sp-hero-content">
            <div className="sp-hero-text">
              <div className="sp-badge-container sp-animate" id="sp-badge">
                <span className="sp-badge sp-badge-primary">BIS CERTIFIED</span>
                <span className="sp-badge sp-badge-secondary">Rare Product</span>
              </div>
              <h1 className="sp-hero-title sp-animate" id="sp-title">
                Single Phase <span className="sp-text-gradient">Smart Meter</span>
              </h1>
              <p className="sp-hero-subtitle sp-animate" id="sp-subtitle">
                Advanced single phase smart electricity meter with BIS certification, featuring cutting-edge technology
                for accurate measurement and remote monitoring capabilities.
              </p>
              <div className="sp-hero-stats sp-animate" id="sp-stats">
                <div className="sp-stat">
                  <span className="sp-stat-number">1.0</span>
                  <span className="sp-stat-label">Accuracy Class</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-stat-number">BIS</span>
                  <span className="sp-stat-label">Certified</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-stat-number">IP51</span>
                  <span className="sp-stat-label">Rating</span>
                </div>
              </div>
              <div className="sp-hero-cta sp-animate" id="sp-cta">
                <Link to="/book-demo" className="sp-btn sp-btn-primary">
                  Request Quote
                </Link>
                {/* <a href="/brochure.pdf" download className="sp-btn sp-btn-outline">
                  Download Brochure
                </a> */}
              </div>
            </div>
            <div className="sp-hero-visual sp-animate" id="sp-visual">
              <div className="sp-meter-showcase">
                <div className="sp-meter-image">
                  <img
                    src={single5}
                    alt="Single Phase Smart Meter"
                  />
                </div>
                <div className="sp-certification-badges">
                  <div className="sp-cert-badge sp-cert-bis">
                    <span>BIS</span>
                    <small>Certified</small>
                  </div>
                  <div className="sp-cert-badge sp-cert-quality">
                    <span>IS</span>
                    <small>16444</small>
                  </div>
                </div>
                <div className="sp-meter-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="sp-overview" id={sectionRefs.overview}>
        <div className="sp-container">
          <div className="sp-overview-content sp-animate" id="sp-overview-content">
            <div className="sp-overview-text">
              <h2>Revolutionary Smart Metering Technology</h2>
              <p>
                Our Single Phase Smart Meter represents the pinnacle of electricity measurement technology, combining
                precision, reliability, and advanced communication capabilities in one compact device.
              </p>
              <div className="sp-overview-highlights">
                <div className="sp-highlight">
                  <span className="sp-highlight-icon">✓</span>
                  <span>BIS Certified Excellence</span>
                </div>
                <div className="sp-highlight">
                  <span className="sp-highlight-icon">✓</span>
                  <span>DLMS/COSEM Protocol</span>
                </div>
                <div className="sp-highlight">
                  <span className="sp-highlight-icon">✓</span>
                  <span>Remote Monitoring</span>
                </div>
                <div className="sp-highlight">
                  <span className="sp-highlight-icon">✓</span>
                  <span>Tamper Detection</span>
                </div>
              </div>
            </div>
            <div className="sp-overview-visual">
              <img
                src={single4}
                alt="Smart Meter Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="sp-product-overview" id={sectionRefs.productOverview}>
        <div className="sp-container">
          <div className="sp-section-header sp-animate" id="sp-product-header">
            <span className="sp-section-subtitle">Product Overview</span>
            <h2 className="sp-section-title">Complete Smart Metering Solution</h2>
            <p className="sp-section-description">
              Comprehensive hardware and software ecosystem for modern electricity management
            </p>
          </div>

          <div className="sp-product-content">
            <div className="sp-product-images sp-animate" id="sp-product-images">
              <div className="sp-image-stack">
                <div className="sp-image-item sp-image-1">
                  <img src={single3} alt="Hardware" />
                </div>
                {/* <div className="sp-image-item sp-image-2">
                  <img src={single4} alt="Dashboard" />
                </div>
                <div className="sp-image-item sp-image-3">
                  <img src={single3} alt="Installation" />
                </div> */}
              </div>
            </div>

            <div className="sp-product-features">
              <div className="sp-feature-card sp-animate" id="sp-feature-1">
                <div className="sp-feature-icon">📊</div>
                <h3>Real-time Monitoring</h3>
                <p>Live energy consumption tracking with detailed analytics and reporting capabilities.</p>
              </div>
              <div className="sp-feature-card sp-animate" id="sp-feature-2">
                <div className="sp-feature-icon">🔒</div>
                <h3>Advanced Security</h3>
                <p>AES-128 encryption and tamper detection for complete data security and integrity.</p>
              </div>
              <div className="sp-feature-card sp-animate" id="sp-feature-3">
                <div className="sp-feature-icon">📱</div>
                <h3>Mobile Integration</h3>
                <p>Seamless smartphone connectivity for remote monitoring and control operations.</p>
              </div>
              <div className="sp-feature-card sp-animate" id="sp-feature-4">
                <div className="sp-feature-icon">⚡</div>
                <h3>High Precision</h3>
                <p> Accuracy class 1.0 ensuring precise measurement for billing and analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIS Certification Section */}
      <section className="sp-bis-section" id={sectionRefs.bisSection}>
        <div className="sp-container">
          <div className="sp-bis-content sp-animate" id="sp-bis-content">
            <div className="sp-bis-visual">
              <div className="sp-bis-logo">
                <img src={single6} alt="BIS Certification" />
              </div>
              <div className="sp-certification-details">
                <h3>Bureau of Indian Standards</h3>
                <p>Certified Product</p>
                <div className="sp-cert-number">IS 16444(part 1):2015 Amend 2</div>
                <div className="sp-cert-features">
                  <span>✓ Quality Tested</span>
                  {/* <span>✓ Government Approved</span> */}
                  <span>✓ Safety Compliant</span>
                </div>
              </div>
            </div>
            <div className="sp-bis-info">
              <h2>BIS Certified Excellence</h2>
              <p>
                Our Single Phase Smart Meter is one of the rare products in the market with official BIS (Bureau of
                Indian Standards) certification, ensuring the highest quality, safety, and performance standards.
              </p>
              <div className="sp-bis-benefits">
                <div className="sp-benefit-item">
                  <span className="sp-benefit-icon">🛡️</span>
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>Rigorous testing and quality control processes</p>
                  </div>
                </div>
                <div className="sp-benefit-item">
                  <span className="sp-benefit-icon">⚖️</span>
                  <div>
                    <h4>Regulatory Compliance</h4>
                    <p>Meets all Indian regulatory standards and requirements</p>
                  </div>
                </div>
                <div className="sp-benefit-item">
                  <span className="sp-benefit-icon">🏆</span>
                  <div>
                    <h4>Proven Reliability</h4>
                    <p>Demonstrated performance and long-term durability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="sp-features-section" id={sectionRefs.features}>
        <div className="sp-container">
          <div className="sp-section-header sp-animate" id="sp-features-header">
            <span className="sp-section-subtitle">Advanced Features</span>
            <h2 className="sp-section-title">Cutting-Edge Smart Meter Technology</h2>
            <p className="sp-section-description">
              Comprehensive feature set designed for modern electricity management needs
            </p>
          </div>

          <div className="sp-features-showcase">
            <div className="sp-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`sp-feature-nav-item ${activeFeature === index ? "sp-active" : ""} sp-animate`}
                  id={`sp-nav-${index}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="sp-nav-icon">{feature.icon}</span>
                  <span className="sp-nav-title">{feature.title}</span>
                </button>
              ))}
            </div>

            <div className="sp-feature-display sp-animate" id="sp-feature-display">
              <div className="sp-feature-content">
                <div className="sp-feature-icon-large">{features[activeFeature].icon}</div>
                <h3 className="sp-feature-title">{features[activeFeature].title}</h3>
                <p className="sp-feature-description">{features[activeFeature].description}</p>
                <div className="sp-feature-details">
                  {features[activeFeature].details.map((detail, index) => (
                    <div key={index} className="sp-detail-item">
                      <span className="sp-detail-check">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ISTL Section */}
      <section className="sp-why-choose" id={sectionRefs.whyChoose}>
        <div className="sp-container">
          <div className="sp-section-header sp-animate" id="sp-why-header">
            <span className="sp-section-subtitle">Why Choose ISTL</span>
            <h2 className="sp-section-title">Leading Smart Meter Innovation</h2>
            <p className="sp-section-description">
              Trusted by utilities and consumers across India for reliable smart metering solutions
            </p>
          </div>

          <div className="sp-why-grid">
            <div className="sp-why-card sp-animate" id="sp-why-1">
              <div className="sp-why-icon">🏭</div>
              <h3>Manufacturing Excellence</h3>
              <p>State-of-the-art manufacturing facility with ISO certifications and quality control.</p>
              <div className="sp-why-stat">15+ Years Experience</div>
            </div>
            <div className="sp-why-card sp-animate" id="sp-why-2">
              <div className="sp-why-icon">🔬</div>
              <h3>R&D Innovation</h3>
              <p>Dedicated research team developing next-generation smart metering technologies.</p>
              <div className="sp-why-stat">50+ Patents Filed</div>
            </div>
            <div className="sp-why-card sp-animate" id="sp-why-3">
              <div className="sp-why-icon">🎯</div>
              <h3>BIS Certification</h3>
              <p>Rare BIS certified smart meter ensuring highest quality and regulatory compliance.</p>
              <div className="sp-why-stat">IS 16444 Compliant</div>
            </div>
            <div className="sp-why-card sp-animate" id="sp-why-4">
              <div className="sp-why-icon">🛠️</div>
              <h3>Technical Support</h3>
              <p>24/7 technical support and maintenance services across India.</p>
              <div className="sp-why-stat">Pan-India Support</div>
            </div>
            <div className="sp-why-card sp-animate" id="sp-why-5">
              <div className="sp-why-icon">📈</div>
              <h3>Proven Track Record</h3>
              <p>Successfully deployed smart meters across residential and commercial sectors.</p>
              <div className="sp-why-stat">100K+ Installations</div>
            </div>
            <div className="sp-why-card sp-animate" id="sp-why-6">
              <div className="sp-why-icon">🌱</div>
              <h3>Sustainable Technology</h3>
              <p>Energy-efficient design contributing to environmental sustainability goals.</p>
              <div className="sp-why-stat">Green Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="sp-specs-section" id={sectionRefs.specifications}>
        <div className="sp-container">
          <div className="sp-section-header sp-animate" id="sp-specs-header">
            <span className="sp-section-subtitle">Technical Details</span>
            <h2 className="sp-section-title">Technical Specifications</h2>
            <p className="sp-section-description">Comprehensive technical parameters and performance characteristics</p>
          </div>

          <div className="sp-specs-grid">
            <div className="sp-spec-category sp-animate" id="sp-spec-electrical">
              <div className="sp-spec-header">
                <div className="sp-spec-icon">⚡</div>
                <h3>Electrical Parameters</h3>
              </div>
              <div className="sp-spec-table">
                {specifications.electrical.map((spec, index) => (
                  <div key={index} className="sp-spec-row">
                    <span className="sp-spec-param">{spec.parameter}</span>
                    <span className="sp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sp-spec-category sp-animate" id="sp-spec-communication">
              <div className="sp-spec-header">
                <div className="sp-spec-icon">📡</div>
                <h3>Communication & Features</h3>
              </div>
              <div className="sp-spec-table">
                {specifications.communication.map((spec, index) => (
                  <div key={index} className="sp-spec-row">
                    <span className="sp-spec-param">{spec.parameter}</span>
                    <span className="sp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sp-spec-category sp-animate" id="sp-spec-environmental">
              <div className="sp-spec-header">
                <div className="sp-spec-icon">🌍</div>
                <h3>Environmental Conditions</h3>
              </div>
              <div className="sp-spec-table">
                {specifications.environmental.map((spec, index) => (
                  <div key={index} className="sp-spec-row">
                    <span className="sp-spec-param">{spec.parameter}</span>
                    <span className="sp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="sp-applications-section" id={sectionRefs.applications}>
        <div className="sp-container">
          <div className="sp-section-header sp-animate" id="sp-apps-header">
            <span className="sp-section-subtitle">Use Cases</span>
            <h2 className="sp-section-title">Applications & Use Cases</h2>
            <p className="sp-section-description">Perfect for various residential and commercial applications</p>
          </div>

          <div className="sp-apps-grid">
            <div className="sp-app-card sp-animate" id="sp-app-1">
              <div className="sp-app-icon">🏠</div>
              <h3>Residential</h3>
              <p>Individual homes and apartments with single phase supply for accurate billing and monitoring.</p>
            </div>
            <div className="sp-app-card sp-animate" id="sp-app-2">
              <div className="sp-app-icon">🏪</div>
              <h3>Small Commercial</h3>
              <p>Shops, offices, and small businesses requiring reliable energy measurement solutions.</p>
            </div>
            <div className="sp-app-card sp-animate" id="sp-app-3">
              <div className="sp-app-icon">🏭</div>
              <h3>Light Industrial</h3>
              <p>Small workshops and light industrial units with single phase power requirements.</p>
            </div>
            <div className="sp-app-card sp-animate" id="sp-app-4">
              <div className="sp-app-icon">🌾</div>
              <h3>Agricultural</h3>
              <p>Farm houses and agricultural pump sets for efficient energy management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sp-cta-section" id={sectionRefs.cta}>
        <div className="sp-container">
          <div className="sp-cta-content sp-animate" id="sp-cta-content">
            <div className="sp-cta-badge">
              <span>BIS CERTIFIED PRODUCT</span>
            </div>
            <h2>Get Your BIS Certified Smart Meter Today</h2>
            <p>Experience the reliability and precision of our rare BIS certified single phase smart meter solution</p>
            <div className="sp-cta-buttons">
              <Link to="/book-demo" className="sp-btn sp-btn-primary">
                Request Quote
              </Link>
              {/* <Link to="/contact" className="sp-btn sp-btn-secondary">
                Technical Support
              </Link>
              <a href="/brochure.pdf" download="SinglePhaseSmartMeterBrochure.pdf" className="sp-btn sp-btn-outline">
                Download Brochure
              </a> */}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default SinglePhase
