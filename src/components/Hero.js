"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../components_css/Home_hero.css"
import home2 from "../images/Home/home2.png"
import home5 from "../images/Home/home5.png"
import home6 from "../images/substations/construction.jpg"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const carouselSlides = [
    {
      category: "INDUSTRY INSIGHTS",
      title: "ISTL is a Smart Energy Innovator",
      description: "Powering the future with smart meters, automation solutions, and EPC expertise.",
      buttonText: "Get Quote",
      buttonRoute: "/book-demo",
    },
    {
      category: "ISTL NEXUS SUITE",
      title: "Accelerate Industrial Intelligence with ISTL Nexus Suite",
      description:
        "ISTL Nexus Suite empowers you to streamline operations, enhance visibility, and drive innovation with a unified platform for smart metering, automation, and EPC solutions.",
      buttonText: "Explore ISTL Nexus Suite",
      buttonRoute: "/products",
    },
    {
      category: "ISTL SMART INFRASTRUCTURE SOLUTIONS",
      title: "Connect, automate, and power smarter infrastructure",
      description:
        "ISTL brings together smart meters, solar solutions, streetlight automation, and EPC services – all integrated to deliver efficiency, visibility, and sustainability for modern utilities and cities.",
      buttonText: "Learn More",
      buttonRoute: "/what-we-do",
    },
  ]

  const handleButtonClick = (e, route) => {
    e.preventDefault()
    e.stopPropagation()

    setTimeout(() => {
      try {
        navigate(route)
      } catch (error) {
        console.error("Navigation error:", error)
        window.location.href = route
      }
    }, 100)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {carouselSlides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlide ? "active" : ""}`}>
            <div className="carousel-content">
              <div className="content-wrapper">
                {/* Left Content */}
                <div className="text-content">
                  <div className="category-badge">{slide.category}</div>
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <button className="cta-button" onClick={(e) => handleButtonClick(e, slide.buttonRoute)} type="button">
                    {slide.buttonText}
                    <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* Right Image Area */}
                <div className="image-content">
                  {index === 0 && (
                    <div className="image-wrapper">
                      <img
                        src={home2 || "/placeholder.svg"}
                        alt="Professional woman in business attire"
                        className="slide-image"
                      />
                      <div className="floating-icon weather-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>
                      <div className="floating-chart">
                        <div className="chart-bars">
                          <div className="bar" style={{ height: "30%" }}></div>
                          <div className="bar" style={{ height: "60%" }}></div>
                          <div className="bar" style={{ height: "25%" }}></div>
                          <div className="bar" style={{ height: "45%" }}></div>
                          <div className="bar" style={{ height: "80%" }}></div>
                          <div className="bar" style={{ height: "35%" }}></div>
                          <div className="bar" style={{ height: "55%" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="image-wrapper">
                      <img
                        src={home5 || "/placeholder.svg"}
                        alt="Woman smiling in office environment"
                        className="slide-image"
                      />
                      <div className="floating-icon network-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="image-wrapper">
                      <img
                        src={home6 || "/placeholder.svg"}
                        alt="Person with glasses looking at data screens"
                        className="slide-image"
                      />
                      <div className="floating-icon data-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button onClick={prevSlide} className="nav-button nav-prev" aria-label="Previous slide" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button onClick={nextSlide} className="nav-button nav-next" aria-label="Next slide" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}
