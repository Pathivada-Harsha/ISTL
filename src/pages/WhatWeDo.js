"use client"

import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import "../components_css/WhatWeDo.css"
import wwdo2 from "../images/whatwedo/wwdo2.png"
import ccms8 from "../images/ccms/ccms8.jpeg"
import itms17 from "../images/itms/itms17.jpeg"
import mcms19 from "../images/mcms/mcms18.jpg"
import single1 from "../images/smartmeters/singlephase3.png"
import threephase1 from "../images/smartmeters/threephase9.png"
import solar14 from "../images/solar/solar14.png"
import sub1 from "../images/substations/substation2.png"
import streetlights1 from "../images/streetlights/lights3.png"
import sub11 from "./../images/substations/substations3.jpg"
import mcms18 from "./../images/mcms/mcms21.JPG"
export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState("overview")
  const [visibleSections, setVisibleSections] = useState({})
  const navigate = useNavigate()

  const sectionRefs = {
    hero: useRef(null),
    overview: useRef(null),
    iot: useRef(null),
    epc: useRef(null),
    smartMeter: useRef(null),
    streetLights: useRef(null),
    technologies: useRef(null),
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -20% 0px", // Trigger earlier, when element is 20% from bottom
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveTab(sectionId)
          setVisibleSections((prev) => ({
            ...prev,
            [sectionId]: true,
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

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId)
    const section = sectionRefs[sectionId].current
    if (section) {
      const yOffset = -100
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <div className="what-we-do-page">
      {/* Hero Section */}
      <section id="hero" ref={sectionRefs.hero} className={`wwd-hero-section ${visibleSections.hero ? "visible" : ""}`}>
        <div className="wwd-hero-content">
          <div className="wwd-hero-text">
            <h1 className="wwd-hero-title">What We Do</h1>
            <div className="wwd-hero-line"></div>
            <p className="wwd-hero-subtitle">
              Transforming industries through intelligent automation and IoT solutions
            </p>
            <button className="wwd-hero-cta" onClick={() => scrollToSection("overview")}>
              Explore Our Solutions
              <svg className="wwd-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l7-7-7-7"></path>
              </svg>
            </button>
          </div>
          <div className="wwd-hero-visual">
            <div className="wwd-hero-image-container">
              <img src={wwdo2 || "/placeholder.svg"} alt="Industrial IoT Solutions" className="wwd-hero-image" />
              <div className="wwd-floating-badge wwd-badge-2">IoT</div>
              <div className="wwd-floating-badge wwd-badge-1">EPC</div>
              <div className="wwd-floating-badge wwd-badge-3">Smart Meters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="wwd-tab-navigation">
        <div className="wwd-tab-container">
          <button
            className={`wwd-tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => scrollToSection("overview")}
          >
            Overview
          </button>
          <button
            className={`wwd-tab-button ${activeTab === "iot" ? "active" : ""}`}
            onClick={() => scrollToSection("iot")}
          >
            IoT Solutions
          </button>
          <button
            className={`wwd-tab-button ${activeTab === "epc" ? "active" : ""}`}
            onClick={() => scrollToSection("epc")}
          >
            EPC Services
          </button>
          <button
            className={`wwd-tab-button ${activeTab === "smartMeter" ? "active" : ""}`}
            onClick={() => scrollToSection("smartMeter")}
          >
            Smart Meters
          </button>
          <button
            className={`wwd-tab-button ${activeTab === "streetLights" ? "active" : ""}`}
            onClick={() => scrollToSection("streetLights")}
          >
            Street Lights
          </button>
          <button
            className={`wwd-tab-button ${activeTab === "technologies" ? "active" : ""}`}
            onClick={() => scrollToSection("technologies")}
          >
            Technologies
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section
        id="overview"
        ref={sectionRefs.overview}
        className={`wwd-overview-section ${visibleSections.overview ? "visible" : ""}`}
      >
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">Our Expertise</h2>
            <p className="wwd-section-subtitle">
              We specialize in creating intelligent systems that transform traditional infrastructure into smart,
              connected networks that drive efficiency and sustainability.
            </p>
          </div>

          <div className="wwd-expertise-grid">
            <div className="wwd-expertise-card wwd-card-1">
              <div className="wwd-expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>IoT Solutions</h3>
              <p>Comprehensive IoT systems for real-time monitoring and control of industrial infrastructure</p>
            </div>

            <div className="wwd-expertise-card wwd-card-2">
              <div className="wwd-expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  <path d="M12 8a4 4 0 100-8 4 4 0 000 8z"></path>
                </svg>
              </div>
              <h3>EPC Services</h3>
              <p>End-to-end engineering, procurement, and construction services for automation projects</p>
            </div>

            <div className="wwd-expertise-card wwd-card-3">
              <div className="wwd-expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Smart Metering</h3>
              <p>Advanced metering infrastructure for efficient energy management and monitoring</p>
            </div>

            <div className="wwd-expertise-card wwd-card-4">
              <div className="wwd-expertise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3>Smart Lighting</h3>
              <p>Intelligent LED street lighting systems with remote monitoring and control capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* IoT Solutions Section */}
      <section id="iot" ref={sectionRefs.iot} className={`wwd-iot-section ${visibleSections.iot ? "visible" : ""}`}>
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">IoT Solutions</h2>
            <p className="wwd-section-subtitle">
              Our pre-built ready-to-use IoT Solutions are complete packages for partners to convert their existing or
              new products/assets into smart products/assets with minimum turn around time & investment.
            </p>
          </div>

          <div className="wwd-iot-cards-container">
            <div className="wwd-iot-card wwd-iot-card-1">
              <div className="wwd-iot-image">
                <img src={ccms8 || "/placeholder.svg"} alt="CCMS for Street Lights" />
              </div>
              <div className="wwd-iot-content">
                <h3>CCMS - Centralized Control & Monitoring System</h3>
                <p>
                  Smart street light management system enabling remote control, scheduling, fault detection, and energy
                  optimization for entire lighting networks.
                </p>
                <button className="wwd-know-more-btn" onClick={() => handleNavigation("/products/istl-ccms")}>
                  KNOW MORE
                </button>
              </div>
            </div>

            <div className="wwd-iot-card wwd-iot-card-2">
              <div className="wwd-iot-image">
                <img src={itms17 || "/placeholder.svg"} alt="ITMS for Transformer Monitoring" />
              </div>
              <div className="wwd-iot-content">
                <h3>ITMS - Intelligent Transformer Monitoring</h3>
                <p>
                  Advanced transformer monitoring system providing real-time parameter tracking, predictive maintenance
                  alerts, and comprehensive analytics.
                </p>
                <button className="wwd-know-more-btn" onClick={() => handleNavigation("/products/istl-itms")}>
                  KNOW MORE
                </button>
              </div>
            </div>

            <div className="wwd-iot-card wwd-iot-card-3">
              <div className="wwd-iot-image">
                <img src={mcms18 || "/placeholder.svg"} alt="MCMS Motor Control" />
              </div>
              <div className="wwd-iot-content">
                <h3>MCMS - Motor Control & Monitoring System</h3>
                <p>
                  Intelligent motor control system optimizing performance, reducing energy consumption, and extending
                  motor lifespan through precise monitoring.
                </p>
                <button className="wwd-know-more-btn" onClick={() => handleNavigation("/products/istl-mcms")}>
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPC Services Section */}
      <section id="epc" ref={sectionRefs.epc} className={`wwd-epc-section ${visibleSections.epc ? "visible" : ""}`}>
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">EPC Services</h2>
            <p className="wwd-section-subtitle">
              Our Engineering, Procurement, and Construction services deliver turnkey automation solutions from concept
              to commissioning.
            </p>
          </div>

          <div className="wwd-epc-cards-container">
            <div className="wwd-epc-card wwd-epc-card-1">
              <div className="wwd-epc-image">
                <img src={sub11 || "/placeholder.svg"} alt="Substation Projects" />
              </div>
              <div className="wwd-epc-content">
                <h3>Substation Projects</h3>
                <p>
                  Complete substation automation solutions including design, installation, testing, and commissioning of
                  electrical substations with advanced monitoring systems.
                </p>
                <button className="wwd-know-more-btn" onClick={() => handleNavigation("/products/epc/substations")}>
                  KNOW MORE
                </button>
              </div>
            </div>

            <div className="wwd-epc-card wwd-epc-card-2">
              <div className="wwd-epc-image">
                <img src={solar14 || "/placeholder.svg"} alt="Solar Projects" />
              </div>
              <div className="wwd-epc-content">
                <h3>Solar Projects</h3>
                <p>
                  End-to-end solar power solutions including system design, procurement, installation, and maintenance
                  of solar photovoltaic systems for various applications.
                </p>
                <button className="wwd-know-more-btn" onClick={() => handleNavigation("/products/epc/solar-panels")}>
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Meters Section */}
      <section
        id="smartMeter"
        ref={sectionRefs.smartMeter}
        className={`wwd-smart-meter-section ${visibleSections.smartMeter ? "visible" : ""}`}
      >
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">Smart Meters</h2>
            <p className="wwd-section-subtitle">
              Our BIS-certified smart meters provide accurate, real-time energy consumption data for utilities and
              consumers with advanced communication capabilities.
            </p>
          </div>

          <div className="wwd-meter-cards-container">
            <div className="wwd-meter-card wwd-meter-card-1">
              <div className="wwd-meter-image">
                <img src={single1 || "/placeholder.svg"} alt="Single Phase Smart Meter" />
              </div>
              <div className="wwd-meter-content">
                <h3>Single Phase Smart Meter</h3>
                <p>
                  BIS-certified single phase smart energy meters with wireless communication, tamper detection, and
                  real-time monitoring for residential applications.
                </p>
                <button
                  className="wwd-know-more-btn"
                  onClick={() => handleNavigation("/products/smart-meters/single-phase")}
                >
                  KNOW MORE
                </button>
              </div>
            </div>

            <div className="wwd-meter-card wwd-meter-card-2">
              <div className="wwd-meter-image">
                <img src={threephase1 || "/placeholder.svg"} alt="Three Phase Smart Meter" />
              </div>
              <div className="wwd-meter-content">
                <h3>Three Phase Smart Meter</h3>
                <p>
                  Industrial-grade three phase smart meters with advanced power quality monitoring, load balancing, and
                  comprehensive analytics for commercial applications.
                </p>
                <button
                  className="wwd-know-more-btn"
                  onClick={() => handleNavigation("/products/smart-meters/three-phase")}
                >
                  KNOW MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Street Lights Section */}
      <section
        id="streetLights"
        ref={sectionRefs.streetLights}
        className={`wwd-street-lights-section ${visibleSections.streetLights ? "visible" : ""}`}
      >
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">LED Street Lights</h2>
            <p className="wwd-section-subtitle">
              Energy-efficient LED street lighting solutions with smart controls, remote monitoring, and automated
              scheduling for modern smart cities.
            </p>
          </div>

          <div className="wwd-lights-showcase">
            <div className="wwd-lights-visual">
              <div className="wwd-lights-image-container">
                <img
                  src={streetlights1 || "/placeholder.svg"}
                  alt="Smart LED Street Lights"
                  className="wwd-lights-image"
                />
                <div className="wwd-lights-features">
                  <div className="wwd-feature-dot wwd-dot-1">
                    <div className="wwd-feature-tooltip">Remote Control</div>
                  </div>
                  <div className="wwd-feature-dot wwd-dot-2">
                    <div className="wwd-feature-tooltip">Energy Monitoring</div>
                  </div>
                  <div className="wwd-feature-dot wwd-dot-3">
                    <div className="wwd-feature-tooltip">Fault Detection</div>
                  </div>
                  <div className="wwd-feature-dot wwd-dot-4">
                    <div className="wwd-feature-tooltip">Smart Scheduling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wwd-lights-details">
              <h3>Smart LED Street Lighting System</h3>
              <p>
                Our intelligent LED street lighting solutions combine energy efficiency with smart controls, providing
                significant energy savings and enhanced urban lighting management.
              </p>

              <div className="wwd-lights-specs">
                <div className="wwd-spec-item wwd-spec-1">
                  <div className="wwd-spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <div className="wwd-spec-content">
                    <h4>Energy Efficient</h4>
                    <p>Up to 70% energy savings compared to traditional lighting</p>
                  </div>
                </div>

                <div className="wwd-spec-item wwd-spec-2">
                  <div className="wwd-spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="wwd-spec-content">
                    <h4>Remote Monitoring</h4>
                    <p>Real-time status monitoring and fault detection capabilities</p>
                  </div>
                </div>

                <div className="wwd-spec-item wwd-spec-3">
                  <div className="wwd-spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
                    </svg>
                  </div>
                  <div className="wwd-spec-content">
                    <h4>Smart Controls</h4>
                    <p>Automated dimming and scheduling based on ambient conditions</p>
                  </div>
                </div>
              </div>

              <button
                className="wwd-know-more-btn wwd-lights-btn"
                onClick={() => handleNavigation("/products/smart-street-lights")}
              >
                KNOW MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {/* <section
        id="technologies"
        ref={sectionRefs.technologies}
        className={`wwd-technologies-section ${visibleSections.technologies ? "visible" : ""}`}
      >
        <div className="wwd-section-container">
          <div className="wwd-section-header">
            <h2 className="wwd-section-title">Our Technologies</h2>
            <p className="wwd-section-subtitle">
              We leverage cutting-edge technologies to deliver robust, scalable, and secure solutions.
            </p>
          </div>

          <div className="wwd-tech-categories">
            <div className="wwd-tech-category wwd-tech-cat-1">
              <h3>Hardware</h3>
              <div className="wwd-tech-items">
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <rect x="9" y="9" width="6" height="6"></rect>
                    </svg>
                  </div>
                  <span>Microcontrollers</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span>Secure Elements</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22v-6M12 8V2M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24"></path>
                    </svg>
                  </div>
                  <span>Sensors & Actuators</span>
                </div>
              </div>
            </div>

            <div className="wwd-tech-category wwd-tech-cat-2">
              <h3>Connectivity</h3>
              <div className="wwd-tech-items">
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0"></path>
                    </svg>
                  </div>
                  <span>LoRaWAN</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6.08 9.24a4 4 0 010 5.52M18.92 9.24a4 4 0 010 5.52"></path>
                    </svg>
                  </div>
                  <span>NB-IoT</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01"></path>
                    </svg>
                  </div>
                  <span>RF Mesh</span>
                </div>
              </div>
            </div>

            <div className="wwd-tech-category wwd-tech-cat-3">
              <h3>Software & Cloud</h3>
              <div className="wwd-tech-items">
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <span>Real-time Analytics</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8"></path>
                    </svg>
                  </div>
                  <span>Edge Computing</span>
                </div>
                <div className="wwd-tech-item">
                  <div className="wwd-tech-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <span>Cloud Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="wwd-cta-section">
        <div className="wwd-cta-container">
          <h2>Ready to transform your infrastructure?</h2>
          <p>Let's discuss how our solutions can help you achieve your automation goals.</p>
          <NavLink to="/book-demo">
            <button className="wwd-cta-button">Contact Us</button>

          </NavLink>
        </div>
      </section>
    </div>
  )
}
