"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import solar1 from "../../images/solar/solar1.jpg"
import solar2 from "../../images/solar/solar2.jpg"
import solar3 from "../../images/solar/solar3.png"
import solar4 from "../../images/solar/solar4.jpg"
import solar5 from "../../images/solar/solar5.jpg"
import solar6 from "../../images/solar/solar6.png"
import solar7 from "../../images/solar/solar7.jpg"
import solar8 from "../../images/solar/solar7.jpg"
import solar9 from "../../images/solar/solar9.jpeg"
import solar10 from "../../images/solar/solar10.png"
import solar11 from "../../images/solar/solar11.jpg"
import solar13 from "../../images/solar/solar13.jpeg"
import "../../components_css/epc/SolarPanels.css"

const SolarPanels = () => {
  const [activeTab, setActiveTab] = useState("rooftop")
  const [isVisible, setIsVisible] = useState({})

  const downloadBrochure = (productType) => {
    const link = document.createElement("a")
    link.href = `/brochures/${productType}-brochure.pdf`
    link.download = `${productType}-brochure.pdf`
    link.click()
    alert(`${productType} brochure download started!`)
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

    const elements = document.querySelectorAll(".solar-animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const solarTypes = {
    rooftop: {
      title: "Rooftop Solar Systems",
      description: "Efficient rooftop solar installations for residential and commercial buildings.",
      features: ["Space Optimization", "Grid Integration", "Net Metering", "Remote Monitoring"],
      image: solar4,
    },
    ground: {
      title: "Ground Mounted Systems",
      description: "Large-scale ground mounted solar farms with optimal sun tracking.",
      features: ["Solar Tracking", "High Capacity", "Utility Scale", "Land Optimization"],
      image: solar5,
    },
    floating: {
      title: "Floating Solar Systems",
      description: "Innovative floating solar installations on water bodies with enhanced efficiency.",
      features: ["Water Conservation", "Enhanced Efficiency", "Reduced Evaporation", "Eco-Friendly"],
      image: solar2,
    },
    carport: {
      title: "Carport Systems",
      description: "Dual-purpose solar carports providing vehicle protection while generating clean energy.",
      features: ["Vehicle Protection", "Space Efficiency", "Weather Shield", "EV Charging Ready"],
      image: solar6,
    },
  }

  const projects = [
    { name: "ISTL Solar Project Alpha", capacity: "50 MW", location: "Karnataka", type: "Ground Mounted" },
    { name: "ISTL Solar Project Beta", capacity: "25 MW", location: "Karnataka", type: "Rooftop" },
    { name: "ISTL Solar Project Gamma", capacity: "75 MW", location: "Karnataka", type: "Floating" },
    { name: "ISTL Solar Project Delta", capacity: "30 MW", location: "Karnataka", type: "Ground Mounted" },
    { name: "ISTL Solar Project Epsilon", capacity: "40 MW", location: "Karnataka", type: "Rooftop" },
    { name: "ISTL Solar Project Zeta", capacity: "60 MW", location: "Karnataka", type: "Carport" },
  ]

  const projectGallery = [
    {
      name: "ISTL Mega Plant Talikoti, Karnataka",
      capacity: "72 MW",
      image: solar8,
      description: "Large-scale ground-mounted installation",
    },
    {
      name: "Industrial Rooftop, Telangana",
      capacity: "5 MW",
      image: solar9,
      description: "Commercial rooftop system",
    },
    {
      name: "Floating Solar Farm",
      capacity: "10 MW",
      image: solar10,
      description: "Water-based solar installation",
    },
    {
      name: "ground-mounted Tamilnadu",
      capacity: "23 MW",
      image: solar13,
      description: "Advanced monitoring system",
    },
    {
      name: "Solar Carport System",
      capacity: "15 MW",
      image: solar11,
      description: "Dual-purpose installation",
    },
  ]

  const whyChooseReasons = [
    {
      icon: "🏆",
      title: "Industry Leadership",
      description: "15+ years experience with 280+ MW installed capacity",
    },
    {
      icon: "⚡",
      title: "Advanced Technology",
      description: "High-efficiency panels with smart monitoring systems",
    },
    {
      icon: "🛡️",
      title: "Quality Assurance",
      description: "Premium components with extended warranties",
    },
    {
      icon: "🌱",
      title: "Sustainable Solutions",
      description: "Eco-friendly installations reducing carbon footprint",
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Competitive pricing with excellent ROI",
    },
    {
      icon: "🔧",
      title: "Complete Support",
      description: "End-to-end service with 24/7 technical support",
    },
  ]

  const epcServices = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      title: "Engineering & Design",
      description: "Comprehensive system design with optimal placement and efficiency calculations",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      title: "Procurement & Supply",
      description: "Quality component sourcing from certified manufacturers with warranty",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71" />
        </svg>
      ),
      title: "Construction & Installation",
      description: "Professional installation with safety standards and timely completion",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
        </svg>
      ),
      title: "Testing & Commissioning",
      description: "System testing, grid connection, and performance optimization",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "O&M Services",
      description: "Ongoing maintenance and monitoring for optimal performance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Technical Support",
      description: "24/7 technical assistance and remote monitoring capabilities",
    },
  ]

  return (
    <div className="solar-page">
      {/* Hero Section */}
      <section className="solar-hero">
        <div className="solar-hero-background"></div>
        <div className="solar-hero-content">
          <div className="solar-container">
            <div className="solar-hero-text solar-animate-on-scroll" id="hero-text">
              <h1>ISTL Solar Panel EPC Services</h1>
              <p>Leading provider of comprehensive solar energy solutions with cutting-edge technology</p>
              <div className="solar-hero-stats">
                <div className="solar-stat">
                  <span className="solar-stat-number">280+</span>
                  <span className="solar-stat-label">MW Installed</span>
                </div>
                <div className="solar-stat">
                  <span className="solar-stat-number">6</span>
                  <span className="solar-stat-label">Major Projects</span>
                </div>
                <div className="solar-stat">
                  <span className="solar-stat-number">4</span>
                  <span className="solar-stat-label">Solar Types</span>
                </div>
                <div className="solar-stat">
                  <span className="solar-stat-number">2+</span>
                  <span className="solar-stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="solar-product-overview">
        <div className="solar-container">
          <div className="solar-overview-content">
            <div className="solar-overview-images solar-animate-on-scroll" id="overview-images">
              <div className="solar-main-image">
                <img
                  src={solar1}
                  alt="ISTL Solar Installation"
                />
              </div>
              <div className="solar-overlay-images">
                <img
                  src={solar3}
                  alt="Solar Panel Detail"
                  className="solar-overlay-img-1"
                />

              </div>
            </div>
            <div className="solar-overview-info solar-animate-on-scroll" id="overview-info">
              <div className="solar-overview-badge">Product Overview</div>
              <h2>Partner with Innovation in Solar Energy Solutions in India</h2>
              <p>
                ISTL's advanced solar panel technology and comprehensive EPC services have revolutionized clean energy
                adoption across India. Our innovative combination of high-efficiency panels and smart monitoring systems
                enables maximum energy generation and optimal performance tracking.
              </p>
              <div className="solar-overview-features">
                <div className="solar-feature-row">
                  <div className="solar-feature-item">
                    <div className="solar-feature-icon">✓</div>
                    <span>High-Efficiency Solar Panels</span>
                  </div>
                  <div className="solar-feature-item">
                    <div className="solar-feature-icon">✓</div>
                    <span>Smart Monitoring Systems</span>
                  </div>
                </div>
                <div className="solar-feature-row">
                  <div className="solar-feature-item">
                    <div className="solar-feature-icon">✓</div>
                    <span>Complete EPC Solutions</span>
                  </div>
                  <div className="solar-feature-item">
                    <div className="solar-feature-icon">✓</div>
                    <span>24/7 Technical Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solar Types Section */}
      <section className="solar-types">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="types-header">
            <h2>Solar Installation Types</h2>
            <p>Comprehensive solar solutions tailored to your specific needs</p>
          </div>

          <div className="solar-types-tabs">
            {Object.keys(solarTypes).map((type) => (
              <button
                key={type}
                className={`solar-tab-button ${activeTab === type ? "active" : ""}`}
                onClick={() => setActiveTab(type)}
              >
                {solarTypes[type].title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="solar-type-content solar-animate-on-scroll" id="type-content">
            <div className="solar-type-info">
              <div className="solar-type-details">
                <h3>{solarTypes[activeTab].title}</h3>
                <p>{solarTypes[activeTab].description}</p>
                <div className="solar-features-grid">
                  {solarTypes[activeTab].features.map((feature, index) => (
                    <div key={index} className="solar-feature-item">
                      <div className="solar-feature-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="solar-type-image">
                <img src={solarTypes[activeTab].image || "/placeholder.svg"} alt={solarTypes[activeTab].title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ISTL Section */}
      <section className="solar-why-choose">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="why-choose-header">
            <h2>Why Choose ISTL Solar Panels?</h2>
            <p>Discover what makes ISTL the preferred choice for solar energy solutions</p>
          </div>
          <div className="solar-why-choose-grid">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="solar-why-choose-card solar-animate-on-scroll" id={`why-choose-${index}`}>
                <div className="solar-why-choose-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="solar-projects-gallery">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="gallery-header">
            <h2>Project Gallery</h2>
            <p>See our solar installations and hardware in action</p>
          </div>
          <div className="solar-gallery-grid solar-animate-on-scroll" id="gallery-grid">
            <div className="solar-gallery-main">
              <img src={projectGallery[0].image || "/placeholder.svg"} alt={projectGallery[0].name} />
              <div className="solar-gallery-overlay">
                <h3>{projectGallery[0].name}</h3>
                <p>{projectGallery[0].description}</p>
              </div>
            </div>
            <div className="solar-gallery-thumbnails">
              {projectGallery.slice(1).map((project, index) => (
                <div key={index} className="solar-gallery-thumb">
                  <img src={project.image || "/placeholder.svg"} alt={project.name} />
                  <div className="solar-thumb-overlay">
                    <span className="solar-thumb-name">{project.name}</span>
                    <span className="solar-thumb-capacity">{project.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ISTL Section */}
      {/* <section className="solar-why-choose">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="why-choose-header">
            <h2>Why Choose ISTL Solar Panels?</h2>
            <p>Discover what makes ISTL the preferred choice for solar energy solutions</p>
          </div>
          <div className="solar-why-choose-grid">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="solar-why-choose-card solar-animate-on-scroll" id={`why-choose-${index}`}>
                <div className="solar-why-choose-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Services Section */}
      <section className="solar-services">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="services-header">
            <h2>Our EPC Services</h2>
            <p>End-to-end solar project execution with expertise and precision</p>
          </div>

          <div className="solar-services-grid">
            {epcServices.map((service, index) => (
              <div key={index} className="solar-service-card solar-animate-on-scroll" id={`service-${index}`}>
                <div className="solar-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISTL Projects Section */}
      {/* <section className="solar-istl-projects">
        <div className="solar-container">
          <div className="solar-section-header solar-animate-on-scroll" id="projects-header">
            <h2>ISTL Solar Projects</h2>
            <p>Successful execution of major solar projects across various scales</p>
          </div>

          <div className="solar-projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="solar-project-card solar-animate-on-scroll" id={`project-${index}`}>
                <div className="solar-project-header">
                  <h3>{project.name}</h3>
                  <span className="solar-project-type">{project.type}</span>
                </div>
                <div className="solar-project-details">
                  <div className="solar-detail">
                    <span className="solar-label">Capacity:</span>
                    <span className="solar-value">{project.capacity}</span>
                  </div>
                  <div className="solar-detail">
                    <span className="solar-label">Location:</span>
                    <span className="solar-value">{project.location}</span>
                  </div>
                </div>
                <div className="solar-project-status">
                  <span className="solar-status-badge completed">Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="solar-cta">
        <div className="solar-container">
          <div className="solar-cta-content solar-animate-on-scroll" id="cta-content">
            <h2>Ready to Go Solar with ISTL?</h2>
            <p>Let's discuss your solar energy requirements and create a customized solution</p>
            <div className="solar-cta-buttons">
              <button className="solar-btn-primary" onClick={() => downloadBrochure("ISTL-Solar-Panels-EPC")}>
                Download Brochure
              </button>
              <Link to="/book-demo" className="solar-btn-secondary">
                Get Quote
              </Link>
              <Link to="/contact" className="solar-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="solar-cta">
  <div className="solar-container">
    <div className="solar-cta-content solar-animate-on-scroll" id="cta-content">
      <div className="sesola-partnership-badge">
        <span className="partnership-icon">🤝</span>
        <span>Authorized Reseller Partnership</span>
      </div>
      
      <h2>Power Your Future with SESOLA Solar Solutions</h2>
      
      <div className="sesola-intro">
        <p className="sesola-main-text">
          ISTL Energy is proud to be an <strong>authorized reseller</strong> of SESOLA Energy - 
          a leading solar technology company delivering cutting-edge renewable energy solutions across India.
        </p>
        
        <div className="sesola-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">⚡</span>
            <span>Premium Solar Technology</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🌱</span>
            <span>Sustainable Energy Solutions</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🏆</span>
            <span>Industry-Leading Performance</span>
          </div>
        </div>
      </div>
      
      <p className="sesola-description">
        Experience next-generation solar technology through our partnership. 
        From residential rooftops to large-scale commercial installations, 
        SESOLA's advanced solar solutions ensure maximum efficiency and long-term reliability.
      </p>
      
      <div className="solar-cta-buttons">
        <a 
          href="https://sesolaenergy.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="solar-btn-primary sesola-primary"
        >
          <span>Explore SESOLA Solar</span>
          <span className="external-link-icon">↗</span>
        </a>
        <a
                href="/brochers/solar_Catalogue.pdf"
                download="SolarPanels_Catalogue.pdf"
                style={{ textDecoration: 'none' }}
              >
                <button className="solar-btn-secondary">
                  Download  Brochure
                </button>
              </a>
        
        
        {/* <Link to="/book-demo" className="solar-btn-secondary">
          Get Solar Quote
        </Link> */}
      </div>
      
      <div className="sesola-footer-note">
        <p>
          <span className="company-highlight">ISTL Energy</span> × 
          <span className="company-highlight">SESOLA Energy</span> - 
          Bringing you the best in solar technology and infrastructure solutions
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
export default SolarPanels
