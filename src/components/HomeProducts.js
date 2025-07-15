"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import "../components_css/HomeProducts.css"
import homeepc from "./../images/Home/Home_epc.png"
import homesmart from "./../images/smartmeters/singlephase8.png"
import homesmart2 from "./../images/Home/Home_smart2.png"

import homeint from "./../images/Home/Home_int4.jpg"



const sections = [
  {
    id: "smart-meter",
    title: "Smart Meter Certified with BIS",
    image: homesmart, // Replace with: homesmart2
    features: [
      "BIS & IEC compliant smart meters, certified to IS 13779, IS 16444, IS 15959, and IEC standards",
      "Enables real-time measurement, analysis, and management of energy consumption.",
      "Equipped with built-in replaceable 2G/3G/4G modem supporting DLMS/COSEM protocol for two-way communication",
      "Features tamper and event logging, overload disconnection, and multi-level password protection for secure operations.",
    ],
  },
  {
    id: "epc-projects",
    title: "EPC Section Projects",
    image: homeepc, // Replace with: homeepc
    features: [
      "Turnkey EPC solutions for solar power projects and electrical substations",
      "Design and execution of reliable, grid-compliant energy infrastructure",
      "Expertise in site analysis, procurement, installation, and system integration",
      "End-to-end project delivery—from planning and design to testing and commissioning",
    ],
  },
  {
    id: "monitoring-systems",
    title: "Intelligent Controlling and Monitoring Systems",
    image: homeint, // Replace with: homeint
    features: [
      "Web-based platforms for real-time monitoring and remote control",
      "Centralized dashboards for managing field devices and infrastructure",
      "Automated alerts, data logging, and performance analytics",
      "Secure access with role-based controls and audit trails",
    ],
  },
]

function ScrollSections() {
  const [activeSection, setActiveSection] = useState(0)
  const [isImageUnstuck, setIsImageUnstuck] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef(null)
  const contentAreaRef = useRef(null)
  const sectionRefs = useRef([])
  const imageContainerRef = useRef(null)
  const ticking = useRef(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Improved scroll handler with better unstick logic
  const handleScroll = useCallback(() => {
    if (!ticking.current && !isMobile) {
      requestAnimationFrame(() => {
        if (!containerRef.current || !contentAreaRef.current) {
          ticking.current = false
          return
        }

        const containerRect = containerRef.current.getBoundingClientRect()
        const contentAreaRect = contentAreaRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        // Check if container is in view
        if (containerRect.bottom < 0 || containerRect.top > windowHeight) {
          ticking.current = false
          return
        }

        // Find active section based on viewport center
        let newActiveSection = 0
        const viewportCenter = windowHeight / 2
        
        sectionRefs.current.forEach((section, index) => {
          if (section) {
            const sectionRect = section.getBoundingClientRect()
            const sectionCenter = sectionRect.top + sectionRect.height / 2
            
            if (sectionCenter < viewportCenter && sectionRect.bottom > 0) {
              newActiveSection = index
            }
          }
        })

        setActiveSection(newActiveSection)

        // Improved unstick logic - unstick when content area is about to leave viewport
        const shouldUnstick = contentAreaRect.bottom < windowHeight + 100
        
        if (shouldUnstick !== isImageUnstuck) {
          setIsImageUnstuck(shouldUnstick)
        }

        ticking.current = false
      })
      ticking.current = true
    }
  }, [isImageUnstuck, isMobile])

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true })
      handleScroll() // Initial check
      
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll, isMobile])

  // Mobile render
  if (isMobile) {
    return (
      <div className={`scroll-sections-wrapper mobile`}>
        <div className="scroll-bg-design"></div>
        
        <div className="scroll-header mobile">
          <h1 className="scroll-main-heading mobile">
            Discover ISTL intelligent industrial ecosystem
          </h1>
          <p className="scroll-main-subtitle mobile">
            Unify every level of your operations with one smart, connected platform.
          </p>
        </div>

        <div className="scroll-content-layout mobile">
          {sections.map((section, index) => (
            <div key={section.id} className="scroll-mobile-section">
              {/* Image on top for mobile */}
              <div className="scroll-mobile-image-container">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="scroll-mobile-image"
                  loading="lazy"
                />
              </div>
              
              {/* Content below */}
              <div>
                <h2 className="scroll-section-heading mobile">
                  {section.title}
                </h2>

                <ul className="scroll-features-list">
                  {section.features.map((feature, i) => (
                    <li key={i} className="scroll-feature-item mobile">
                      <div className="scroll-check-wrapper">
                        <svg className="scroll-check-icon" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="scroll-feature-text mobile">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Desktop render
  return (
    <div className="scroll-sections-wrapper" ref={containerRef}>
      <div className="scroll-bg-design"></div>
      
      <div className="scroll-header">
        <h1 className="scroll-main-heading">
          Discover ISTL intelligent industrial ecosystem
        </h1>
        <p className="scroll-main-subtitle">
          Unify every level of your operations with one smart, connected platform.
        </p>
      </div>

      <div className="scroll-content-layout">
        {/* Left side: Scrolling content */}
        <div className="scroll-content-area" ref={contentAreaRef}>
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="scroll-content-block"
              id={section.id}
            >
              <h2 className="scroll-section-heading">
                {section.title}
              </h2>

              <ul className="scroll-features-list">
                {section.features.map((feature, i) => (
                  <li key={i} className="scroll-feature-item">
                    <div className="scroll-check-wrapper">
                      <svg className="scroll-check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="scroll-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="scroll-end-spacer"></div>
        </div>

        {/* Right side: Sticky image */}
        <div className="scroll-image-area">
          <div
            className={`scroll-image-container ${isImageUnstuck ? 'unstuck' : ''}`}
            ref={imageContainerRef}
          >
            <div className="scroll-image-frame">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`scroll-image-slide ${index === activeSection ? 'active' : ''}`}
                >
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="scroll-section-img"
                    loading="lazy"
                  />
                </div>
              ))}

              <div className="scroll-image-overlay"></div>

              {/* Floating section title */}
              <div className="scroll-floating-title">
                <div className="scroll-title-card">
                  <h3 className="scroll-current-title">
                    {sections[activeSection].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollSections