"use client"

import { useEffect, useState } from "react"


export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100

      setScrollProgress(scrollPercent)
      setIsVisible(scrollTop > 200)
    }

    const throttledToggleVisibility = throttle(toggleVisibility, 16) // ~60fps

    window.addEventListener("scroll", throttledToggleVisibility)
    return () => window.removeEventListener("scroll", throttledToggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Throttle function for better performance
  function throttle(func, delay) {
    let timeoutId
    let lastExecTime = 0
    return function (...args) {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(
          () => {
            func.apply(this, args)
            lastExecTime = Date.now()
          },
          delay - (currentTime - lastExecTime),
        )
      }
    }
  }

  const circumference = 2 * Math.PI * 18 // radius of 18
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <div className={`back-to-top-container ${isVisible ? "visible" : ""}`}>
      <button
        onClick={scrollToTop}
        className="back-to-top-button"
        aria-label={`Scroll to top (${Math.round(scrollProgress)}% scrolled)`}
        type="button"
      >
        {/* Progress ring */}
        <svg className="progress-ring" viewBox="0 0 44 44">
          {/* Background circle */}
          <circle
            className="progress-circle-bg"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            className="progress-circle"
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>

        {/* Arrow icon */}
        <div className="arrow-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </div>

        {/* Hover overlay */}
        <div className="hover-overlay"></div>
      </button>
    </div>
  )
}
