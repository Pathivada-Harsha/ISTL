"use client"

import { useEffect, useRef, useState } from "react"

import "../../components_css/products/IstlItms.css"
import itms1 from "../../images/itms/itms1.png"
import itms2 from "../../images/itms/itms2.png"
import itms3 from "../../images/itms/itms3.png"
import itms4 from "../../images/itms/itms4.png"
import itms5 from "../../images/itms/itms5.png"
import itms6 from "../../images/itms/itms6.jpeg"
import itms7 from "../../images/itms/itms7.jpg"
import itms8 from "../../images/itms/itms8.jpeg"
import itms9 from "../../images/itms/itms9.jpeg"
import itms10 from "../../images/itms/itms10.jpg"
import itms11 from "../../images/itms/itms11.png"
import itms12 from "../../images/itms/itms12.png"
import itms13 from "../../images/itms/itms13.jpeg"
import itms14 from "../../images/itms/itms14.jpeg"
import itms16 from "../../images/itms/itms16.jpeg"
import itms23 from "../../images/itms/itms23.jpg"
import { NavLink } from "react-router-dom"
export default function Istlitms() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const sectionRefs = {
    hero: useRef(null),
    productOverview: useRef(null),
    whyChoose: useRef(null),
    overview: useRef(null),
    features: useRef(null),
    interface: useRef(null),
    gallery: useRef(null),
    specifications: useRef(null),
  }

  const productImages = [

    {
      src: itms6,
      alt: "Transformer ",
      title: "Intelligent Transformer System",
    },
    {
      src: itms23, //itms7
      alt: "itms Control Panel",
      title: "Advanced Control Panel",
    },
    {
      src: itms5,
      alt: "City Infrastructure",
      title: "City-wide Implementation",
    },
  ]

  const interfaceScreenshots = [
    {
      src: itms16,
      alt: "Dashboard Overview",
      title: "Real-time Dashboard",
      description: "Monitor all transformers from a centralized dashboard with real-time status updates",
    },
    {
      src: itms13,
      alt: "Analytics Interface",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for transformer performance metrics",
    },
    {
      src: itms14,
      alt: "Control Interface",
      title: "Remote Control",
      description: "Individual and group control of transformers with monitoring capabilities",
    },
  ]
  const features = [
    {
      icon: "🔌",
      title: "Transformer Monitoring",
      description: "Real-time monitoring of transformer parameters and health",
      details: ["Temperature monitoring", "Load current tracking", "Voltage level monitoring"],
    },
    {
      icon: "⚡",
      title: "Power Quality Analysis",
      description: "Comprehensive power quality monitoring and analysis",
      details: [
        
        "Power factor monitoring",
        "Voltage fluctuation detection",
        "Frequency stability tracking",
      ],
    },
    {
      icon: "🔧",
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance for transformers",
      details: [
        "Failure prediction algorithms",
        "Maintenance scheduling",
        "Component lifespan tracking",
        "Cost optimization",
      ],
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Data-driven insights for transformer management",
      details: ["Performance dashboards", "Historical trend analysis", "Custom reporting", "Efficiency metrics"],
    },
  ]
  const highlights = [
    "Real-time transformer health monitoring",
    " Winding Temperature monitoring",
    "Oil temperature monitoring",
    "Load current and voltage monitoring",
    "Power factor analysis",
    "UnBalance load notification",
    "Predictive maintenance alerts",
    "Historical data logging and analytics",
    "Fault detection",
    "OTA Update",
    "Mobile and web-based monitoring",
    "Alarm and notification system",
    "Accuracy ±0.5%",
  ]
  const downloadBrochure = (productType) => {
    const link = document.createElement("a")
    link.href = `/brochures/${productType}-brochure.pdf`
    link.download = `${productType}-brochure.pdf`
    link.click()
    alert(`${productType} brochure download started!`)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [productImages.length])

  return (
    <div className="itms-page">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="itms-hero-section itms-compact">
        <div className="itms-hero-background">
          <div className="itms-hero-bg-image"></div>
          <div className="itms-hero-pattern"></div>
          <div className="itms-floating-elements">
            <div className="itms-floating-element itms-element-1"></div>
            <div className="itms-floating-element itms-element-2"></div>
            <div className="itms-floating-element itms-element-3"></div>
          </div>
        </div>

        <div className="itms-hero-content">
          <div className="itms-hero-text">
            <div className="itms-product-badge">ISTL ITMS</div>
            <h1 className="itms-hero-title">
              Intelligent Transformer Monitoring System
              <span className="itms-title-highlight">for Power Infrastructure</span>
            </h1>
            <p className="itms-hero-subtitle">
              Advanced transformer monitoring solution with real-time analytics, predictive maintenance, and
              comprehensive power quality analysis for reliable power distribution.
            </p>
            <div className="itms-hero-stats">
              <div className="itms-stat-item">
                <div className="itms-stat-number">500+</div>
                <div className="itms-stat-label">Transformers Monitored</div>
              </div>
              <div className="itms-stat-item">
                <div className="itms-stat-number">95%</div>
                <div className="itms-stat-label">Failure Prevention</div>
              </div>
              <div className="itms-stat-item">
                <div className="itms-stat-number">99.9%</div>
                <div className="itms-stat-label">System Uptime</div>
              </div>
            </div>
            <div className="itms-hero-actions">
              <NavLink to="/book-demo">
                <button className="itms-cta-primary">Request Demo</button>
              </NavLink>

               <a
                href="/brochers/ITMS_Catalogue.pdf"
                download="ITMS_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="itms-cta-secondary">
                  Download  Brochure
                </button>
              </a>
            </div>
          </div>

          <div className="itms-hero-visual">
            <div className="itms-product-showcase">
              <div className="itms-showcase-main">
                <img
                  src={productImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={productImages[currentImageIndex].alt}
                  className="itms-showcase-image"
                />
                <div className="itms-showcase-overlay">
                  <h3>{productImages[currentImageIndex].title}</h3>
                </div>
              </div>
              <div className="itms-showcase-indicators">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`itms-indicator ${index === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section
        id="productOverview"
        ref={sectionRefs.productOverview}
        className={`itms-product-overview-section ${visibleSections.productOverview ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-product-overview-content">
            <div className="itms-overview-images">
              <div className="itms-image-container">
                <div className="itms-main-image">
                  <img
                    src={itms3}
                    alt="Transformer Monitoring Interface"
                  />
                </div>
                <div className="itms-overlay-image">
                  <img
                    src={itms4}
                    alt="Control Room Dashboard"
                  />
                </div>
              </div>
            </div>

            <div className="itms-overview-text">
              <div className="itms-overview-badge">Product Overview</div>
              <h2 className="itms-overview-title">Intelligent Transformer Monitoring System</h2>
              <p className="itms-overview-description">
                ISTL's ITMS offers continuous monitoring and data acquisition from distribution transformers to enhance visibility, reliability, and operational efficiency. It provides early fault detection, real-time status updates, and energy usage analytics for both urban and rural grids.
              </p>

              <div className="itms-overview-features">
                <div className="itms-feature-row">
                  <div className="itms-feature-point">
                    <div className="itms-feature-icon">✓</div>
                    <span>Real-time Monitoring of Voltage, Current, Load & Temperature</span>
                  </div>
                  <div className="itms-feature-point">
                    <div className="itms-feature-icon">✓</div>
                    <span>Alerts for Overload, Phase Failure, and Power Outage</span>
                  </div>
                </div>
                <div className="itms-feature-row">
                  <div className="itms-feature-point">
                    <div className="itms-feature-icon">✓</div>
                    <span>Historical Data Logging for Analysis and Audits</span>
                  </div>
                  <div className="itms-feature-point">
                    <div className="itms-feature-icon">✓</div>
                    <span>Remote Diagnostics and Status Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose ISTL itms Section */}
      <section
        id="whyChoose"
        ref={sectionRefs.whyChoose}
        className={`itms-why-choose-section ${visibleSections.whyChoose ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-section-header">
            <h2 className="itms-section-title">Why Choose ISTL ITMS?</h2>
            <p className="itms-section-subtitle">
              A smart, scalable, and field-proven monitoring solution for transformer health and efficiency
            </p>
          </div>

          <div className="itms-why-choose-grid">
            <div className="itms-why-item">
              <div className="itms-why-icon">🔌</div>
              <h3>Transformer-Level Monitoring</h3>
              <p>Track key electrical parameters and transformer health in real-time from anywhere.</p>
            </div>

            <div className="itms-why-item">
              <div className="itms-why-icon">📉</div>
              <h3>Downtime Reduction</h3>
              <p>Early detection of faults helps prevent outages and improves power availability.</p>
            </div>

            <div className="itms-why-item">
              <div className="itms-why-icon">🛠️</div>
              <h3>Low Maintenance</h3>
              <p>Non-intrusive installation and rugged design ensure long-term field reliability.</p>
            </div>

            <div className="itms-why-item">
              <div className="itms-why-icon">📊</div>
              <h3>Data-Driven Insights</h3>
              <p>Visual dashboards and reports to support decision-making and improve load management.</p>
            </div>

            <div className="itms-why-item">
              <div className="itms-why-icon">🔐</div>
              <h3>Secure Communication</h3>
              <p>Encrypted data transmission with SIM-based or hybrid connectivity options.</p>
            </div>

            <div className="itms-why-item">
              <div className="itms-why-icon">📈</div>
              <h3>Scalable Deployment</h3>
              <p>Designed for both small rural feeders and large urban grids, with flexible rollout options.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section
        id="overview"
        ref={sectionRefs.overview}
        className={`itms-overview-section ${visibleSections.overview ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-overview-content">
            <div className="itms-overview-text">
              <h2 className="itms-section-title">Intelligent Transformer Management</h2>
              <p className="itms-section-description">
                Our ITMS solution provides comprehensive monitoring and management of power transformers with advanced
                analytics, predictive maintenance capabilities, and real-time performance optimization.
              </p>

              <div className="itms-key-benefits">
                <div className="itms-benefit-item">
                  <div className="itms-benefit-icon">🔌</div>
                  <div className="itms-benefit-content">
                    <h4>Real-time Monitoring</h4>
                    <p>Continuous monitoring of transformer parameters and health</p>
                  </div>
                </div>
                <div className="itms-benefit-item">
                  <div className="itms-benefit-icon">🔍</div>
                  <div className="itms-benefit-content">
                    <h4>Predictive Analytics</h4>
                    <p>AI-powered failure prediction and maintenance scheduling</p>
                  </div>
                </div>
                <div className="itms-benefit-item">
                  <div className="itms-benefit-icon">📈</div>
                  <div className="itms-benefit-content">
                    <h4>Power Quality Analysis</h4>
                    <p>Comprehensive power quality monitoring and optimization</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="itms-overview-visual">
              <div className="itms-system-diagram">
                <div className="itms-diagram-center">
                  <div className="itms-control-center">
                    <span>ITMS</span>
                  </div>
                </div>
                <div className="itms-connection-lines">
                  <div className="itms-connection itms-line-1"></div>
                  <div className="itms-connection itms-line-2"></div>
                  <div className="itms-connection itms-line-3"></div>
                  <div className="itms-connection itms-line-4"></div>
                </div>
                <div className="itms-endpoint itms-endpoint-1">
                  <div className="itms-endpoint-icon">🏢</div>
                  <span>Control Center</span>
                </div>
                <div className="itms-endpoint itms-endpoint-2">
                  <div className="itms-endpoint-icon">🔌</div>
                  <span>Transformers</span>
                </div>
                <div className="itms-endpoint itms-endpoint-3">
                  <div className="itms-endpoint-icon">📱</div>
                  <span>Mobile App</span>
                </div>
                <div className="itms-endpoint itms-endpoint-4">
                  <div className="itms-endpoint-icon">☁️</div>
                  <span>Cloud Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={sectionRefs.features}
        className={`itms-features-section ${visibleSections.features ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-section-header">
            <h2 className="itms-section-title">Advanced Features</h2>
            <p className="itms-section-subtitle">Comprehensive transformer monitoring and management capabilities</p>
          </div>

          <div className="itms-features-showcase">
            <div className="itms-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`itms-feature-nav-item ${activeFeature === index ? "active" : ""}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="itms-nav-icon">{feature.icon}</div>
                  <div className="itms-nav-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="itms-features-content">
              <div className="itms-feature-display">
                <div className="itms-feature-header">
                  <div className="itms-feature-icon-large">{features[activeFeature].icon}</div>
                  <div>
                    <h3>{features[activeFeature].title}</h3>
                    <p>{features[activeFeature].description}</p>
                  </div>
                </div>

                <div className="itms-feature-details">
                  <ul>
                    {features[activeFeature].details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Screenshots Section */}
      <section
        id="interface"
        ref={sectionRefs.interface}
        className={`itms-interface-section ${visibleSections.interface ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-section-header">
            <h2 className="itms-section-title">Web Interface</h2>
            <p className="itms-section-subtitle">Intuitive and powerful web-based control interface</p>
          </div>

          <div className="itms-interface-gallery">
            {interfaceScreenshots.map((screenshot, index) => (
              <div key={index} className="itms-interface-card">
                <div className="itms-interface-image">
                  <img src={screenshot.src || "/placeholder.svg"} alt={screenshot.alt} />
                  <div className="itms-interface-overlay">
                    <div className="itms-overlay-content">
                      <h4>{screenshot.title}</h4>
                      <p>{screenshot.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section
        id="gallery"
        ref={sectionRefs.gallery}
        className={`itms-gallery-section ${visibleSections.gallery ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-section-header">
            <h2 className="itms-section-title">Product Gallery</h2>
            <p className="itms-section-subtitle">See our ITMS hardware and installations in action</p>
          </div>

          <div className="itms-gallery-grid">
            <div className="itms-gallery-item itms-large">
              <img
                src={itms8}
                alt="ITMS Control Unit"
              />
              <div className="itms-gallery-overlay">
                <h4>ITMS Control Unit</h4>
                <p>Advanced transformer monitoring device</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src={itms9}
                alt="Installation View"
              />
              <div className="itms-gallery-overlay">
                <h4>Installation</h4>
                <p>Professional installation process</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src={itms12}
                alt="Network Topology"
              />
              <div className="itms-gallery-overlay">
                <h4>Network Setup</h4>
                <p>Communication network infrastructure</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src={itms23}
                alt="Control Room"
              />
              <div className="itms-gallery-overlay">
                <h4>Control Center</h4>
                <p>Centralized monitoring facility</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src={itms11}
                alt="Smart Transformers"
              />
              <div className="itms-gallery-overlay">
                <h4>Smart Transformers</h4>
                <p>Monitored power transformers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="itms-key-highlights-section">
        <div className="itms-highlights-container">
          <div className="itms-highlights-header">
            <h2 className="itms-highlights-title">Key Highlights</h2>
          </div>

          <ul className="itms-highlights-list">
            {highlights.map((highlight, index) => (
              <li key={index} className="itms-highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Specifications */}
      {/* <section
        id="specifications"
        ref={sectionRefs.specifications}
        className={`itms-specifications-section ${visibleSections.specifications ? "visible" : ""}`}
      >
        <div className="itms-section-container">
          <div className="itms-section-header">
            <h2 className="itms-section-title">Technical Specifications</h2>
            <p className="itms-section-subtitle">Detailed technical information and system requirements</p>
          </div>

          <div className="itms-specs-grid">
            <div className="itms-spec-category">
              <h3>Hardware Specifications</h3>
              <div className="itms-spec-list">
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Processor</span>
                  <span className="itms-spec-value">ARM Cortex-M0+ Core</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Memory</span>
                  <span className="itms-spec-value">32 KB SRAM, 256 KB Storage</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Communication</span>
                  <span className="itms-spec-value">4G/LTE, WiFi</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Operating Temperature</span>
                  <span className="itms-spec-value">-40°C to +85°C</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">IP Rating</span>
                  <span className="itms-spec-value">IP67 (Dust & Water Resistant)</span>
                </div>
              </div>
            </div>

            <div className="itms-spec-category">
              <h3>Monitoring Features</h3>
              <div className="itms-spec-list">
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Temperature Sensors</span>
                  <span className="itms-spec-value">Multiple PT100 RTD</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Current Monitoring</span>
                  <span className="itms-spec-value">CT Based, 0.1% Accuracy</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Voltage Monitoring</span>
                  <span className="itms-spec-value">PT Based, 0.2% Accuracy</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Oil Level Detection</span>
                  <span className="itms-spec-value">Ultrasonic Sensor</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Gas Analysis</span>
                  <span className="itms-spec-value">DGA Capable</span>
                </div>
              </div>
            </div>

            <div className="itms-spec-category">
              <h3>System Capacity</h3>
              <div className="itms-spec-list">
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Max Transformers</span>
                  <span className="itms-spec-value">100 Units per Gateway</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Communication Range</span>
                  <span className="itms-spec-value">4G LTE – Remote Access with Nationwide Coverage</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Data Sampling</span>
                  <span className="itms-spec-value">1 second intervals</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Data Retention</span>
                  <span className="itms-spec-value">10 Years Historical Data</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Alarm Response</span>
                  <span className="itms-spec-value">&lt; 1 second</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="itms-cta-section">
        <div className="itms-cta-container">
          <div className="itms-cta-content">
            <h2>Ready to Monitor Your Transformers?</h2>
            <p>Contact our experts to learn how ISTL ITMS can optimize your power infrastructure monitoring</p>
            <div className="itms-cta-actions">
               <NavLink to="/book-demo">
                <button className="itms-cta-primary">Contact Us </button>
              </NavLink>
              {/* <a
                href="/brochers/ITMS_Catalogue.pdf"
                download="ITMS_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="itms-cta-secondary">
                  Download Complete Brochure
                </button>
              </a> */}
            </div>
          </div>
          <div className="itms-cta-visual">
            <div className="itms-cta-icon">⚡</div>
          </div>
        </div>
      </section>

    </div>
  )
}
