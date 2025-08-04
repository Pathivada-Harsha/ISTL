"use client"

import { useState, useEffect } from "react"
import backgroundImage from "./../images/backgrounds_imgs/bg14.png"
import "../components_css/photoscroll1.css"

function ScrolledCom() {
  const [scrollY, setScrollY] = useState(0)
  const [typingText, setTypingText] = useState("")
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200)

  const fullText = "ENERGIZING QUALITY & ACCOUNTABILITY"

  useEffect(() => {
    // Set initial window width safely
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
    }

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth)
      }
    }

    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)

      // Check if user has scrolled to the middle section (between first and second content)
      const sectionHeight = window.innerHeight
      const triggerPoint = sectionHeight * 0.25 // Earlier trigger point
      const endPoint = sectionHeight * 1.6 // Adjusted end point

      if (newScrollY >= triggerPoint && newScrollY <= endPoint && !animationStarted) {
        setAnimationStarted(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [animationStarted])

  // Letter-by-letter typing animation effect
  useEffect(() => {
    if (animationStarted && currentCharIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypingText(fullText.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(prev => prev + 1)
      }, 120) // Adjust speed as needed (120ms per character)

      return () => clearTimeout(timer)
    }
  }, [currentCharIndex, fullText, animationStarted])

  const contentSections = [
    {
      title: {
        line1: "POWERING INDIA'S",
        line2: "INFRASTRUCTURE",
        line3: "WITH",
        line4: "ISTL ENERGY"
      },
      subtitle: "SMART • SUSTAINABLE • SCALABLE",
      description:
        "India is advancing toward a smarter and more sustainable future, with innovation in infrastructure, energy, and automation at the forefront. As a key enabler in this transformation, ISTL delivers end-to-end solutions — from IoT-powered smart meters and LED streetlight automation to solar and substation EPC services. Our commitment to quality and energy accountability drives smarter utility management across urban and rural sectors.",
      alignment: "center",
    },
    {
      title: "ISTL'S INTEGRATED EXCELLENCE",
      subtitle: "R&D DRIVEN INNOVATION SINCE 2015",
      description:
        "Founded in 2015, ISTL (iScientific Tech solutions Labs Pvt. Ltd.) has emerged as a leading force in R&D-driven IoT and EPC innovation. With BIS-certified smart meters, robust in-house manufacturing, and a dedicated engineering team, we continue to redefine what's possible in intelligent infrastructure — energizing quality and accountability at every step.",
      alignment: "left",
    },
  ]

  // Function to format typing text for mobile (split into lines only on very small screens)
  const formatTypingTextForMobile = (text) => {
    if (!text) return { text: "", isSplit: false }

    const words = text.split(" ")

    // Only split on screens smaller than 480px and when text has more than 2 words
    if (windowWidth < 480 && words.length > 2) {
      const midPoint = Math.ceil(words.length / 2)
      const firstLine = words.slice(0, midPoint).join(" ")
      const secondLine = words.slice(midPoint).join(" ")
      return { firstLine, secondLine, isSplit: true }
    }

    return { text, isSplit: false }
  }

  const formattedText = formatTypingTextForMobile(typingText)

  // Calculate container height based on screen size
  const getContainerHeight = () => {
    if (windowWidth <= 375) return 170 // Very small screens
    if (windowWidth <= 480) return 180 // Mobile screens
    return 200 // Desktop and tablets
  }

  return (
    <div
      className="ps-scrolled-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: `${getContainerHeight()}vh`,
      }}
    >
      {/* Scrolling Content Sections */}
      {contentSections.map((section, index) => {
        const sectionHeight = window.innerHeight
        const sectionStart = index * sectionHeight * (windowWidth <= 480 ? 0.9 : 1) // Adjust section spacing on mobile
        const progress = Math.max(0, Math.min(1, (scrollY - sectionStart + sectionHeight * 0.5) / sectionHeight))
        const isVisible = scrollY >= sectionStart - sectionHeight * 0.5 && scrollY <= sectionStart + sectionHeight * 1.5

        return (
          <section key={index} className={`ps-content-section ps-${section.alignment}`}>
            <div
              className="ps-content-wrapper"
              style={{
                opacity: isVisible ? Math.max(0.2, 1 - Math.abs(progress - 0.5) * 2) : 0,
                transform: `
                  translateY(${(1 - progress) * 80}px) 
                  scale(${0.85 + progress * 0.3})
                `,
              }}
            >
              <div
                className="ps-title-container"
                style={{
                  transform: windowWidth > 768 ? 
                    (section.alignment === "left"
                      ? `translateX(${(progress - 0.5) * -150}px)`
                      : section.alignment === "right"
                        ? `translateX(${(progress - 0.5) * 150}px)`
                        : `translateY(${(progress - 0.5) * -20}px)`)
                    : 'none', // Disable transforms on mobile for better text positioning
                }}
              >
                {/* Check if title is an object (3-line format) or string */}
                {typeof section.title === 'object' ? (
                  <div className="ps-main-title ps-four-line-title">
                    <div className="ps-title-line">{section.title.line1}</div>
                    <div className="ps-title-line">{section.title.line2}</div>
                    <div className="ps-title-line">{section.title.line3}</div>
                    <div className="ps-title-line">{section.title.line4}</div>
                  </div>
                ) : (
                  <h1 className="ps-main-title">{section.title}</h1>
                )}
                <h2 className="ps-subtitle">{section.subtitle}</h2>
              </div>

              <div
                className="ps-description-container"
                style={{
                  transform: `translateY(${(1 - progress) * 40}px)`,
                  transitionDelay: "0.1s",
                }}
              >
                <p className="ps-description">{section.description}</p>
              </div>

              {index === 0 && (
                <div className="ps-scroll-indicator">
                  {/* <div className="ps-scroll-line"></div>
                  <span>Scroll to Explore</span> */}
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* Typing Animation Text in the center between sections */}
      <div
        className="ps-typing-container-middle"
        style={{
          opacity: animationStarted ? 1 : 0,
          transform: animationStarted ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0.8)",
          transition: "all 0.4s ease-out",
        }}
      >
        {/* Always show the typing animation, but format differently based on screen size */}
        {formattedText.isSplit && typingText ? (
          <div className="ps-typing-text-middle ps-typing-multiline">
            <div className="ps-typing-line">{formattedText.firstLine}</div>
            <div className="ps-typing-line">{formattedText.secondLine}</div>
            {animationStarted && currentCharIndex < fullText.length && <span className="ps-typing-cursor">|</span>}
          </div>
        ) : (
          <h1 className="ps-typing-text-middle ps-typing-single-line">
            {typingText}
            {animationStarted && currentCharIndex < fullText.length && <span className="ps-typing-cursor">|</span>}
          </h1>
        )}
      </div>
    </div>
  )
}

export default ScrolledCom