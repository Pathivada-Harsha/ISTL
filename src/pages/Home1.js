import { useEffect, useState } from "react"
import { useNavigationType } from "react-router-dom"

import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import ScrollSections from "../components/HomeProducts.js"
import OurClientsSection from "../components/ourclients_scroll.js"
import Iotcomponent from "../components/Iotcomponent.js"
import Preloader from "../components/Preloader.js"
import Pagescroll from "../components/photoscroll1.js"
import Contactform from "../components/ContactForm.js"
import Products from "../components/Products.js"
// import WhoWeAre from "../components/WhoWeAre"
// import ShopFloorFeatures from "../components/ShopFloorFeatures"
// import BookDemo from "../components/BookDemo"

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const navType = useNavigationType() // 'POP', 'PUSH', or 'REPLACE'

  useEffect(() => {
    // Only show preloader on direct load or refresh
    if (navType === "POP") {
      setShowPreloader(true)
    } else {
      setContentVisible(true)
    }
  }, [navType])

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
    setTimeout(() => {
      setContentVisible(true)
    }, 100)
  }

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
