"use client"

import { useEffect, useRef, useState } from "react"

import "../../components_css/products/IstlCcms.css"
import ccms1 from "../../images/ccms/ccms1.jpg"
import ccms2 from "../../images/ccms/ccms2.jpg"
import ccms5 from "../../images/ccms/ccms5.png"
import ccms4 from "../../images/ccms/ccms4.png"
import ccms6 from "../../images/ccms/ccms6.png"
import ccms7 from "../../images/ccms/ccms7.png"
import ccms8 from "../../images/ccms/ccms8.jpeg"
import ccms9 from "../../images/ccms/ccms9.jpg"
import ccms10 from "../../images/ccms/ccms10.jpeg"
import ccms11 from "../../images/ccms/ccms11.jpg"
import ccms12 from "../../images/ccms/ccms12.png"
import ccms13 from "../../images/ccms/ccms13.png"
import ccms14 from "../../images/ccms/ccms14.jpeg"
import ccms15 from "../../images/ccms/ccms15.png"
import ccms16 from "../../images/ccms/ccms16.png"
import ccms17 from "../../images/ccms/ccms17.jpeg"
import ccms18 from "../../images/ccms/ccms18.jpg"
import ccms19 from "../../images/ccms/ccms21.png"
import ccms20 from "../../images/ccms/ccms22.png"
import ccms21 from "../../images/ccms/ccms23.jpeg"
import ccms22 from "../../images/ccms/ccms24.jpeg"
import ccms23 from "../../images/ccms/ccms25.jpeg"
import ccms24 from "../../images/ccms/ccms26.jpg"
import ccms25 from "../../images/ccms/ccms27.png"
import ccms26 from "../../images/ccms/ccms28.jpeg"
import { NavLink } from "react-router-dom"
export default function IstlCcms() {
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
  const highlights = [
    "Over & under voltage protection",
    "Over load protection",
    "Short circuit protection",
    "Auto Alerts for  MCB Trips",
    "Tolerant to input voltage fluctuations",
    "Surge protection",
    "Lamp ON/OFF based on Astronomical, Ambient, Scheduled ON/OFF timings",
    "Event notification for faults",
    "IP65 & IK10 Enclosure",
    "Type tested from NABL accredited Lab",
    "Inbuilt GPS System",
    "4G Connectivity Gateway",
    "Web App & Mobile App for user Interface",
    // "Public ticketing system",
  ]
  const productImages = [

    {
      src: ccms25,
      alt: "Street Light Network",
      title: "Smart Street Light Network ",
    },
    {
      src: ccms26,
      alt: "CCMS Control Panel",
      title: "Three phase Control Panel",
    },
    {
      src: ccms1,
      alt: "City Infrastructure",
      title: "City-wide Implementation",
    },
  ]

  const interfaceScreenshots = [
    {
      src: ccms15,
      alt: "Dashboard Overview",
      title: "Real-time Dashboard",
      description: "Monitor all street lights from a centralized dashboard with real-time status updates",
    },
    {
      src: ccms16,
      alt: "Analytics Interface",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for energy consumption and performance metrics",
    },
    {
      src: ccms17,
      alt: "Control Interface",
      title: "Remote Control",
      description: "Individual and group control of street lights with scheduling capabilities",
    },
  ]

  const features = [
    {
      icon: "🌐",
      title: "Centralized Control",
      description: "Manage and operate street lights from a unified platform",
      details: [
        "Real-time status monitoring of all connected lights",
        "Individual and group-based control operations",
        "Remote scheduling for on/off cycles",
        "Emergency override and manual control options",
      ],
    },
    {
      icon: "⚡",
      title: "Energy Management",
      description: "Track and optimize energy usage across lighting assets",
      details: [
        "Energy consumption monitoring and reporting",
        "Scheduled operation to reduce unnecessary usage",
        "Support for peak load management",
        "Reports for billing and audit purposes",
      ],
    },
    {
      icon: "🔧",
      title: "Maintenance Support",
      description: "Simplify maintenance through alerts and operational logs",
      details: [
        "Fault detection and alert notifications",
        "Status reports on feeder health",
        "Maintenance logs and operation history",
        "Helps reduce downtime and response time",
      ],
    },
    {
      icon: "📊",
      title: "Operational Insights",
      description: "Get visibility into performance and usage trends",
      details: [
        "Live dashboards with key performance data",
        "Historical reporting for analysis",
        "Custom report generation options",
        "System uptime and usage summaries",
      ],
    },
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
    <div className="ccms-page">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="ccms-hero-section ccms-compact">
        <div className="ccms-hero-background">
          <div className="ccms-hero-bg-image"></div>
          <div className="ccms-hero-pattern"></div>
          <div className="ccms-floating-elements">
            <div className="ccms-floating-element ccms-element-1"></div>
            <div className="ccms-floating-element ccms-element-2"></div>
            <div className="ccms-floating-element ccms-element-3"></div>
          </div>
        </div>

        <div className="ccms-hero-content">
          <div className="ccms-hero-text">
            <div className="ccms-product-badge">ISTL CCMS</div>
            <h1 className="ccms-hero-title">
              Centralized Control & Monitoring System
              <span className="ccms-title-highlight">for Street Lights</span>
            </h1>
            <p className="ccms-hero-subtitle">
              Transform your lighting infrastructure with our intelligent CCMS solution. Monitor, control, and optimize
              thousands of street lights from a single, centralized platform.
            </p>
            <div className="ccms-hero-stats">
              <div className="ccms-stat-item">
                <div className="ccms-stat-number">50K+</div>
                <div className="ccms-stat-label">Lights Controlled</div>
              </div>
              <div className="ccms-stat-item">
                <div className="ccms-stat-number">30%</div>
                <div className="ccms-stat-label">Energy Savings</div>
              </div>
              <div className="ccms-stat-item">
                <div className="ccms-stat-number">99.9%</div>
                <div className="ccms-stat-label">Uptime</div>
              </div>
            </div>
            <div className="ccms-hero-actions">
              <NavLink to="/book-demo">
                <button className="ccms-cta-primary">Request Demo</button>
              </NavLink>
              <a
                href="/brochers/CCMS_Catalogue.pdf"
                download="CCMS_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="ccms-cta-secondary">
                  Download  Brochure
                </button>
              </a>
            </div>
          </div>

          <div className="ccms-hero-visual">
            <div className="ccms-product-showcase">
              <div className="ccms-showcase-main">
                <img
                  src={productImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={productImages[currentImageIndex].alt}
                  className="ccms-showcase-image"
                />
                <div className="ccms-showcase-overlay">
                  <h3>{productImages[currentImageIndex].title}</h3>
                </div>
              </div>
              <div className="ccms-showcase-indicators">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`ccms-indicator ${index === currentImageIndex ? "active" : ""}`}
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
        className={`ccms-product-overview-section ${visibleSections.productOverview ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-product-overview-content">
            <div className="ccms-overview-images">
              <div className="ccms-image-container">
                <div className="ccms-main-image">
                  <img
                    src={ccms19}
                    alt="Smart Street Light Network"
                  />
                </div>
                <div className="ccms-overlay-image">
                  <img
                    src={ccms7}
                    alt="Control Room Dashboard"
                  />
                </div>
              </div>
            </div>

            <div className="ccms-overview-text">
              <div className="ccms-overview-badge">Product Overview</div>
              <h2 className="ccms-overview-title">Advanced Street Light Management with IoT Integration</h2>
              <p className="ccms-overview-description">
                ISTL's CCMS revolutionizes urban lighting infrastructure by providing comprehensive control, monitoring,
                and optimization capabilities. Our solution combines cutting-edge IoT technology with intelligent
                algorithms to deliver unmatched performance and reliability.
              </p>

              <div className="ccms-overview-features">
                <div className="ccms-feature-row">
                  <div className="ccms-feature-point">
                    <div className="ccms-feature-icon">✓</div>
                    <span>Real-time Remote Control & Monitoring</span>
                  </div>
                  <div className="ccms-feature-point">
                    <div className="ccms-feature-icon">✓</div>
                    <span>Energy Consumption Tracking & Analytics</span>
                  </div>
                </div>
                <div className="ccms-feature-row">
                  <div className="ccms-feature-point">
                    <div className="ccms-feature-icon">✓</div>
                    <span>Automated Scheduling & Dimming Control</span>
                  </div>
                  <div className="ccms-feature-point">
                    <div className="ccms-feature-icon">✓</div>
                    <span>Fault Detection & Alert Notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ISTL CCMS Section */}
      <section
        id="whyChoose"
        ref={sectionRefs.whyChoose}
        className={`ccms-why-choose-section ${visibleSections.whyChoose ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-section-header">
            <h2 className="ccms-section-title">Why Choose ISTL CCMS?</h2>
            <p className="ccms-section-subtitle">
              Advanced technology meets reliable performance for smart city lighting solutions
            </p>
          </div>

          <div className="ccms-why-choose-grid">
            <div className="ccms-why-item">
              <div className="ccms-why-icon">🚀</div>
              <h3>Proven Technology</h3>
              <p>Battle-tested IoT solutions with 99.9% uptime across 50,000+ installations</p>
            </div>

            <div className="ccms-why-item">
              <div className="ccms-why-icon">💰</div>
              <h3>Cost Effective</h3>
              <p>Reduce energy costs by up to 30% with intelligent scheduling and monitoring</p>
            </div>

            <div className="ccms-why-item">
              <div className="ccms-why-icon">🔧</div>
              <h3>Easy Installation</h3>
              <p>Plug-and-play setup with minimal infrastructure changes required</p>
            </div>

            <div className="ccms-why-item">
              <div className="ccms-why-icon">📱</div>
              <h3>User Friendly</h3>
              <p>Intuitive web and mobile interfaces for effortless system management</p>
            </div>

            <div className="ccms-why-item">
              <div className="ccms-why-icon">🛡️</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security with AES-256 encryption and redundant systems</p>
            </div>

            <div className="ccms-why-item">
              <div className="ccms-why-icon">🌍</div>
              <h3>Scalable Solution</h3>
              <p>From 100 to 100,000+ lights - our system grows with your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        id="overview"
        ref={sectionRefs.overview}
        className={`ccms-overview-section ${visibleSections.overview ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-overview-content">
            <div className="ccms-overview-text">
              <h2 className="ccms-section-title">Intelligent Street Lighting Management</h2>
              <p className="ccms-section-description">
                Our CCMS solution transforms lighting infrastructure by enabling reliable control, real-time monitoring,
                and operational optimization. Built with robust IoT technology, it ensures efficient and remote
                management of street lighting systems.
              </p>

              <div className="ccms-key-benefits">
                <div className="ccms-benefit-item">
                  <div className="ccms-benefit-icon">💡</div>
                  <div className="ccms-benefit-content">
                    <h4>Smart Control</h4>
                    <p>Automated scheduling and remote on/off switching of street lights</p>
                  </div>
                </div>

                <div className="ccms-benefit-item">
                  <div className="ccms-benefit-icon">📡</div>
                  <div className="ccms-benefit-content">
                    <h4>Reliable Communication</h4>
                    <p>Supports GSM/4G connectivity for stable and secure data transmission</p>
                  </div>
                </div>

                <div className="ccms-benefit-item">
                  <div className="ccms-benefit-icon">🚨</div>
                  <div className="ccms-benefit-content">
                    <h4>Alert Notifications</h4>
                    <p>Auto-alerts for faults, lamp failures, or abnormal energy usage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ccms-overview-visual">
              <div className="ccms-system-diagram">
                <div className="ccms-diagram-center">
                  <div className="ccms-control-center">
                    <span>CCMS</span>
                  </div>
                </div>
                <div className="ccms-connection-lines">
                  <div className="ccms-connection ccms-line-1"></div>
                  <div className="ccms-connection ccms-line-2"></div>
                  <div className="ccms-connection ccms-line-3"></div>
                  <div className="ccms-connection ccms-line-4"></div>
                </div>
                <div className="ccms-endpoint ccms-endpoint-1">
                  <div className="ccms-endpoint-icon">🏢</div>
                  <span>Control Room</span>
                </div>
                <div className="ccms-endpoint ccms-endpoint-2">
                  <div className="ccms-endpoint-icon">💡</div>
                  <span>Street Lights</span>
                </div>
                <div className="ccms-endpoint ccms-endpoint-3">
                  <div className="ccms-endpoint-icon">📱</div>
                  <span>Mobile App</span>
                </div>
                <div className="ccms-endpoint ccms-endpoint-4">
                  <div className="ccms-endpoint-icon">☁️</div>
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
        className={`ccms-features-section ${visibleSections.features ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-section-header">
            <h2 className="ccms-section-title">Powerful Features</h2>
            <p className="ccms-section-subtitle">
              Scalable and intelligent solutions for diverse energy and automation requirements
            </p>
          </div>

          <div className="ccms-features-showcase">
            <div className="ccms-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`ccms-feature-nav-item ${activeFeature === index ? "active" : ""}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="ccms-nav-icon">{feature.icon}</div>
                  <div className="ccms-nav-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="ccms-features-content">
              <div className="ccms-feature-display">
                <div className="ccms-feature-header">
                  <div className="ccms-feature-icon-large">{features[activeFeature].icon}</div>
                  <div>
                    <h3>{features[activeFeature].title}</h3>
                    <p>{features[activeFeature].description}</p>
                  </div>
                </div>

                <div className="ccms-feature-details">
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
        className={`ccms-interface-section ${visibleSections.interface ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-section-header">
            <h2 className="ccms-section-title">Web Interface</h2>
            <p className="ccms-section-subtitle">Intuitive and powerful web-based control interface</p>
          </div>

          <div className="ccms-interface-gallery">
            {interfaceScreenshots.map((screenshot, index) => (
              <div key={index} className="ccms-interface-card">
                <div className="ccms-interface-image">
                  <img src={screenshot.src || "/placeholder.svg"} alt={screenshot.alt} />
                  <div className="ccms-interface-overlay">
                    <div className="ccms-overlay-content">
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
        className={`ccms-gallery-section ${visibleSections.gallery ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-section-header">
            <h2 className="ccms-section-title">Product Gallery</h2>
            <p className="ccms-section-subtitle">See our CCMS hardware and installations in action</p>
          </div>

          <div className="ccms-gallery-grid">
            <div className="ccms-gallery-item ccms-large">
              <img
                src={ccms8}
                alt="CCMS Control Unit"
              />
              <div className="ccms-gallery-overlay">
                <h4>CCMS Control Unit</h4>
                <p>Weather-resistant outdoor control unit</p>
              </div>
            </div>

            <div className="ccms-gallery-item">
              <img
                src={ccms14}
                alt="Installation View"
              />
              <div className="ccms-gallery-overlay">
                <h4>Installation</h4>
                <p>Professional installation process</p>
              </div>
            </div>

            <div className="ccms-gallery-item">
              <img
                src={ccms13}
                alt="Network Topology"
              />
              <div className="ccms-gallery-overlay">
                <h4>Network Setup</h4>
                <p>Wireless communication network</p>
              </div>
            </div>

            <div className="ccms-gallery-item">
              <img
                src={ccms10}
                alt="Control Room"
              />
              <div className="ccms-gallery-overlay">
                <h4>Control Center</h4>
                <p>Centralized monitoring facility</p>
              </div>
            </div>

            <div className="ccms-gallery-item">
              <img
                src={ccms12}
                alt="Smart Lights"
              />
              <div className="ccms-gallery-overlay">
                <h4>Smart LED Lights</h4>
                <p>Energy-efficient LED street lights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {/* <section
        id="specifications"
        ref={sectionRefs.specifications}
        className={`ccms-specifications-section ${visibleSections.specifications ? "visible" : ""}`}
      >
        <div className="ccms-section-container">
          <div className="ccms-section-header">
            <h2 className="ccms-section-title">Technical Specifications</h2>
            <p className="ccms-section-subtitle">Detailed technical information and system requirements</p>
          </div>

          <div className="ccms-specs-grid">
            <div className="ccms-spec-category">
              <h3>Hardware Specifications</h3>
              <div className="ccms-spec-list">
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Processor</span>
                  <span className="ccms-spec-value">ARM Cortex-M0+ Core</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Memory</span>
                  <span className="ccms-spec-value">32 KB SRAM, 256 KB Storage</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Communication</span>
                  <span className="ccms-spec-value">4G/LTE, WiFi</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Operating Temperature</span>
                  <span className="ccms-spec-value">-40°C to +70°C</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">IP Rating</span>
                  <span className="ccms-spec-value">IP51 – Dust protected & drip resistant</span>
                </div>
              </div>
            </div>

            <div className="ccms-spec-category">
              <h3>Software Features</h3>
              <div className="ccms-spec-list">
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Web Interface</span>
                  <span className="ccms-spec-value">Responsive HTML5 Dashboard</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Mobile App</span>
                  <span className="ccms-spec-value">iOS & Android Compatible</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">API Support</span>
                  <span className="ccms-spec-value">RESTful API & WebSocket</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Database</span>
                  <span className="ccms-spec-value">MYSQL with Time Series</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Security</span>
                  <span className="ccms-spec-value">AES-256 Encryption</span>
                </div>
              </div>
            </div>

            <div className="ccms-spec-category">
              <h3>System Capacity</h3>
              <div className="ccms-spec-list">
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Max Load Capacity</span>
                  <span className="ccms-spec-value">3-Phase Load – 7 kW per phase (Total 21 kW)</span>


                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Network Range</span>
                  <span className="ccms-spec-value">4G LTE – Remote Access with Nationwide Coverage</span>                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Response Time</span>
                  <span className="ccms-spec-value">&lt; 2 seconds</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Data Retention</span>
                  <span className="ccms-spec-value">2 Years Historical Data</span>
                </div>
                <div className="ccms-spec-item">
                  <span className="ccms-spec-label">Concurrent Users</span>
                  <span className="ccms-spec-value">100+ Simultaneous</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="ccms-key-highlights-section">
        <div className="ccms-highlights-container">
          <div className="ccms-highlights-header">
            <h2 className="ccms-highlights-title">Key Highlights</h2>
          </div>

          <ul className="ccms-highlights-list">
            {highlights.map((highlight, index) => (
              <li key={index} className="ccms-highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ccms-cta-section">
        <div className="ccms-cta-container">
          <div className="ccms-cta-content">
            <h2>Ready to Transform Your City's Lighting?</h2>
            <p>Contact our experts to learn how ISTL CCMS can optimize your street lighting infrastructure</p>
            <div className="ccms-cta-actions">
              <NavLink to="/book-demo">
                <button className="ccms-cta-primary">Contact Us </button>
              </NavLink>
             
              {/* <a
                href="/brochers/CCMS_Catalogue.pdf"
                download="CCMS_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="ccms-cta-secondary">
                  Download Complete Brochure
                </button>
              </a> */}
            </div>
          </div>
          <div className="ccms-cta-visual">
            <div className="ccms-cta-icon">🌃</div>
          </div>
        </div>
      </section>
    </div>
  )
}
