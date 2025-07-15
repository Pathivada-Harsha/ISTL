"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../../components_css/smartmeters/ThreePhase.css"
import single1 from "../../images/Home/Home_smart2.png"
import three2 from "../../images/smartmeters/threephase5.png"
import three1 from "../../images/smartmeters/threephase1.jpeg"
import three4 from "../../images/smartmeters/threephase6.png"
import three5 from "../../images/smartmeters/threephase7.png"
import three8 from "../../images/smartmeters/threephase8.png"
import three9 from "../../images/smartmeters/threephase9.png"

const ThreePhase = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const sectionRefs = {
    hero: "tp-hero",
    overview: "tp-overview",
    productOverview: "tp-product-overview",
    bisSection: "tp-bis-section",
    features: "tp-features",
    whyChoose: "tp-why-choose",
    specifications: "tp-specifications",
    applications: "tp-applications",
    cta: "tp-cta",
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

    const elements = document.querySelectorAll(".tp-animate")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      title: "BIS Certified Excellence",
      description: "Bureau of Indian Standards certified for industrial-grade reliability",
      icon: "🏆",
      details: ["IS 16444 Compliant", "Industrial Grade", "End-End Security", "Long-term Reliability"],
    },
    {
      title: "Advanced Metering",
      description: "Comprehensive three-phase measurement with load balancing",
      icon: "⚡",
      details: ["3-Phase Measurement", "Load Balancing", "Power Quality Analysis", "Harmonic Detection"],
    },
    {
      title: "Smart Communication",
      description: "Multi-protocol communication for seamless integration",
      icon: "📡",
      details: ["Optical Communication", "GSM/GPRS/2G/4G Support", "Quad Band (800/900/1800/1900MHz)", "SIM card exchangeable/ replaceable infield"],
    },
    {
      title: "Industrial Control",
      description: "Advanced control features for industrial applications",
      icon: "🔧",
      details: ["Remote Control", "Load Management", "Demand Control", "Automated Switching"],
    },
  ]

  const specifications = {
    electrical: [
      { parameter: "Voltage Range", value: "3 x 380V - 440V AC" },
      { parameter: "Current Range", value: "5A - 100A per phase" },
      { parameter: "Frequency", value: "50Hz ± 2%" },
      { parameter: "Accuracy Class", value: "0.5S / 0.2S" },
      { parameter: "Power Factor Range", value: "0.5 lag to 0.5 lead" },
    ],
    communication: [
      { parameter: "Protocol", value: "DLMS/COSEM" },
      { parameter: "Protocol", value: "DLMS/COSEM/TCB" },
      { parameter: "Interface", value: "Optical + GSM" },
      { parameter: "Data Storage", value: "45 days load profile" },
      { parameter: "Display", value: " LCD with backlight" },
      { parameter: "Security", value: "AES-128 Encryption" },
    ],
    environmental: [
       { parameter: "Operating Temp", value: "-10°C to +55°C" },
      { parameter: "Storage Temp", value: "-25°C to +70°C" },
      { parameter: "Operating Humidity", value: "Up to 95%" },
      { parameter: "IP Rating", value: "IP51" },
      { parameter: "Altitude", value: "Up to 3000m" },
    ],
  }

  return (
    <div className="tp-page">
     
      {/* Hero Section */}
      <section className="tp-hero" id={sectionRefs.hero}>
        <div className="tp-hero-background">
          <img src={three5} alt="Background" />
          <div className="tp-hero-overlay"></div>
        </div>
        <div className="tp-container">
          <div className="tp-hero-content">
            <div className="tp-hero-text">
              <div className="tp-badge-container tp-animate" id="tp-badge">
                <span className="tp-badge tp-badge-primary">BIS CERTIFIED</span>
                <span className="tp-badge tp-badge-secondary">Industrial Grade</span>
              </div>
              <h1 className="tp-hero-title tp-animate" id="tp-title">
                Three Phase <span className="tp-text-gradient">Smart Meter</span>
              </h1>
              <p className="tp-hero-subtitle tp-animate" id="tp-subtitle">
                Industrial-grade three phase smart electricity meter with BIS certification, designed for commercial and
                industrial applications with advanced monitoring capabilities.
              </p>
              <div className="tp-hero-stats tp-animate" id="tp-stats">
                <div className="tp-stat">
                  <span className="tp-stat-number">1.0</span>
                  <span className="tp-stat-label">Accuracy Class</span>
                </div>
                <div className="tp-stat">
                  <span className="tp-stat-number">BIS</span>
                  <span className="tp-stat-label">Certified</span>
                </div>
                <div className="tp-stat">
                  <span className="tp-stat-number">IP51</span>
                  <span className="tp-stat-label">Rating</span>
                </div>
              </div>
              <div className="tp-hero-cta tp-animate" id="tp-cta">
                <Link to="/book-demo" className="tp-btn tp-btn-primary">
                  Request Quote
                </Link>
                {/* <a href="/brochure.pdf" download className="tp-btn tp-btn-outline">
                  Download Brochure
                </a> */}
              </div>
            </div>
            <div className="tp-hero-visual tp-animate" id="tp-visual">
              <div className="tp-meter-showcase">
                <div className="tp-meter-image">
                  <img
                    src={three9}
                    alt="Three Phase Smart Meter"
                  />
                </div>
                <div className="tp-certification-badges">
                  <div className="tp-cert-badge tp-cert-bis">
                    <span>BIS</span>
                    <small>Certified</small>
                  </div>
                  <div className="tp-cert-badge tp-cert-quality">
                    <span>IS</span>
                    <small>16444</small>
                  </div>
                </div>
                <div className="tp-meter-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="tp-overview" id={sectionRefs.overview}>
        <div className="tp-container">
          <div className="tp-overview-content tp-animate" id="tp-overview-content">
            <div className="tp-overview-text">
              <h2>Industrial Three Phase Smart Metering</h2>
              <p>
                Our Three Phase Smart Meter represents the pinnacle of industrial electricity measurement technology,
                combining precision, reliability, and advanced three-phase monitoring capabilities in one robust device.
              </p>
              <div className="tp-overview-highlights">
                <div className="tp-highlight">
                  <span className="tp-highlight-icon">✓</span>
                  <span>BIS Certified Industrial Grade</span>
                </div>
                <div className="tp-highlight">
                  <span className="tp-highlight-icon">✓</span>
                  <span>Three Phase Monitoring</span>
                </div>
                <div className="tp-highlight">
                  <span className="tp-highlight-icon">✓</span>
                  <span>Load Balancing Control</span>
                </div>
                <div className="tp-highlight">
                  <span className="tp-highlight-icon">✓</span>
                  <span>Power Quality Analysis</span>
                </div>
              </div>
            </div>
            <div className="tp-overview-visual">
              <img
                src={three2}
                alt="Three Phase Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="tp-product-overview" id={sectionRefs.productOverview}>
        <div className="tp-container">
          <div className="tp-section-header tp-animate" id="tp-product-header">
            <span className="tp-section-subtitle">Product Overview</span>
            <h2 className="tp-section-title">Industrial Three Phase Smart Metering Solution</h2>
            <p className="tp-section-description">
              Comprehensive hardware and software ecosystem for industrial electricity management
            </p>
          </div>

          <div className="tp-product-content">
            <div className="tp-product-images tp-animate" id="tp-product-images">
              <div className="tp-image-stack">
                <div className="tp-image-item tp-image-1">
                  <img src={three4} alt="Hardware" />
                </div>
                {/* <div className="tp-image-item tp-image-2">
                  <img src="/placeholder.svg?height=300&width=400&text=Industrial+Dashboard" alt="Dashboard" />
                </div>
                <div className="tp-image-item tp-image-3">
                  <img src="/placeholder.svg?height=300&width=400&text=Installation+Setup" alt="Installation" />
                </div> */}
              </div>
            </div>

            <div className="tp-product-features">
              <div className="tp-feature-card tp-animate" id="tp-feature-1">
                <div className="tp-feature-icon">📊</div>
                <h3>Three Phase Monitoring</h3>
                <p>Real-time monitoring of all three phases with load balancing and power quality analysis.</p>
              </div>
              <div className="tp-feature-card tp-animate" id="tp-feature-2">
                <div className="tp-feature-icon">🔒</div>
                <h3>Industrial Security</h3>
                <p>AES-128 encryption and advanced tamper detection for complete industrial data security.</p>
              </div>
              <div className="tp-feature-card tp-animate" id="tp-feature-3">
                <div className="tp-feature-icon">📱</div>
                <h3>Remote Management</h3>
                <p>Complete remote monitoring and control capabilities for industrial applications.</p>
              </div>
              <div className="tp-feature-card tp-animate" id="tp-feature-4">
                <div className="tp-feature-icon">⚡</div>
                <h3>High Precision</h3>
                <p>1.0 accuracy class ensuring precise measurement for industrial billing and analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIS Certification Section */}
      <section className="tp-bis-section" id={sectionRefs.bisSection}>
        <div className="tp-container">
          <div className="tp-bis-content tp-animate" id="tp-bis-content">
            <div className="tp-bis-visual">
              <div className="tp-bis-logo">
                <img src={three1} alt="BIS Certification" />
              </div>
              <div className="tp-certification-details">
                <h3>Bureau of Indian Standards</h3>
                <p>Industrial Grade Certified</p>
                <div className="tp-cert-number">IS 16444:2015</div>
                <div className="tp-cert-features">
                  <span>✓ Industrial Grade Tested</span>
                  <span>✓ Government Approved</span>
                  <span>✓ Safety Compliant</span>
                </div>
              </div>
            </div>
            <div className="tp-bis-info">
              <h2>BIS Certified Industrial Excellence</h2>
              <p>
                Our Three Phase Smart Meter meets the highest industrial standards with official BIS certification,
                ensuring reliability, accuracy, and safety for commercial and industrial applications.
              </p>
              <div className="tp-bis-benefits">
                <div className="tp-benefit-item">
                  <span className="tp-benefit-icon">🛡️</span>
                  <div>
                    <h4>Industrial Quality</h4>
                    <p>Built for harsh industrial environments with IP51 protection</p>
                  </div>
                </div>
                <div className="tp-benefit-item">
                  <span className="tp-benefit-icon">⚖️</span>
                  <div>
                    <h4>High Accuracy</h4>
                    <p>accuracy class 1.0 for precise industrial billing</p>
                  </div>
                </div>
                <div className="tp-benefit-item">
                  <span className="tp-benefit-icon">🏆</span>
                  <div>
                    <h4>Proven Reliability</h4>
                    <p>Demonstrated performance in industrial applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="tp-features-section" id={sectionRefs.features}>
        <div className="tp-container">
          <div className="tp-section-header tp-animate" id="tp-features-header">
            <span className="tp-section-subtitle">Advanced Features</span>
            <h2 className="tp-section-title">Industrial Smart Meter Technology</h2>
            <p className="tp-section-description">
              Comprehensive feature set designed for industrial electricity management needs
            </p>
          </div>

          <div className="tp-features-showcase">
            <div className="tp-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`tp-feature-nav-item ${activeFeature === index ? "tp-active" : ""} tp-animate`}
                  id={`tp-nav-${index}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <span className="tp-nav-icon">{feature.icon}</span>
                  <span className="tp-nav-title">{feature.title}</span>
                </button>
              ))}
            </div>

            <div className="tp-feature-display tp-animate" id="tp-feature-display">
              <div className="tp-feature-content">
                <div className="tp-feature-icon-large">{features[activeFeature].icon}</div>
                <h3 className="tp-feature-title">{features[activeFeature].title}</h3>
                <p className="tp-feature-description">{features[activeFeature].description}</p>
                <div className="tp-feature-details">
                  {features[activeFeature].details.map((detail, index) => (
                    <div key={index} className="tp-detail-item">
                      <span className="tp-detail-check">✓</span>
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
      <section className="tp-why-choose" id={sectionRefs.whyChoose}>
        <div className="tp-container">
          <div className="tp-section-header tp-animate" id="tp-why-header">
            <span className="tp-section-subtitle">Why Choose ISTL</span>
            <h2 className="tp-section-title">Leading Industrial Smart Meter Innovation</h2>
            <p className="tp-section-description">
              Trusted by industries across India for reliable three-phase smart metering solutions
            </p>
          </div>

          <div className="tp-why-grid">
            <div className="tp-why-card tp-animate" id="tp-why-1">
              <div className="tp-why-icon">🏭</div>
              <h3>Industrial Excellence</h3>
              <p>Specialized in industrial-grade three-phase meters with BIS certification and quality control.</p>
              <div className="tp-why-stat">Industrial Grade</div>
            </div>
            <div className="tp-why-card tp-animate" id="tp-why-2">
              <div className="tp-why-icon">🔬</div>
              <h3>R&D Innovation</h3>
              <p>Advanced research in three-phase metering technology and power quality analysis.</p>
              <div className="tp-why-stat">50+ Patents Filed</div>
            </div>
            <div className="tp-why-card tp-animate" id="tp-why-3">
              <div className="tp-why-icon">🎯</div>
              <h3>BIS Certification</h3>
              <p>Official BIS certified three-phase meter ensuring highest quality and compliance.</p>
              <div className="tp-why-stat">IS 16444 Compliant</div>
            </div>
            <div className="tp-why-card tp-animate" id="tp-why-4">
              <div className="tp-why-icon">🛠️</div>
              <h3>Technical Support</h3>
              <p>24/7 technical support and maintenance services for industrial installations.</p>
              <div className="tp-why-stat">Pan-India Support</div>
            </div>
            <div className="tp-why-card tp-animate" id="tp-why-5">
              <div className="tp-why-icon">📈</div>
              <h3>Proven Track Record</h3>
              <p>Successfully deployed in industrial facilities and commercial establishments.</p>
              <div className="tp-why-stat">50K+ Installations</div>
            </div>
            <div className="tp-why-card tp-animate" id="tp-why-6">
              <div className="tp-why-icon">🌱</div>
              <h3>Energy Efficiency</h3>
              <p>Advanced power quality monitoring contributing to energy optimization.</p>
              <div className="tp-why-stat">Green Technology</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="tp-specs-section" id={sectionRefs.specifications}>
        <div className="tp-container">
          <div className="tp-section-header tp-animate" id="tp-specs-header">
            <span className="tp-section-subtitle">Technical Details</span>
            <h2 className="tp-section-title">Technical Specifications</h2>
            <p className="tp-section-description">Comprehensive technical parameters for industrial applications</p>
          </div>

          <div className="tp-specs-grid">
            <div className="tp-spec-category tp-animate" id="tp-spec-electrical">
              <div className="tp-spec-header">
                <div className="tp-spec-icon">⚡</div>
                <h3>Electrical Parameters</h3>
              </div>
              <div className="tp-spec-table">
                {specifications.electrical.map((spec, index) => (
                  <div key={index} className="tp-spec-row">
                    <span className="tp-spec-param">{spec.parameter}</span>
                    <span className="tp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tp-spec-category tp-animate" id="tp-spec-communication">
              <div className="tp-spec-header">
                <div className="tp-spec-icon">📡</div>
                <h3>Communication & Features</h3>
              </div>
              <div className="tp-spec-table">
                {specifications.communication.map((spec, index) => (
                  <div key={index} className="tp-spec-row">
                    <span className="tp-spec-param">{spec.parameter}</span>
                    <span className="tp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tp-spec-category tp-animate" id="tp-spec-environmental">
              <div className="tp-spec-header">
                <div className="tp-spec-icon">🌍</div>
                <h3>Environmental Conditions</h3>
              </div>
              <div className="tp-spec-table">
                {specifications.environmental.map((spec, index) => (
                  <div key={index} className="tp-spec-row">
                    <span className="tp-spec-param">{spec.parameter}</span>
                    <span className="tp-spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="tp-applications-section" id={sectionRefs.applications}>
        <div className="tp-container">
          <div className="tp-section-header tp-animate" id="tp-apps-header">
            <span className="tp-section-subtitle">Industrial Applications</span>
            <h2 className="tp-section-title">Applications & Use Cases</h2>
            <p className="tp-section-description">Perfect for commercial and industrial three-phase applications</p>
          </div>

          <div className="tp-apps-grid">
            <div className="tp-app-card tp-animate" id="tp-app-1">
              <div className="tp-app-icon">🏭</div>
              <h3>Industrial Plants</h3>
              <p>Manufacturing facilities and heavy industrial units with three-phase power requirements.</p>
            </div>
            <div className="tp-app-card tp-animate" id="tp-app-2">
              <div className="tp-app-icon">🏢</div>
              <h3>Commercial Buildings</h3>
              <p>Office complexes, malls, and commercial establishments with high power demands.</p>
            </div>
            <div className="tp-app-card tp-animate" id="tp-app-3">
              <div className="tp-app-icon">🏥</div>
              <h3>Hospitals & Schools</h3>
              <p>Critical infrastructure requiring reliable three-phase power monitoring.</p>
            </div>
            <div className="tp-app-card tp-animate" id="tp-app-4">
              <div className="tp-app-icon">⚡</div>
              <h3>Power Distribution</h3>
              <p>Substations and power distribution networks requiring accurate measurement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tp-cta-section" id={sectionRefs.cta}>
        <div className="tp-container">
          <div className="tp-cta-content tp-animate" id="tp-cta-content">
            <div className="tp-cta-badge">
              <span>BIS CERTIFIED INDUSTRIAL GRADE</span>
            </div>
            <h2>Get Your Industrial Three Phase Smart Meter</h2>
            <p>Experience the reliability and precision of our BIS certified three phase smart meter solution</p>
            <div className="tp-cta-buttons">
              <Link to="/book-demo" className="tp-btn tp-btn-primary">
                Request Quote
              </Link>
              {/* <Link to="/contact" className="tp-btn tp-btn-secondary">
                Technical Support
              </Link>
              <a href="/brochure.pdf" download="ThreePhaseSmartMeterBrochure.pdf" className="tp-btn tp-btn-outline">
                Download Brochure
              </a> */}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default ThreePhase
