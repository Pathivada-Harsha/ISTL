"use client"
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import "../../components_css/epc/power_td.css"
import td1 from "../../images/power_td/power_td1.png"
import td2 from "../../images/power_td/power_td2.png"
import td3 from "../../images/power_td/power_td3.png"
import td4 from "../../images/power_td/power_td4.png"
import td5 from "../../images/power_td/power_td5.png"
import td6 from "../../images/power_td/power_td6.png"


const PowerTDPage = () => {
  const powertdHeroRef = useRef(null)
  const powertdCardsRef = useRef(null)
  const powertdProductRef = useRef(null)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [flippedCards, setFlippedCards] = useState({})

  // Preload images for better performance
  useEffect(() => {
    const imageUrls = [td1, td2, td3, td4, td5, td6]
    const loadPromises = imageUrls.map((url, index) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => {
          setImagesLoaded((prev) => ({ ...prev, [index]: true }))
          resolve()
        }
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`)
          resolve()
        }
        img.src = url
      })
    })

    Promise.all(loadPromises).then(() => {
      console.log("All images preloaded")
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("powertd-animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (powertdHeroRef.current) observer.observe(powertdHeroRef.current)
    if (powertdCardsRef.current) observer.observe(powertdCardsRef.current)
    if (powertdProductRef.current) observer.observe(powertdProductRef.current)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  // Handle card flip for mobile/tablet devices only
  const handleCardClick = (cardId) => {
    // Only handle clicks on mobile/tablet screens
    if (window.innerWidth <= 1024) {
      setFlippedCards((prev) => ({
        ...prev,
        [cardId]: !prev[cardId],
      }))
    }
  }

  // Handle keyboard navigation
  const handleCardKeyDown = (e, cardId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      // Only handle keyboard on mobile/tablet screens
      if (window.innerWidth <= 1024) {
        handleCardClick(cardId)
      }
    }
  }

  // Network card data
  const networkCards = [
    {
      id: "transmission",
      title: "Transmission Network",
      subtitle: "High-voltage power transmission infrastructure",
      image: td3,
      features: [
        "400kV & 765kV transmission lines for long-distance power transfer",
        "Grid substations & switching stations for network control",
        "HVDC transmission systems for efficient bulk power transfer",
        "Power system protection & control for grid stability",
        "Grid synchronization & stability management systems",
        "Real-time monitoring and fault detection capabilities",
      ],
    },
    {
      id: "distribution",
      title: "Distribution Network",
      subtitle: "Efficient power distribution to end consumers",
      image: td5,
      features: [
        "11kV & 33kV distribution systems for local power delivery",
        "Distribution transformers for voltage step-down operations",
        "Smart grid technologies for intelligent power management",
        "Load management systems for optimal power distribution",
        "Consumer connection services and last-mile connectivity",
        "Advanced metering infrastructure for real-time monitoring",
      ],
    },
  ]

  return (
    <div className="powertd-page">
      {/* Hero Section */}
      <section className="powertd-hero" ref={powertdHeroRef}>
        <div className="powertd-hero-background">
          <div className="powertd-gradient-orb powertd-orb-1"></div>
          <div className="powertd-gradient-orb powertd-orb-2"></div>
          <div className="powertd-gradient-orb powertd-orb-3"></div>
        </div>
        <div className="powertd-container">
          <div className="powertd-hero-content">
            <div className="powertd-hero-badge">
              <span>⚡ Power Infrastructure Excellence</span>
            </div>
            <h1 className="powertd-hero-title">
              Next-Generation
              <span className="powertd-gradient-text"> Power T&D </span>
              Solutions
            </h1>
            <p className="powertd-hero-description">
              Revolutionizing electrical infrastructure with cutting-edge transmission and distribution technologies.
              Building the smart grid of tomorrow, today.
            </p>
            <div className="powertd-hero-buttons">
              <NavLink to="/book-demo">
                <button className="powertd-btn-primary">
                  <span>Contact Us</span>
                  <div className="powertd-btn-glow"></div>
                </button>
              </NavLink>

            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="powertd-product-section" ref={powertdProductRef}>
        <div className="powertd-container">
          <div className="powertd-product-content">
            <div className="powertd-product-text">
              <div className="powertd-product-badge">Product Overview</div>
              <h2 className="powertd-product-title">
                Power T&D
                <span className="powertd-gradient-text"> Services</span>
              </h2>
              <p className="powertd-product-description">
                ISTL is one of the prominent players in the energy sector, offering comprehensive solutions across Power
                Transmission, Distribution, and Substations.
              </p>
              <p className="powertd-product-description">
                As a trusted industry partner, ISTL delivers end-to-end services including in-house design, testing,
                procurement, fabrication, erection, installation, and commissioning of transmission lines and
                substations.
              </p>
              <div className="powertd-product-features">
                <div className="powertd-feature-item">
                  <div className="powertd-feature-check">✓</div>
                  <span>Complete end-to-end power transmission solutions</span>
                </div>
                <div className="powertd-feature-item">
                  <div className="powertd-feature-check">✓</div>
                  <span>Professional installation and commissioning services</span>
                </div>
              </div>
            </div>
            <div className="powertd-product-image">
              <img
                src={td2 || "/placeholder.svg"}
                alt="Power T&D Infrastructure"
                loading="eager"
                style={{
                  opacity: imagesLoaded[1] ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
                onLoad={() => setImagesLoaded((prev) => ({ ...prev, [1]: true }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Networks Section */}
      <section className="powertd-networks-section" ref={powertdCardsRef}>
        <div className="powertd-container">
          <div className="powertd-section-header">
            <div className="powertd-section-badge">Our Core Networks</div>
            <h2 className="powertd-section-title">
              Powering the Future with
              <span className="powertd-gradient-text"> Advanced Infrastructure</span>
            </h2>
            <p className="powertd-section-description">
              Discover our comprehensive transmission and distribution capabilities designed for the modern world
            </p>
          </div>
          <div className="powertd-networks-grid">
            {networkCards.map((card, index) => (
              <div
                key={card.id}
                className={`powertd-network-card ${flippedCards[card.id] ? "flipped" : ""}`}
                onClick={() => window.innerWidth <= 1024 && handleCardClick(card.id)}
                onKeyDown={(e) => window.innerWidth <= 1024 && handleCardKeyDown(e, card.id)}
                tabIndex={window.innerWidth <= 1024 ? 0 : -1}
                role={window.innerWidth <= 1024 ? "button" : undefined}
                aria-label={window.innerWidth <= 1024 ? `${card.title} - Click to view details` : card.title}
              >
                <div className="powertd-card-inner">
                  <div className="powertd-card-front">
                    <div className="powertd-card-background">
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        loading="lazy"
                        style={{
                          opacity: imagesLoaded[index + 2] ? 1 : 0,
                          transition: "opacity 0.3s ease",
                        }}
                        onLoad={() => setImagesLoaded((prev) => ({ ...prev, [index + 2]: true }))}
                      />
                      <div className="powertd-card-overlay"></div>
                    </div>
                    <div className="powertd-card-content-overlay">
                      <h3 className="powertd-card-title">{card.title}</h3>
                      <p className="powertd-card-subtitle">{card.subtitle}</p>
                    </div>
                  </div>
                  <div className="powertd-card-back">
                    <div className="powertd-card-back-content">
                      <h3>{card.title}</h3>
                      <div className="powertd-content-lines">
                        {card.features.map((feature, featureIndex) => (
                          <p key={featureIndex}>{feature}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="powertd-features-section">
        <div className="powertd-container">
          <div className="powertd-features-grid">
            <div className="powertd-feature-card">
              <div className="powertd-feature-icon-wrapper">
                <div className="powertd-feature-icon-bg"></div>
                <span className="powertd-feature-icon">🚀</span>
              </div>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art equipment and smart grid technologies for optimal performance</p>
            </div>
            <div className="powertd-feature-card">
              <div className="powertd-feature-icon-wrapper">
                <div className="powertd-feature-icon-bg"></div>
                <span className="powertd-feature-icon">⚡</span>
              </div>
              <h3>99.9% Reliability</h3>
              <p>Guaranteed uptime with robust infrastructure and redundant systems</p>
            </div>
            <div className="powertd-feature-card">
              <div className="powertd-feature-icon-wrapper">
                <div className="powertd-feature-icon-bg"></div>
                <span className="powertd-feature-icon">🌱</span>
              </div>
              <h3>Sustainable Solutions</h3>
              <p>Eco-friendly technologies reducing carbon footprint and environmental impact</p>
            </div>
            <div className="powertd-feature-card">
              <div className="powertd-feature-icon-wrapper">
                <div className="powertd-feature-icon-bg"></div>
                <span className="powertd-feature-icon">📊</span>
              </div>
              <h3>Real-time Monitoring</h3>
              <p>24/7 system monitoring with predictive maintenance and fault detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="powertd-stats-section">
        <div className="powertd-container">
          <div className="powertd-stats-grid">
            {/* <div className="powertd-stat-item">
              <div className="powertd-stat-number">70+</div>
              <div className="powertd-stat-label">Transmission Line Length (km)</div>
            </div> */}
            <div className="powertd-stat-item">
              <div className="powertd-stat-number">6+</div>
              <div className="powertd-stat-label">Substations</div>
            </div>
            <div className="powertd-stat-item">
              <div className="powertd-stat-number">99.9%</div>
              <div className="powertd-stat-label">System Availability</div>
            </div>
            <div className="powertd-stat-item">
              <div className="powertd-stat-number">24/7</div>
              <div className="powertd-stat-label">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="powertd-contact-section">
        <div className="powertd-container">
          <div className="powertd-contact-content">
            <div className="powertd-contact-info">
              <div className="powertd-section-badge">Get In Touch</div>
              <h2 className="powertd-contact-title">
                Ready to Power Your
                <span className="powertd-gradient-text"> Future?</span>
              </h2>
              <p className="powertd-contact-description">
                Connect with our experts to discuss your power transmission and distribution needs. We're here to
                provide customized solutions for your infrastructure requirements.
              </p>
              <div className="powertd-contact-features">
                <div className="powertd-contact-feature">
                  <span className="powertd-contact-icon">📞</span>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock technical assistance</p>
                  </div>
                </div>
                <div className="powertd-contact-feature">
                  <span className="powertd-contact-icon">⚡</span>
                  <div>
                    <h4>Quick Response</h4>
                    <p>Fast turnaround on project inquiries</p>
                  </div>
                </div>
                <div className="powertd-contact-feature">
                  <span className="powertd-contact-icon">🎯</span>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>Tailored to your specific requirements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="powertd-contact-form-wrapper">
              <form className="powertd-contact-form" onSubmit={handleSubmit}>
                <div className="powertd-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="powertd-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="powertd-form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>
                <div className="powertd-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="powertd-form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="transmission">Transmission Network</option>
                    <option value="distribution">Distribution Network</option>
                    <option value="substations">Substations</option>
                    <option value="underground">Underground Cabling</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div className="powertd-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="powertd-form-submit">
                  <span>Send Message</span>
                  <div className="powertd-btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PowerTDPage
