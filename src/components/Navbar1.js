import React, { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, ChevronDown, ArrowRight, Cpu, Plus, Minus, Zap } from "lucide-react"
import '../components_css/Navbar1.css'
import logo from "../images/istl_logo_01.png"




// import logoimg from "../images/logoimg.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileInnovationsOpen, setMobileInnovationsOpen] = useState(false)
  const [mobileEpcOpen, setMobileEpcOpen] = useState(false)
  const [mobileSmartOpen, setMobileSmartOpen] = useState(false)

  const hoverTimeoutRef = useRef(null)

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    // { name: "What We Do", path: "/what-we-do" },
    {
      name: "Solutions",
      path: "/products",
      hasDropdown: true,
    },
    // { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/book-demo" },
  ]

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const handleDropdownEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setProductsDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
    }, 100)
  }

  const handleProductsClick = () => {
    setProductsDropdownOpen(!productsDropdownOpen)
  }

  const handleDropdownItemClick = () => {
    setProductsDropdownOpen(false)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleMobileSection = (section) => {
    switch (section) {
      case 'products':
        setMobileProductsOpen(!mobileProductsOpen)
        break
      case 'innovations':
        if (!mobileInnovationsOpen) {
          setMobileEpcOpen(false)
          setMobileSmartOpen(false)
        }
        setMobileInnovationsOpen(!mobileInnovationsOpen)
        break
      case 'epc':
        if (!mobileEpcOpen) {
          setMobileInnovationsOpen(false)
          setMobileSmartOpen(false)
        }
        setMobileEpcOpen(!mobileEpcOpen)
        break
      case 'smart':
        if (!mobileSmartOpen) {
          setMobileInnovationsOpen(false)
          setMobileEpcOpen(false)
        }
        setMobileSmartOpen(!mobileSmartOpen)
        break
    }
  }

  return (
    <>
      <nav className="modern-navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Enhanced Logo */}
            <div className="navbar-logo">
              <NavLink to="/" className='logo-link'>
                <div className="">

                  {logo ? (
                    <img src={logo} alt="ISTL Logo" style={{ width: '150px', marginTop: 8 }} />
                  ) : (
                    <Zap className="logo-symbol" size={100} />
                  )}
                </div>
                {/*                
                <div className="logo-text">
                  <span className="logo-main">ISTL</span>
                  <span className="logo-sub">Energizing Quality & Accountability</span>
                </div> */}
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-menu-desktop">
              <div className="nav-links">
                {navItems.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className="nav-item"
                      onMouseEnter={() => item.hasDropdown && handleDropdownEnter()}
                      onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            e.preventDefault()
                            handleProductsClick()
                          }
                        }}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className={`dropdown-arrow ${productsDropdownOpen ? "open" : ""}`} size={16} />
                        )}
                      </NavLink>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="navbar-mobile-toggle">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-button"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`navbar-menu-mobile ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <div key={item.name} className="mobile-nav-item">
                  {!item.hasDropdown ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <>
                      <button
                        className="mobile-nav-accordion-btn"
                        onClick={() => toggleMobileSection('products')}
                      >
                        <span>{item.name}</span>
                        {mobileProductsOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </button>

                      {mobileProductsOpen && (
                        <div className="mobile-accordion-content">
                          {/* Innovations & Products Section */}
                          <div className="mobile-accordion-section">
                            <button
                              className="mobile-section-btn"
                              onClick={() => toggleMobileSection('innovations')}
                            >
                              <span>Innovations & Products</span>
                              {mobileInnovationsOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            {mobileInnovationsOpen && (
                              <div className="mobile-section-content">
                                <NavLink to="/products/istl-ccms" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}> CCMS</NavLink>
                                <NavLink to="/products/istl-itms" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}> ITMS</NavLink>
                                <NavLink to="/products/istl-mcms" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}> MCMS</NavLink>
                              </div>
                            )}
                          </div>

                          {/* EPC Services Section */}
                          <div className="mobile-accordion-section">
                            <button
                              className="mobile-section-btn"
                              onClick={() => toggleMobileSection('epc')}
                            >
                              <span>EPC Services</span>
                              {mobileEpcOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            {mobileEpcOpen && (
                              <div className="mobile-section-content">
                                <NavLink to="/products/epc/power_td" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Power T&D</NavLink>
                                <NavLink to="/products/epc/substations" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Power Substations</NavLink>

                                <NavLink to="https://sesolaenergy.com" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Solar Power Projects </NavLink>
                              </div>
                            )}
                          </div>

                          {/* Smart Solutions Section */}
                          <div className="mobile-accordion-section">
                            <button
                              className="mobile-section-btn"
                              onClick={() => toggleMobileSection('smart')}
                            >
                              <span>Smart Solutions</span>
                              {mobileSmartOpen ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            {mobileSmartOpen && (
                              <div className="mobile-section-content">
                                <h4 className='dropdown-link'>Smart Meters</h4>
                                <NavLink to="/products/smart-meters/single-phase" className={({ isActive }) => `mobile-sub-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Single Phase smart meter</NavLink>
                                <NavLink to="/products/smart-meters/three-phase" className={({ isActive }) => `mobile-sub-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Three Phase smart meter</NavLink>
                                <NavLink to="/products/smart-street-lights" className={({ isActive }) => `mobile-dropdown-link ${isActive ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Smart Street Lights</NavLink>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Width Mega Dropdown */}
        {productsDropdownOpen && (
          <div
            className="mega-dropdown-fullwidth"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="mega-dropdown-container">
              <div className="mega-dropdown-content">
                {/* Innovations & Products Column */}
                <div className="dropdown-column">
                  <h3 className="column-title">INNOVATIONS & PRODUCTS</h3>
                  <ul className="column-links">
                    <li><NavLink to="/products/istl-ccms" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}> CCMS</NavLink></li>
                    <li><NavLink to="/products/istl-itms" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}> ITMS</NavLink></li>
                    <li><NavLink to="/products/istl-mcms" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}> MCMS</NavLink></li>
                  </ul>
                </div>

                {/* EPC Services Column */}
                <div className="dropdown-column">
                  <h3 className="column-title">EPC SERVICES</h3>
                  <ul className="column-links">
                    <li><NavLink to="/products/epc/power_td" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}>Power T&D</NavLink></li>
                    <li><NavLink to="/products/epc/substations" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}>Power Substations</NavLink></li>
                    <li><NavLink to="https://sesolaenergy.com" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}>Solar Power Projects</NavLink></li>
                  </ul>
                </div>

                {/* Smart Solutions Column */}
                <div className="dropdown-column">
                  <h3 className="column-title">SMART SOLUTIONS</h3>
                  <ul className="column-links">
                    <li>
                      <h4>Smart Meters</h4>
                      <ul className="sub-links">
                        <li><NavLink to="/products/smart-meters/single-phase" className="sub-link" onClick={handleDropdownItemClick}>Single Phase smart meter</NavLink></li>
                        <li><NavLink to="/products/smart-meters/three-phase" className="sub-link" onClick={handleDropdownItemClick}>Three Phase smart meter</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/products/smart-street-lights" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}>Smart Street Lights</NavLink></li>
                  </ul>
                </div>

                {/* Enhanced Featured Card */}
                <div className="featured-card">
                  <div className="card-icon">
                    <Cpu size={24} />
                  </div>
                  <h4 className="card-title">Smart Infrastructure Solutions</h4>
                  <p className="card-description">Unlock the power of IoT with our integrated monitoring systems and cutting-edge technology.</p>
                  <NavLink to="/products" className={({ isActive }) => `card-cta ${isActive ? 'active' : ''}`} onClick={handleDropdownItemClick}>
                    Explore solutions <ArrowRight size={16} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}