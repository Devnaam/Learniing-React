import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import CouponCard from '../components/CouponCard'
import LoadingSpinner from '../components/LoadingSpinner'

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

function ExploreCouponsPage() {
  const { coupons, user } = useAuthStore()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [platformFilter, setPlatformFilter] = useState('')
  const [sortOption, setSortOption] = useState('newest')
  const [isLoading, setIsLoading] = useState(true)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  // Simulate loading state
  useEffect(() => {
    if (coupons.length >= 0) {
      setTimeout(() => setIsLoading(false), 500) // Mock delay
    }
  }, [coupons])

  if (!user) return null

  // Filter and sort coupons
  const filteredCoupons = coupons
    .filter(
      (coupon) =>
        coupon.code.toLowerCase().includes(search.toLowerCase()) &&
        (platformFilter ? coupon.platform === platformFilter : true)
    )
    .sort((a, b) => {
      if (sortOption === 'newest') {
        return new Date(b.expiry) - new Date(a.expiry)
      } else if (sortOption === 'oldest') {
        return new Date(a.expiry) - new Date(b.expiry)
      } else if (sortOption === 'expiring') {
        return new Date(a.expiry) - new Date(b.expiry)
      }
      return 0
    })

  return (
    <motion.div
      className="container-fluid py-5"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Page Header */}
      <motion.div className="text-center mb-4" variants={headerVariants}>
        <h2 className="fw-bold">🔍 Explore Coupons</h2>
        <p className="text-muted">Discover the best deals shared by the community.</p>
      </motion.div>

      {/* Search, Filter, and Sort Section */}
      <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
        <motion.div className="col" variants={itemVariants} custom={0}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search by coupon code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search coupons"
            data-bs-toggle="tooltip"
            title="Search by coupon code"
          />
        </motion.div>
        <motion.div className="col" variants={itemVariants} custom={1}>
          <select
            className="form-select mb-3"
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            aria-label="Filter by platform"
            data-bs-toggle="tooltip"
            title="Filter coupons by platform"
          >
            <option value="">All Platforms</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Paytm">Paytm</option>
            <option value="PhonePe">PhonePe</option>
            <option value="Amazon">Amazon</option>
          </select>
        </motion.div>
        <motion.div className="col" variants={itemVariants} custom={2}>
          <select
            className="form-select mb-3"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            aria-label="Sort coupons"
            data-bs-toggle="tooltip"
            title="Sort coupons"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="expiring">Expiring Soon</option>
          </select>
        </motion.div>
      </div>

      {/* Loading Spinner or Coupon List */}
      {isLoading ? (
        <LoadingSpinner fullscreen message="Loading your coupons..." variant="primary" />
      ) : filteredCoupons.length === 0 ? (
        <motion.p
          className="text-muted text-center"
          variants={itemVariants}
          custom={3}
        >
          No coupons found.
        </motion.p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3" role="list">
          {filteredCoupons.map((coupon, index) => (
            <motion.div
              key={coupon.id}
              className="col"
              variants={itemVariants}
              custom={3 + index}
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
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCouponsPage