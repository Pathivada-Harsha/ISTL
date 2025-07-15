import "../components_css/products.css"
import { useNavigate } from 'react-router-dom';
import Solccms from "./../images/Home/Sol_ccms.png"
import streetLight from "./../images/Home/Sol_streetl.png"
import Solitms from "./../images/Home/Sol_itms.png"
import solitms1  from "./../images/itms/itms4.png"
import Solmcms from "./../images/Home/Sol_mcms2.png"
import Sol_pqms from "./../images/Home/Sol_pqms.png"
import Sol_solar1 from "./../images/Home/Sol_solar.jpeg"
import Sol_solar from "./../images/Home/Sol_solar1.png"
import Sol_substation from "./../images/Home/sol_substation.png"
import  Sol_substation1 from "./../images/substations/hausbhavi2.jpeg"
import lights8 from "./../images/streetlights/streetlights10.jpeg"

export default function Products() {
  const navigate = useNavigate();

  const telematicsSolutions = [
    {
      id: 1,
      title: "CCMS Devices",
      subtitle: "Centralized Control & Monitoring System",
      description: "Advanced street lighting management with remote monitoring capabilities",
      image: Solccms,
      link: "/products/istl-ccms"
    },
    {
      id: 2,
      title: "ITMS Devices",
      subtitle: "Intelligent Transformer Monitoring System",
      description: "Real-time transformer monitoring with predictive maintenance",
      image: solitms1,
      link: "/products/istl-Itms"
    },
    {
      id: 3,
      title: "MCMS Devices",
      subtitle: "Motor Control and Monitoring System",
      description: "Reliable motor control and real-time monitoring for industrial, agricultural, and rural applications.",
      image: Solmcms,
      link: "/products/istl-mcms"
    },
    // {
    //   id: 4,
    //   title: "PQMS",
    //   subtitle: "Power Quality Management System",
    //   description: "Advanced power quality monitoring and management solutions",
    //   image: Sol_pqms,
    //   link: "/products/smart-meters/single-phase" // Using single-phase as example, you might want to create a dedicated PQMS page
    // },
    {
      id: 4,
      title: "Substation EPC Services",
      subtitle: "Reliable Power Distribution & Quality Control",
      description: "Smart and scalable substation infrastructure with integrated power quality monitoring for reliable, efficient energy delivery.",
      image: Sol_substation1, // Update this variable name if needed
      link: "/products/epc/substations"
    },
    {
      id: 5,
      title: "Street Lights",
      subtitle: "Smart Streetlight Monitoring & Control",
      description: "Centralized control and real-time monitoring of street lighting systems for improved efficiency and reduced downtime",
      image: lights8,
      link: "/products/smart-street-lights"
    },
    {
      id: 6,
      title: "Solar Power Projects",
      subtitle: "Sustainable Energy Solutions",
      description: "High-efficiency solar panel systems for clean energy generation",
      image: Sol_solar,
      link: "https://sesolaenergy.com",
      isExternal: true
    }
  ]

  // Navigation handler function
  const handleLearnMore = (link, isExternal = false) => {
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(link);
    }
  }

  return (
    <section className="telematics-main-section">
      <div className="telematics-geometric-bg">
        {/* Geometric Lines */}
        <div className="telematics-bg-line telematics-line-1"></div>
        <div className="telematics-bg-line telematics-line-2"></div>
        <div className="telematics-bg-line telematics-line-3"></div>
        <div className="telematics-bg-line telematics-line-4"></div>
        <div className="telematics-bg-line telematics-line-5"></div>
        <div className="telematics-bg-line telematics-line-6"></div>
        <div className="telematics-bg-line telematics-line-7"></div>
        <div className="telematics-bg-line telematics-line-8"></div>
        <div className="telematics-bg-line telematics-line-9"></div>
        <div className="telematics-bg-line telematics-line-10"></div>

        {/* Geometric Nodes */}
        <div className="telematics-bg-node telematics-node-1"></div>
        <div className="telematics-bg-node telematics-node-2"></div>
        <div className="telematics-bg-node telematics-node-3"></div>
        <div className="telematics-bg-node telematics-node-4"></div>
        <div className="telematics-bg-node telematics-node-5"></div>
        <div className="telematics-bg-node telematics-node-6"></div>
        <div className="telematics-bg-node telematics-node-7"></div>

        {/* Geometric Shapes */}
        <div className="telematics-bg-shape telematics-triangle-1"></div>
        <div className="telematics-bg-shape telematics-triangle-2"></div>
        <div className="telematics-bg-shape telematics-triangle-3"></div>
        <div className="telematics-bg-shape telematics-polygon-1"></div>
        <div className="telematics-bg-shape telematics-polygon-2"></div>
      </div>

      <div className="telematics-main-container">
        <div className="telematics-header-section">
          <div className="telematics-header-icon">
            <div className="telematics-arrow-icon"></div>
          </div>
          <h1 className="telematics-main-title">Explore Our Solutions</h1>
          <p className="telematics-main-subtitle">
            Trusted choice of several government bodies and many private companies.
          </p>
        </div>

        <div className="telematics-solutions-grid">
          {telematicsSolutions.map((solution) => (
            <div key={solution.id} className="telematics-solution-card">
              <div className="telematics-card-image-container">
                <img src={solution.image} alt={solution.title} className="telematics-card-image" />
                <div className="telematics-card-overlay"></div>
              </div>
              <div className="telematics-card-content">
                <h3 className="telematics-card-title">{solution.title}</h3>
                <p className="telematics-card-subtitle">{solution.subtitle}</p>
              </div>
              <div className="telematics-card-hover-content">
                <h3 className="telematics-hover-title">{solution.title}</h3>
                <p className="telematics-hover-description">{solution.description}</p>
                <button 
                  className="telematics-learn-more-btn"
                  onClick={() => handleLearnMore(solution.link, solution.isExternal)}
                >
                  Learn More
                  <span className="telematics-btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}