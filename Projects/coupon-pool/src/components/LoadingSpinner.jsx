import { motion } from 'framer-motion'

// Framer Motion variants for spinner animation
const spinnerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

function LoadingSpinner({ fullscreen = false, message, size = 'md', variant = 'primary', overlay = false }) {
  // Determine spinner size class
  const sizeClass = size === 'sm' ? 'spinner-border-sm' : size === 'lg' ? 'spinner-border-lg' : ''

  // Base spinner component
  const spinner = (
    <motion.div
      className={`spinner-border ${sizeClass} text-${variant}`}
      role="status"
      variants={spinnerVariants}
      initial="hidden"
      animate="visible"
    >
      <span className="visually-hidden">Loading...</span>
    </motion.div>
  )

  // If fullscreen, center the spinner vertically and horizontally
  if (fullscreen) {
    return (
      <motion.div
        className="d-flex justify-content-center align-items-center vh-100"
        variants={spinnerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {spinner}
          {message && (
            <motion.p
              className="mt-3 text-muted"
              variants={spinnerVariants}
              initial="hidden"
              animate="visible"
            >
              {message}
            </motion.p>
          )}
        </div>
      </motion.div>
    )
  }

  // If overlay, add a semi-transparent background
  if (overlay) {
    return (
      <motion.div
        className="position-relative"
        variants={spinnerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
          {spinner}
        </div>
      </motion.div>
    )
  }

  // Otherwise, return an inline spinner
  return (
    <motion.div
      className="d-inline-block"
      variants={spinnerVariants}
      initial="hidden"
      animate="visible"
    >
      {spinner}
    </motion.div>
  )
}

export default LoadingSpinner