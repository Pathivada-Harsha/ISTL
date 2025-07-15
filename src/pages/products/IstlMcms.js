"use client"

import { useEffect, useRef, useState } from "react"

import "../../components_css/products/IstlMcms.css"
import mcms1 from "../../images/mcms/mcms1.png"
import mcms2 from "../../images/mcms/mcms20.png"
import mcms3 from "../../images/mcms/mcms3.png"
import mcms4 from "../../images/mcms/mcms4.jpg"
import mcms5 from "../../images/mcms/mcms5.JPG"
import mcms6 from "../../images/mcms/mcms6.JPG"
import mcms7 from "../../images/mcms/mcms7.jpg"
import mcms8 from "../../images/mcms/mcms8.jpg"
import mcms9 from "../../images/mcms/mcms9.jpg"
import mcms10 from "../../images/mcms/mcms10.jpg"
import mcms11 from "../../images/mcms/mcms11.jpg"
import mcms12 from "../../images/mcms/mcms12.png"
import mcms13 from "../../images/mcms/mcms13.png"
import mcms17 from "../../images/mcms/mcms17.jpeg"
import mcms15 from "../../images/mcms/mcms15.jpeg"
import mcms16 from "../../images/mcms/mcms16.jpeg"
import mcms20 from "../../images/mcms/mcms23.jpeg"
import { NavLink } from "react-router-dom"
export default function Istlmcms() {
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
      src: mcms4,
      alt: "Motor Network",
      title: "Smart Motor Network",
    },
    {
      src: mcms6,
      alt: "MCMS Control Panel",
      title: "Advanced Motor Controller",
    },
    
    {
      src: mcms7,
      alt: "Industrial Motors",
      title: "Real Implementation",
    },
  ]

  const interfaceScreenshots = [
    {
      src: mcms17,
      alt: "Dashboard Overview",
      title: "Real-time Dashboard",
      description: "Monitor all motors from a centralized dashboard with real-time status updates",
    },
    {
      src: mcms15,
      alt: "Analytics Interface",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for motor performance metrics",
    },
    {
      src: mcms16,
      alt: "Control Interface",
      title: "Remote Control",
      description: "Individual and group control of motors with monitoring capabilities",
    },
  ]

  const features = [
    {
      icon: "⚙️",
      title: "Motor Control",
      description: "Precise control of motor speed, torque, and direction",
      details: [
        "Variable frequency drive control",
        "Speed and torque monitoring",
        "Direction control",
        
      ],
    },
    {
      icon: "⚡",
      title: "Energy Optimization",
      description: "Intelligent energy management for motor efficiency",
      details: [
        "Power consumption monitoring",
        "Energy efficiency optimization",
        "Load balancing",
        "Peak demand management",
      ],
    },
    {
      icon: "🔧",
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance for motors",
      details: [
        "Vibration analysis",
        "Temperature monitoring",
        "Bearing condition assessment",
        "Maintenance scheduling",
      ],
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Comprehensive motor performance analysis",
      details: [
        "Real-time performance dashboards",
        "Historical trend analysis",
        "Efficiency reporting",
        "Fault analysis",
      ],
    },
  ]
  const highlights = [
    "Real-time motor performance monitoring",
    "Motor efficiency analysis",
    "Predictive maintenance scheduling",
    "Fault diagnosis and alerts",
    "Remote motor control and operation",
    "Energy optimization algorithms",
    "Historical trend analysis",
    "Mobile app for field technicians",
    "Multi-motor centralized monitoring",
    "Dry Run Protection",
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
    <div className="mcms-page">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className="mcms-hero-section mcms-compact">
        <div className="mcms-hero-background">
          <div className="mcms-hero-bg-image"></div>
          <div className="mcms-hero-pattern"></div>
          <div className="mcms-floating-elements">
            <div className="mcms-floating-element mcms-element-1"></div>
            <div className="mcms-floating-element mcms-element-2"></div>
            <div className="mcms-floating-element mcms-element-3"></div>
          </div>
        </div>

        <div className="mcms-hero-content">
          <div className="mcms-hero-text">
            <div className="mcms-product-badge">ISTL MCMS</div>
            <h1 className="mcms-hero-title">
              Motor Control and Monitoring System
              <span className="mcms-title-highlight">for Industrial Motors</span>
            </h1>
            <p className="mcms-hero-subtitle">
              Versatile motor control and monitoring system designed for reliable operation, energy tracking,
              and remote management across industrial, agricultural, and rural motor applications.
            </p>
            <div className="mcms-hero-stats">
              <div className="mcms-stat-item">
                <div className="mcms-stat-number">1000+</div>
                <div className="mcms-stat-label">Motors Controlled</div>
              </div>
              <div className="mcms-stat-item">
                <div className="mcms-stat-number">40%</div>
                <div className="mcms-stat-label">Energy Savings</div>
              </div>
              <div className="mcms-stat-item">
                <div className="mcms-stat-number">99.8%</div>
                <div className="mcms-stat-label">System Reliability</div>
              </div>
            </div>
            <div className="mcms-hero-actions">
              <NavLink to="/book-demo">
                <button className="mcms-cta-primary">Request Demo</button>
              </NavLink>
              {/* <button className="mcms-cta-secondary" onClick={() => downloadBrochure("ISTL-MCMS")}>
                Download Brochure
              </button> */}
            </div>
          </div>

          <div className="mcms-hero-visual">
            <div className="mcms-product-showcase">
              <div className="mcms-showcase-main">
                <img
                  src={productImages[currentImageIndex].src || "/placeholder.svg"}
                  alt={productImages[currentImageIndex].alt}
                  className="mcms-showcase-image"
                />
                <div className="mcms-showcase-overlay">
                  <h3>{productImages[currentImageIndex].title}</h3>
                </div>
              </div>
              <div className="mcms-showcase-indicators">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`mcms-indicator ${index === currentImageIndex ? "active" : ""}`}
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
        className={`mcms-product-overview-section ${visibleSections.productOverview ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-product-overview-content">
            <div className="mcms-overview-images">
              <div className="mcms-image-container">
                <div className="mcms-main-image">
                  <img
                    src={mcms1}
                    alt="Motor Control Panel"
                  />
                </div>
                <div className="mcms-overlay-image">
                  <img
                    src={mcms2}
                    alt="Control Room Dashboard"
                  />
                </div>
              </div>
            </div>

            <div className="mcms-overview-text">
              <div className="mcms-overview-badge">Product Overview</div>
              <h2 className="mcms-overview-title">Intelligent Motor Control and Monitoring System</h2>
              <p className="mcms-overview-description">
                ISTL's MCMS enables centralized control and real-time monitoring of motors used across industrial, agricultural,
                and utility applications. It helps reduce manual intervention, improves operational efficiency, and supports
                energy tracking for motors in remote and local environments.
              </p>

              <div className="mcms-overview-features">
                <div className="mcms-feature-row">
                  <div className="mcms-feature-point">
                    <div className="mcms-feature-icon">✓</div>
                    <span>Start/Stop Control and Load Monitoring</span>
                  </div>
                  <div className="mcms-feature-point">
                    <div className="mcms-feature-icon">✓</div>
                    <span>Remote Fault Detection and Status Alerts</span>
                  </div>
                </div>
                <div className="mcms-feature-row">
                  <div className="mcms-feature-point">
                    <div className="mcms-feature-icon">✓</div>
                    <span>Energy Consumption and Runtime Tracking</span>
                  </div>
                  <div className="mcms-feature-point">
                    <div className="mcms-feature-icon">✓</div>
                    <span>Operational Logs and Control History</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose ISTL mcms Section */}
      <section
        id="whyChoose"
        ref={sectionRefs.whyChoose}
        className={`mcms-why-choose-section ${visibleSections.whyChoose ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-section-header">
            <h2 className="mcms-section-title">Why Choose ISTL MCMS?</h2>
            <p className="mcms-section-subtitle">
              Reliable motor control and monitoring for industrial, agricultural, and utility applications
            </p>
          </div>

          <div className="mcms-why-choose-grid">
            <div className="mcms-why-item">
              <div className="mcms-why-icon">⚙️</div>
              <h3>Robust Control</h3>
              <p>Enables reliable remote start/stop, overload protection, and real-time motor status updates.</p>
            </div>

            <div className="mcms-why-item">
              <div className="mcms-why-icon">📊</div>
              <h3>Data-Driven Decisions</h3>
              <p>Tracks energy usage, runtime, and operational logs to support planning and maintenance.</p>
            </div>

            <div className="mcms-why-item">
              <div className="mcms-why-icon">🔧</div>
              <h3>Easy Integration</h3>
              <p>Compatible with existing panels and field setups with minimal infrastructure changes.</p>
            </div>

            <div className="mcms-why-item">
              <div className="mcms-why-icon">📱</div>
              <h3>User Friendly</h3>
              <p>Simple and intuitive web and mobile dashboards for remote access and control.</p>
            </div>

            <div className="mcms-why-item">
              <div className="mcms-why-icon">🔐</div>
              <h3>Secure Communication</h3>
              <p>Encrypted data transfer with secure protocols and fail-safe recovery options.</p>
            </div>

            <div className="mcms-why-item">
              <div className="mcms-why-icon">🌐</div>
              <h3>Rural & Industrial Ready</h3>
              <p>Ideal for use in farms, factories, and remote locations with scalable deployment models.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Overview Section */}
      <section
        id="overview"
        ref={sectionRefs.overview}
        className={`mcms-overview-section ${visibleSections.overview ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-overview-content">
            <div className="mcms-overview-text">
              <h2 className="mcms-section-title">Intelligent Motor Management</h2>
              <p className="mcms-section-description">
                Our MCMS solution enables comprehensive control and real-time monitoring of motors used across industrial,
                agricultural, and rural environments. With energy tracking, operational insights, and remote management
                capabilities, it ensures efficient and reliable motor performance.
              </p>

              <div className="mcms-key-benefits">
                <div className="mcms-benefit-item">
                  <div className="mcms-benefit-icon">⚙️</div>
                  <div className="mcms-benefit-content">
                    <h4>Precise Control</h4>
                    <p>Variable speed control with high precision and reliability</p>
                  </div>
                </div>
                <div className="mcms-benefit-item">
                  <div className="mcms-benefit-icon">🔍</div>
                  <div className="mcms-benefit-content">
                    <h4>Real-time Monitoring</h4>
                    <p>Continuous monitoring of motor parameters and performance</p>
                  </div>
                </div>
                <div className="mcms-benefit-item">
                  <div className="mcms-benefit-icon">📈</div>
                  <div className="mcms-benefit-content">
                    <h4>Energy Optimization</h4>
                    <p>Intelligent energy management for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mcms-overview-visual">
              <div className="mcms-system-diagram">
                <div className="mcms-diagram-center">
                  <div className="mcms-control-center">
                    <span>MCMS</span>
                  </div>
                </div>
                <div className="mcms-connection-lines">
                  <div className="mcms-connection mcms-line-1"></div>
                  <div className="mcms-connection mcms-line-2"></div>
                  <div className="mcms-connection mcms-line-3"></div>
                  <div className="mcms-connection mcms-line-4"></div>
                </div>
                <div className="mcms-endpoint mcms-endpoint-1">
                  <div className="mcms-endpoint-icon">🏢</div>
                  <span>Control Center</span>
                </div>
                <div className="mcms-endpoint mcms-endpoint-2">
                  <div className="mcms-endpoint-icon">⚙️</div>
                  <span>Motors</span>
                </div>
                <div className="mcms-endpoint mcms-endpoint-3">
                  <div className="mcms-endpoint-icon">📱</div>
                  <span>Mobile App</span>
                </div>
                <div className="mcms-endpoint mcms-endpoint-4">
                  <div className="mcms-endpoint-icon">☁️</div>
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
        className={`mcms-features-section ${visibleSections.features ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-section-header">
            <h2 className="mcms-section-title">Advanced Features</h2>
            <p className="mcms-section-subtitle">Comprehensive motor control and monitoring capabilities</p>
          </div>

          <div className="mcms-features-showcase">
            <div className="mcms-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`mcms-feature-nav-item ${activeFeature === index ? "active" : ""}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="mcms-nav-icon">{feature.icon}</div>
                  <div className="mcms-nav-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mcms-features-content">
              <div className="mcms-feature-display">
                <div className="mcms-feature-header">
                  <div className="mcms-feature-icon-large">{features[activeFeature].icon}</div>
                  <div>
                    <h3>{features[activeFeature].title}</h3>
                    <p>{features[activeFeature].description}</p>
                  </div>
                </div>

                <div className="mcms-feature-details">
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
        className={`mcms-interface-section ${visibleSections.interface ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-section-header">
            <h2 className="mcms-section-title">Web Interface</h2>
            <p className="mcms-section-subtitle">Intuitive and powerful web-based control interface</p>
          </div>

          <div className="mcms-interface-gallery">
            {interfaceScreenshots.map((screenshot, index) => (
              <div key={index} className="mcms-interface-card">
                <div className="mcms-interface-image">
                  <img src={screenshot.src || "/placeholder.svg"} alt={screenshot.alt} />
                  <div className="mcms-interface-overlay">
                    <div className="mcms-overlay-content">
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
        className={`mcms-gallery-section ${visibleSections.gallery ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-section-header">
            <h2 className="mcms-section-title">Product Gallery</h2>
            <p className="mcms-section-subtitle">See our MCMS hardware and installations in action</p>
          </div>

          <div className="mcms-gallery-grid">
            <div className="mcms-gallery-item mcms-large">
              <img
                src={mcms5}
                alt="MCMS Control Unit"
              />
              <div className="mcms-gallery-overlay">
                <h4>MCMS Control Unit</h4>
                <p>Advanced motor control device</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src={mcms20}
                alt="Installation View"
              />
              <div className="mcms-gallery-overlay">
                <h4>Installation</h4>
                <p>Professional installation process</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src={mcms12}
                alt="Network Topology"
              />
              <div className="mcms-gallery-overlay">
                <h4>Network Setup</h4>
                <p>Communication network infrastructure</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src={mcms8}
                alt="Control Room"
              />
              <div className="mcms-gallery-overlay">
                <h4>Control Center</h4>
                <p>Centralized monitoring facility</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src={mcms3}
                alt="Smart Motors"
              />
              <div className="mcms-gallery-overlay">
                <h4>Smart Motors</h4>
                <p>Monitored industrial motors</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mcms-key-highlights-section">
        <div className="mcms-highlights-container">
          <div className="mcms-highlights-header">
            <h2 className="mcms-highlights-title">Key Highlights</h2>
          </div>

          <ul className="mcms-highlights-list">
            {highlights.map((highlight, index) => (
              <li key={index} className="mcms-highlight-item">
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
        className={`mcms-specifications-section ${visibleSections.specifications ? "visible" : ""}`}
      >
        <div className="mcms-section-container">
          <div className="mcms-section-header">
            <h2 className="mcms-section-title">Technical Specifications</h2>
            <p className="mcms-section-subtitle">Detailed technical information and system requirements</p>
          </div>

          <div className="mcms-specs-grid">
            <div className="mcms-spec-category">
              <h3>Hardware Specifications</h3>
              <div className="mcms-spec-list">
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Processor</span>
                  <span className="mcms-spec-value">ARM Cortex-M0+ Core</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Memory</span>
                  <span className="mcms-spec-value">32 KB SRAM, 256 KB Storage</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Communication</span>
                  <span className="mcms-spec-value">4G/LTE, WiFi</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Operating Temperature</span>
                  <span className="mcms-spec-value">-40°C to +85°C</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">IP Rating</span>
                  <span className="mcms-spec-value">IP67 (Dust & Water Resistant)</span>
                </div>
              </div>
            </div>

            <div className="mcms-spec-category">
              <h3>Control Features</h3>
              <div className="mcms-spec-list">
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Speed Control</span>
                  <span className="mcms-spec-value">0.1% Accuracy VFD</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Torque Control</span>
                  <span className="mcms-spec-value">±1% Precision</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Power Range</span>
                  <span className="mcms-spec-value">0.5kW to 500kW</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Voltage Range</span>
                  <span className="mcms-spec-value">220V to 690V AC</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Protection</span>
                  <span className="mcms-spec-value">Overload, Short Circuit</span>
                </div>
              </div>
            </div>

            <div className="mcms-spec-category">
              <h3>System Capacity</h3>
              <div className="mcms-spec-list">
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Max Motors</span>
                  <span className="mcms-spec-value">1 Unit Gateway</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Communication Range</span>
                  <span className="mcms-spec-value">4G LTE – Remote Access with Nationwide Coverage</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Response Time</span>
                  <span className="mcms-spec-value">&lt; 100ms</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Data Retention</span>
                  <span className="mcms-spec-value">5 Years Historical Data</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Control Accuracy</span>
                  <span className="mcms-spec-value">±0.1% Speed Control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="mcms-cta-section">
        <div className="mcms-cta-container">
          <div className="mcms-cta-content">
            <h2>Ready to Optimize Your Motors?</h2>
            <p>Contact our experts to learn how ISTL MCMS can enhance your motor control and efficiency</p>
            <div className="mcms-cta-actions">
               <NavLink to="/book-demo">
                <button className="mcms-cta-primary">Contact Us </button>
              </NavLink>
              {/* <button className="mcms-cta-secondary" onClick={() => downloadBrochure("ISTL-MCMS-Complete")}>
                Download Complete Brochure
              </button> */}
            </div>
          </div>
          <div className="mcms-cta-visual">
            <div className="mcms-cta-icon">⚙️</div>
          </div>
        </div>
      </section>


    </div>
  )
}
