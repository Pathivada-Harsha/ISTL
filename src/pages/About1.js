// import AboutUs from "../components/AboutUs"

// export default function About() {
//   return (
//     <div className="page-container">
//       <div className="page-header">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About ISTLabs</h1>
//           <p className="text-xl text-gray-600 max-w-3xl">
//             Discover our journey in revolutionizing automation technology and smart infrastructure solutions.
//           </p>
//         </div>
//       </div>
//       <AboutUs />

//       {/* IOT & Data Acquisition Section */}
//       <section className="iot-section">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left side - Image */}
//             <div className="relative">
//               <div className="iot-image-container">
//                 <img
//                   src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
//                   alt="IoT Data Acquisition Systems"
//                   className="iot-main-image"
//                 />
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="iot-content">
//               <div className="iot-badge">WHAT WE ARE DOING</div>
//               <h2 className="iot-title">"IOT & Data Acquisition Systems"</h2>
//               <p className="iot-description">
//                 Our main products are into(IoT) remote Real Time Efficient energy management systems for Power
//                 Distribution companies, Telecom Infra Companies. By combining business strategy and leading-edge
//                 wireless and embedded cloud technologies, we are developing efficient and effective solutions that keep
//                 businesses one-step ahead.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Background decorative elements */}
//         <div className="iot-bg-pattern iot-pattern-left"></div>
//         <div className="iot-bg-pattern iot-pattern-right"></div>
//       </section>

//       {/* Additional About Content */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-gray-600 mb-4">
//                 Founded with a vision to transform traditional infrastructure into intelligent, connected systems,
//                 ISTLabs has been at the forefront of automation technology for over a decade.
//               </p>
//               <p className="text-gray-600 mb-4">
//                 Our journey began with a simple belief: that technology should make life better, more efficient, and
//                 more sustainable. Today, we continue to push the boundaries of what's possible in automation.
//               </p>
//               <div className="grid grid-cols-2 gap-6 mt-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">2010</div>
//                   <div className="text-sm text-gray-600">Founded</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
//                   <div className="text-sm text-gray-600">Team Members</div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative h-96">
//               <img
//                 src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
//                 alt="Our Team"
//                 className="w-full h-full rounded-lg shadow-lg object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import "../components_css/pages_about1.css"
import ccms from "../images/ccms.png"
import smart from "../images/smart.png"
import epc from "../images/epc.png"



import { useEffect, useState, useRef } from "react"
 
// Import images (using placeholder URLs for demo)
const ccmsImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop";
const smartImage = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=400&fit=crop";
const epcImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=500&h=500&fit=crop";
export default function AboutUs1() {
const [showPresence, setShowPresence] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [expandedSection, setExpandedSection] = useState("focus");

  // Create refs for each section
  const presenceRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const overviewRef = useRef(null);
  const journeyRef = useRef(null);
  const iotRef = useRef(null);
  const innovationRef = useRef(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide presence section when scrolling down
      if (currentScrollY > window.innerHeight * 0.8) {
        setShowPresence(false);
        document.body.classList.add("show-nav");
      } else {
        setShowPresence(true);
        document.body.classList.remove("show-nav");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animation observer
    setTimeout(() => {
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "-50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((section) => {
        observer.observe(section);
      });

      const animatedElements = document.querySelectorAll(".scroll-animate");
      animatedElements.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        sections.forEach((section) => observer.unobserve(section));
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      {/* Our Presence Section */}
      <div
        className={`presence-section ${showPresence ? "presence-visible" : "presence-hidden"}`}
        ref={presenceRef}
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: showPresence ? 1 : 0,
        }}
      >
        <div className="presence-background">
          <div className="world-map-bg"></div>
          <div className="world-map-container">
            <div className="globe-sphere-bg">
              <div className="latitude-lines">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`lat-line lat-${i}`}></div>
                ))}
              </div>
              <div className="longitude-lines">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className={`lng-line lng-${i}`}></div>
                ))}
              </div>
            </div>

            <div className="connection-points">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className={`connection-point point-${i}`}>
                  <div className="pulse-ring"></div>
                  <div className="connection-dot"></div>
                </div>
              ))}
            </div>

            <div className="network-lines">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className={`network-line line-${i}`}></div>
              ))}
            </div>
          </div>

          <div className="globe-pattern"></div>
          <div className="globe-grid"></div>
          <div className="globe-dots"></div>
          <div className="connection-lines"></div>
        </div>

        <div className="presence-content">
          <div className="presence-header scroll-animate from-top">
            <div className="globe-icon">
              <div className="globe-sphere">
                <div className="globe-ring"></div>
                <div className="globe-ring-2"></div>
                <div className="globe-center"></div>
              </div>
            </div>
            <h1 className="presence-title">Our Global Presence</h1>
            <p className="presence-subtitle">
              Connecting smart cities worldwide with
              <br />
              innovative automation solutions
            </p>
          </div>

          <div className="presence-main">
            <div className="presence-text scroll-animate from-left">
              <h2 className="company-intro">
                Hello,
                <br />
                We're <span className="company-highlight">ISTL</span>
              </h2>
              <p className="presence-description">
                Our presence spans across continents, delivering intelligent automation solutions to smart cities
                worldwide. From Asia to Europe, Americas to Africa, we're building the future of connected
                infrastructure.
              </p>
            </div>

            <div className="office-locations scroll-animate from-right">
              <div className="office-card scroll-animate from-bottom" style={{ transitionDelay: "0.1s" }}>
                <div className="office-header">
                  <h3>Asia Pacific</h3>
                  <div className="office-icon">🌏</div>
                </div>
                <p className="office-description">
                  Leading smart city transformations across India, Southeast Asia, and Australia
                </p>
              </div>

              <div className="office-card scroll-animate from-bottom" style={{ transitionDelay: "0.3s" }}>
                <div className="office-header">
                  <h3>Middle East & Africa</h3>
                  <div className="office-icon">🏙️</div>
                </div>
                <p className="office-description">
                  Pioneering intelligent infrastructure solutions in emerging smart cities
                </p>
              </div>

              <div className="office-card scroll-animate from-bottom" style={{ transitionDelay: "0.5s" }}>
                <div className="office-header">
                  <h3>Americas</h3>
                  <div className="office-icon">🌆</div>
                </div>
                <p className="office-description">Advancing urban technology with innovative automation systems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={`main-content ${!showPresence ? "main-content-visible" : ""}`}>
        {/* Hero Section */}
        <div className="hero-section scroll-section" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-text scroll-animate from-left">
              <h1 className="page-title">about us</h1>
              <div className="title-underline scroll-animate from-expand"></div>
              <h2 className="main-heading">
                Innovation Partner,
                <br />
                providing intelligent
                <br />
                automation solutions
              </h2>
              <p className="hero-description">
                We are a leading automation company specializing in creating intelligent devices that transform modern
                infrastructure and enhance connectivity across industries.
              </p>
              <button className="cta-button scroll-animate from-bottom">GET IN TOUCH</button>
            </div>
            <div className="hero-image scroll-animate from-right">
              <img src={smartImage} alt="Smart automation technology" />
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="journey-section scroll-section" ref={journeyRef}>
          <div className="journey-container">
            <div className="journey-header scroll-animate from-top">
              <h2 className="journey-title">Our Journey</h2>
              <p className="journey-subtitle">A decade of innovation in automation and infrastructure</p>
            </div>
            
            <div className="timeline-container">
              <div className="timeline-line"></div>
              
              <div className="timeline-item scroll-animate from-left" style={{ transitionDelay: "0.2s" }}>
                <div className="timeline-dot timeline-dot-start"></div>
                <div className="timeline-content timeline-left">
                  <div className="timeline-year">2014</div>
                  <h3>Foundation & Early Vision</h3>
                  <p>Started our journey with a vision to revolutionize automation technology and smart infrastructure solutions.</p>
                </div>
              </div>

              <div className="timeline-item scroll-animate from-right" style={{ transitionDelay: "0.4s" }}>
                <div className="timeline-dot timeline-dot-main"></div>
                <div className="timeline-content timeline-right">
                  <div className="timeline-year">2014-2021</div>
                  <h3>Automation Excellence</h3>
                  <p>Spent 10+ years mastering automation solutions, developing intelligent devices for smart cities, CCMS, ITMS, and advanced motor controllers.</p>
                  <div className="timeline-stats">
                    <div className="stat-item">
                      <span className="stat-number">10+</span>
                      <span className="stat-label">Years in Automation</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">500+</span>
                      <span className="stat-label">Automation Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item scroll-animate from-left" style={{ transitionDelay: "0.6s" }}>
                <div className="timeline-dot timeline-dot-expansion"></div>
                <div className="timeline-content timeline-left">
                  <div className="timeline-year">2022</div>
                  <h3>EPC Services Expansion</h3>
                  <p>Expanded into EPC (Engineering, Procurement, Construction) services, focusing on electrical substations and solar energy solutions.</p>
                </div>
              </div>

              <div className="timeline-item scroll-animate from-right" style={{ transitionDelay: "0.8s" }}>
                <div className="timeline-dot timeline-dot-current"></div>
                <div className="timeline-content timeline-right">
                  <div className="timeline-year">2022-2024</div>
                  <h3>Infrastructure & Solar Solutions</h3>
                  <p>Successfully delivering comprehensive EPC services for substations and solar installations, combining our automation expertise with power infrastructure development.</p>
                  <div className="timeline-stats">
                    <div className="stat-item">
                      <span className="stat-number">3+</span>
                      <span className="stat-label">Years in EPC</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">EPC Projects</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item scroll-animate from-left" style={{ transitionDelay: "1s" }}>
                <div className="timeline-dot timeline-dot-future"></div>
                <div className="timeline-content timeline-left">
                  <div className="timeline-year">2025+</div>
                  <h3>Future Vision</h3>
                  <p>Continuing to innovate and expand our integrated solutions for smart cities, renewable energy, and intelligent infrastructure worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section - Black Highlighted Block */}
        <div className="mission-section scroll-section">
          <div className="mission-container">
            <div className="mission-grid">
              <div className="mission-card scroll-animate from-left">
                <div className="mission-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To transform traditional infrastructure into intelligent, connected systems that enhance quality of life and drive sustainable development through innovative automation solutions.</p>
              </div>
              
              <div className="mission-card scroll-animate from-bottom" style={{ transitionDelay: "0.2s" }}>
                <div className="mission-icon">👁️</div>
                <h3>Our Vision</h3>
                <p>To be the global leader in intelligent automation and EPC services, creating smart cities that are efficient, sustainable, and connected for future generations.</p>
              </div>
              
              <div className="mission-card scroll-animate from-right" style={{ transitionDelay: "0.4s" }}>
                <div className="mission-icon">💎</div>
                <h3>Our Values</h3>
                <p>Innovation, reliability, sustainability, and excellence drive everything we do. We believe in creating solutions that make a lasting positive impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="capabilities-section scroll-section">
          <div className="capabilities-container">
            <div className="section-header scroll-animate from-top">
              <h2 className="section-title">Core Capabilities</h2>
              <p className="section-subtitle">Comprehensive solutions across automation and infrastructure</p>
            </div>
            
            <div className="capabilities-grid">
              <div className="capability-card scroll-animate from-left" style={{ transitionDelay: "0.1s" }}>
                <div className="capability-image">
                  <img src={ccmsImage} alt="CCMS Solutions" />
                </div>
                <div className="capability-content">
                  <h3>CCMS & Automation</h3>
                  <p>Centralized Control and Monitoring Systems for smart city infrastructure, traffic management, and intelligent street lighting solutions.</p>
                  <ul>
                    <li>Smart Traffic Control</li>
                    <li>Street Light Management</li>
                    <li>Real-time Monitoring</li>
                  </ul>
                </div>
              </div>
              
              <div className="capability-card scroll-animate from-bottom" style={{ transitionDelay: "0.3s" }}>
                <div className="capability-image">
                  <img src={epcImage} alt="EPC Services" />
                </div>
                <div className="capability-content">
                  <h3>EPC Services</h3>
                  <p>End-to-end Engineering, Procurement, and Construction services for electrical substations and renewable energy projects.</p>
                  <ul>
                    <li>Substation Construction</li>
                    <li>Solar Installations</li>
                    <li>Power Infrastructure</li>
                  </ul>
                </div>
              </div>
              
              <div className="capability-card scroll-animate from-right" style={{ transitionDelay: "0.5s" }}>
                <div className="capability-image">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop" alt="IoT Solutions" />
                </div>
                <div className="capability-content">
                  <h3>IoT & Data Systems</h3>
                  <p>Advanced IoT solutions for real-time data acquisition, energy management, and remote monitoring across multiple industries.</p>
                  <ul>
                    <li>Energy Management</li>
                    <li>Remote Monitoring</li>
                    <li>Data Analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Service Benefits Section */}
        <div className="services-section scroll-section" ref={servicesRef}>
          <div className="services-container">
            <div className="services-content">
              <div className="services-visual scroll-animate from-left">
                <div className="services-shape">
                  <div className="services-dots-pattern"></div>
                  <div className="services-image-container">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                      alt="Technical team in data center"
                      className="services-image"
                    />
                  </div>
                </div>
              </div>

              <div className="services-text scroll-animate from-right">
                <div className="services-badge">OUR SERVICE BENEFITS</div>
                <h2 className="services-title">"Keep your business safe by emphasizing quality and accountability."</h2>
                <p className="services-description">
                  Our key areas of focus encompass a wide range of sectors and technological domains. Here are the
                  primary domains where we direct our efforts:
                </p>

                <div className="services-accordion">
                  <div className="accordion-item">
                    <button
                      className={`accordion-header ${expandedSection === "focus" ? "active" : ""}`}
                      onClick={() => toggleSection("focus")}
                    >
                      <span>Our key areas of focus ?</span>
                      <div className="accordion-icon">
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
                    <div className={`accordion-content ${expandedSection === "focus" ? "expanded" : ""}`}>
                      <p>
                        Telecom Infrastructure Management | Electrical Power Distribution | Green Energy Solution |
                        Aerospace Exploration | IoT and M2M Solutions | Advanced Metering Infrastructure | Railway
                        Technologies | Power Sector Innovation.
                      </p>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <button
                      className={`accordion-header ${expandedSection === "strategy" ? "active" : ""}`}
                      onClick={() => toggleSection("strategy")}
                    >
                      <span>Our Go to Market Strategy?</span>
                      <div className="accordion-icon">
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
                    <div className={`accordion-content ${expandedSection === "strategy" ? "expanded" : ""}`}>
                      <p>
                        We focus on strategic partnerships, direct client engagement, and innovative solution delivery.
                        Our approach combines market research, customer-centric design, and agile implementation to
                        ensure successful project outcomes and long-term client relationships.
                      </p>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <button
                      className={`accordion-header ${expandedSection === "matter" ? "active" : ""}`}
                      onClick={() => toggleSection("matter")}
                    >
                      <span>Why does our work matter?</span>
                      <div className="accordion-icon">
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
                    <div className={`accordion-content ${expandedSection === "matter" ? "expanded" : ""}`}>
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

        {/* Company Overview */}
        <div className="overview-section scroll-section" ref={overviewRef}>
          <div className="content-wrapper1">
            <div className="overview-grid">
              <div className="overview-text scroll-animate from-left">
                <h3 className="section-title">Transforming Infrastructure</h3>
                <p className="overview-description">
                  Our expertise spans across CCMS (Centralized Control and Monitoring Systems), ITMS (Intelligent
                  Traffic Management Systems), smart street lights, and advanced motor controllers, delivering
                  cutting-edge solutions to enhance efficiency and connectivity in smart cities worldwide.
                </p>
                <div className="stats-grid1">
                  <div className="stat-item1 scroll-animate from-bottom" style={{ transitionDelay: "0.1s" }}>
                    <div className="stat-number1">500+</div>
                    <div className="stat-label1">Projects Completed</div>
                  </div>
                  <div className="stat-item1 scroll-animate from-bottom" style={{ transitionDelay: "0.3s" }}>
                    <div className="stat-number1">50+</div>
                    <div className="stat-label1">Cities Served</div>
                  </div>
                  <div className="stat-item1 scroll-animate from-bottom" style={{ transitionDelay: "0.5s" }}>
                    <div className="stat-number1">15+</div>
                    <div className="stat-label1">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="overview-image scroll-animate from-right">
                <img src={epcImage} alt="Smart city infrastructure" />
              </div>
            </div>
          </div>
        </div>

        {/* IOT & Data Acquisition Section */}
        <section className="iot-section scroll-section" ref={iotRef}>
          <div className="iot-container">
            <div className="iot-grid">
              <div className="iot-image-wrapper scroll-animate from-left">
                <div className="iot-image-container">
                  <img
                    src={ccmsImage}
                    alt="IoT Data Acquisition Systems"
                    className="iot-main-image"
                  />
                </div>
              </div>
              <div className="iot-content scroll-animate from-right">
                <div className="iot-badge">WHAT WE ARE DOING</div>
                <h2 className="iot-title">IOT & Data Acquisition Systems</h2>
                <p className="iot-description">
                  Our main products are into(IoT) remote Real Time Efficient energy management systems for Power
                  Distribution companies, Telecom Infra Companies. By combining business strategy and leading-edge
                  wireless and embedded cloud technologies, we are developing efficient and effective solutions that
                  keep businesses one-step ahead.
                </p>
              </div>
            </div>
          </div>
          <div className="iot-bg-pattern iot-pattern-left"></div>
          <div className="iot-bg-pattern iot-pattern-right"></div>
        </section>

        {/* Team & Leadership Section */}
        <div className="team-section scroll-section">
          <div className="team-container">
            <div className="section-header scroll-animate from-top">
              <h2 className="section-title">Leadership Team</h2>
              <p className="section-subtitle">Meet the visionaries driving our innovation</p>
            </div>
            
            <div className="team-grid">
              <div className="team-card scroll-animate from-left" style={{ transitionDelay: "0.1s" }}>
                <div className="team-image">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="CEO" />
                </div>
                <div className="team-info">
                  <h3>Leadership Excellence</h3>
                  <p className="team-role">Executive Leadership</p>
                  <p className="team-description">Guiding strategic vision and innovation in automation technology and EPC services.</p>
                </div>
              </div>
              
              <div className="team-card scroll-animate from-bottom" style={{ transitionDelay: "0.3s" }}>
                <div className="team-image">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616c27984c7?w=300&h=300&fit=crop" alt="CTO" />
                </div>
                <div className="team-info">
                  <h3>Technical Innovation</h3>
                  <p className="team-role">Technology Leadership</p>
                  <p className="team-description">Leading cutting-edge technology development and engineering excellence.</p>
                </div>
              </div>
              
              <div className="team-card scroll-animate from-right" style={{ transitionDelay: "0.5s" }}>
                <div className="team-image">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" alt="COO" />
                </div>
                <div className="team-info">
                  <h3>Operations Excellence</h3>
                  <p className="team-role">Operations Leadership</p>
                  <p className="team-description">Ensuring operational efficiency and project delivery excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="innovation-section scroll-section" ref={innovationRef}>
          <div className="content-wrapper1">
            <div className="innovation-content">
              <div className="innovation-text scroll-animate from-left">
                <h3 className="section-title">Driving Innovation Forward</h3>
                <p>
                  We combine cutting-edge technology with practical solutions to create intelligent devices that not
                  only meet today's needs but anticipate tomorrow's challenges. Our commitment to innovation drives us
                  to continuously evolve and improve our automation solutions.
                </p>
                <button className="secondary-button scroll-animate from-bottom" style={{ transitionDelay: "0.3s" }}>
                  Learn More About Our Technology
                </button>
              </div>
              <div className="innovation-visual scroll-animate from-right">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop" alt="Innovation and technology" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="contact-cta-section scroll-section">
          <div className="contact-cta-container">
            <div className="contact-cta-content scroll-animate from-scale">
              <h2>Ready to Transform Your Infrastructure?</h2>
              <p>Let's discuss how our automation and EPC solutions can drive your next project forward.</p>
              <div className="cta-buttons">
                <button className="cta-button primary">Get Started</button>
                <button className="cta-button secondary">View Our Projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}