"use client"

import { useState, useEffect } from "react"
import "../components_css/Preloader.css"

export default function Preloader({ onComplete }) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentPhase(1) // Show "THE WORLD OF"
    }, 2000)

    const timer2 = setTimeout(() => {
      setCurrentPhase(2) // Show "ISTL ENERGY"
    }, 4000)

    const timer3 = setTimeout(() => {
      setIsClosing(true) // Start closing animation
    }, 6000)

    const timer4 = setTimeout(() => {
      onComplete() // Hide preloader completely
    }, 7000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className={`preloader ${isClosing ? "preloader-closing" : ""}`}>
      <div className="preloader-content">
        {/* Phase 1: STEP INTO */}
        <div className={`text-phase phase-1 ${currentPhase >= 0 ? "active" : ""} ${currentPhase > 0 ? "move-up" : ""}`}>
          {/* <h1 className="preloader-text">STEP INTO</h1> */}
          <h1 className="preloader-text">EXPERIENCE</h1>
          <div className="underline"></div>
        </div>

        {/* Phase 2: THE WORLD OF */}
        <div className={`text-phase phase-2 ${currentPhase >= 1 ? "active" : ""} ${currentPhase > 1 ? "move-up" : ""}`}>
          {/* <h1 className="preloader-text">THE WORLD OF</h1> */}
          <h1 className="preloader-text">SMART INFRASTRUCTURE</h1>
          <div className="underline"></div>
        </div>

        {/* Phase 3: ISTL ENERGY */}
        <div className={`text-phase phase-3 ${currentPhase >= 2 ? "active" : ""}`}>
          {/* <h1 className="preloader-text brand-text">ISTL ENERGY</h1> */}
           <h1 className="preloader-text brand-text">WITH ISTL ENERGY</h1>
          <div className="brand-underline"></div>
        </div>

        {/* Animated particles/dots for visual enhancement */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
