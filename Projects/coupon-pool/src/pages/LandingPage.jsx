import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

// Framer Motion variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

function LandingPage() {
  return (
    <motion.div
      className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-gradient"
      style={{
        background: 'linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%)',
      }}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <main className="text-center" role="main">
        {/* Hero Image/Logo */}
        <motion.img
          src={logo}
          alt="CouponPool Logo"
          className="img-fluid rounded mb-4"
          style={{ maxWidth: '100px' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        />

        {/* Title, Subtitle, and Tagline */}
        <motion.div variants={itemVariants} custom={0}>
          <h1 className="display-4 fw-bold">🎉 Welcome to CouponPool</h1>
        </motion.div>
        <motion.div variants={itemVariants} custom={1}>
          <p className="lead text-body">Share and discover the best digital coupons!</p>
        </motion.div>
        <motion.div variants={itemVariants} custom={2}>
          <p className="text-muted">Join our community to save more on your digital transactions.</p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div className="mt-4 d-flex justify-content-center gap-3" variants={itemVariants} custom={3}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/explore"
              className="btn btn-primary btn-lg"
              aria-label="Explore coupons"
              data-bs-toggle="tooltip"
              title="Browse community coupons"
            >
              Explore Coupons
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="btn btn-outline-primary btn-lg"
              aria-label="Login to your account"
              data-bs-toggle="tooltip"
              title="Sign in to your account"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  )
}

export default LandingPage