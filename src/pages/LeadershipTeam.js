import React, { useState, useEffect } from 'react';
import Derin_Josen from '../images/team/Derin Josen.jpg';
import Ravitheja_Kammela from '../images/team/Raviteja Kammela.jpg';
import Austin_Prakesh from '../images/team/Austin Prakesh.jpg';
import Arun_Kumar from '../images/team/Arun Kumar.png';
const LeadershipTeam = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    // Additional scroll-triggered animations
    const handleScroll = () => {
      const teamItems = document.querySelectorAll('.leadership-member-card');
      
      teamItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setTimeout(() => {
            item.classList.add('leadership-member-visible');
          }, index * 200);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const teamData = [
    {
      name: "Venkata Ravitheja K",
      position: "Partner",
      image: Ravitheja_Kammela,
    },
    {
      name: "Austin Prakesh",
      position: "Partner",
      image: Austin_Prakesh,
    },
    {
      name: "Arun Kumar",
      position: "Partner",
      image: Arun_Kumar,
    },
    {
      name: "Derin Josen",
      position: "Partner",
      image: Derin_Josen,
    },
  ];

  return (
    <div className="leadership-main-wrapper">
      <style jsx>{`
        /* Base Container */
        .leadership-main-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          position: relative;
          overflow: hidden;
        }

        .leadership-main-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 25% 25%, rgba(28, 166, 154, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(28, 166, 154, 0.05) 0%, transparent 50%);
          background-size: 800px 800px;
          animation: leadership-bg-float 20s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes leadership-bg-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(30px, -30px) rotate(2deg);
          }
        }

        .leadership-content-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
          z-index: 2;
        }

        /* Common Header */
        .leadership-header-area {
          text-align: center;
          margin-bottom: 80px;
        }

        .leadership-main-heading {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1CA69A;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          background: linear-gradient(135deg, #1CA69A 0%, #2E8B57 50%, #20B2AA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(-30px);
          animation: leadership-fade-down 1s ease forwards;
        }

        @keyframes leadership-fade-down {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* CIRCLE LAYOUT */
        .leadership-display-section {
          padding: 40px 0;
          position: relative;
        }

        .leadership-members-grid {
          display: flex;
          flex-direction: column;
          gap: 80px;
          max-width: 900px;
          margin: 0 auto;
        }

        .leadership-member-card {
          display: flex;
          align-items: center;
          gap: 40px;
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Left animation for odd items */
        .leadership-member-card:nth-child(odd) {
          transform: translateX(-100px);
        }

        .leadership-member-card:nth-child(odd).leadership-member-visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Right animation for even items */
        .leadership-member-card:nth-child(even) {
          flex-direction: row-reverse;
          transform: translateX(100px);
        }

        .leadership-member-card:nth-child(even).leadership-member-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .leadership-member-card:hover .leadership-profile-image {
          transform: scale(1.1);
        }

        .leadership-member-card:hover .leadership-info-panel {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(28, 166, 154, 0.2);
        }

        .leadership-photo-section {
          position: relative;
          flex-shrink: 0;
        }

        .leadership-photo-container {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .leadership-rotating-ring {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border: 3px solid transparent;
          border-top: 3px solid #1CA69A;
          border-right: 3px solid #2E8B57;
          border-radius: 50%;
          animation: leadership-ring-spin 5s linear infinite;
          box-shadow: 0 0 20px rgba(28, 166, 154, 0.3);
        }

        .leadership-image-frame {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(28, 166, 154, 0.2);
        }

        .leadership-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .leadership-pulse-border {
          position: absolute;
          top: -25px;
          left: -25px;
          right: -25px;
          bottom: -25px;
          border: 2px solid rgba(28, 166, 154, 0.4);
          border-radius: 50%;
          animation: leadership-pulse-effect 4s ease-in-out infinite;
        }

        @keyframes leadership-ring-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes leadership-pulse-effect {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.1;
          }
        }

        .leadership-text-section {
          flex: 1;
        }

        .leadership-info-panel {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(28, 166, 154, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .leadership-wave-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .leadership-wave-graphic {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100px;
          animation: leadership-wave-move 8s ease-in-out infinite;
        }

        .leadership-wave-color {
          fill: rgba(28, 166, 154, 0.12);
        }

        .leadership-wave-graphic path:nth-child(1) {
          animation: leadership-wave-1 10s ease-in-out infinite;
        }

        .leadership-wave-graphic path:nth-child(2) {
          animation: leadership-wave-2 12s ease-in-out infinite reverse;
        }

        .leadership-wave-graphic path:nth-child(3) {
          animation: leadership-wave-3 14s ease-in-out infinite;
        }

        @keyframes leadership-wave-move {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(-30px);
          }
        }

        @keyframes leadership-wave-1 {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(-30px) translateY(-8px);
          }
        }

        @keyframes leadership-wave-2 {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(35px) translateY(-12px);
          }
        }

        @keyframes leadership-wave-3 {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          50% {
            transform: translateX(-20px) translateY(-5px);
          }
        }

        .leadership-text-content {
          position: relative;
          z-index: 2;
          padding: 35px;
        }

        .leadership-member-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: #1CA69A;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .leadership-member-role {
          font-size: 1.1rem;
          color: #2E8B57;
          margin-bottom: 20px;
          font-weight: 500;
          opacity: 0.9;
        }

        .leadership-decorative-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #1CA69A, #2E8B57, #20B2AA);
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(28, 166, 154, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .leadership-member-card {
            flex-direction: column !important;
            text-align: center;
            gap: 30px;
          }

          .leadership-main-heading {
            font-size: 2.5rem;
          }

          .leadership-members-grid {
            gap: 60px;
          }

          /* Reset transforms for mobile */
          .leadership-member-card:nth-child(odd),
          .leadership-member-card:nth-child(even) {
            transform: translateY(50px);
          }

          .leadership-member-card:nth-child(odd).leadership-member-visible,
          .leadership-member-card:nth-child(even).leadership-member-visible {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .leadership-main-wrapper {
            padding: 30px 0;
          }

          .leadership-main-heading {
            font-size: 2.2rem;
          }

          .leadership-photo-container {
            width: 150px;
            height: 150px;
          }

          .leadership-text-content {
            padding: 30px;
          }

          .leadership-member-name {
            font-size: 1.6rem;
          }

          .leadership-member-role {
            font-size: 1rem;
          }

          .leadership-header-area {
            margin-bottom: 60px;
          }

          .leadership-members-grid {
            gap: 50px;
          }
        }

        @media (max-width: 480px) {
          .leadership-main-heading {
            font-size: 1.8rem;
          }

          .leadership-photo-container {
            width: 120px;
            height: 120px;
          }

          .leadership-text-content {
            padding: 25px;
          }

          .leadership-member-name {
            font-size: 1.5rem;
          }

          .leadership-member-role {
            font-size: 0.9rem;
          }

          .leadership-header-area {
            margin-bottom: 40px;
          }

          .leadership-members-grid {
            gap: 40px;
          }
        }
      `}</style>

      <section className="leadership-display-section" data-section="circle">
        <div className="leadership-content-container">
          <div className="leadership-header-area">
            <h2 className="leadership-main-heading">Meet Our Experienced Team</h2>
          </div>

          <div className="leadership-members-grid">
            {teamData.map((member, index) => (
              <div
                key={index}
                className={`leadership-member-card ${visibleSections.has("circle") ? "leadership-member-visible" : ""}`}
                style={{ animationDelay: `${index * 1}s` }}
              >
                <div className="leadership-photo-section">
                  <div className="leadership-photo-container">
                    {/* <div className="leadership-rotating-ring"></div> */}
                    <div className="leadership-image-frame">
                      <img 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        className="leadership-profile-image"
                      />
                    </div>
                    {/* <div className="leadership-pulse-border"></div> */}
                  </div>
                </div>
                <div className="leadership-text-section">
                  <div className="leadership-info-panel">
                    <div className="leadership-wave-bg">
                      <svg className="leadership-wave-graphic" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                          opacity=".25"
                          className="leadership-wave-color"
                        ></path>
                        <path
                          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                          opacity=".5"
                          className="leadership-wave-color"
                        ></path>
                        <path
                          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                          className="leadership-wave-color"
                        ></path>
                      </svg>
                    </div>
                    <div className="leadership-text-content">
                      <h3 className="leadership-member-name">{member.name}</h3>
                      <p className="leadership-member-role">{member.position}</p>
                      <div className="leadership-decorative-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipTeam;