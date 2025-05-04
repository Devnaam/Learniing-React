import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import CouponCard from '../components/CouponCard'

// Framer Motion variants
const containerVariants = {
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

function DashboardPage() {
  const { user, coupons } = useAuthStore()
  const navigate = useNavigate()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  if (!user) return null

  // Calculate dashboard metrics
  const userCoupons = coupons.filter((coupon) => coupon.userId === user.id)
  const today = new Date()
  const expiringSoon = userCoupons.filter((coupon) => {
    const expiry = new Date(coupon.expiry)
    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24))
    return diffDays <= 3 && diffDays >= 0
  }).length
  const savedCoupons = userCoupons.length // Placeholder for saved coupons
  const ctr = 0 // Placeholder for click-through rate

  // Mock recent activity (simulated from coupons)
  const recentActivities = userCoupons.slice(0, 5).map((coupon, index) => ({
    id: coupon.id,
    message: `You added ${coupon.code} on ${coupon.platform}`,
    timestamp: new Date().toLocaleString(),
  }))

  return (
    <motion.div
      className="container-fluid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        {/* Sidebar (visible on lg screens) */}
        <div className="col-lg-3 d-none d-lg-block p-4 border-end">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <a href="/dashboard" className="text-decoration-none">Dashboard</a>
            </li>
            <li className="list-group-item">
              <a href="/my-coupons" className="text-decoration-none">My Coupons</a>
            </li>
            <li className="list-group-item">
              <a href="/explore" className="text-decoration-none">Explore</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-12 col-lg-9 p-4" style={{ overflowY: 'auto' }}>
          {/* Welcome Header */}
          <motion.div className="mb-4" variants={itemVariants} custom={0}>
            <h2>👋 Welcome back, {user.email.split('@')[0]}!</h2>
            <p className="text-muted">Here’s what’s happening today.</p>
          </motion.div>

          {/* Dashboard Widgets */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-4">
            <motion.div className="col" variants={itemVariants} custom={1}>
              <motion.div
                className="card shadow-sm rounded-3 p-3 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-bs-toggle="tooltip"
                title="Total coupons you’ve added"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-gift mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm6 3H1v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7H7zm8-1V4h-6v2h6z"/>
                </svg>
                <h6>Total Coupons Added</h6>
                <p className="fw-bold mb-0">{userCoupons.length}</p>
              </motion.div>
            </motion.div>

            <motion.div className="col" variants={itemVariants} custom={2}>
              <motion.div
                className="card shadow-sm rounded-3 p-3 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-bs-toggle="tooltip"
                title="Coupons expiring within 3 days"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-calendar-x mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z"/>
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                <h6>Coupons Expiring Soon</h6>
                <p className="fw-bold mb-0">{expiringSoon}</p>
              </motion.div>
            </motion.div>

            <motion.div className="col" variants={itemVariants} custom={3}>
              <motion.div
                className="card shadow-sm rounded-3 p-3 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-bs-toggle="tooltip"
                title="Total saved coupons"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-bookmark mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                <h6>Saved Coupons</h6>
                <p className="fw-bold mb-0">{savedCoupons}</p>
              </motion.div>
            </motion.div>

            <motion.div className="col" variants={itemVariants} custom={4}>
              <motion.div
                className="card shadow-sm rounded-3 p-3 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-bs-toggle="tooltip"
                title="Click-through rate of your coupons"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-bar-chart mb-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1-1-1z"/>
                </svg>
                <h6>Click-through Rate</h6>
                <p className="fw-bold mb-0">{ctr}%</p>
              </motion.div>
            </motion.div>
          </div>

          <div className="row g-3">
            {/* Recent Activity Feed */}
            <motion.div className="col-12 col-md-6" variants={itemVariants} custom={5}>
              <div className="card shadow-sm rounded-3 p-3">
                <h5 className="mb-3">Recent Activity</h5>
                {recentActivities.length === 0 ? (
                  <p className="text-muted">No recent activity.</p>
                ) : (
                  <ul className="list-group list-group-flush">
                    {recentActivities.map((activity, index) => (
                      <motion.li
                        key={activity.id}
                        className="list-group-item d-flex align-items-center"
                        variants={itemVariants}
                        custom={6 + index}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-clock me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        <div>
                          <p className="mb-0">{activity.message}</p>
                          <small className="text-muted">{activity.timestamp}</small>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>

            {/* Quick Actions Panel */}
            <motion.div className="col-12 col-md-6" variants={itemVariants} custom={6}>
              <div className="card shadow-sm rounded-3 p-3">
                <h5 className="mb-3">Quick Actions</h5>
                <motion.button
                  className="btn btn-primary w-100 mb-2"
                  onClick={() => navigate('/add-coupon')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-bs-toggle="tooltip"
                  title="Add a new coupon"
                  aria-label="Add a new coupon"
                >
                  Add New Coupon
                </motion.button>
                <motion.button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => navigate('/explore')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-bs-toggle="tooltip"
                  title="Explore all coupons"
                  aria-label="Explore all coupons"
                >
                  Explore Coupons
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Your Coupons */}
          <motion.div className="mt-4" variants={itemVariants} custom={7}>
            <h3>Your Coupons</h3>
            {userCoupons.length === 0 ? (
              <p>No coupons yet. Add one!</p>
            ) : (
              <div className="row row-cols-1 row-cols-md-3 g-3">
                {userCoupons.map((coupon) => (
                  <div key={coupon.id} className="col">
                    <CouponCard
                      image={coupon.image}
                      platform={coupon.platform}
                      platformLogo={`/logos/${coupon.platform.toLowerCase()}.png`}
                      couponCode={coupon.code}
                      description={coupon.description}
                      expiryDate={coupon.expiry}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default DashboardPage