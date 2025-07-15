"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import construction from "../../images/substations/construction1.jpg"
import design1 from "../../images/substations/design1.jpg"
import procurement from "../../images/substations/procurement.png"
import testing from "../../images/substations/testing.jpg"
import automation from "../../images/substations/automation.jpg"
import itagi1 from "../../images/substations/itagi1.jpg"
import itagi2 from "../../images/substations/itagi2.jpg"
import itagi3 from "../../images/substations/itagi3.jpg"
import emmiganur1 from "../../images/substations/emmiganur1.jpg"
import emmiganur2 from "../../images/substations/emmiganur2.jpg"
import emmiganur3 from "../../images/substations/emmiganur3.jpg"
import bannur1 from "../../images/substations/bannur1.jpg"
import bannur2 from "../../images/substations/bannur2.jpg"
import bannur3 from "../../images/substations/bannur3.jpg"
import tyagarthy1 from "../../images/substations/tyagarthy1.jpg"
import tyagarthy2 from "../../images/substations/tyagarthy2.jpg"
import tyagarthy3 from "../../images/substations/tyagarthy3.jpeg"
import Kulenur1 from "../../images/substations/kulenur1.jpg"
import Kulenur2 from "../../images/substations/kulenur2.jpg"
import Kulenur3 from "../../images/substations/kulenur3.jpg"
import hausbhavi1 from "../../images/substations/hausbhavi1.jpeg"
import hausbhavi2 from "../../images/substations/hausbhavi2.jpeg"
import hausbhavi3 from "../../images/substations/hausbhavi3.jpg"
import "../../components_css/epc/Substations.css"

const Substations = () => {
  const [activeService, setActiveService] = useState("design")
  const [activeDivision, setActiveDivision] = useState("shimoga")
  const [isVisible, setIsVisible] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})

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

    const elements = document.querySelectorAll(".ss-animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Image rotation effect for project cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const newIndex = { ...prev }

        // Get current division projects
        const currentProjects = divisions[activeDivision].projects

        currentProjects.forEach((project, projectIndex) => {
          const key = `${activeDivision}-${projectIndex}`
          const currentIndex = newIndex[key] || 0
          const nextIndex = (currentIndex + 1) % project.images.length
          newIndex[key] = nextIndex
        })

        return newIndex
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [activeDivision])

  const divisions = {
    shimoga: {
      name: "HASSAN Zone",
      image: "/placeholder.svg?height=400&width=600&text=Shimoga+Division+Projects",
      projects: [
        {
          name: "BANNUR",
          status: "Work In Progress",
          details: ["1x10MVA, 110/11KV Sub-Station", "12.748kms Transmission Line from Sanda Sub Station"],
          images: [
            bannur1,
            bannur2,
            bannur3,
          ],
        },
        {
          name: "THYAGARTHY",
          status: "Work In Progress",
          details: ["1x10MVA, 110/11KV Sub-Station", "11.662kms Transmission Line From Sagara Line Tapping"],
          images: [
            tyagarthy1,
            tyagarthy2,
            tyagarthy3,
          ],
        },
      ],
    },
    bellary: {
      name: "Kalburgi Zone",
      image: "/placeholder.svg?height=400&width=600&text=Bellary+Division+Projects",
      projects: [
        {
          name: "EMMIGANUR",
          status: "Charged",
          details: ["2x10MVA, 110/11kV Sub-station", "12.179km Transmission Line from Metri"],
          images: [
            emmiganur1,
            emmiganur2,
            emmiganur3,
          ],
        },
        {
          name: "ITAGI",
          status: "Charged",
          details: [
            "2x10 MVA, 110/11 kV Sub-station",
            "7.826 Km Transmission Line from Kampli to Ittagi",
            "8.898 Km 2nd Circuit Ganagavathi To Kampli",
          ],
          images: [itagi1, itagi2, itagi3],
        },
      ],
    },
    haveri: {
      name: "Hubli Zone",
      image: "/placeholder.svg?height=400&width=600&text=Haveri+Division+Projects",
      projects: [
        {
          name: "KULENUR",
          status: "Charged",
          details: ["1x10MVA,110/11kV Sub Station", "3.817 km Transmission Line from Tiluvalli Tapping"],
          images: [
            Kulenur1,
            Kulenur2,
            Kulenur3,
          ],
        },
        {
          name: "HAUNSBHAVI",
          status: "Ready to Charge",
          details: ["2x10MVA,110/11kV Sub Station", "15.009km Transmission Line from Tiluvalli Sub Station"],
          images: [
            hausbhavi1,
            hausbhavi2,
            hausbhavi3,
          ],
        },
      ],
    },
  }

  const services = {
    design: {
      title: "Design & Engineering",
      description:
        "Comprehensive electrical system design for substations with optimal load distribution and safety measures.",
      features: ["Single Line Diagrams (SLD)", "Layout Drawings", "Control and Protection Schemes", "Load Analysis"],
      image: design1,
    },
    civil: {
      title: "Civil & Structural Works",
      description:
        "Complete civil infrastructure development for substation facilities with modern construction techniques.",
      features: [
        "Control Room Building",
        "Cable Trenches",
        "Equipment Foundations",
        "DP Structure Poles",
        "Switchgear shed",
        "Rain water Harvesting Tank",
        "Transformer Fire Wall",
      ],
      image: construction,
    },
    procurement: {
      title: "Procurement & Supply",
      description: "Quality equipment sourcing from certified manufacturers with comprehensive warranty coverage.",
      features: ["Power Transformers", "Circuit Breakers", "CT/PTs", "Panels", "Tower Parts", "Conductor & Cables"],
      image: procurement,
    },
    testing: {
      title: "Testing & Commissioning",
      description: "Rigorous testing procedures and systematic commissioning for optimal substation performance.",
      features: [
        "HV Testing",
        "Relay Coordination",
        "SCADA Testing",
        "Transformer Oil Filtration",
        "CT/PTs Testing",
        "Battery Equipment Testing",
        "Circuit Breaker Testing",
      ],
      image: testing,
    },
    automation: {
      title: "Automation & SCADA",
      description:
        "Advanced automation systems for remote monitoring and intelligent control of substation operations.",
      features: ["RTU (Remote Testing Unit)", "Communication panels", "Protocol integration", "SCADA Integration"],
      image: automation,
    },
  }

  const capabilities = [
    {
      title: "Substation Types",
      items: ["AIS (Air Insulated Switchgear)", "GIS (Gas Insulated Switchgear)", "Hybrid Substations"],
      icon: "⚡",
    },
    // {
    //   title: "Voltage Levels",
    //   items: [
    //     "11kV Distribution",
    //     "33kV Sub-transmission",
    //     "66kV Transmission",
    //     "132kV High Voltage",
    //     "220kV Extra High Voltage",
    //   ],
    //   icon: "🔌",
    // },
    {
      title: "Power Infrastructure",
      items: [
        "Distribution Networks",
        "Sub-transmission Systems",
        "Transmission Lines",
        "High Voltage Networks",
        "Grid Integration",
      ],
      icon: "🔌",
    },
    {
      title: "Project Capabilities",
      items: [
        "100% Turnkey Capability",
        "Fast-track Project Delivery",
        "Cost-effective & Optimized Design",
        "Pan-India Execution Capability",
      ],
      icon: "🏗️",
    },
    // {
    //   title: "Quality Standards",
    //   items: [
    //     "IEC Standards",
    //     "IS (Indian Standards)",
    //     "IEEE Compliance",
    //     "CBIP Guidelines",
    //     "Factory Acceptance Testing (FAT)",
    //   ],
    //   icon: "✅",
    // },
  ]

  return (
    <div className="ss-page">
      {/* Hero Section */}
      <section className="ss-hero">
        <div className="ss-hero-background"></div>
        <div className="ss-hero-content">
          <div className="ss-container">
            <div className="ss-hero-text ss-animate-on-scroll" id="hero-text">
              <h1>Substation EPC Services</h1>
              <p>
                Comprehensive Engineering, Procurement & Construction services for power substations from 11kV to 220kV
                with expertise in electrical and electronics works
              </p>
              <div className="ss-hero-stats">
                {/* <div className="ss-stat">
                  <span className="ss-stat-number">813</span>
                  <span className="ss-stat-label">MVA Total Capacity</span>
                </div> */}
                <div className="ss-stat">
                  <span className="ss-stat-number">6</span>
                  <span className="ss-stat-label">KPTCL Projects</span>
                </div>
                <div className="ss-stat">
                  <span className="ss-stat-number">3</span>
                  <span className="ss-stat-label">Active Divisions</span>
                </div>
                <div className="ss-stat">
                  <span className="ss-stat-number">220kV</span>
                  <span className="ss-stat-label">Max Voltage Level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="ss-services-overview">
        <div className="ss-container">
          <div className="ss-section-header ss-animate-on-scroll" id="overview-header">
            <h2>Our Substation Services</h2>
            <p>Specialized in electrical and electronics works for substations with comprehensive EPC solutions</p>
          </div>

          <div className="ss-services-tabs">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                className={`ss-tab-button ${activeService === service ? "active" : ""}`}
                onClick={() => setActiveService(service)}
              >
                {services[service].title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="ss-service-content ss-animate-on-scroll" id="service-content">
            <div className="ss-service-info">
              <div className="ss-service-details">
                <h3>{services[activeService].title}</h3>
                <p>{services[activeService].description}</p>
                <div className="ss-features-grid">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="ss-feature-item">
                      <div className="ss-feature-icon">⚡</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ss-service-image">
                <img src={services[activeService].image || "/placeholder.svg"} alt={services[activeService].title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPTCL Projects by Division */}
      <section className="ss-projects">
        <div className="ss-container">
          <div className="ss-section-header ss-animate-on-scroll" id="projects-header">
            <h2>KPTCL Projects by Division</h2>
            <p>Successfully executing substation projects across Karnataka for KPTCL with proven expertise</p>
          </div>

          <div className="ss-division-tabs">
            {Object.keys(divisions).map((division) => (
              <button
                key={division}
                className={`ss-division-tab ${activeDivision === division ? "active" : ""}`}
                onClick={() => setActiveDivision(division)}
              >
                {divisions[division].name.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="ss-division-content ss-animate-on-scroll" id="division-content">
            <div className="ss-division-header">
              <h3>{divisions[activeDivision].name}</h3>
              {/* <div className="ss-division-image">
                <img src={divisions[activeDivision].image || "/placeholder.svg"} alt={divisions[activeDivision].name} />
              </div> */}
            </div>

            <div className="ss-projects-grid">
              {divisions[activeDivision].projects.map((project, index) => {
                const imageKey = `${activeDivision}-${index}`
                const currentIndex = currentImageIndex[imageKey] || 0

                return (
                  <div key={index} className="ss-project-card">
                    <div className="ss-project-image-container">
                      <div className="ss-project-image">
                        <img
                          src={project.images[currentIndex] || "/placeholder.svg"}
                          alt={`${project.name} - Image ${currentIndex + 1}`}
                          className="ss-project-main-image"
                        />
                        <div className={`ss-status-overlay ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Image indicators */}
                      <div className="ss-image-indicators">
                        {project.images.map((_, imgIndex) => (
                          <div key={imgIndex} className={`ss-indicator ${currentIndex === imgIndex ? "active" : ""}`} />
                        ))}
                      </div>
                    </div>

                    <div className="ss-project-content">
                      <h4>{project.name}</h4>
                      <ul className="ss-project-details">
                        {project.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="ss-capabilities">
        <div className="ss-container">
          <div className="ss-section-header ss-animate-on-scroll" id="capabilities-header">
            <h2>Our Capabilities & Expertise</h2>
            <p>Comprehensive substation solutions with industry-leading standards and practices</p>
          </div>

          <div className="ss-capabilities-grid">
            {capabilities.map((capability, index) => (
              <div key={index} className="ss-capability-card ss-animate-on-scroll" id={`capability-${index}`}>
                <div className="ss-capability-icon">
                  <span>{capability.icon}</span>
                </div>
                <h3>{capability.title}</h3>
                <ul>
                  {capability.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ISTL Section */}
      <section className="ss-why-choose">
        <div className="ss-container">
          <div className="ss-section-header ss-animate-on-scroll" id="why-choose-header">
            <h2>Why Choose ISTL Energy for Substations</h2>
            <p>Proven expertise in substation EPC with commitment to quality, safety, and timely delivery</p>
          </div>

          <div className="ss-why-choose-grid">
            <div className="ss-point ss-animate-on-scroll" id="point-1">
              <div className="ss-point-icon">🏆</div>
              <div className="ss-point-content">
                <h4>100% Turnkey Capability</h4>
                <p>Complete project execution from design to commissioning</p>
              </div>
            </div>
            <div className="ss-point ss-animate-on-scroll" id="point-2">
              <div className="ss-point-icon">⚡</div>
              <div className="ss-point-content">
                <h4>Fast-track Project Delivery</h4>
                <p>Optimized project timelines with efficient execution</p>
              </div>
            </div>
            <div className="ss-point ss-animate-on-scroll" id="point-3">
              <div className="ss-point-icon">💰</div>
              <div className="ss-point-content">
                <h4>Cost-effective Solutions</h4>
                <p>Optimized design and procurement for maximum value</p>
              </div>
            </div>
            <div className="ss-point ss-animate-on-scroll" id="point-4">
              <div className="ss-point-icon">🌍</div>
              <div className="ss-point-content">
                <h4>Pan-India Execution</h4>
                <p>Nationwide project execution capability</p>
              </div>
            </div>
            <div className="ss-point ss-animate-on-scroll" id="point-5">
              <div className="ss-point-icon">🔗</div>
              <div className="ss-point-content">
                <h4>Robust Vendor Network</h4>
                <p>Strong partnerships with leading equipment manufacturers</p>
              </div>
            </div>
            <div className="ss-point ss-animate-on-scroll" id="point-6">
              <div className="ss-point-icon">🛡️</div>
              <div className="ss-point-content">
                <h4>Safety & Compliance</h4>
                <p>Zero-incident policy with international safety standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      {/* <section className="ss-technical-specs">
        <div className="ss-container">
          <div className="ss-section-header ss-animate-on-scroll" id="specs-header">
            <h2>Technical Specifications & Standards</h2>
            <p>
              Our expertise covers various voltage levels and substation configurations with international standards
            </p>
          </div>

          <div className="ss-specs-grid-container">
            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-1">
              <h3>Voltage Levels</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">400 kV - Extra High Voltage</div>
                <div className="ss-spec-item">220 kV - High Voltage</div>
                <div className="ss-spec-item">132 kV - High Voltage</div>
                <div className="ss-spec-item">66 kV - Medium Voltage</div>
                <div className="ss-spec-item">33 kV - Medium Voltage</div>
                <div className="ss-spec-item">11 kV - Low Voltage</div>
              </div>
            </div>

            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-2">
              <h3>Equipment Types</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">Power Transformers</div>
                <div className="ss-spec-item">Circuit Breakers</div>
                <div className="ss-spec-item">Isolators & Switches</div>
                <div className="ss-spec-item">Current Transformers</div>
                <div className="ss-spec-item">Voltage Transformers</div>
                <div className="ss-spec-item">Lightning Arresters</div>
              </div>
            </div>

            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-3">
              <h3>Protection Systems</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">Differential Protection</div>
                <div className="ss-spec-item">Distance Protection</div>
                <div className="ss-spec-item">Overcurrent Protection</div>
                <div className="ss-spec-item">Earth Fault Protection</div>
                <div className="ss-spec-item">Busbar Protection</div>
                <div className="ss-spec-item">Transformer Protection</div>
              </div>
            </div>

            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-4">
              <h3>Compliance Standards</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">IEC International Standards</div>
                <div className="ss-spec-item">IS Indian Standards</div>
                <div className="ss-spec-item">IEEE Standards</div>
                <div className="ss-spec-item">CBIP Guidelines</div>
                <div className="ss-spec-item">Environmental Safety Norms</div>
                <div className="ss-spec-item">Fire Safety Standards</div>
              </div>
            </div>

            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-5">
              <h3>Testing & Quality</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">Factory Acceptance Testing (FAT)</div>
                <div className="ss-spec-item">Site Acceptance Testing (SAT)</div>
                <div className="ss-spec-item">Commissioning Tests</div>
                <div className="ss-spec-item">Performance Validation</div>
                <div className="ss-spec-item">Quality Assurance</div>
                <div className="ss-spec-item">Warranty Support</div>
              </div>
            </div>

            <div className="ss-spec-card ss-animate-on-scroll" id="ss-spec-6">
              <h3>Project Scope</h3>
              <div className="ss-spec-list">
                <div className="ss-spec-item">Design & Engineering</div>
                <div className="ss-spec-item">Equipment Procurement</div>
                <div className="ss-spec-item">Installation & Erection</div>
                <div className="ss-spec-item">Testing & Commissioning</div>
                <div className="ss-spec-item">Training & Documentation</div>
                <div className="ss-spec-item">Maintenance Support</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="ss-cta">
        <div className="ss-container">
          <div className="ss-cta-content ss-animate-on-scroll" id="cta-content">
            <h2>Ready for Your Substation Project?</h2>
            <p>Get comprehensive EPC solutions with proven expertise and reliable execution</p>
            <div className="ss-cta-buttons">
              {/* <button className="ss-btn-primary" onClick={() => downloadBrochure("Substations-EPC")}>
                Download Brochure
              </button> */}
              <Link to="/book-demo" className="ss-btn-secondary">
                Contact Us
              </Link>
              {/* <Link to="/contact" className="ss-btn-secondary">
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Substations
