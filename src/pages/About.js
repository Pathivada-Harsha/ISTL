"use client"

import "../components_css/pages_about.css"
import about4 from "../images/about/about4.png"
import about9 from "../images/about/about9.png"
import sub1 from "./../images/substations/substations3.jpg"
import solar1 from "./../images/solar/solar2.jpg"
import smart from "./../images/smartmeters/smartmeters.png"
import lab1 from "./../images/Home/lab7.jpeg"
import products2 from "./../images/products12.png"
import { NavLink } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { Target, Globe, Leaf, Lightbulb, Shield, Scale, Users, Award, Heart } from "lucide-react"

export default function About() {
  const [scrollY, setScrollY] = useState(0)
  const [expandedSection, setExpandedSection] = useState("focus")
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    projects: 0,
    cities: 0,
    success: 0,
  })

  // Animation refs
  const statsRef = useRef(null)
  const [statsAnimated, setStatsAnimated] = useState(false)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  // Animate numbers
  const animateNumber = (start, end, duration, callback) => {
    let startTime = null
    const step = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const current = Math.floor(progress * (end - start) + start)
      callback(current)
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Show navigation after scrolling starts
      if (currentScrollY > 100) {
        document.body.classList.add("About-show-nav")
      } else {
        document.body.classList.remove("About-show-nav")
      }

      // Check if stats section is in view
      if (statsRef.current && !statsAnimated) {
        const rect = statsRef.current.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.8) {
          setStatsAnimated(true)
          // Animate stats numbers
          animateNumber(0, 10, 2000, (val) => setAnimatedStats((prev) => ({ ...prev, years: val })))
          animateNumber(0, 100, 2500, (val) => setAnimatedStats((prev) => ({ ...prev, projects: val })))
          animateNumber(0, 20, 2200, (val) => setAnimatedStats((prev) => ({ ...prev, cities: val })))
          animateNumber(0, 99, 2800, (val) => setAnimatedStats((prev) => ({ ...prev, success: val })))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Animation observer
    setTimeout(() => {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "-50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("About-in-view")
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      const sections = document.querySelectorAll(".About-scroll-section")
      sections.forEach((section) => {
        observer.observe(section)
      })

      const animatedElements = document.querySelectorAll(".About-scroll-animate")
      animatedElements.forEach((el) => {
        observer.observe(el)
      })

      return () => {
        sections.forEach((section) => observer.unobserve(section))
        animatedElements.forEach((el) => observer.unobserve(el))
      }
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [statsAnimated])

  return (
    <div className="About-container">
      {/* Main Content Container - Now starts immediately */}
      <div className="About-main-content" style={{ marginTop: 0 }}>
        {/* Hero Section with Background Image */}
        <div className="About-hero-section About-scroll-section">
          <div className="About-hero-content">
            <div className="About-hero-text About-scroll-animate About-from-left">
              <h1 className="About-page-title">about us</h1>
              <div className="About-title-underline About-scroll-animate About-from-expand"></div>
              <h2 className="About-main-heading">Innovation Partner, providing intelligent automation solutions</h2>
              <p className="About-hero-description">
                We are a leading automation company specializing in creating intelligent devices that transform modern
                infrastructure and enhance connectivity across industries.
              </p>
              <NavLink to="/book-demo">
                <button className="About-cta-button About-scroll-animate About-from-bottom">GET IN TOUCH</button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* IOT & Data Acquisition Section */}
        {/* <section className="About-iot-section About-scroll-section">
          <div className="About-iot-container">
            <div className="About-iot-grid">
              <div className="About-iot-image-wrapper About-scroll-animate About-from-left">
                <div className="About-iot-image-container">
                  <img
                    src={about9 || "/placeholder.svg?height=240&width=400"}
                    alt="IoT Data Acquisition Systems"
                    className="About-iot-main-image"
                  />
                </div>
              </div>
              <div className="About-iot-content About-scroll-animate About-from-right">
                <div className="About-iot-badge">WHAT WE ARE DOING</div>
                <h2 className="About-iot-title">IOT & Data Acquisition Systems</h2>
                <p className="About-iot-description">
                  Our main products are into(IoT) remote Real Time Efficient energy management systems for Power
                  Distribution companies, Telecom Infra Companies. By combining business strategy and leading-edge
                  wireless and embedded cloud technologies, we are developing efficient and effective solutions that
                  keep businesses one-step ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="About-iot-bg-pattern About-iot-pattern-left"></div>
          <div className="About-iot-bg-pattern About-iot-pattern-right"></div>
        </section> */}

        {/* Stats Section - Blue Background, moved after journey */}
        {/* <div className="About-stats-section About-scroll-section" ref={statsRef}>
          <div className="About-stats-container">
            <div className="About-stats-header About-scroll-animate About-from-top">
              <h2 className="About-stats-main-title">
                Global Provider Of Product Engg And Electronics Manufacturing Services
              </h2>
            </div>
            <div className="About-stats-grid">
              <div
                className="About-stat-card About-scroll-animate About-from-bottom"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="About-stat-number About-rotating-number">{animatedStats.years}+</div>
                <div className="About-stat-label">Years of Experience</div>
              </div>
              <div
                className="About-stat-card About-scroll-animate About-from-bottom"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="About-stat-number About-rotating-number">{animatedStats.projects}+</div>
                <div className="About-stat-label">Projects Done</div>
              </div>
              <div
                className="About-stat-card About-scroll-animate About-from-bottom"
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="About-stat-number About-rotating-number">{animatedStats.cities}+</div>
                <div className="About-stat-label">Cities Served</div>
              </div>
              <div
                className="About-stat-card About-scroll-animate About-from-bottom"
                style={{ transitionDelay: "0.7s" }}
              >
                <div className="About-stat-number About-rotating-number">{animatedStats.success}%</div>
                <div className="About-stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Our Journey Section - Timeline Layout with Background */}
        <div className="About-journey-section About-scroll-section">
          <div className="About-journey-container">
            <div className="About-journey-header About-scroll-animate About-from-top">
              <h2 className="About-journey-title">Our Journey</h2>
              <p className="About-journey-subtitle">A decade of innovation in automation and infrastructure</p>
            </div>
            <div className="About-timeline-container">
              <div className="About-timeline-line"></div>

              <div
                className="About-timeline-item About-scroll-animate About-from-left"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-start"></div>
                <div className="About-timeline-content About-timeline-left">
                  <div className="About-timeline-year">2015</div>
                  <h3>Foundation & Early Vision</h3>
                  <p>
                    Started our journey with a vision to revolutionize automation technology and smart infrastructure
                    solutions.
                  </p>
                </div>
                <div className="About-timeline-image About-timeline-image-right">
                  <img src={about4 || "/placeholder.svg?height=200&width=300"} alt="Foundation" />
                </div>
              </div>

              <div
                className="About-timeline-item About-scroll-animate About-from-right"
                style={{ transitionDelay: "0.4s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-main"></div>
                <div className="About-timeline-image About-timeline-image-left">
                  <img src={lab1 || "/placeholder.svg?height=200&width=300"} alt="Automation Excellence" />
                </div>
                <div className="About-timeline-content About-timeline-right">
                  <div className="About-timeline-year">2015-present</div>
                  <h3>Automation Excellence</h3>
                  <p>
                    Spent 10+ years mastering automation solutions, developing intelligent devices for smart cities,
                    CCMS, ITMS, and advanced motor controllers.
                  </p>
                  <div className="About-timeline-stats">
                    <div className="About-stat-item">
                      <span className="About-stat-number">10+</span>
                      <span className="About-stat-label">Years in Automation</span>
                    </div>
                    <div className="About-stat-item">
                      <span className="About-stat-number">100+</span>
                      <span className="About-stat-label">Automation Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="About-timeline-item About-scroll-animate About-from-left"
                style={{ transitionDelay: "0.6s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-expansion"></div>
                <div className="About-timeline-content About-timeline-left">
                  <div className="About-timeline-year">2022</div>
                  <h3>EPC Services Expansion</h3>
                  <p>
                    Expanded into EPC (Engineering, Procurement, Construction) services, focusing on electrical
                    substations and solar energy solutions.
                  </p>
                </div>
                <div className="About-timeline-image About-timeline-image-right">
                  <img src={sub1 || "/placeholder.svg?height=200&width=300"} alt="EPC Services" />
                </div>
              </div>

              <div
                className="About-timeline-item About-scroll-animate About-from-right"
                style={{ transitionDelay: "0.8s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-current"></div>
                <div className="About-timeline-image About-timeline-image-left">
                  <img src={solar1 || "/placeholder.svg?height=200&width=300"} alt="Solar Solutions" />
                </div>
                <div className="About-timeline-content About-timeline-right">
                  <div className="About-timeline-year">2022-2024</div>
                  <h3>Infrastructure & Solar Solutions</h3>
                  <p>
                    Successfully delivering comprehensive EPC services for substations and solar installations,
                    combining our automation expertise with power infrastructure development.
                  </p>
                </div>
              </div>

              {/* New Smart Meters Timeline Item */}
              <div
                className="About-timeline-item About-scroll-animate About-from-left"
                style={{ transitionDelay: "1s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-smart-meters"></div>
                <div className="About-timeline-content About-timeline-left">
                  <div className="About-timeline-year">2024-2025</div>
                  <h3>Smart Meters & BIS Certification</h3>
                  <p>
                    Developed advanced smart metering solutions and successfully secured BIS (Bureau of Indian
                    Standards) certification in 2025, reinforcing our commitment to quality, compliance, and trust in
                    the energy sector.
                  </p>
                  <div className="About-timeline-highlight">
                    <span className="About-certification-badge">BIS Certified 2025</span>
                  </div>
                </div>
                <div className="About-timeline-image About-timeline-image-right">
                  <img src={smart || "/placeholder.svg?height=200&width=300"} alt="Smart Meters BIS Certification" />
                </div>
              </div>

              {/* Separate Future Vision Timeline Item */}
              <div
                className="About-timeline-item About-scroll-animate About-from-right"
                style={{ transitionDelay: "1.2s" }}
              >
                <div className="About-timeline-dot About-timeline-dot-future"></div>
                <div className="About-timeline-image About-timeline-image-left">
                  <img src={products2 || "/placeholder.svg?height=200&width=300"} alt="Future Innovation" />
                </div>
                <div className="About-timeline-content About-timeline-right">
                  <div className="About-timeline-year">2025+</div>
                  <h3>Future Vision & Innovation</h3>
                  <p>
                    Looking ahead, we continue to innovate and expand our integrated solutions across smart
                    infrastructure, renewable energy, and automation. Our goal is to drive sustainable growth and
                    digital transformation for the future of connected cities and communities.
                  </p>
                  <div className="About-future-goals">
                    <div className="About-goal-item">
                      <span className="About-goal-icon">🌱</span>
                      <span>Sustainable Energy Solutions</span>
                    </div>
                    <div className="About-goal-item">
                      <span className="About-goal-icon">🏙️</span>
                      <span>Smart City Integration</span>
                    </div>
                    <div className="About-goal-item">
                      <span className="About-goal-icon">⚡</span>
                      <span>Advanced Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Vision & Values Section */}
        <div className="About-vision-section About-scroll-section">
          <div className="About-vision-container">
            <div className="About-vision-header About-scroll-animate About-from-top">
              <h2 className="About-vision-main-title">Our Vision</h2>
            </div>
            <div className="About-vision-grid">
              <div
                className="About-vision-card About-scroll-animate About-from-left"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="About-vision-icon">
                  <Target size={28} />
                </div>
                <h3>Leading Through R&D</h3>
                <p>
                  Our goal is to be a trusted leader in smart energy and automation solutions, with a strong foundation
                  in research and development.
                </p>
              </div>
              <div
                className="About-vision-card About-scroll-animate About-from-bottom"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="About-vision-icon">
                  <Globe size={28} />
                </div>
                <h3>Expanding Our Reach</h3>
                <p>
                  We aim to extend our impact across urban and rural sectors, delivering scalable and reliable
                  infrastructure solutions across regions.
                </p>
              </div>
              <div
                className="About-vision-card About-scroll-animate About-from-right"
                style={{ transitionDelay: "0.5s" }}
              >
                <div className="About-vision-icon">
                  <Leaf size={28} />
                </div>
                <h3>Responsible Technology</h3>
                <p>
                  We focus on sustainable practices and energy-efficient solutions to reduce environmental impact and
                  support long-term growth.
                </p>
              </div>
            </div>

            <div className="About-values-section">
              <h2 className="About-values-title About-scroll-animate About-from-top">Our Values</h2>
              <div className="About-values-grid">
                <div
                  className="About-value-card About-scroll-animate About-from-left"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="About-value-icon About-innovation">
                    <Lightbulb size={20} />
                  </div>
                  <h4>Innovation</h4>
                  <p>
                    We continuously develop and refine technologies through in-house R&D to address real-world energy
                    and automation challenges.
                  </p>
                </div>
                <div
                  className="About-value-card About-scroll-animate About-from-bottom"
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div className="About-value-icon About-integrity">
                    <Shield size={20} />
                  </div>
                  <h4>Integrity</h4>
                  <p>
                    We operate with honesty and accountability—ensuring trust across our teams, partners, and customers.
                  </p>
                </div>
                <div
                  className="About-value-card About-scroll-animate About-from-right"
                  style={{ transitionDelay: "0.6s" }}
                >
                  <div className="About-value-icon About-compliance">
                    <Scale size={20} />
                  </div>
                  <h4>Standards & Compliance</h4>
                  <p>
                    All our solutions are built to meet Indian and international standards like BIS, IS, and IEC,
                    ensuring reliability and legal compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Culture Section */}
            <div className="About-culture-section">
              <h2 className="About-culture-title About-scroll-animate About-from-top">Our Culture</h2>
              <div className="About-culture-grid">
                <div
                  className="About-culture-card About-scroll-animate About-from-left"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="About-culture-icon">
                    <Users size={20} />
                  </div>
                  <h4>Team Collaboration</h4>
                  <p>
                    We foster a culture where knowledge sharing and teamwork drive product innovation and
                    problem-solving.
                  </p>
                </div>
                <div
                  className="About-culture-card About-scroll-animate About-from-bottom"
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div className="About-culture-icon">
                    <Award size={20} />
                  </div>
                  <h4>Engineering Excellence</h4>
                  <p>
                    Our focus is on delivering high-quality, technically sound solutions that meet the evolving needs of
                    energy infrastructure.
                  </p>
                </div>
                <div
                  className="About-culture-card About-scroll-animate About-from-right"
                  style={{ transitionDelay: "0.6s" }}
                >
                  <div className="About-culture-icon">
                    <Heart size={20} />
                  </div>
                  <h4>Purpose-Driven</h4>
                  <p>
                    We are passionate about creating technology that makes a practical difference in both urban and
                    rural communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Service Benefits Section */}
        <div className="About-services-section About-scroll-section">
          <div className="About-services-container">
            <div className="About-services-content">
              <div className="About-services-visual About-scroll-animate About-from-left">
                <div className="About-services-shape">
                  <div className="About-services-dots-pattern"></div>
                  <div className="About-services-image-container">
                    <img
                      src={products2 || "/placeholder.svg?height=120&width=180"}
                      alt="Technical team in data center"
                      className="About-services-image"
                    />
                  </div>
                </div>
              </div>
              <div className="About-services-text About-scroll-animate About-from-right">
                <div className="About-services-badge">OUR SERVICE BENEFITS</div>
                <h2 className="About-services-title">
                  "Keep your business safe by emphasizing quality and accountability."
                </h2>
                <p className="About-services-description">
                  Our key areas of focus encompass a wide range of sectors and technological domains. Here are the
                  primary domains where we direct our efforts:
                </p>
                <div className="About-services-accordion">
                  <div className="About-accordion-item">
                    <button
                      className={`About-accordion-header ${expandedSection === "focus" ? "About-active" : ""}`}
                      onClick={() => toggleSection("focus")}
                    >
                      <span>Our key areas of focus ?</span>
                      <div className="About-accordion-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d={expandedSection === "focus" ? "M4 10L8 6L12 10" : "M6 4L10 8L6 12"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className={`About-accordion-content ${expandedSection === "focus" ? "About-expanded" : ""}`}>
                      <p>
                        Telecom Infrastructure Management | Electrical Power Distribution | Green Energy Solution |
                        Aerospace Exploration | IoT and M2M Solutions | Advanced Metering Infrastructure | Railway
                        Technologies | Power Sector Innovation.
                      </p>
                    </div>
                  </div>
                  <div className="About-accordion-item">
                    <button
                      className={`About-accordion-header ${expandedSection === "strategy" ? "About-active" : ""}`}
                      onClick={() => toggleSection("strategy")}
                    >
                      <span>Our Go to Market Strategy?</span>
                      <div className="About-accordion-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d={expandedSection === "strategy" ? "M4 10L8 6L12 10" : "M6 4L10 8L6 12"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div
                      className={`About-accordion-content ${expandedSection === "strategy" ? "About-expanded" : ""}`}
                    >
                      <p>
                        We focus on strategic partnerships, direct client engagement, and innovative solution delivery.
                        Our approach combines market research, customer-centric design, and agile implementation to
                        ensure successful project outcomes and long-term client relationships.
                      </p>
                    </div>
                  </div>
                  <div className="About-accordion-item">
                    <button
                      className={`About-accordion-header ${expandedSection === "matter" ? "About-active" : ""}`}
                      onClick={() => toggleSection("matter")}
                    >
                      <span>Why does our work matter?</span>
                      <div className="About-accordion-icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d={expandedSection === "matter" ? "M4 10L8 6L12 10" : "M6 4L10 8L6 12"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className={`About-accordion-content ${expandedSection === "matter" ? "About-expanded" : ""}`}>
                      <p>
                        Our work drives digital transformation in critical infrastructure, enhances operational
                        efficiency, and contributes to sustainable development. We're building the foundation for smart
                        cities and connected communities that improve quality of life for millions of people worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="About-contact-cta-section About-scroll-section">
          <div className="About-contact-cta-container">
            <div className="About-contact-cta-content About-scroll-animate About-from-scale">
              <h2>Ready to Transform Your Infrastructure?</h2>
              <p>Let's discuss how our automation and EPC solutions can drive your next project forward.</p>
              <div className="About-cta-buttons">
                <NavLink to="/book-demo">
                  <button className="About-cta-button About-primary">Get Started</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}