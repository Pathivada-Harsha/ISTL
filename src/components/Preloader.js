import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom" // Add this import
import "../components_css/Preloader.css"
import logo from "../images/istl_logo_01.png"
import world from '../images/world-map.png'
// Import country flag images
import indiaFlag from '../images/india-flag.jpg'
import dubaiFlag from '../images/uae-flag.png' 
import singaporeFlag from '../images/singapore-flag.png'
// Import company logos (you'll need to add these)
import istlabsLogo from '../images/istlabs-logo.png'
import sesolaLogo from '../images/sesola-logo.png'
import solariesLogo from '../images/solaries-logo.png'

export default function Preloader({ onComplete }) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate() // Add this hook
//   const [countryName,setCountryName]=useState()
// useEffect(() => {
//   fetch("https://ipapi.co/json/")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("City:", data.city);
//       console.log("Region:", data.region);
//       console.log("Country:", data.country_name);
//       console.log("IP:", data.ip);
//     })
//     .catch((err) => console.error("Location fetch error:", err));
// }, []);
  const locations = [
    { id: 'uae', label: 'UAE', path: '/uae', flag: dubaiFlag },
    { id: 'india', label: 'India', path: '/india', flag: indiaFlag },
    { id: 'singapore', label: 'Singapore', path: '/singapore', flag: singaporeFlag }
  ]

  const companies = [
    { id: 'sesola', name: 'Sesola', logo: sesolaLogo, glowColor: '#9d4edd', isPartner: false },
    { id: 'istlabs', name: 'ISTLabs', logo: istlabsLogo, glowColor: '#ff1493', isPartner: false },
    { id: 'solaries', name: 'Solaries', logo: solariesLogo, glowColor: '#00d4ff', isPartner: true }
  ]

  const handleLocationSelect = useCallback((locationId) => {
    if (selectedLocation) return 

    setSelectedLocation(locationId)
 

    if (locationId === 'india') {
      // For India, close preloader and go to home
      setIsClosing(true)
      setTimeout(() => {
        navigate('/')
        onComplete()
      }, 1500)
    } else {
      // For other countries, redirect immediately to external URLs without closing preloader
      const externalUrls = {
        dubai: 'https://istlenergy.com/uae/false',
        singapore: 'https://istlenergy.com/singapore/false'
        //    uae: 'http://localhost:3000/uae/false',
        // singapore: 'http://localhost:3001/singapore/false'
      }
      
      setTimeout(() => {
        // window.location.href = externalUrls[locationId] || 'http://localhost:3002/india'
        window.location.href = externalUrls[locationId] || 'https://istlenergy.com/india/'

      }, 800) // Shorter delay for external redirects
    }
  }, [selectedLocation, navigate, onComplete])

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentPhase(1) // Show "SMART INFRASTRUCTURE"
    }, 2000)

    const timer2 = setTimeout(() => {
      setCurrentPhase(2) // Show ISTL Group section
    }, 4000)

    const timer3 = setTimeout(() => {
      setCurrentPhase(3) // Show location selection
    }, 9000) // Extended to 9 seconds (4s for phase 2 + 5s wait for ISTL Group)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  // Handle countdown and auto-redirect for location selection
  useEffect(() => {
    if (currentPhase === 3 && !selectedLocation) {
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval)
            handleLocationSelect('india') // Auto-redirect to India (home page)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(countdownInterval)
    }
  }, [currentPhase, selectedLocation, handleLocationSelect])

  // Rest of your component remains the same...
  return (
    <div className={`preloader ${isClosing ? "preloader-closing" : ""} ${currentPhase >= 3 ? "dark-bg" : ""}`}>
      <div className="preloader-content">
        {/* Phase 1: EXPERIENCE */}
        <div className={`text-phase phase-1 ${currentPhase >= 0 ? "active" : ""} ${currentPhase > 0 ? "move-up" : ""}`}>
          <h1 className="preloader-text">EXPERIENCE</h1>
          <div className="underline"></div>
        </div>

        {/* Phase 2: SMART INFRASTRUCTURE */}
        <div className={`text-phase phase-2 ${currentPhase >= 1 ? "active" : ""} ${currentPhase > 1 ? "move-up" : ""}`}>
          <h1 className="preloader-text">
            <span className="smart-infrastructure-desktop">SMART INFRASTRUCTURE</span>
            <span className="smart-infrastructure-mobile">
              SMART
              <br />
              INFRASTRUCTURE
            </span>
          </h1>
          <div className="underline"></div>
        </div>

        {/* Enhanced animated particles */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1} ${currentPhase >= 3 ? "particle-dark" : ""}`}></div>
          ))}
        </div>

        {/* Additional floating elements */}
        <div className="floating-elements">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`floating-element element-${i + 1} ${currentPhase >= 3 ? "element-visible" : ""}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Phase 2.5: ISTL Group Section - Full Screen Overlay */}
      {currentPhase >= 2 && (
        <div className={`istl-group-phase ${currentPhase >= 2 ? "active" : ""} ${currentPhase > 2 ? "move-up" : ""}`}>
          <div className="istl-group-container">
            <div className="istl-group-header">
              <h1 className="istl-group-title">ISTL  <span className="group-text"> Group </span></h1>
            </div>

            <div className="companies-showcase">
              <div className="companies-grid">
                {companies.map((company, index) => (
                  <div
                    key={company.id}
                    className={`company-card company-${index + 1}`}
                    style={{
                      '--glow-color': company.glowColor,
                      animationDelay: `${index * 0.4}s`
                    }}
                  >
                    <div className="company-logo-wrapper">
                      <img
                        src={company.logo}
                        alt={`${company.name} Logo`}
                        className="company-logo"
                      />
                      {company.isPartner && (
                        <div className="partner-badge">
                          <span className="partner-text">Partner Company</span>
                        </div>
                      )}
                    </div>
                    <div className="company-glow-effect"></div>
                  </div>
                ))}
              </div>

              {/* Dynamic connecting curve */}
              {/* <div className="connecting-curve">
                <svg className="curve-svg" viewBox="0 0 1200 600">
                 
                  <path
                    d="M 340 340 L 580 100 L 820 340 Z"
                    stroke="url(#curveGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="curve-path"
                  />
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff1493" stopOpacity="0.6" />
                      <stop offset="33%" stopColor="#9d4edd" stopOpacity="0.6" />
                      <stop offset="66%" stopColor="#9d4edd" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Phase 3: Location Selection - Full Screen Overlay */}
      {currentPhase >= 3 && (
        <div className={`location-phase ${currentPhase >= 3 ? "active" : ""}`}>
          <div className="location-selection-container">
            {/* Main Logo at Top */}
            <div className="main-logo-section">
              <img src={logo} alt="ISTL Energy" className="main-logo" />
            </div>

            <div className="countdown-timer">
                {!selectedLocation && `Auto-redirecting to India in ${countdown} seconds if no other option is selected.`}
              {/* {!selectedLocation} */}
            </div>

            <div className="locations-grid">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className={`location-card ${selectedLocation === location.id ? 'selected' : ''} ${location.id === 'india' ? 'india-card' : location.id === 'singapore' ? 'singapore-card' : 'dubai-card'}`}
                  onClick={() => handleLocationSelect(location.id)}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="location-content">
                    <div className="location-flag-wrapper">
                      <img src={location.flag} alt={`${location.label} Flag`} className="location-flag" />
                    </div>
                    <div className="location-label">{location.label.toUpperCase()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* ISTL Group Section Styles */
          .istl-group-phase {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          min-width: 100vw;
          min-height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          background-image: url('${world}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .istl-group-phase::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 20, 147, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(157, 78, 221, 0.08) 0%, transparent 70%),
            rgba(0, 0, 0, 0.4);
          pointer-events: none;
          backdrop-filter: blur(2px);
        }

        .istl-group-container {
          text-align: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(1rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem);
          position: relative;
          z-index: 1;
        }

        .istl-group-header {
          margin-bottom: clamp(3rem, 5vh, 5rem);
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        .istl-group-title {
          font-family: "poppins", sans-serif;
          font-size: clamp(2rem, 4vw, 4rem);
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin-top: clamp(50px, 10vh, 150px);
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.3),
            0 0 40px rgba(0, 212, 255, 0.2),
            0 0 60px rgba(157, 78, 221, 0.1);
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .group-text {
          font-size: clamp(1.5rem, 2.5vw, 2.5rem);
        }

        @keyframes titleGlow {
          from {
            text-shadow: 
              0 0 20px rgba(255, 255, 255, 0.3),
              0 0 40px rgba(0, 212, 255, 0.2),
              0 0 60px rgba(157, 78, 221, 0.1);
          }
          to {
            text-shadow: 
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 50px rgba(0, 212, 255, 0.3),
              0 0 70px rgba(157, 78, 221, 0.2);
          }
        }

        .companies-showcase {
          position: relative;
          width: 100%;
          height: clamp(400px, 60vh, 600px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .companies-grid {
          position: relative;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          z-index: 2;
        }

        .company-card {
          position: absolute;
          width: 320px;
          height: 180px;
          background: rgba(227, 227, 227, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 3px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: cardSlideIn 1s ease-out forwards;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
        }

        /* Fixed positions for cards at all screen sizes */
        .company-1 {
          /* Bottom left card */
          left: 18%;
          bottom: 48%;
          transform: translateY(50%);
          border-color: rgba(255, 20, 147, 0.8);
          box-shadow: 
            0 0 40px rgba(255, 20, 147, 0.4),
            0 20px 40px rgba(255, 20, 147, 0.3);
        }

        .company-2 {
          /* Top center card */
          left: 38%;
          top: 0%;
          transform: translateX(-50%);
          border-color: rgba(157, 78, 221, 0.8);
          box-shadow: 
            0 0 40px rgba(157, 78, 221, 0.4),
            0 20px 40px rgba(157, 78, 221, 0.3);
        }

        .company-3 {
          /* Bottom right card */
          right: 11%;
          bottom: 48%;
          transform: translateY(50%);
          border-color: rgba(0, 212, 255, 0.8);
          box-shadow: 
            0 0 40px rgba(0, 212, 255, 0.4),
            0 20px 40px rgba(0, 212, 255, 0.3);
        }
        @media (max-width: 1025px) {
          .company-1 {
            left: 18% !important;
            bottom: 48%;
          }

          .company-2 {
            left: 38%;
            top: 0%;
          }

          .company-3 {
            right: 7% !important;
            bottom: 48%;
          }
        }


        .company-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--glow-color)20, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .company-card:hover::before {
          opacity: 0.1;
        }

        .company-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 
            0 0 60px var(--glow-color),
            0 30px 60px rgba(0, 0, 0, 0.4);
        }

        .company-1:hover {
          transform: translateY(40px) scale(1.05);
        }

        .company-2:hover {
          transform: translateX(-50%) translateY(-10px) scale(1.05);
        }

        .company-3:hover {
          transform: translateY(40px) scale(1.05);
        }

        .company-logo-wrapper {
          position: relative;
          z-index: 2;
          width: 80%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .company-logo {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
          transition: all 0.3s ease;
        }

        .company-card:hover .company-logo {
          transform: scale(1.1);
          filter: 
            drop-shadow(0 15px 30px rgba(0, 0, 0, 0.4))
            drop-shadow(0 0 20px var(--glow-color));
        }

        /* Partner Badge Styles */
        .partner-badge {
          position: absolute;
            bottom: 100px !important;
          left: 30% !important;
          transform: translateX(-50%);
         background: linear-gradient(to right, #00d4ff, #0099cc);

          padding: 4px 12px;
          border-radius: 5px;
          box-shadow: 
            0 4px 15px rgba(0, 212, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          opacity: 0;
          animation: fadeInBadge 0.8s ease-out 2.2s forwards;
          z-index: 3;
        }

        @media (max-width:786px){
                 .partner-badge {
          position: absolute;
          bottom: 60px !important;
          left: 30% !important;
          transform: translateX(-50%);
          background: linear-gradient(to right, #00d4ff, #0099cc);
          padding: 4px 12px;
          border-radius: 5px;
          box-shadow: 
            0 4px 15px rgba(0, 212, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          opacity: 0;
          animation: fadeInBadge 0.8s ease-out 2.2s forwards;
          z-index: 3;
        }
        } 
        .partner-text {
          font-family: "Arial", "Helvetica", sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        @keyframes fadeInBadge {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }

        .company-card:hover .partner-badge {
          box-shadow: 
            0 6px 20px rgba(0, 212, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateX(-50%) translateY(-2px) scale(1.05);
        }

        .company-glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--glow-color)30, transparent 70%);
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Location Phase Styles */
        .location-phase {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 100vh;
          min-width: 100vw;
          min-height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          background-image: url('${world}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .location-phase::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 165, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 153, 204, 0.08) 0%, transparent 70%),
            rgba(0, 0, 0, 0.3);
          pointer-events: none;
          backdrop-filter: blur(1px);
        }

        .location-selection-container {
          text-align: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(1rem, 2vw, 2rem);
          position: relative;
          z-index: 1;
        }

        .main-logo-section {
          margin-top: clamp(20px, 5vh, 50px);
          margin-bottom: clamp(2rem, 4vh, 4rem);
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }

        .main-logo {
          width: clamp(250px, 35vw, 600px);
          height: auto;
          filter: drop-shadow(-30px -30px 40px rgba(255, 255, 255));
          animation: gentleFloat 6s ease-in-out infinite;
        }

        .countdown-timer {
          font-family: "Arial", "Helvetica", sans-serif;
          font-size: clamp(0.8rem, 1.5vw, 1.3rem);
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: clamp(2rem, 3vh, 3rem);
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.8s forwards;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          padding: 0 1rem;
        }

        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: clamp(1.5rem, 3vw, 3rem);
          max-width: 1200px;
          margin: 0 auto;
          justify-items: center;
          padding: 0 clamp(1rem, 2vw, 2rem);
        }

        .location-card {
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          animation: slideInScale 0.8s ease-out forwards;
          border-radius: clamp(12px, 2vw, 20px);
          padding: clamp(1.5rem, 2.5vw, 2.5rem) clamp(1rem, 2vw, 2rem);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 2px solid;
          position: relative;
          overflow: hidden;
          width: clamp(240px, 25vw, 280px);
          height: clamp(260px, 25vh, 300px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .india-card {
          border-color: rgba(0, 212, 255, 0.4);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.15);
        }

        .singapore-card {
          border-color: rgba(0, 212, 255, 0.6);
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.2);
          transform: translateY(clamp(-10px, -2vh, -20px));
        }

        .dubai-card {
          border-color: rgba(255, 165, 0, 0.5);
          box-shadow: 0 15px 35px rgba(255, 165, 0, 0.15);
        }

        .location-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .india-card::before {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05));
        }

        .singapore-card::before {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 153, 204, 0.08));
        }

        .dubai-card::before {
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.1), rgba(255, 140, 0, 0.05));
        }

        .location-card:hover::before {
          opacity: 1;
        }

        .location-card:hover {
          transform: translateY(clamp(-10px, -2vh, -15px)) scale(1.05);
        }

        .singapore-card:hover {
          transform: translateY(clamp(-25px, -4vh, -35px)) scale(1.05);
        }

        .location-card.selected {
          transform: translateY(clamp(-15px, -2vh, -20px)) scale(1.08);
        }

        .singapore-card.selected {
          transform: translateY(clamp(-30px, -4vh, -40px)) scale(1.08);
        }

        .india-card:hover, .india-card.selected {
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
          border-color: rgba(0, 212, 255, 0.8);
        }

        .singapore-card:hover, .singapore-card.selected {
          box-shadow: 0 25px 50px rgba(0, 212, 255, 0.4);
          border-color: rgba(0, 212, 255, 1);
        }

        .dubai-card:hover, .dubai-card.selected {
          box-shadow: 0 25px 50px rgba(255, 165, 0, 0.3);
          border-color: rgba(255, 165, 0, 0.8);
        }

        .location-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .location-flag-wrapper {
          margin-bottom: clamp(1rem, 2vh, 2rem);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .location-flag {
          width: clamp(100px, 12vw, 160px);
          height: auto;
          border-radius: clamp(8px, 1vw, 12px);
          transition: all 0.3s ease;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .location-card:hover .location-flag {
          transform: scale(1.1);
          filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.4));
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .location-label {
          font-family: "Arial", "Helvetica", sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.8rem);
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }

        .india-card:hover .location-label, .india-card.selected .location-label {
          color: #00d4ff;
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .singapore-card:hover .location-label, .singapore-card.selected .location-label {
          color: #00d4ff;
          text-shadow: 0 0 20px rgba(0, 212, 255, 0.6);
        }

        .dubai-card:hover .location-label, .dubai-card.selected .location-label {
          color: #ffa500;
          text-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
        }

        @keyframes gentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Enhanced Mobile Responsive Adjustments */
        @media (max-width: 1024px) {
          .istl-group-title {
            margin-top: clamp(30px, 8vh, 100px);
          }
          
          .company-card {
            width: 280px;
            height: 160px;
          }
          
          .company-1 {
            left: 10%;
            bottom: 45%;
          }
          
          .company-2 {
            left: 38%;
            top: 5%;
          }
          
          .company-3 {
            right: 10%;
            bottom: 45%;
          }
        }

        @media (max-width: 768px) {
          .istl-group-title {
            font-size: clamp(1.8rem, 5vw, 3rem);
            margin-top: clamp(20px, 6vh, 80px);
          }
          
          .group-text {
            font-size: clamp(1.3rem, 3.5vw, 2rem);
          }
          
          .companies-showcase {
            height: auto;
            min-height: clamp(250px, 40vh, 400px);
            padding: 2rem 0;
          }
          
          .companies-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            padding: 1rem;
          }
          
          .company-card {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            transform: none !important;
            width: 280px;
            height: 140px;
            margin: 0;
          }
          
          .company-card:hover {
            transform: translateY(-10px) scale(1.05) !important;
          }
          
          // .partner-badge {
          //   bottom: -10px;
          //   padding: 3px 10px;
          //   border-radius: 12px;
          // }

          .partner-text {
            font-size: 0.8rem;
          }

          .location-selection-container {
            padding: 1rem;
          }

          .main-logo {
            width: 200px;
          }

          .locations-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 400px;
          }

          .location-card {
            width: 260px;
            height: 220px;
          }
        }

        @media (max-width: 480px) {
          .istl-group-title {
            font-size: clamp(1.5rem, 6vw, 2.5rem);
            margin-top: clamp(15px, 5vh, 60px);
          }
          
          .group-text {
            font-size: clamp(1.1rem, 4vw, 1.8rem);
          }
          
          .company-card {
            width: 240px;
            height: 120px;
          }
          
          .main-logo {
            width: 180px;
          }
          
          .countdown-timer {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            padding: 0 0.5rem;
          }
          
          .location-card {
            width: 240px;
            height: 200px;
          }
          
          .location-flag {
            width: 80px;
          }
          
          .location-label {
            font-size: 1.1rem;
          }

          // .partner-badge {
          //   bottom: -8px;
          //   padding: 2px 8px;
          // }

          .partner-text {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 360px) {
          .istl-group-title {
            font-size: clamp(1.3rem, 7vw, 2.2rem);
          }
          
          .group-text {
            font-size: clamp(1rem, 5vw, 1.6rem);
          }
          
          .company-card {
            width: 220px;
            height: 110px;
          }
          
          .main-logo {
            width: 160px;
          }
          
          .location-card {
            width: 220px;
            height: 180px;
          }
          
          .location-flag {
            width: 70px;
          }
          
          .location-label {
            font-size: 1rem;
          }
        }

        /* Landscape Orientation Adjustments */
        @media (max-height: 600px) and (orientation: landscape) {
          .istl-group-title {
            margin-top: clamp(10px, 3vh, 30px);
            font-size: clamp(1.5rem, 4vh, 2.5rem);
          }
          
          .group-text {
            font-size: clamp(1.1rem, 3vh, 1.8rem);
          }
          
          .companies-showcase {
            height: clamp(200px, 50vh, 300px);
          }
          
          .company-card {
            height: 120px;
          }
          
          .main-logo {
            width: 150px;
          }
          
          .location-card {
            height: 160px;
          }
        }
      `}</style>
    </div>
  )
}