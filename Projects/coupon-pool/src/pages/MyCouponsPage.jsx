import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import CouponCard from '../components/CouponCard'

// Framer Motion variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

function MyCouponsPage() {
  const { user, coupons, deleteCoupon } = useAuthStore()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [couponToDelete, setCouponToDelete] = useState(null)
  const [showToast, setShowToast] = useState(false)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  const userCoupons = coupons.filter((coupon) => coupon.userId === user.id)

  // Handle delete confirmation
  const handleDeleteClick = (coupon) => {
    setCouponToDelete(coupon)
    setShowModal(true)
  }

  const confirmDelete = () => {
    if (couponToDelete) {
      deleteCoupon(couponToDelete.id)
      setShowModal(false)
      setShowToast(true)
      setCouponToDelete(null)
    }
  }

  return (
    <motion.div
      className="container-fluid py-5"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Header */}
      <motion.div className="text-center mb-4" variants={headerVariants}>
        <h2 className="fw-bold">📋 My Coupons</h2>
        <p className="text-muted">Manage your shared coupons here.</p>
      </motion.div>

      {/* Coupon List */}
      {userCoupons.length === 0 ? (
        <motion.div className="text-center" variants={itemVariants} custom={0}>
          <p className="text-muted">
            No coupons yet.{' '}
            <Link to="/add-coupon" className="text-primary">
              Add one!
            </Link>
          </p>
        </motion.div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" role="list">
          {userCoupons.map((coupon, index) => (
            <motion.div
              key={coupon.id}
              className="col"
              variants={itemVariants}
              custom={index + 1}
              role="listitem"
            >
              <CouponCard
                image={coupon.image}
                platform={coupon.platform}
                platformLogo={`/logos/${coupon.platform.toLowerCase()}.png`}
                couponCode={coupon.code}
                description={coupon.description}
                expiryDate={coupon.expiry}
              />
              <motion.button
                className="btn btn-danger btn-sm mt-2 w-100"
                onClick={() => handleDeleteClick(coupon)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Delete coupon ${coupon.code}`}
                data-bs-toggle="tooltip"
                title="Delete this coupon"
              >
                Delete
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <motion.div
        className={`modal fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="deleteModalLabel"
        aria-hidden={!showModal}
        variants={modalVariants}
        initial="hidden"
        animate={showModal ? "visible" : "hidden"}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this coupon? This action cannot be undone.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal Backdrop */}
      {showModal && (
        <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>
      )}

      {/* Success Toast */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        <div
          className={`toast ${showToast ? 'show' : ''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="true"
          data-bs-delay="2000"
        >
          <div className="toast-body">
            🗑️ Coupon deleted successfully!
            <button
              type="button"
              className="btn-close ms-2"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MyCouponsPage