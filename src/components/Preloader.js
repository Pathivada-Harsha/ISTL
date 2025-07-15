"use client"

import { useState, useEffect } from "react"
import "../components_css/Preloader.css"
import logo from "../images/istl_logo_01.png"


export default function Preloader({ onComplete }) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentPhase(1) // Show "SMART INFRASTRUCTURE"
    }, 2000)

    const timer2 = setTimeout(() => {
      setCurrentPhase(2) // Show logo with white background
    }, 4000)

    const timer3 = setTimeout(() => {
      setIsClosing(true) // Start closing animation
    }, 7000) // Extended time to enjoy the logo animation

    const timer4 = setTimeout(() => {
      onComplete() // Hide preloader completely
    }, 8500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className={`preloader ${isClosing ? "preloader-closing" : ""} ${currentPhase >= 2 ? "white-bg" : ""}`}>
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

        {/* Phase 3: Logo only */}
        <div className={`text-phase phase-3 logo-phase ${currentPhase >= 2 ? "active" : ""}`}>
          <div className="logo-container">
            <div className="logo-glow-wrapper">
              <img src={logo} alt="ISTL Energy Logo" className="company-logo" />
            </div>
          </div>
        </div>

        {/* Enhanced animated particles */}
        <div className="particles">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1} ${currentPhase >= 2 ? "particle-dark" : ""}`}></div>
          ))}
        </div>

        {/* Additional floating elements */}
        <div className="floating-elements">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`floating-element element-${i + 1} ${currentPhase >= 2 ? "element-visible" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
