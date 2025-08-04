"use client"

import { useState, useEffect } from "react"

import "../components_css/bookDemo.css"

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".demo-animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Demo request submitted successfully! We will contact you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    })
    setIsSubmitting(false)
  }

  const services = [
    "Solar Panel EPC",
    "Substation EPC",
    "Single Phase Smart Meters",
    "Three Phase Smart Meters",
    "Smart Street Lights",
    "CCMS Solutions",
    "ITMS Solutions",
    "MCMS Solutions",
    "Custom IoT Solutions",
  ]

  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
        </svg>
      ),
      title: "Expert Consultation",
      description: "Get personalized advice from our experienced engineers and technical experts.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Live Demonstration",
      description: "See our solutions in action with interactive demos and real-time monitoring.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
      title: "Custom Proposal",
      description: "Receive a tailored proposal with detailed specifications and pricing.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "Learn about our quality standards, certifications, and warranty policies.",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "",
      message:
        "ISTL delivered exceptional results on our substation project. Their technical expertise and project management were outstanding.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "",
      message: "The solar panel installation was completed on time and exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "",
      message:
        "Their IoT solutions have transformed our city infrastructure. The smart street lighting system is incredibly efficient.",
      rating: 5,
    },
  ]

  return (
    <div className="demo-page">
  

      {/* Hero Section */}
      <section className="demo-hero">
        <div className="demo-hero-background"></div>
        <div className="demo-hero-content">
          <div className="demo-container">
            <div className="demo-hero-text demo-animate-on-scroll" id="hero-text">
              <h1>Contact Us</h1>
              <p>
                Experience our cutting-edge solutions firsthand. Schedule a personalized demonstration with our experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="demo-benefits">
        <div className="demo-container">
          <div className="demo-section-header demo-animate-on-scroll" id="benefits-header">
            <h2>Why Contact Us?</h2>
            <p>Discover how our solutions can transform your operations</p>
          </div>

          <div className="demo-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="demo-benefit-card demo-animate-on-scroll" id={`benefit-${index}`}>
                <div className="demo-benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="demo-form-section">
        <div className="demo-container">
          <div className="demo-form-wrapper">
            <div className="demo-form-content">
              <div className="demo-form-header demo-animate-on-scroll" id="form-header">
                <h2>Get in Touch</h2>
                <p>
                  Fill out the form below and our team will contact you within 24 hours to schedule your personalized
                  demonstration.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="demo-form demo-animate-on-scroll" id="demo-form">
                <div className="demo-form-row">
                  <div className="demo-form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="demo-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="demo-form-row">
                  <div className="demo-form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="demo-form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="demo-form-group">
                  <label htmlFor="service">Service of Interest *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} required>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="demo-form-row">
                  <div className="demo-form-group">
                    <label htmlFor="preferredDate">Preferred Date</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="demo-form-group">
                    <label htmlFor="preferredTime">Preferred Time</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Select time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="demo-form-group">
                  <label htmlFor="message">Additional Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your specific requirements or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="demo-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="demo-spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Form
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="demo-contact-info demo-animate-on-scroll" id="contact-info">
              <h3>Get in Touch</h3>
              <div className="demo-contact-item">
                <div className="demo-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-63013 77549</p>
                </div>
              </div>

              <div className="demo-contact-item">
                <div className="demo-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@istlabs.in</p>
                </div>
              </div>

              <div className="demo-contact-item">
                <div className="demo-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4>Address</h4>
                  <p> 133/1/B, 1st Floor Phase ll,
                IDA Cherlapally, Hyderabad , India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="demo-testimonials">
        <div className="demo-container">
          <div className="demo-section-header demo-animate-on-scroll" id="testimonials-header">
            <h2>What Our Clients Say</h2>
            <p>Hear from satisfied customers who have experienced our solutions</p>
          </div>

          <div className="demo-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="demo-testimonial-card demo-animate-on-scroll" id={`testimonial-${index}`}>
                <div className="demo-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p>"{testimonial.message}"</p>
                <div className="demo-testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default BookDemo
