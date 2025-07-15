"use client"

import { useEffect, useRef, useState } from "react"

import "../../components_css/products/IstlMcms.css"

export default function IstlMcms() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [visibleSections, setVisibleSections] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const sectionRefs = {
    hero: useRef(null),
    overview: useRef(null),
    features: useRef(null),
    interface: useRef(null),
    gallery: useRef(null),
    specifications: useRef(null),
  }

  const productImages = [
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
      alt: "MCMS Control Panel",
      title: "Advanced Motor Controller",
    },
    {
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
      alt: "Motor Network",
      title: "Smart Motor Network",
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      alt: "Industrial Motors",
      title: "Industrial Implementation",
    },
  ]

  const interfaceScreenshots = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      alt: "Dashboard Overview",
      title: "Real-time Dashboard",
      description: "Monitor all motors from a centralized dashboard with real-time status updates",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      alt: "Analytics Interface",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for motor performance metrics",
    },
    {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
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
        "Soft start/stop functions",
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

  const downloadBrochure = (productType) => {
    const link = document.createElement("a")
    link.href = `/brochures/${productType}-brochure.pdf`
    link.download = `${productType}-brochure.pdf`
    link.click()
    alert(`${productType} brochure download started!`)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
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
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`mcms-hero-section ${visibleSections.hero ? "visible" : ""}`}
      >
        <div className="mcms-hero-background">
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
              <button className="mcms-cta-primary">Request Demo</button>
              <button className="mcms-cta-secondary" onClick={() => downloadBrochure("ISTL-MCMS")}>
                Download Brochure
              </button>
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                alt="MCMS Control Unit"
              />
              <div className="mcms-gallery-overlay">
                <h4>MCMS Control Unit</h4>
                <p>Advanced motor control device</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop"
                alt="Installation View"
              />
              <div className="mcms-gallery-overlay">
                <h4>Installation</h4>
                <p>Professional installation process</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
                alt="Network Topology"
              />
              <div className="mcms-gallery-overlay">
                <h4>Network Setup</h4>
                <p>Communication network infrastructure</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
                alt="Control Room"
              />
              <div className="mcms-gallery-overlay">
                <h4>Control Center</h4>
                <p>Centralized monitoring facility</p>
              </div>
            </div>

            <div className="mcms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
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

      {/* Specifications */}
      <section
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
                  <span className="mcms-spec-value">ARM Cortex-A9 Quad Core</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Memory</span>
                  <span className="mcms-spec-value">8GB RAM, 64GB Storage</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Communication</span>
                  <span className="mcms-spec-value">4G/LTE, WiFi, Ethernet, CAN</span>
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
                  <span className="mcms-spec-value">200 Units per Gateway</span>
                </div>
                <div className="mcms-spec-item">
                  <span className="mcms-spec-label">Communication Range</span>
                  <span className="mcms-spec-value">Up to 10km (Industrial)</span>
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
      </section>

      {/* CTA Section */}
      <section className="mcms-cta-section">
        <div className="mcms-cta-container">
          <div className="mcms-cta-content">
            <h2>Ready to Optimize Your Motors?</h2>
            <p>Contact our experts to learn how ISTL MCMS can enhance your motor control and efficiency</p>
            <div className="mcms-cta-actions">
              <button className="mcms-cta-primary">Schedule Consultation</button>
              <button className="mcms-cta-secondary" onClick={() => downloadBrochure("ISTL-MCMS-Complete")}>
                Download Complete Brochure
              </button>
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
