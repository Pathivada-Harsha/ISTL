import React from 'react';


const IoTLayout = () => {
  // Generate dots for background decoration
  const generateDots = () => {
    return Array.from({ length: 64 }, (_, i) => (
      <div key={i} className="dot"></div>
    ));
  };

  return (
    <div className="iot-container">
      {/* Background decorative dots */}
      <div className="bg-dots">
        <div className="dots-grid">
          {generateDots()}
        </div>
      </div>

      <div className="content-wrapper">
        <div className="main-flex">
          <div className="grid-container">
            
            {/* Left side - Image */}
            <div className="image-section">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=face"
                  alt="Professional working with technology"
                  className="main-image"
                />
                
                {/* Overlay gradient */}
                <div className="image-overlay"></div>
                
                {/* Tech UI elements overlay */}
                <div className="tech-elements">
                  {/* Top left circle indicator */}
                  <div className="tech-indicator"></div>
                  
                  {/* Top right rectangles */}
                  <div className="tech-bars">
                    <div className="tech-bar-1"></div>
                    <div className="tech-bar-2"></div>
                  </div>
                  
                  {/* Bottom tech device */}
                  <div className="tech-device">
                    <div className="tech-screen"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="content-section">
              {/* What we are doing badge */}
              <div className="badge-container">
                <div className="badge">
                  WHAT WE ARE DOING
               
                </div>
              </div>

              {/* Main heading */}
              <div>
                <h3 className="main-heading">
                  "IOT & Data Acquisition<br/>
                  Systems"
                </h3>
              </div>

              {/* Description paragraph */}
              <div className="description-container">
                <p className="description-text">
                  Our main products are into(IoT) remote Real Time Efficient energy 
                  management systems for Power Distribution companies, Telecom 
                  Infra Companies. By combining business strategy and leading-edge 
                  wireless and embedded cloud technologies, we are developing 
                  efficient and effective solutions that keep businesses one-step ahead.
                </p>
              </div>

              {/* CTA Button */}
              <div className="cta-container">
                <button className="cta-button">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="bg-decoration"></div>
    </div>
  );
};

export default IoTLayout;