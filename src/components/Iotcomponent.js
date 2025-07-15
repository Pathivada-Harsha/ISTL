import React from 'react';
import '../components_css/iotComponent.css';
import lab1 from "../images/Home/lab1.jpeg"
import lab2 from "../images/Home/lab2.jpeg"
import lab3 from "../images/Home/lab3.jpeg"
import lab4 from "../images/Home/lab4.jpeg"
import lab5 from "../images/Home/lab5.jpeg"
import lab6 from "../images/Home/lab6.jpeg"
import lab7 from "../images/Home/lab7.jpeg"
import lab8 from "../images/Home/lab8.jpeg"
import lab9 from "../images/Home/lab9.jpeg"
import lab10 from "../images/Home/lab10.jpeg"


function IoTComponent() {
  const services = [
    'Custom-Built IoT Solutions',
    'Plug-and-Play IoT Devices',
    'White-Labeled IoT Platforms',
    'Advanced R&D & Testing Lab',
    'High Availability (99.9% Uptime)',
    'Low Maintenance Infrastructure',
    'Standards-Compliant Deployments',
    'Turnkey EPC Project Delivery',
    'Smart Metering & Grid Solutions',
    'Solar & Substation Implementation'
  ];


  const labImages = [
    lab3,
    lab7,
    lab8,
    lab4,
    lab9,
    lab10
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...labImages, ...labImages];

  return (
    <div className="iotc-component">
      {/* Hero Section */}
      <section className="iotc-hero-section">
        <div className="iotc-hero-container">
          <div className="iotc-hero-content">
            <div className="iotc-hero-text">
              {/* <div className="iotc-hero-label">
                <span className="iotc-arrow">→</span>
                In-House IoT Manufacturing Unit
              </div>
              <h1 className="iotc-hero-title">
                Empowering Innovation Through In-House R&D and IoT Solutions
              </h1> */}
              <div className="iotc-hero-label">
                <span className="iotc-arrow">→</span>
                End-to-End IoT Manufacturing & EPC Delivery
              </div>
              <h1 className="iotc-hero-title">
                Driving Innovation with In-House R&D, Smart Metering & Automation Solutions
              </h1>

              <div className="iotc-services-grid">
                {services.map((service, index) => (
                  <div key={index} className="iotc-service-badge">
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="iotc-hero-visual">
              {/* <div className="iotc-tech-circle">
                <div className="iotc-circle-text">EMPOWERING IOT SOLUTIONS</div>
              </div> */}
              <div className="iotc-robot-hand">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Technology Innovation"
                />
                <div className="iotc-holographic-orb"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Gallery Section */}
      <section className="iotc-lab-section">
        <div className="iotc-lab-container">
          <div className="iotc-lab-header">
            <div className="iotc-lab-label">
              <span className="iotc-arrow">→</span>
              Lab Gallery
            </div>
            <h2 className="iotc-lab-title">Our IoT Lab Facility</h2>
            <p className="iotc-lab-subtitle">In-house Unit for IoT Device R&D and Manufacturing</p>
          </div>
          <div className="iotc-lab-gallery-container">
            <div className="iotc-lab-gallery">
              {duplicatedImages.map((image, index) => (
                <div key={index} className="iotc-lab-image">
                  <img src={image} alt={`Lab facility ${(index % labImages.length) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IoTComponent;