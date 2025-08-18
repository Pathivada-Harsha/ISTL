"use client"
import "../../components_css/agdsm.css"
import { useState, useEffect } from "react"
import ProgrammeGallery from "./ProgrammeGallery"
// import agdsm2 from "../../images/mcms/mcms5.JPG"
import agdsm4 from "../../images/mcms/mcms7.jpg"
import agdsm9 from "../../images/Agdsm/agdsm7.jpg"
import agdsm15 from "../../images/Agdsm/agdsm13.jpg"
import agdsm17 from "../../images/Agdsm/agdsm17.jpg"
import agdsm19 from "../../images/Agdsm/agdsm19.jpg"
import agdsm26 from "../../images/Agdsm/agdsm26.jpg"


const AgDSMPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [activeTab, setActiveTab] = useState("overview")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [showAllGalleryImages, setShowAllGalleryImages] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const sections = document.querySelectorAll("[data-section]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % awarenessProgrammeImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const keyFeatures = [
    {
      icon: "📱",
      title: "MCMS - Motor Control Monitoring",
      description:
        "IoT-based Motor Control Monitoring System with remote on/off control, timer settings, and voltage adjustment through mobile app interface.",
      color: "#22c55e",
    },
    {
      icon: "⚡",
      title: "ITMS - Transformer Monitoring",
      description:
        "Intelligent Transformer Monitoring System with real-time data on temperature, voltage, current, and load parameters.",
      color: "#f59e0b",
    },
    {
      icon: "🛡️",
      title: "Automatic Protection",
      description: "Advanced voltage spike detection and automatic motor shutdown to prevent damage and ensure safety.",
      color: "#3b82f6",
    },
    {
      icon: "☁️",
      title: "Cloud Platform",
      description: "Centralized cloud platform for remote monitoring, data analytics, and performance reporting.",
      color: "#8b5cf6",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description:
        "Machine learning algorithms for predictive maintenance, pattern recognition, and efficiency optimization.",
      color: "#ef4444",
    },
    {
      icon: "🔧",
      title: "Predictive Maintenance",
      description: "Early fault detection and maintenance alerts to prevent costly repairs and reduce downtime.",
      color: "#06b6d4",
    },
  ]

  const statistics = [
    { number: "100+", label: "Farmers Trained", icon: "👨‍🌾" },
    { number: "10", label: "MCMS Devices Installed", icon: "📱" },
    { number: "2", label: "ITMS Systems", icon: "⚡" },
    { number: "30%", label: "Energy Savings", icon: "💡" },
  ]
  const statistics1 = [
    { number: "50,000+", label: "Farmers Benefited", icon: "👨‍🌾" },
    { number: "30%", label: "Energy Savings", icon: "⚡" },
    { number: "25,000", label: "Solar Pumps Installed", icon: "☀️" },
    { number: "₹500Cr", label: "Subsidy Provided", icon: "💰" },
  ]

  const awarenessProgrammeImages = [
    {
      id: 1,
      title: "Training Session in Devagiripatnam",
      description:
        "Two-day comprehensive training program with 100+ farmers learning about MCMS and ITMS technologies.",
      image: agdsm9,
    },
    {
      id: 2,
      title: "MCMS Installation Demo",
      description: "Hands-on demonstration of Motor Control Monitoring System installation and smartphone app setup.",
      image: agdsm17,
    },
    {
      id: 3,
      title: "ITMS System Setup",
      description: "Installation and commissioning of Transformer Monitoring Systems for efficient power management.",
      image: agdsm15,
    },
    {
      id: 4,
      title: "App Training Workshop",
      description: "Detailed training on mobile app usage for remote monitoring and control of agricultural motors.",
      image: agdsm19,
    },
    {
      id: 5,
      title: "Certificate Distribution",
      description: "Handing over IoT-based motor starter certificates to participating farmers in the program.",
      image: agdsm26,
    },
    {
      id: 6,
      title: "Field Monitoring Setup",
      description: "Google Maps integration for real-time tracking and monitoring of installed IoT devices.",
      image: agdsm4,
    },
  ]

  const benefits = [
    "Remote motor control via smartphone app",
    "Automatic voltage spike protection",
    "Real-time performance monitoring",
    "Reduced electricity bills up to 30%",
    "Predictive maintenance alerts",
    "Cloud-based data analytics",
    "24/7 technical support",
    "Government-sponsored program",
  ]

  const tabContent = {
    overview: {
      title: "Programme Overview",
      content:
        "The Agricultural Demand Side Management (AgDSM) Programme in Devagiripatnam was a pioneering initiative by TSREDCO with BEE support. This two-day training and demonstration program successfully engaged 100+ farmers, installing 10 MCMS devices and 2 ITMS systems. The program focused on IoT-based motor control and transformer monitoring to enhance energy efficiency and agricultural productivity.",
    },
    mcms: {
      title: "MCMS Technology",
      content:
        "Motor Control Monitoring System (MCMS) is an advanced IoT device connected to agricultural motors with smartphone app interface. Features include remote on/off control, timer settings, voltage adjustment, automatic spike protection, and cloud-based monitoring. The system ensures motor safety and optimal performance while reducing energy costs.",
    },
    itms: {
      title: "ITMS Technology",
      content:
        "Intelligent Transformer Monitoring System (ITMS) incorporates sensors for real-time monitoring of temperature, voltage, current, and load parameters. The system uses machine learning algorithms for predictive maintenance, pattern recognition, and efficiency optimization, helping prevent transformer breakdowns and improve operational efficiency.",
    },
    support: {
      title: "Technical Support",
      content:
        "Comprehensive support by iScientific TechSolutions Labs including device installation, app setup, farmer training, and ongoing monitoring. The program includes printed media coverage, Google Maps device tracking, certificate distribution, and detailed performance analysis to ensure successful implementation.",
    },
  }

  const ourWork = [
    {
      icon: "🔬",
      title: "Technology Development",
      description: "Developed cutting-edge IoT solutions for agricultural motor control and transformer monitoring",
      achievements: ["Custom MCMS Design", "ITMS Innovation", "Mobile App Development"],
    },
    {
      icon: "🎓",
      title: "Farmer Training",
      description: "Conducted comprehensive training programs for 100+ farmers in Devagiripatnam",
      achievements: ["2-Day Workshop", "Hands-on Training", "Certificate Program"],
    },
    {
      icon: "⚙️",
      title: "System Installation",
      description: "Successfully installed and commissioned 10 MCMS and 2 ITMS systems",
      achievements: ["Professional Setup", "Quality Testing", "Performance Optimization"],
    },
    {
      icon: "📊",
      title: "Monitoring & Analytics",
      description: "Implemented cloud-based monitoring with real-time analytics and reporting",
      achievements: ["Cloud Platform", "Data Analytics", "Performance Reports"],
    },
  ]

  return (
    <div className={`agdsm-page ${isLoaded ? "loaded" : ""}`}>
      {/* Hero Section */}
      <section className="agdsm-hero">
        <div className="agdsm-hero-background">
          <div className="agdsm-hero-overlay"></div>
        </div>
        <div className="agdsm-container">
          <div className="agdsm-hero-content">
            <div className="agdsm-hero-badge animate-fade-in">
              <span className="agdsm-badge-icon">🌾</span>
              <span className="agdsm-badge-text">TSREDCO × BEE × iScientific TechSolutions</span>
            </div>
            <h1 className="agdsm-hero-title ">
              Agricultural Demand Side Management
              <span className="agdsm-highlight"> Programme</span>
            </h1>
            <p className="agdsm-hero-subtitle animate-slide-up delay-1">
              Pioneering IoT-based motor control and transformer monitoring systems for enhanced energy efficiency in
              agriculture. Successfully implemented in Devagiripatnam with 100+ farmers benefiting from advanced MCMS
              and ITMS technologies.
            </p>
            {/* <div className="agdsm-hero-buttons animate-slide-up delay-2">
              <button className="agdsm-btn agdsm-btn-primary">
                View Programme Details
                <span className="agdsm-btn-arrow">→</span>
              </button>
              <button className="agdsm-btn agdsm-btn-secondary">
                Download Report
                <span className="agdsm-btn-icon">📄</span>
              </button>
            </div> */}
          </div>
        </div>
        <div className="agdsm-hero-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
      </section>

      {/* What is AgDSM Section */}
      <section className="agdsm-what-is" data-section="what-is">
        <div className="agdsm-container">
          <div className={`agdsm-what-is-content ${visibleSections.has("what-is") ? "agdsm-animate-in" : ""}`}>
            <div className="agdsm-section-header agdsm-center">
              <div className="agdsm-section-badge">
                <span className="agdsm-badge-dot"></span>
                UNDERSTANDING AGDSM
              </div>
              <h2 className="agdsm-section-title">What is Agricultural Demand Side Management?</h2>
            </div>

            <div className="agdsm-what-is-grid">
              <div className="agdsm-what-is-text">
                <p className="agdsm-large-text">
                  Agricultural Demand Side Management (AgDSM) is a comprehensive approach to optimize energy consumption
                  in the agricultural sector through advanced technology, efficient practices, and smart monitoring
                  systems.
                </p>
                <div className="agdsm-agdsm-points">
                  <div className="agdsm-point">
                    <div className="agdsm-point-icon">🎯</div>
                    <div className="agdsm-point-content">
                      <h4>Energy Optimization</h4>
                      <p>Reducing energy consumption while maintaining or improving agricultural productivity</p>
                    </div>
                  </div>
                  <div className="agdsm-point">
                    <div className="agdsm-point-icon">💡</div>
                    <div className="agdsm-point-content">
                      <h4>Smart Technology</h4>
                      <p>IoT-based monitoring and control systems for intelligent farm management</p>
                    </div>
                  </div>
                  <div className="agdsm-point">
                    <div className="agdsm-point-icon">🌱</div>
                    <div className="agdsm-point-content">
                      <h4>Sustainable Practices</h4>
                      <p>Promoting environmentally friendly and economically viable farming methods</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="agdsm-what-is-visual">
                <div className="agdsm-floating-card">
                  <div className="agdsm-card-icon">⚡</div>
                  <h3>Energy Efficiency</h3>
                  <p>Up to 30% reduction in energy consumption</p>
                </div>
                <div className="agdsm-floating-card delay-1">
                  <div className="agdsm-card-icon">📱</div>
                  <h3>Smart Control</h3>
                  <p>Remote monitoring and control capabilities</p>
                </div>
                <div className="agdsm-floating-card delay-2">
                  <div className="agdsm-card-icon">💰</div>
                  <h3>Cost Savings</h3>
                  <p>Significant reduction in operational costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="agdsm-stats" data-section="stats">
        <div className="agdsm-container">
          <div className={`agdsm-stats-grid ${visibleSections.has("stats") ? "agdsm-animate-in" : ""}`}>
            {statistics1.map((stat, index) => (
              <div key={index} className="agdsm-stat-card" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="agdsm-stat-icon">{stat.icon}</div>
                <div className="agdsm-stat-number">{stat.number}</div>
                <div className="agdsm-stat-label">{stat.label}</div>
                <div className="agdsm-stat-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="agdsm-our-work" data-section="our-work">
        <div className="agdsm-container">
          <div className="agdsm-section-header agdsm-center">
            <div className="agdsm-section-badge">
              <span className="agdsm-badge-dot"></span>
              OUR CONTRIBUTION
            </div>
            <h2 className="agdsm-section-title">iScientific TechSolutions' Role in AgDSM</h2>
            <p className="agdsm-section-description">
              As the technology implementation partner, we developed, deployed, and managed the complete IoT ecosystem
              for the Devagiripatnam AgDSM programme, ensuring seamless integration and farmer adoption.
            </p>
          </div>

          <div className={`agdsm-our-work-grid ${visibleSections.has("our-work") ? "agdsm-animate-in" : ""}`}>
            {ourWork.map((work, index) => (
              <div key={index} className="agdsm-work-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="agdsm-work-header">
                  <div className="agdsm-work-icon">{work.icon}</div>
                  <h3 className="agdsm-work-title">{work.title}</h3>
                </div>
                <p className="agdsm-work-description">{work.description}</p>
                <div className="agdsm-work-achievements">
                  {work.achievements.map((achievement, idx) => (
                    <span key={idx} className="agdsm-achievement-tag">
                      ✓ {achievement}
                    </span>
                  ))}
                </div>
                <div className="agdsm-work-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="agdsm-about" data-section="about">
        <div className="agdsm-container">
          <div className="agdsm-about-layout">
            <div className="agdsm-about-content">
              <div className="agdsm-section-header">
                <div className="agdsm-section-badge">
                  <span className="agdsm-badge-dot"></span>
                  PROGRAMME DETAILS
                </div>
                <h2 className="agdsm-section-title">Devagiripatnam Success Story</h2>
                <p className="agdsm-section-description">
                  A groundbreaking initiative by Telangana State Renewable Energy Development Corporation (TSREDCO) in
                  partnership with Bureau of Energy Efficiency (BEE) and implemented by iScientific TechSolutions Labs.
                </p>
              </div>

              <div className="agdsm-tabs">
                <div className="agdsm-tab-buttons">
                  {Object.keys(tabContent).map((tab) => (
                    <button
                      key={tab}
                      className={`agdsm-tab-btn ${activeTab === tab ? "active" : ""}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tabContent[tab].title}
                    </button>
                  ))}
                </div>
                <div className="agdsm-tab-content">
                  <h3>{tabContent[activeTab].title}</h3>
                  <p>{tabContent[activeTab].content}</p>
                </div>
              </div>
            </div>

            <div className="agdsm-about-visual">
              <div className="agdsm-benefits-list">
                <h3>Programme Benefits</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="agdsm-benefit-item" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="agdsm-benefit-check">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="agdsm-features" data-section="features">
        <div className="agdsm-container">
          <div className="agdsm-section-header agdsm-center">
            <div className="agdsm-section-badge">
              <span className="agdsm-badge-dot"></span>
              TECHNOLOGY FEATURES
            </div>
            <h2 className="agdsm-section-title">MCMS & ITMS Systems</h2>
            <p className="agdsm-section-description">
              Advanced IoT-based monitoring and control systems designed to revolutionize agricultural energy management
              through smart technology and real-time analytics.
            </p>
          </div>

          <div className={`agdsm-features-grid ${visibleSections.has("features") ? "agdsm-animate-in" : ""}`}>
            {keyFeatures.map((feature, index) => (
              <div key={index} className="agdsm-feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="agdsm-feature-icon" style={{ backgroundColor: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="agdsm-feature-title">{feature.title}</h3>
                <p className="agdsm-feature-description">{feature.description}</p>
                <div className="agdsm-feature-arrow" style={{ color: feature.color }}>
                  →
                </div>
                <div className="agdsm-feature-glow" style={{ backgroundColor: feature.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Training & Demonstration Section */}
      <section className="agdsm-training" data-section="training">
        <div className="agdsm-container">
          <div className="agdsm-section-header agdsm-center">
            <div className="agdsm-section-badge">
              <span className="agdsm-badge-dot"></span>
              TRAINING & DEMONSTRATION
            </div>
            <h2 className="agdsm-section-title">Devagiripatnam Programme Activities</h2>
            <p className="agdsm-section-description">
              Comprehensive two-day training and demonstration program conducted in Devagiripatnam village, featuring
              hands-on training, device installation, and farmer education on IoT-based agricultural technologies.
            </p>
          </div>

          <div className={`agdsm-training-content ${visibleSections.has("training") ? "agdsm-animate-in" : ""}`}>
            <div className="agdsm-training-showcase">
              <div className="agdsm-showcase-main">
                <div className="agdsm-main-image-container">
                  <div className="agdsm-main-image">
                    <img
                      src={awarenessProgrammeImages[currentImageIndex].image || "/placeholder.svg"}
                      alt={awarenessProgrammeImages[currentImageIndex].title}
                    />
                    <div className="agdsm-image-badge">
                      <span className="agdsm-badge-number">{currentImageIndex + 1}</span>
                      <span className="agdsm-badge-total">/ {awarenessProgrammeImages.length}</span>
                    </div>
                    <div className="agdsm-image-navigation">
                      <button
                        className="agdsm-nav-btn agdsm-nav-prev"
                        onClick={() =>
                          setCurrentImageIndex((prev) => (prev === 0 ? awarenessProgrammeImages.length - 1 : prev - 1))
                        }
                      >
                        ←
                      </button>
                      <button
                        className="agdsm-nav-btn agdsm-nav-next"
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % awarenessProgrammeImages.length)}
                      >
                        →
                      </button>
                    </div>
                  </div>
                  <div className="agdsm-image-info">
                    <h3>{awarenessProgrammeImages[currentImageIndex].title}</h3>
                    <p>{awarenessProgrammeImages[currentImageIndex].description}</p>
                    <div className="agdsm-progress-indicators">
                      {awarenessProgrammeImages.map((_, index) => (
                        <div
                          key={index}
                          className={`agdsm-progress-dot ${index === currentImageIndex ? "active" : ""}`}
                          onClick={() => setCurrentImageIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="agdsm-showcase-stats">
                  <div className="agdsm-training-stats">
                    <h3>Programme Impact</h3>
                    <div className="agdsm-impact-grid">
                      <div className="agdsm-impact-item">
                        <div className="agdsm-impact-icon">👨‍🌾</div>
                        <div className="agdsm-impact-number">100+</div>
                        <div className="agdsm-impact-label">Farmers Trained</div>
                      </div>
                      <div className="agdsm-impact-item">
                        <div className="agdsm-impact-icon">📅</div>
                        <div className="agdsm-impact-number">2</div>
                        <div className="agdsm-impact-label">Days Program</div>
                      </div>
                      <div className="agdsm-impact-item">
                        <div className="agdsm-impact-icon">📱</div>
                        <div className="agdsm-impact-number">10</div>
                        <div className="agdsm-impact-label">MCMS Installed</div>
                      </div>
                      <div className="agdsm-impact-item">
                        <div className="agdsm-impact-icon">⚡</div>
                        <div className="agdsm-impact-number">2</div>
                        <div className="agdsm-impact-label">ITMS Systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="agdsm-full-width-timeline">
              <div className="agdsm-timeline-header">
                <h3>Training Timeline</h3>
                <p>Comprehensive 2-day program structure with hands-on learning and certification</p>
              </div>
              <div className="agdsm-horizontal-timeline">
                <div className="agdsm-timeline-step">
                  <div className="agdsm-timeline-circle">
                    <div className="agdsm-timeline-checkmark">✓</div>
                  </div>
                  <div className="agdsm-timeline-content">
                    <h4>Day 1 – Theory & Introduction</h4>
                    <p>AGDSM concepts, IoT technology overview, and system benefits</p>
                  </div>
                </div>

                <div className="agdsm-timeline-connector"></div>

                <div className="agdsm-timeline-step">
                  <div className="agdsm-timeline-circle">
                    <div className="agdsm-timeline-checkmark">✓</div>
                  </div>
                  <div className="agdsm-timeline-content">
                    <h4>Day 1 – Hands-on Training</h4>
                    <p>Mobile app installation, device setup, and basic operations</p>
                  </div>
                </div>

                <div className="agdsm-timeline-connector"></div>

                <div className="agdsm-timeline-step">
                  <div className="agdsm-timeline-circle">
                    <div className="agdsm-timeline-checkmark">✓</div>
                  </div>
                  <div className="agdsm-timeline-content">
                    <h4>Day 2 – Installation Demo</h4>
                    <p>Live MCMS and ITMS installation with farmer participation</p>
                  </div>
                </div>

                <div className="agdsm-timeline-connector"></div>

                <div className="agdsm-timeline-step">
                  <div className="agdsm-timeline-circle">
                    <div className="agdsm-timeline-checkmark">✓</div>
                  </div>
                  <div className="agdsm-timeline-content">
                    <h4>Day 2 – Certification</h4>
                    <p>Assessment, certificate distribution, and ongoing support setup</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="agdsm-activities-section">
              <h3>Key Training Activities</h3>

              <div className="agdsm-activities-grid">
                {/* Activity 1 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">🎓</div>
                    <h4>Comprehensive Training Sessions</h4>
                  </div>
                  <p>
                    In-depth education on MCMS and ITMS technologies with practical
                    demonstrations and Q&A sessions.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">Theory Sessions</span>
                    <span className="agdsm-feature-tag">Practical Demos</span>
                    <span className="agdsm-feature-tag">Q&amp;A Support</span>
                  </div>
                </div>

                {/* Activity 2 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">📱</div>
                    <h4>Mobile App Training</h4>
                  </div>
                  <p>
                    Step-by-step guidance on smartphone app installation, setup, and remote
                    motor control operations.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">App Installation</span>
                    <span className="agdsm-feature-tag">Remote Control</span>
                    <span className="agdsm-feature-tag">Troubleshooting</span>
                  </div>
                </div>

                {/* Activity 3 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">🔧</div>
                    <h4>Device Installation Workshop</h4>
                  </div>
                  <p>
                    Professional installation of 10 MCMS devices and 2 ITMS systems with
                    farmer participation and learning.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">Live Installation</span>
                    <span className="agdsm-feature-tag">Safety Training</span>
                    <span className="agdsm-feature-tag">Maintenance Tips</span>
                  </div>
                </div>

                {/* Activity 4 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">📜</div>
                    <h4>Certification Program</h4>
                  </div>
                  <p>
                    Assessment and certification process with IoT-based motor starter
                    certificates for all participants.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">Skills Assessment</span>
                    <span className="agdsm-feature-tag">Certificates</span>
                    <span className="agdsm-feature-tag">Recognition</span>
                  </div>
                </div>

                {/* Activity 5 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">📰</div>
                    <h4>Media &amp; Documentation</h4>
                  </div>
                  <p>
                    Programme coverage in printed media with distribution of informational
                    brochures and materials.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">Media Coverage</span>
                    <span className="agdsm-feature-tag">Brochures</span>
                    <span className="agdsm-feature-tag">Documentation</span>
                  </div>
                </div>

                {/* Activity 6 */}
                <div className="agdsm-activity-card">
                  <div className="agdsm-activity-header">
                    <div className="agdsm-activity-icon-large">🗺️</div>
                    <h4>GPS Tracking Setup</h4>
                  </div>
                  <p>
                    Google Maps integration for real-time monitoring and tracking of all
                    installed IoT devices.
                  </p>
                  <div className="agdsm-activity-features">
                    <span className="agdsm-feature-tag">GPS Integration</span>
                    <span className="agdsm-feature-tag">Real-time Tracking</span>
                    <span className="agdsm-feature-tag">Remote Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
            <ProgrammeGallery/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AgDSMPage

