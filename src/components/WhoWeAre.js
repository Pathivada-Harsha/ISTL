import React, { useState, useEffect, useRef } from 'react';
import '../components_css/WhoWeAre.css';


const ShieldIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
    </svg>
)

const ZapIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
)

const SettingsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

const WhoWeAre = () => {
    const [activeCard, setActiveCard] = useState(0);
    const [visibleElements, setVisibleElements] = useState({
        header: false,
        story: false,
        values: false,
        foundation: false,
        cta: false
    });

    const headerRef = useRef(null);
    const storyRef = useRef(null);
    const valuesRef = useRef(null);
    const foundationRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard(prev => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elementId = entry.target.getAttribute('data-animate');
                    setVisibleElements(prev => ({
                        ...prev,
                        [elementId]: true
                    }));
                }
            });
        }, observerOptions);

        const elements = [
            { ref: headerRef, id: 'header' },
            { ref: storyRef, id: 'story' },
            { ref: valuesRef, id: 'values' },
            { ref: foundationRef, id: 'foundation' },
            { ref: ctaRef, id: 'cta' }
        ];

        elements.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.setAttribute('data-animate', id);
                observer.observe(ref.current);
            }
        });

        return () => {
            elements.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const teamValues = [
        {
            title: "Innovation First",
            description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
            icon: "💡"
        },
        {
            title: "Collaborative Spirit",
            description: "Our diverse team works together, combining unique perspectives to create extraordinary outcomes.",
            icon: "🤝"
        },
        {
            title: "Excellence Driven",
            description: "We maintain the highest standards in everything we do, from concept to final delivery.",
            icon: "⭐"
        }
    ];

    // Generate random particles
    const particles = [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 2
    }));

    return (
        <section className="who-we-are-section">
            {/* Animated Background Elements */}
            <div className="background-container">
                {/* Floating Orbs */}
                <div className="floating-orb floating-orb-1"></div>
                <div className="floating-orb floating-orb-2"></div>
                <div className="floating-orb floating-orb-3"></div>

                {/* Grid Pattern */}
                <div className="grid-pattern"></div>

                {/* Animated Particles */}
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animationDelay: `${particle.delay}s`,
                            animationDuration: `${particle.duration}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="container">
                {/* Main Header */}
                <div
                    ref={headerRef}
                    className={`main-header ${visibleElements.header ? 'animate-in' : ''}`}
                >
                    <h1 className="main-title">
                        Who We Are
                    </h1>
                    <div className="title-underline"></div>
                    <p className="main-subtitle">
                        {/* We are a passionate team of innovators, creators, and problem-solvers dedicated to
                        transforming ideas into extraordinary digital experiences. */}
                        We are a Research & Development-driven team of Engineers, Solution Builders, and Technology
                        Enthusiasts focused on creating innovative solutions in Energy Metering, Automation, and
                        Sustainable Infrastructure Projects.
                    </p>
                </div>
                {/* Story Section */}
                <div
                    ref={storyRef}
                    className={`story-section ${visibleElements.story ? 'animate-in' : ''}`}
                >
                    <div className="story-content">
                        <h2>Our Story</h2>
                        {/* <p>
                            Founded with a vision to bridge the gap between imagination and reality, we've grown
                            from a small group of dreamers into a dynamic team that delivers cutting-edge solutions
                            across industries.
                        </p>
                        <p>
                            Every project we undertake is infused with creativity, technical excellence, and an
                            unwavering commitment to exceeding expectations. We don't just build products; we
                            craft experiences that inspire and empower.
                        </p> */}
                        <p>
                            Founded with a focus on research and development, ISTL began as a small engineering team determined to solve real-world challenges in energy and infrastructure. Over time, we've grown into a trusted technology partner delivering practical and scalable solutions.
                        </p>
                        <p>
                            Our work is guided by technical precision, a problem-solving mindset, and a commitment to quality. From concept to deployment, every solution we build reflects our goal: to make infrastructure smarter, more efficient, and reliable.
                        </p>

                        <div className="story-stats">
                            <div className="story-icon">
                                🚀
                            </div>
                            <div className="story-years">
                                <h3>10+ Years</h3>
                                <p>of Innovation</p>
                            </div>
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="stats-backdrop"></div>
                        <div className="stats-card">
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <div className="stat-number purple">100+</div>
                                    <div className="stat-label">Projects Delivered</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number blue">50+</div>
                                    <div className="stat-label">Happy Clients</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number pink">24/7</div>
                                    <div className="stat-label">Support</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number green">99%</div>
                                    <div className="stat-label">Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Cards */}
                <div
                    ref={valuesRef}
                    className={`values-section ${visibleElements.values ? 'animate-in' : ''}`}
                >
                    <h2 className="values-title">Our Core Values</h2>
                    <div className="values-grid">
                        {teamValues.map((value, index) => (
                            <div
                                key={index}
                                className={`value-card ${activeCard === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveCard(index)}
                            >
                                <div className="value-backdrop"></div>
                                <div className="value-content">
                                    <div className="value-icon">
                                        {value.icon}
                                    </div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                    <div className="value-indicator"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Foundation Section */}
                <div
                    ref={foundationRef}
                    className={`foundation-section ${visibleElements.foundation ? 'animate-in' : ''}`}
                >
                    <h2 className="foundation-title">Our Foundation</h2>
                    <div className="foundation-grid">
                        {/* Card 1 */}
                        <div className="foundation-card">
                            <div className="foundation-icon-container">
                                <ShieldIcon />
                            </div>
                            <h3 className="foundation-card-title">Our Mission</h3>
                            <p className="foundation-card-description">
                                To provide reliable, innovative automation solutions that enhance efficiency, reduce costs, and contribute
                                to sustainable infrastructure development.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="foundation-card">
                            <div className="foundation-icon-container">
                                <ZapIcon />
                            </div>
                            <h3 className="foundation-card-title">Our Vision</h3>
                            <p className="foundation-card-description">
                                To be the leading automation company that transforms traditional infrastructure into smart, connected
                                systems for a better tomorrow.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="foundation-card">
                            <div className="foundation-icon-container">
                                <SettingsIcon />
                            </div>
                            <h3 className="foundation-card-title">Our Values</h3>
                            <p className="foundation-card-description">
                                Innovation, quality, reliability, and customer satisfaction drive everything we do. We believe in building
                                long-term partnerships through excellence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div
                    ref={ctaRef}
                    className={`cta-section ${visibleElements.cta ? 'animate-in' : ''}`}
                >
                    <h2 className="cta-title">Ready to Work Together?</h2>
                    <p className="cta-description">
                        Let's collaborate to bring your vision to life with innovation, creativity, and excellence.
                    </p>
                    <button className="cta-button">
                        <span className="cta-button-text">Get In Touch</span>
                        <div className="cta-button-overlay"></div>
                        <div className="cta-button-ripple"></div>
                    </button>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="bottom-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>
        </section >
    );
};

export default WhoWeAre;