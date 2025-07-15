"use client"

import { useEffect, useRef, useState } from "react"

import "../../components_css/products/IstlItms.css"

export default function IstlItms() {
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
      alt: "ITMS Control Panel",
      title: "Advanced Transformer Monitor",
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      alt: "Transformer Network",
      title: "Smart Transformer Network",
    },
    {
      src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      alt: "Power Infrastructure",
      title: "Power Grid Implementation",
    },
  ]

  const interfaceScreenshots = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      alt: "Dashboard Overview",
      title: "Real-time Dashboard",
      description: "Monitor all transformers from a centralized dashboard with real-time status updates",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      alt: "Analytics Interface",
      title: "Advanced Analytics",
      description: "Comprehensive analytics and reporting for transformer performance metrics",
    },
    {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
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
      details: ["Temperature monitoring", "Load current tracking", "Voltage level monitoring", "Oil level detection"],
    },
    {
      icon: "⚡",
      title: "Power Quality Analysis",
      description: "Comprehensive power quality monitoring and analysis",
      details: [
        "Harmonic analysis",
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
    <div className="itms-page">
     

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`itms-hero-section ${visibleSections.hero ? "visible" : ""}`}
      >
        <div className="itms-hero-background">
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
              <button className="itms-cta-primary">Request Demo</button>
              <button className="itms-cta-secondary" onClick={() => downloadBrochure("ISTL-ITMS")}>
                Download Brochure
              </button>
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
            <p className="itms-section-subtitle">Intuitive and powerful web-based monitoring interface</p>
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                alt="ITMS Control Unit"
              />
              <div className="itms-gallery-overlay">
                <h4>ITMS Control Unit</h4>
                <p>Advanced transformer monitoring device</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
                alt="Installation View"
              />
              <div className="itms-gallery-overlay">
                <h4>Installation</h4>
                <p>Professional installation process</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                alt="Network Topology"
              />
              <div className="itms-gallery-overlay">
                <h4>Network Setup</h4>
                <p>Communication network infrastructure</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop"
                alt="Control Room"
              />
              <div className="itms-gallery-overlay">
                <h4>Control Center</h4>
                <p>Centralized monitoring facility</p>
              </div>
            </div>

            <div className="itms-gallery-item">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
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

      {/* Specifications */}
      <section
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
                  <span className="itms-spec-value">ARM Cortex-A9 Dual Core</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Memory</span>
                  <span className="itms-spec-value">4GB RAM, 32GB Storage</span>
                </div>
                <div className="itms-spec-item">
                  <span className="itms-spec-label">Communication</span>
                  <span className="itms-spec-value">4G/LTE, WiFi, Ethernet, RS485</span>
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
                  <span className="itms-spec-value">Up to 20km (LoRaWAN)</span>
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
      </section>

      {/* CTA Section */}
      <section className="itms-cta-section">
        <div className="itms-cta-container">
          <div className="itms-cta-content">
            <h2>Ready to Monitor Your Transformers?</h2>
            <p>Contact our experts to learn how ISTL ITMS can optimize your power infrastructure monitoring</p>
            <div className="itms-cta-actions">
              <button className="itms-cta-primary">Schedule Consultation</button>
              <button className="itms-cta-secondary" onClick={() => downloadBrochure("ISTL-ITMS-Complete")}>
                Download Complete Brochure
              </button>
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
