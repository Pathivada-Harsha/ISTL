"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "../../components_css/smartlights/SmartStreetLights.css"
import lights1 from "../../images/streetlights/lights1.png"
import lights2 from "../../images/streetlights/lights2.png"
import lights3 from "../../images/streetlights/lights3.png"
import lights4 from "../../images/streetlights/lights4.png"
import lights5 from "../../images/streetlights/lights5.png"
import lights6 from "../../images/streetlights/lights6.png"
import lights7 from "../../images/streetlights/lights7.png"

import lights8 from "../../images/streetlights/streetlights10.jpeg"
import lights9 from "../../images/streetlights/streetlights11.jpeg"
import lights10 from "../../images/streetlights/streetlights12.jpeg"
import lights11 from "../../images/streetlights/lights15.png"
import lights12 from "../../images/streetlights/lights16.png"
import lights13 from "../../images/streetlights/lights17.png"
import lights14 from "../../images/streetlights/lights18.png"
import lights15 from "../../images/streetlights/lights13.png"
import lights16 from "../../images/streetlights/lights 14.png"
const SmartStreetLights = () => {
  const [activeType, setActiveType] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState({})

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

    const elements = document.querySelectorAll(".streetlight-animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const lightSeries = [
    {
      name: "Street Light Gritty Series",
      description: "Robust and durable street lighting solution with superior performance",
      range: "24W - 250W",
      cct: "5.5K/6.5K",
      features: ["Weather Resistant", "High Efficiency", "Long Lifespan", "Easy Installation"],
      image: lights8,
      models: ["24W", "36W", "45W", "75W", "100W", "120W", "150W", "200W", "250W"],
    },
    {
      name: "Street Light Valiant Series",
      description: "Premium street lighting with advanced optical design and energy efficiency",
      range: "24W - 250W",
      cct: "5.5K/6.5K",
      features: ["Premium Design", "Advanced Optics", "Energy Efficient", "Smart Compatible"],
      image: lights5,
      models: ["24W", "36W", "45W", "75W", "100W", "120W", "150W", "200W", "250W"],
    },
    {
      name: "Street Light Hawk Series",
      description: "Sleek and modern street lighting with cutting-edge LED technology",
      range: "24W - 250W",
      cct: "5.5K/6.5K",
      features: ["Modern Design", "High Performance", "Uniform Distribution", "Low Maintenance"],
      image: lights7,
      models: ["24W", "36W", "45W", "75W", "100W", "120W", "150W", "200W", "250W"],
    },
    {
      name: "  Solar Street Light",
      description: "Sustainable solar-powered street lighting with integrated battery backup",
      range: "12W - 60W",
      cct: "5.5K/6.5K",
      features: ["Solar Powered", "Battery Backup", "Zero Electricity Cost", "Eco Friendly"],
      image: lights6,
      models: ["12W", "15W", "20W", "30W", "40W", "50W", "60W"],
    },
  ]

  const features = [
    {
      icon: "💡",
      title: "Advanced LED Technology",
      description: "High-efficiency LED chips with superior lumen output and color consistency",
      details: [
        "137 Lm/W high efficiency LED chips",
        "Color temperature options: 2500K/4000K/6500K",
        "Superior color rendering index (CRI >80)",
        "50,000+ hours operational life",
      ],
    },
    {
      icon: "🌧️",
      title: "Weather Protection",
      description: "IP65/IP66 rated protection against dust and water ingress",
      details: [
        "IP65/IP66 ingress protection rating",
        "Operating temperature: -40°C to +70°C",
        "Corrosion-resistant aluminum housing",
        "UV-resistant polycarbonate lens",
      ],
    },
    {
      icon: "⚡",
      title: "Energy Efficiency",
      description: "Optimized power consumption with intelligent thermal management",
      details: [
        "Up to 80% energy savings vs traditional lighting",
        "Power factor >0.9 for optimal efficiency",
        "Advanced thermal management system",
        "Surge protection up to 10kV",
      ],
    },
    {
      icon: "🔧",
      title: "Easy Installation",
      description: "Tool-free installation with universal mounting options",
      details: [
        "Universal mounting bracket included",
        "Tool-free installation process",
        "Adjustable beam angle options",
        "Plug-and-play connectivity",
      ],
    },
  ]

  const applications = [
    {
      title: "Urban Streets & Highways",
      description: "Main roads and arterial highways requiring high-intensity illumination",
      icon: "🏙️",
      products: ["Gritty 150W-250W", "Valiant 200W-250W", "Hawk 150W-200W"],
    },
    {
      title: "Residential Areas",
      description: "Neighborhood streets and residential complexes with moderate lighting needs",
      icon: "🏘️",
      products: ["Gritty 45W-100W", "Valiant 45W-120W", "Hawk 45W-100W"],
    },
    {
      title: "Parks & Recreation",
      description: "Public parks, gardens, and recreational areas requiring aesthetic lighting",
      icon: "🌳",
      products: ["Solar 20W-40W", "Valiant 24W-75W", "Designer Poles"],
    },
    {
      title: "Industrial Zones",
      description: "Factories, warehouses, and industrial complexes with heavy-duty requirements",
      icon: "🏭",
      products: ["Gritty 200W-250W", "Flood Light Series", "High Bay Lights"],
    },
  ]

  const downloadBrochure = (productType) => {
    const link = document.createElement("a")
    link.href = `/brochures/${productType}-brochure.pdf`
    link.download = `${productType}-brochure.pdf`
    link.click()
    alert(`${productType} brochure download started!`)
  }

  return (
    <div className="streetlights-page">
     

      {/* Hero Section */}
      <section className="streetlights-hero">
        <div className="streetlights-hero-background">
          <div className="streetlights-hero-bg-image"></div>
          <div className="streetlights-floating-elements">
            <div className="streetlights-floating-element streetlights-element-1"></div>
            <div className="streetlights-floating-element streetlights-element-2"></div>
            <div className="streetlights-floating-element streetlights-element-3"></div>
          </div>
        </div>

        <div className="streetlights-hero-container">
          <div className="streetlights-hero-content">
            <div className="streetlights-product-badge streetlight-animate-on-scroll" id="hero-badge">
              <span className="streetlights-smart-badge">ISTL LIGHTING</span>
              <span className="streetlights-certified-badge">BIS CERTIFIED</span>
            </div>
            <h1 className="streetlight-animate-on-scroll" id="hero-title">
              Premium LED Street Lighting Solutions
              <span className="streetlights-title-highlight">for Smart Cities</span>
            </h1>
            <p className="streetlight-animate-on-scroll" id="hero-subtitle">
              Transform your urban infrastructure with ISTL's comprehensive range of energy-efficient LED street lights.
              From robust Gritty series to premium Valiant collection, we deliver superior illumination for every
              application.
            </p>
            <div className="streetlights-hero-stats streetlight-animate-on-scroll" id="hero-stats">
              <div className="streetlights-stat-item">
                <div className="streetlights-stat-number">137</div>
                <div className="streetlights-stat-label">Lm/W Efficiency</div>
              </div>
              <div className="streetlights-stat-item">
                <div className="streetlights-stat-number">50K+</div>
                <div className="streetlights-stat-label">Hours Life</div>
              </div>
              <div className="streetlights-stat-item">
                <div className="streetlights-stat-number">IP66</div>
                <div className="streetlights-stat-label">Protection</div>
              </div>
            </div>
            <div className="streetlights-hero-actions streetlight-animate-on-scroll" id="hero-actions">
              <a
                href="/brochers/Lights_Catalogue.pdf"
                download="StreetLights_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="streetlights-btn-primary">
                  Download  Catalogue
                </button>
              </a>
              
              <Link to="/book-demo" className="streetlights-btn-secondary">
                Request Quote
              </Link>
            </div>
          </div>

          {/* <div className="streetlights-hero-visual streetlight-animate-on-scroll" id="hero-visual">
            <div className="streetlights-showcase">
              <div className="streetlights-main-image">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
                  alt="ISTL Street Light"
                />
              </div>
              <div className="streetlights-floating-cards">
                <div className="streetlights-card streetlights-energy">
                  <span className="streetlights-card-icon">⚡</span>
                  <div>
                    <strong>80%</strong>
                    <small>Energy Savings</small>
                  </div>
                </div>
                <div className="streetlights-card streetlights-certification">
                  <span className="streetlights-card-icon">🏆</span>
                  <div>
                    <strong>BIS</strong>
                    <small>Certified</small>
                  </div>
                </div>
                <div className="streetlights-card streetlights-warranty">
                  <span className="streetlights-card-icon">🛡️</span>
                  <div>
                    <strong>5 Year</strong>
                    <small>Warranty</small>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="streetlights-product-overview-section">
        <div className="streetlights-container">
          <div className="streetlights-product-overview-content">
            <div className="streetlights-overview-images streetlight-animate-on-scroll" id="overview-images">
              <div className="streetlights-image-container">
                <div className="streetlights-main-image">
                  <img
                    src={lights1}
                    alt="Street Light Network"
                  />
                </div>
                <div className="streetlights-overlay-image">
                  <img
                    src={lights8}
                    alt="LED Street Light"
                  />
                </div>
              </div>
            </div>

            <div className="streetlights-overview-text streetlight-animate-on-scroll" id="overview-text">
              <div className="streetlights-overview-badge">Product Overview</div>
              <h2 className="streetlights-overview-title">
                Premium LED Street Lighting Solutions with Advanced Technology
              </h2>
              <p className="streetlights-overview-description">
                ISTL's comprehensive range of LED street lights combines cutting-edge technology with robust
                engineering. Our Gritty, Valiant, and Hawk series deliver superior illumination, energy efficiency, and
                long-lasting performance for modern urban infrastructure requirements.
              </p>

              <div className="streetlights-overview-features">
                <div className="streetlights-feature-row">
                  <div className="streetlights-feature-point">
                    <div className="streetlights-feature-icon">✓</div>
                    <span>BIS Certified Quality Assurance</span>
                  </div>
                  <div className="streetlights-feature-point">
                    <div className="streetlights-feature-icon">✓</div>
                    <span>137 Lm/W High Efficiency LEDs</span>
                  </div>
                </div>
                <div className="streetlights-feature-row">
                  <div className="streetlights-feature-point">
                    <div className="streetlights-feature-icon">✓</div>
                    <span>IP66 Weather Protection Rating</span>
                  </div>
                  <div className="streetlights-feature-point">
                    <div className="streetlights-feature-icon">✓</div>
                    <span>50,000+ Hours Operational Life</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ISTL Section */}
      {/* <section className={`streetlights-why-choose-section ${isVisible.whyChoose ? "visible" : ""}`} id="whyChoose">
        <div className="streetlights-container">
          <div className="streetlights-section-header streetlight-animate-on-scroll">
            <h2 className="streetlights-section-title">Why Choose ISTL Street Lights?</h2>
            <p className="streetlights-section-subtitle">
              Leading the industry with certified quality, innovative technology, and comprehensive solutions
            </p>
          </div>

          <div className="streetlights-why-choose-grid">
            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">🏆</div>
              <h3>BIS Certified Quality</h3>
              <p>Only manufacturer with BIS certification for LED street lights, ensuring highest quality standards</p>
            </div>

            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">🔬</div>
              <h3>Advanced R&D</h3>
              <p>State-of-the-art in-house laboratory with cutting-edge testing equipment and quality control</p>
            </div>

            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">🌍</div>
              <h3>Global Standards</h3>
              <p>ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified manufacturing processes</p>
            </div>

            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">⚡</div>
              <h3>Energy Efficient</h3>
              <p>Up to 80% energy savings with 137 Lm/W efficiency and intelligent thermal management</p>
            </div>

            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">🛠️</div>
              <h3>Complete Solutions</h3>
              <p>From design to installation, comprehensive lighting solutions with 5-year warranty support</p>
            </div>

            <div className="streetlights-why-item streetlight-animate-on-scroll">
              <div className="streetlights-why-icon">🇮🇳</div>
              <h3>Made in India</h3>
              <p>Proudly manufactured in India with MSME certification, supporting local economy and growth</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Product Series Section */}
      <section className="streetlights-series-section">
        <div className="streetlights-container">
          <div className="streetlights-section-header streetlight-animate-on-scroll">
            <h2 className="streetlights-section-title">Our Product Series</h2>
            <p className="streetlights-section-subtitle">
              Comprehensive range of LED street lights for every application
            </p>
          </div>

          <div className="streetlights-series-nav">
            {lightSeries.map((series, index) => (
              <button
                key={index}
                className={`streetlights-series-btn ${activeType === index ? "active" : ""} streetlight-animate-on-scroll`}
                onClick={() => setActiveType(index)}
              >
                {series.name.split(" ")[2]} {/* Extract series name */}
              </button>
            ))}
          </div>

          <div className="streetlights-series-display streetlight-animate-on-scroll">
            <div className="streetlights-series-content">
              <div className="streetlights-series-info">
                <h3>{lightSeries[activeType].name}</h3>
                <p>{lightSeries[activeType].description}</p>

                <div className="streetlights-series-specs">
                  <div className="streetlights-spec-item">
                    <span className="streetlights-spec-label">Power Range:</span>
                    <span className="streetlights-spec-value">{lightSeries[activeType].range}</span>
                  </div>
                  <div className="streetlights-spec-item">
                    <span className="streetlights-spec-label">Color Temperature:</span>
                    <span className="streetlights-spec-value">{lightSeries[activeType].cct}</span>
                  </div>
                </div>

                <div className="streetlights-series-features">
                  {lightSeries[activeType].features.map((feature, index) => (
                    <div key={index} className="streetlights-feature-tag">
                      <span className="streetlights-feature-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="streetlights-models-grid">
                  <h4>Available Models:</h4>
                  <div className="streetlights-models">
                    {lightSeries[activeType].models.map((model, index) => (
                      <span key={index} className="streetlights-model-tag">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="streetlights-series-image">
                <img src={lightSeries[activeType].image || "/placeholder.svg"} alt={lightSeries[activeType].name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="streetlights-features-section">
        <div className="streetlights-container">
          <div className="streetlights-section-header streetlight-animate-on-scroll">
            <h2 className="streetlights-section-title">Advanced Features & Technology</h2>
            <p className="streetlights-section-subtitle">
              Cutting-edge technology delivering superior performance and reliability
            </p>
          </div>

          <div className="streetlights-features-showcase">
            <div className="streetlights-features-nav">
              {features.map((feature, index) => (
                <button
                  key={index}
                  className={`streetlights-feature-nav-item ${activeFeature === index ? "active" : ""} streetlight-animate-on-scroll`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="streetlights-nav-icon">{feature.icon}</div>
                  <div className="streetlights-nav-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="streetlights-features-content streetlight-animate-on-scroll">
              <div className="streetlights-feature-display">
                <div className="streetlights-feature-header">
                  <div className="streetlights-feature-icon-large">{features[activeFeature].icon}</div>
                  <div>
                    <h3>{features[activeFeature].title}</h3>
                    <p>{features[activeFeature].description}</p>
                  </div>
                </div>

                <div className="streetlights-feature-details">
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

      {/* Applications Section */}
      <section className="streetlights-applications-section">
        <div className="streetlights-container">
          <div className="streetlights-section-header streetlight-animate-on-scroll">
            <h2 className="streetlights-section-title">Applications & Use Cases</h2>
            <p className="streetlights-section-subtitle">Tailored lighting solutions for diverse environments</p>
          </div>

          <div className="streetlights-apps-grid">
            {applications.map((app, index) => (
              <div key={index} className="streetlights-app-card streetlight-animate-on-scroll">
                <div className="streetlights-app-icon">{app.icon}</div>
                <h3>{app.title}</h3>
                <p>{app.description}</p>
                <div className="streetlights-app-products">
                  <h4>Recommended Products:</h4>
                  <div className="streetlights-product-tags">
                    {app.products.map((product, prodIndex) => (
                      <span key={prodIndex} className="streetlights-product-tag">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="streetlights-certifications-section">
        <div className="streetlights-container">
          <div className="streetlights-section-header streetlight-animate-on-scroll">
            <h2 className="streetlights-section-title">Certifications & Standards</h2>
            <p className="streetlights-section-subtitle">
              Committed to excellence through rigorous quality standards and certifications
            </p>
          </div>

          <div className="streetlights-certifications-grid">
            <div className="streetlights-cert-card streetlights-bis-cert streetlight-animate-on-scroll">
              <div className="streetlights-cert-icon">🏆</div>
              <h3>BIS Certification</h3>
              <p>
                Bureau of Indian Standards certified LED street lights ensuring highest quality and safety standards
              </p>
            </div>

            <div className="streetlights-cert-card streetlight-animate-on-scroll">
              <div className="streetlights-cert-icon">🌍</div>
              <h3>ISO Certifications</h3>
              <p>ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified manufacturing processes</p>
            </div>

            <div className="streetlights-cert-card streetlight-animate-on-scroll">
              <div className="streetlights-cert-icon">🔬</div>
              <h3>LM79 & LM80</h3>
              <p>Performance and longevity certifications ensuring reliable LED product specifications</p>
            </div>

            <div className="streetlights-cert-card streetlight-animate-on-scroll">
              <div className="streetlights-cert-icon">💧</div>
              <h3>IP66 Rating</h3>
              <p>Superior ingress protection against dust and water for harsh outdoor environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="streetlights-cta-section">
        <div className="streetlights-container">
          <div className="streetlights-cta-content streetlight-animate-on-scroll">
            <div className="streetlights-cta-badge">
              <span>BIS CERTIFIED QUALITY</span>
            </div>
            <h2>Illuminate Your City with Premium LED Street Lights</h2>
            <p>Transform your urban infrastructure with ISTL's certified, energy-efficient lighting solutions</p>
            <div className="streetlights-cta-buttons">
              {/* <button
                className="streetlights-btn-primary"
                onClick={() => downloadBrochure("ISTL-Complete-Lighting-Catalog")}
              >
                Download Complete Catalog
              </button> */}
              {/* <Link to="/book-demo" className="streetlights-btn-primary">
                Request Quote
              </Link> */}
              {/* <Link to="/contact" className="streetlights-btn-tertiary">
                Contact Sales Team
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default SmartStreetLights
