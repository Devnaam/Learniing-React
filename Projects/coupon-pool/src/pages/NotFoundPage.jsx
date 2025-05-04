import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Framer Motion variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

function NotFoundPage() {
  return (
    <motion.div
      className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-body"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        {/* 404 Icon */}
        <motion.div variants={itemVariants} custom={0}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-exclamation-triangle text-warning mb-3"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016a.13.13 0 0 1 .125 0 .146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.15.15 0 0 1-.054.057.147.147 0 0 1-.07.016H1.146a.147.147 0 0 1-.07-.016.15.15 0 0 1-.054-.057.163.163 0 0 1 .002-.183L7.884 2.073a.146.146 0 0 1 .054-.057zm-1.044-.83a1.125 1.125 0 0 0-1.04 0L.073 13.042A1.125 1.125 0 0 0 1.146 15h13.708a1.125 1.125 0 0 0 1.073-1.958L8.069 1.186a1.125 1.125 0 0 0-1.175 0zM8 12a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1zm0-3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4z"/>
          </svg>
        </motion.div>

        {/* 404 Title */}
        <motion.div variants={itemVariants} custom={1}>
          <h1 className="display-1 fw-bold text-body">404</h1>
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} custom={2}>
          <p className="lead text-muted">Oops! The page you’re looking for doesn’t exist.</p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div variants={itemVariants} custom={3}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="btn btn-primary btn-lg mt-3"
              aria-label="Go to home page"
              data-bs-toggle="tooltip"
              title="Return to the home page"
            >
              Go to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFoundPage