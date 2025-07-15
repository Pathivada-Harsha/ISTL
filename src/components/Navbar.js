import React, { useState, useRef, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, ArrowRight, Cpu, Plus, Minus, Zap } from "lucide-react"
import '../components_css/Navbar.css'
import logo from "../images/istl_logo_01.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [iotDropdownOpen, setIotDropdownOpen] = useState(false)
  const [epcDropdownOpen, setEpcDropdownOpen] = useState(false)
  const [smartMetersDropdownOpen, setSmartMetersDropdownOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  // Mobile dropdown states
  const [mobileIotOpen, setMobileIotOpen] = useState(false)
  const [mobileEpcOpen, setMobileEpcOpen] = useState(false)
  const [mobileSmartMetersOpen, setMobileSmartMetersOpen] = useState(false)

  const hoverTimeoutRef = useRef({})
  const navbarRef = useRef(null)
  const location = useLocation() // Use useLocation hook for better path tracking

  // Sticky functionality for browsers that don't support CSS sticky
  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const offset = navbarRef.current.offsetTop
        const isCurrentlySticky = window.pageYOffset > offset

        if (isCurrentlySticky !== isSticky) {
          setIsSticky(isCurrentlySticky)
        }
      }
    }

    // Check if browser supports sticky positioning
    const testElement = document.createElement('div')
    testElement.style.position = 'sticky'
    const supportsSticky = testElement.style.position === 'sticky'

    // Only add scroll listener if sticky is not supported
    if (!supportsSticky) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Initial check
    }

    return () => {
      if (!supportsSticky) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isSticky])

  useEffect(() => {
    return () => {
      Object.values(hoverTimeoutRef.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout)
      })
    }
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "IoT Solutions",
      path: "/iot-solutions",
      hasDropdown: true,
      dropdownKey: "iot",
      items: [
        { name: "CCMS", path: "/products/istl-ccms", description: "Centralized Control & Monitoring System" },
        { name: "ITMS", path: "/products/istl-itms", description: "Intelligent Transformer Monitoring System" },
        { name: "MCMS", path: "/products/istl-mcms", description: "Motor Control & Monitoring System" },
        { name: "Smart LED Street Lights", path: "/products/smart-street-lights", description: "Intelligent Street Lighting Solutions" }]
    },
    {
      name: "EPC Services",
      path: "/epc-services",
      hasDropdown: true,
      dropdownKey: "epc",
      items: [
        { name: "Power T&D", path: "/products/epc/power_td", description: "Transmission & Distribution Services" },
        { name: "Power Substations", path: "/products/epc/substations", description: "Complete Substation Solutions" },
        { name: "Sesola Power Projects", path: "https://sesolaenergy.com", description: "Renewable Energy Solutions", external: true }
      ]
    },
    {
      name: "Smart Meters",
      path: "/smart-meters",
      hasDropdown: true,
      dropdownKey: "smartMeters",
      items: [
        { name: "Single Phase Smart Meter", path: "/products/smart-meters/single-phase", description: "" },
        { name: "Three Phase Smart Meter", path: "/products/smart-meters/three-phase", description: "" }

      ]
    },
    { name: "Contact Us", path: "/book-demo" },
  ]

  // Improved function to determine which item should be active
  const getActiveNavItem = (currentPath) => {
    // First, check for exact matches (including sub-items)
    for (const item of navItems) {
      // Check if current path exactly matches the main item
      if (currentPath === item.path) {
        return { type: 'main', path: item.path }
      }

      // Check if current path matches any sub-item
      if (item.hasDropdown && item.items) {
        for (const subItem of item.items) {
          if (!subItem.external && currentPath === subItem.path) {
            return { type: 'sub', parentPath: item.path, path: subItem.path }
          }
        }
      }
    }

    // If no exact match, check for path prefixes (for nested routes)
    for (const item of navItems) {
      if (item.hasDropdown && item.items) {
        for (const subItem of item.items) {
          if (!subItem.external && currentPath.startsWith(subItem.path + '/')) {
            return { type: 'sub', parentPath: item.path, path: subItem.path }
          }
        }
      }

      // Check if current path starts with main item path (but not exact match)
      if (currentPath !== item.path && currentPath.startsWith(item.path + '/')) {
        return { type: 'main', path: item.path }
      }
    }

    return null
  }

  // Function to check if a nav item should be highlighted
  const isNavItemActive = (item, currentPath) => {
    const activeItem = getActiveNavItem(currentPath)

    if (!activeItem) return false

    if (activeItem.type === 'main') {
      return activeItem.path === item.path
    }

    if (activeItem.type === 'sub') {
      // For dropdown items, highlight the parent if a sub-item is active
      return item.hasDropdown && activeItem.parentPath === item.path
    }

    return false
  }

  // Function to check if a dropdown item should be highlighted
  const isDropdownItemActive = (dropdownItem, currentPath) => {
    const activeItem = getActiveNavItem(currentPath)

    if (!activeItem || activeItem.type !== 'sub') return false

    return activeItem.path === dropdownItem.path
  }

  const handleDropdownEnter = (dropdownKey) => {
    if (hoverTimeoutRef.current[dropdownKey]) {
      clearTimeout(hoverTimeoutRef.current[dropdownKey])
      hoverTimeoutRef.current[dropdownKey] = null
    }

    switch (dropdownKey) {
      case 'iot':
        setIotDropdownOpen(true)
        setEpcDropdownOpen(false)
        setSmartMetersDropdownOpen(false)
        break
      case 'epc':
        setEpcDropdownOpen(true)
        setIotDropdownOpen(false)
        setSmartMetersDropdownOpen(false)
        break
      case 'smartMeters':
        setSmartMetersDropdownOpen(true)
        setIotDropdownOpen(false)
        setEpcDropdownOpen(false)
        break
    }
  }

  const handleDropdownLeave = (dropdownKey) => {
    hoverTimeoutRef.current[dropdownKey] = setTimeout(() => {
      switch (dropdownKey) {
        case 'iot':
          setIotDropdownOpen(false)
          break
        case 'epc':
          setEpcDropdownOpen(false)
          break
        case 'smartMeters':
          setSmartMetersDropdownOpen(false)
          break
      }
    }, 150)
  }

  const handleDropdownClick = (dropdownKey) => {
    switch (dropdownKey) {
      case 'iot':
        setIotDropdownOpen(!iotDropdownOpen)
        setEpcDropdownOpen(false)
        setSmartMetersDropdownOpen(false)
        break
      case 'epc':
        setEpcDropdownOpen(!epcDropdownOpen)
        setIotDropdownOpen(false)
        setSmartMetersDropdownOpen(false)
        break
      case 'smartMeters':
        setSmartMetersDropdownOpen(!smartMetersDropdownOpen)
        setIotDropdownOpen(false)
        setEpcDropdownOpen(false)
        break
    }
  }

  const handleDropdownItemClick = () => {
    setIotDropdownOpen(false)
    setEpcDropdownOpen(false)
    setSmartMetersDropdownOpen(false)
    Object.values(hoverTimeoutRef.current).forEach(timeout => {
      if (timeout) clearTimeout(timeout)
    })
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleMobileSection = (section) => {
    switch (section) {
      case 'iot':
        setMobileIotOpen(!mobileIotOpen)
        setMobileEpcOpen(false)
        setMobileSmartMetersOpen(false)
        break
      case 'epc':
        setMobileEpcOpen(!mobileEpcOpen)
        setMobileIotOpen(false)
        setMobileSmartMetersOpen(false)
        break
      case 'smartMeters':
        setMobileSmartMetersOpen(!mobileSmartMetersOpen)
        setMobileIotOpen(false)
        setMobileEpcOpen(false)
        break
    }
  }

  const getDropdownState = (dropdownKey) => {
    switch (dropdownKey) {
      case 'iot': return iotDropdownOpen
      case 'epc': return epcDropdownOpen
      case 'smartMeters': return smartMetersDropdownOpen
      default: return false
    }
  }

  const getMobileDropdownState = (dropdownKey) => {
    switch (dropdownKey) {
      case 'iot': return mobileIotOpen
      case 'epc': return mobileEpcOpen
      case 'smartMeters': return mobileSmartMetersOpen
      default: return false
    }
  }

  const currentPath = location.pathname

  return (
    <>
      <nav
        ref={navbarRef}
        className={`modern-navbar ${isSticky ? 'navbar-sticky-fallback' : ''}`}
      >
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <NavLink to="/" className='logo-link'>
                <div className="logo-container">
                  {logo ? (
                    <img src={logo} alt="ISTL Logo" className="logo-image" />
                  ) : (
                    <Zap className="logo-symbol" size={100} />
                  )}
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-menu-desktop">
              <div className="nav-links">
                {navItems.map((item) => {
                  const isDropdownOpen = item.hasDropdown ? getDropdownState(item.dropdownKey) : false
                  const isActive = isNavItemActive(item, currentPath)

                  return (
                    <div
                      key={item.name}
                      className="nav-item"
                      onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.dropdownKey)}
                      onMouseLeave={() => item.hasDropdown && handleDropdownLeave(item.dropdownKey)}
                    >
                      <NavLink
                        to={item.path}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                        onClick={(e) => {
                          if (item.hasDropdown) {
                            e.preventDefault()
                            handleDropdownClick(item.dropdownKey)
                          }
                        }}
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`} size={16} />
                        )}
                      </NavLink>

                      {/* Individual Dropdown for each nav item */}
                      {item.hasDropdown && isDropdownOpen && (
                        <div className="dropdown-menu">
                          <div className="dropdown-content">
                            {item.items.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className={`dropdown-item ${isDropdownItemActive(dropdownItem, currentPath) ? 'active' : ''}`}
                                onClick={handleDropdownItemClick}
                                {...(dropdownItem.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              >
                                <div className="dropdown-item-content">
                                  <span className="dropdown-item-name">{dropdownItem.name}</span>
                                  <span className="dropdown-item-description">{dropdownItem.description}</span>
                                </div>
                                <ArrowRight size={16} className="dropdown-item-arrow" />
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      )}
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
              {navItems.map((item) => {
                const isActive = isNavItemActive(item, currentPath)

                return (
                  <div key={item.name} className="mobile-nav-item">
                    {!item.hasDropdown ? (
                      <NavLink
                        to={item.path}
                        className={`mobile-nav-link ${currentPath === item.path ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <>
                        <button
                          className={`mobile-nav-accordion-btn ${isActive ? 'active' : ''}`}
                          onClick={() => toggleMobileSection(item.dropdownKey)}
                        >
                          <span>{item.name}</span>
                          {getMobileDropdownState(item.dropdownKey) ? <Minus size={20} /> : <Plus size={20} />}
                        </button>

                        {getMobileDropdownState(item.dropdownKey) && (
                          <div className="mobile-accordion-content">
                            {item.items.map((dropdownItem) => (
                              <NavLink
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className={`mobile-dropdown-link ${isDropdownItemActive(dropdownItem, currentPath) ? 'active' : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                                {...(dropdownItem.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              >
                                <div className="mobile-dropdown-item-content">
                                  <span className="mobile-dropdown-item-name">{dropdownItem.name}</span>
                                  <span className="mobile-dropdown-item-description">{dropdownItem.description}</span>
                                </div>
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}