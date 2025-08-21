// export default function AboutUs() {
//   return (
//     <section id="about" className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Leading the future of automation with innovative solutions for smart infrastructure and industrial control
//             systems.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Pioneering Automation Excellence</h3>
//             <p className="text-gray-600 mb-4">
//               We are a rapidly growing automation company specializing in cutting-edge control systems and monitoring
//               solutions. Our expertise spans across CCMS devices for street light control, advanced motor controller
//               systems, and comprehensive ITMS devices for transformer monitoring.
//             </p>
//             <p className="text-gray-600 mb-6">
//               As an EPC (Engineering, Procurement, and Construction) company, we provide end-to-end solutions that
//               transform traditional infrastructure into smart, efficient systems. Our commitment to innovation and
//               quality has positioned us as a trusted partner in the automation industry.
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center p-4 bg-white rounded-lg shadow-sm">
//                 <div className="text-2xl font-bold text-blue-600">500+</div>
//                 <div className="text-sm text-gray-600">Projects Completed</div>
//               </div>
//               <div className="text-center p-4 bg-white rounded-lg shadow-sm">
//                 <div className="text-2xl font-bold text-blue-600">50+</div>
//                 <div className="text-sm text-gray-600">Cities Served</div>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-96">
//             <img
//               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop"
//               alt="Automation Control Room"
//               className="w-full h-full rounded-lg shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// File: AboutUs.jsx
import React, { useState, useEffect } from 'react';
import '../components_css/home_aboutus.css';
import { NavLink } from 'react-router-dom';

import lab1 from "../images/Home/lab6.jpeg"
import office from "../images/Home/office.jpeg"
import home5 from "../images/Home/home4.png"
import  Sol_substation1 from "./../images/substations/hausbhavi2.jpeg"
import sub1 from "./../images/substations/substations3.jpg"

const images = [lab1,office,sub1]

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoverIndex, setHoverIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isMobile])

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section className="habo-about-container">
      <div className="habo-about-content">
        <h2>ISTL - About Us</h2>
        <h3 className="habo-title">Energizing Quality & Accountability</h3>
        <p>
          ISTLABS is an R&D-centric company committed to building intelligent infrastructure through innovation in energy
          management and automation. Our in-house research and engineering teams are at the forefront of developing
          solutions that are not only smart but built with accountability and long-term reliability in mind.
        </p>
        <p>
          We offer BIS-certified single-phase and three-phase smart meters designed for precision, compliance, and
          seamless integration with modern utility grids. Alongside this, our IoT portfolio includes Centralized Control
          & Monitoring Systems (CCMS), Intelligent Transformer Monitoring Systems (ITMS), and Motor Control and
          Monitoring system (MCMS).
        </p>
        <p>
          Our EPC division delivers solar energy solutions, substation infrastructure, and end-to-end deployment
          services, ensuring energy systems that are efficient, scalable, and future-ready.
        </p>
        <button className="habo-learn-more-btn">
          <NavLink to="/about" className="habo-learn-more-link">
            Learn More About Us →
          </NavLink>
        </button>
      </div>

      {isMobile ? (
        <div className="habo-carousel-container">
          <img src={images[currentIndex] || "/placeholder.svg"} alt="Slide" className="habo-carousel-image" />
          <div className="habo-carousel-controls">
            <button onClick={prev}>❮</button>
            <button onClick={next}>❯</button>
          </div>
        </div>
      ) : (
        <div className="habo-image-gallery">
          {images.map((src, i) => (
            <div
              key={i}
              className={`habo-gallery-wrapper ${
                hoverIndex === null
                  ? "habo-gallery-wrapper-default"
                  : hoverIndex === i
                    ? "habo-gallery-wrapper-expanded"
                    : "habo-gallery-wrapper-compressed"
              }`}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img src={src || "/placeholder.svg"} alt={`img-${i}`} className="habo-gallery-img" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default AboutUs
