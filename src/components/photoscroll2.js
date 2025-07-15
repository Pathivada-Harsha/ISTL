import { useState, useEffect } from 'react';
import backgroundImage from './../images/backgrounds_imgs/bg14.png';
import '../components_css/photoscroll2.css';

function ScrolledCom() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSections = [
    {
      title: "POWERING INDIA'S INFRASTRUCTURE WITH ISTL ENERGY",
      subtitle: "SMART • SUSTAINABLE • SCALABLE",
      description: "India is advancing toward a smarter and more sustainable future, with innovation in infrastructure, energy, and automation at the forefront. As a key enabler in this transformation, ISTL delivers end-to-end solutions — from IoT-powered smart meters and LED streetlight automation to solar and substation EPC services. Our commitment to quality and energy accountability drives smarter utility management across urban and rural sectors.",
      alignment: "center"
    },
    {
      title: "ISTL'S INTEGRATED EXCELLENCE",
      subtitle: "R&D DRIVEN INNOVATION SINCE 2015",
      description: "Founded in 2015, ISTL (iScientific Tech solutions Labs Pvt. Ltd.) has emerged as a leading force in R&D-driven IoT and EPC innovation. With BIS-certified smart meters, robust in-house manufacturing, and a dedicated engineering team, we continue to redefine what's possible in intelligent infrastructure — energizing quality and accountability at every step.",
      alignment: "left"
    }
  ];

  return (
    <div 
      className="ps-scrolled-container"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        height: `${contentSections.length * 100}vh` // Dynamic height based on sections
      }}
    >
      {/* Scrolling Content Sections */}
      {contentSections.map((section, index) => {
        const sectionHeight = window.innerHeight;
        const sectionStart = index * sectionHeight;
        const progress = Math.max(0, Math.min(1, (scrollY - sectionStart + sectionHeight * 0.5) / sectionHeight));
        const isVisible = scrollY >= sectionStart - sectionHeight * 0.5 && 
                         scrollY <= sectionStart + sectionHeight * 1.5;

        return (
          <section 
            key={index} 
            className={`ps-content-section ps-${section.alignment}`}
          >
            <div 
              className="ps-content-wrapper"
              style={{
                opacity: isVisible ? Math.max(0.1, 1 - Math.abs(progress - 0.5) * 2) : 0,
                transform: `
                  translateY(${(1 - progress) * 100}px) 
                  scale(${0.8 + progress * 0.4})
                `,
              }}
            >
              <div 
                className="ps-title-container"
                style={{
                  transform: section.alignment === 'left' 
                    ? `translateX(${(progress - 0.5) * -200}px)` 
                    : section.alignment === 'right'
                    ? `translateX(${(progress - 0.5) * 200}px)`
                    : `translateY(${(progress - 0.5) * -30}px)`
                }}
              >
                <h1 className="ps-main-title">{section.title}</h1>
                <h2 className="ps-subtitle">{section.subtitle}</h2>
              </div>
              
              <div 
                className="ps-description-container"
                style={{
                  transform: `translateY(${(1 - progress) * 60}px)`,
                  transitionDelay: '0.2s'
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

              {/* {index === contentSections.length - 1 && (
                <button 
                  className="ps-cta-button"
                  style={{
                    transform: `translateY(${(1 - progress) * 40}px) scale(${progress > 0.6 ? 1 : 0.8})`,
                    opacity: progress > 0.5 ? 1 : 0
                  }}
                >
                  Get Started Today
                </button>
              )} */}
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default ScrolledCom;