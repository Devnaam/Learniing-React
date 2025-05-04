import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

// Variants for Framer Motion animation
const navbarVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Handle dark mode toggle
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Handle scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen)

  // NavLink active style
  const activeStyle = ({ isActive }) =>
    isActive ? 'nav-link active fw-bold' : 'nav-link'

  return (
    <motion.nav
      className={`navbar navbar-expand-lg sticky-top ${
        isScrolled ? 'shadow-sm' : ''
      } ${isDarkMode ? 'bg-dark' : 'bg-light'} border-bottom`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      aria-label="Main navigation"
    >
      <div className="container-fluid px-4">
        {/* Left: Logo and App Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="CouponPool Logo"
            style={{ height: '30px', marginRight: '10px' }}
          />
          <span className={isDarkMode ? 'text-white' : 'text-dark'}>
            CouponPool
          </span>
        </Link>

        {/* Hamburger Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          {/* Center: Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-none d-lg-flex">
            <li className="nav-item">
              <NavLink to="/" className={activeStyle} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/explore" className={activeStyle}>
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={activeStyle}>
                About
              </NavLink>
            </li>
          </ul>

          {/* Right: Buttons and Dark Mode Toggle */}
          <div className="d-flex align-items-center ms-auto gap-2">
            {/* Login Button */}
            <Link to="/login">
              <motion.button
                className={`btn btn-outline-${
                  isDarkMode ? 'light' : 'dark'
                } rounded-pill`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Login"
              >
                Login
              </motion.button>
            </Link>

            {/* Sign Up Button */}
            <Link to="/signup">
              <motion.button
                className="btn btn-primary rounded-pill"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Sign Up"
              >
                Sign Up
              </motion.button>
            </Link>

            {/* Dark Mode Toggle */}
            <motion.button
              className={`btn btn-outline-${
                isDarkMode ? 'light' : 'dark'
              } rounded-circle p-2`}
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-sun"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-moon"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar