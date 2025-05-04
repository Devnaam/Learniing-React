import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

// Framer Motion variants for card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function CouponCard({ image, platform, platformLogo, couponCode, description, expiryDate }) {
  const [isSaved, setIsSaved] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const expiryBadgeRef = useRef(null)
  const saveButtonRef = useRef(null)

  // Calculate if coupon is expiring soon (within 3 days)
  const expiry = new Date(expiryDate)
  const today = new Date()
  const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))
  const isExpiringSoon = diffDays <= 3 && diffDays >= 0
  const badgeClass = isExpiringSoon ? 'bg-danger' : 'bg-success'

  // Format expiry date for display and tooltip
  const formattedDate = expiry.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
  })
  const fullDate = expiry.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode)
    setShowToast(true)
  }

  // Initialize Bootstrap tooltips
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    )
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl)
    })
  }, [])

  // Simulate loading state
  useEffect(() => {
    if (image && platform && couponCode && description && expiryDate) {
      setIsLoading(false)
    }
  }, [image, platform, couponCode, description, expiryDate])

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Coupon Card */}
      <motion.div
        className="card rounded-3 shadow-sm p-3 mb-4 w-100"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02 }}
        role="article"
        aria-label={`Coupon for ${platform}`}
      >
        {/* Image Preview */}
        {image && (
          <img
            src={image}
            alt={`${platform} coupon`}
            className="img-fluid rounded-top"
            style={{ height: '150px', objectFit: 'cover' }}
          />
        )}

        {/* Card Body */}
        <div className="card-body p-3 position-relative">
          {/* Platform and Expiry Badge */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="d-flex align-items-center">
              <img
                src={platformLogo}
                alt={`${platform} logo`}
                style={{ width: '24px', height: '24px', marginRight: '8px' }}
              />
              <h5 className="card-title mb-0 fw-bold">{platform}</h5>
            </div>
            <span
              className={`badge ${badgeClass} rounded-pill`}
              ref={expiryBadgeRef}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={fullDate}
            >
              {formattedDate}
            </span>
          </div>

          {/* Save Button */}
          <motion.button
            className="btn btn-link position-absolute top-0 end-0 p-2"
            onClick={() => setIsSaved(!isSaved)}
            aria-label={isSaved ? 'Remove from saved' : 'Save for later'}
            ref={saveButtonRef}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Save for later"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isSaved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
          </motion.button>

          {/* Coupon Description */}
          <p className="card-text small text-muted mb-3">{description}</p>

          {/* Coupon Code and Copy Button */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={couponCode}
              readOnly
              aria-label="Coupon code"
            />
            <motion.button
              className="btn btn-outline-secondary"
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Copy coupon code"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Toast for Copy Feedback */}
      <div
        className="position-fixed bottom-0 end-0 p-3"
        style={{ zIndex: 1050 }}
      >
        <div
          className={`toast ${showToast ? 'show' : ''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="true"
          data-bs-delay="2000"
        >
          <div className="toast-body">
            ✅ Copied '{couponCode}' to clipboard
            <button
              type="button"
              className="btn-close ms-2"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </>
  )
}

CouponCard.propTypes = {
  image: PropTypes.string,
  platform: PropTypes.string.isRequired,
  platformLogo: PropTypes.string.isRequired,
  couponCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
}

export default CouponCard