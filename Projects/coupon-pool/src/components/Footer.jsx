import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Framer Motion variants
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const linkVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
}

const copyrightVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
}

const iconVariants = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
}

function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Detect dark mode based on document attribute
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-bs-theme')
    setIsDarkMode(theme === 'dark')
  }, [])

  // Show "Back to Top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className={`container-fluid py-5 mt-auto ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Column 1: App Branding */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3" style={{ fontSize: '1.5rem', letterSpacing: '1px' }}>
              CouponPool
            </h5>
            <p className="small text-muted mb-0" style={{ fontStyle: 'italic' }}>
              Your hub for the best digital deals
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  to="/explore"
                  className="d-block text-decoration-none text-muted mb-2"
                  style={{ fontSize: '0.95rem', transition: 'color 0.3s' }}
                >
                  Explore Coupons
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  to="/add-coupon"
                  className="d-block text-decoration-none text-muted mb-2"
                  style={{ fontSize: '0.95rem', transition: 'color 0.3s' }}
                >
                  Add Coupon
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link
                  to="/my-coupons"
                  className="d-block text-decoration-none text-muted mb-2"
                  style={{ fontSize: '0.95rem', transition: 'color 0.3s' }}
                >
                  My Coupons
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <a
                  href="mailto:support@couponpool.com"
                  className="d-block text-decoration-none text-muted"
                  style={{ fontSize: '0.95rem', transition: 'color 0.3s' }}
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>

          {/* Column 3: Newsletter and Social Icons */}
          <div className="col-md-4">
            <div className="text-center text-md-end">
              {/* Newsletter Input */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3" style={{ fontSize: '1rem' }}>
                  Stay Updated
                </h6>
                <div className="input-group" style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <input
                    type="email"
                    className="form-control rounded-start"
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                  />
                  <button
                    className="btn btn-primary rounded-end"
                    type="button"
                    disabled
                    style={{ backgroundColor: '#007bff', border: 'none' }}
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted"
                  variants={iconVariants}
                  whileHover="hover"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                    style={{ padding: '5px', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '50%' }}
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted"
                  variants={iconVariants}
                  whileHover="hover"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                    style={{ padding: '5px', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '50%' }}
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .36 2.777c-.198.509-.332 1.09-.372 1.942C.01 5.572 0 5.845 0 8s.01 2.428.048 3.281c.04.852.174 1.433.372 1.942a3.9 3.9 0 0 0 .923 1.417 3.9 3.9 0 0 0 1.417.923c.509.198 1.09.332 1.942.372.853.04 1.126.048 3.281.048s2.428-.01 3.281-.048c.852-.04 1.433-.174 1.942-.372a3.9 3.9 0 0 0 1.417-.923 3.9 3.9 0 0 0 .923-1.417c.198-.509.332-1.09.372-1.942.04-.853.048-1.126.048-3.281s-.01-2.428-.048-3.281c-.04-.852-.174-1.433-.372-1.942a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.509-.198-1.09-.332-1.942-.372C10.445.01 10.172 0 8 0zm0 1.441c2.136 0 2.39.009 3.233.047.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.843.047 1.097.047 3.233s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.843.038-1.097.047-3.233.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.282-.24-.705-.276-1.485-.038-.843-.047-1.097-.047-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92a2.5 2.5 0 0 1 .92-.598c.282-.11.705-.24 1.485-.276.843-.038 1.097-.047 3.233-.047zM8 4.56a3.44 3.44 0 1 0 0 6.88 3.44 3.44 0 0 0 0-6.88zm0 5.44a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.56-5.92a.48.48 0 1 0 0-.96.48.48 0 0 0 0 .96z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted"
                  variants={iconVariants}
                  whileHover="hover"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                    style={{ padding: '5px', background: 'rgba(0, 0, 0, 0.05)', borderRadius: '50%' }}
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-4" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }} />

        {/* Copyright */}
        <motion.div className="text-center" variants={copyrightVariants}>
          <p className="small text-muted mb-0" style={{ fontSize: '0.85rem' }}>
            © 2025 CouponPool. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="btn btn-primary position-fixed bottom-0 end-0 m-4 shadow"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
          style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#007bff',
            border: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </motion.button>
      )}
    </motion.footer>
  )
}

export default Footer