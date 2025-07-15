import { useState, useEffect } from "react"

import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import WhoWeAre from "../components/WhoWeAre"
import ShopFloorFeatures from "../components/ShopFloorFeatures"
import Products from "../components/Products"
import BookDemo from "../components/BookDemo"
import ScrollSections from "../components/HomeProducts.js"
import OurClientsSection from "../components/ourclients_scroll.js"
import Iotcomponent from "../components/Iotcomponent.js"
import Preloader from "../components/Preloader.js"
import Pagescroll from "../components/photoscroll1.js"
import Contactform from "../components/ContactForm.js"
export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setContentVisible(true)
    }, 100)
  }

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showPreloader])

  return (
    <div>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`home-content ${contentVisible ? "content-visible" : "content-hidden"}`}
        style={{
          opacity: contentVisible ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <Pagescroll />
      <Hero />
      <AboutUs />
      <ScrollSections />
      {/* <Pagescroll /> */}
      {/* <WhoWeAre /> */}
      {/* <section className="py-16 bg-white">
        <ShopFloorFeatures />
      </section> */}
      <Iotcomponent />
      <Products />
      <OurClientsSection />

      {/* <BookDemo /> */}
      <Contactform />
    </div>
     <style jsx>{`
        .home-content {
          transition: opacity 0.5s ease-in-out;
        }
        
        .home-content.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .home-content.visible {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
    </div>
  )
}
