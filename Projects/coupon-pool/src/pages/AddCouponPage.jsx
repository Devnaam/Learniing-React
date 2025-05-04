import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'

// Framer Motion variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const errorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

function AddCouponPage() {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({ mode: 'onChange' })
  const { addCoupon, user } = useAuthStore()
  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  // Handle image upload and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }

  // Form submission handler
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      // Prepare payload
      const payload = {
        ...data,
        userId: user.id,
        image: imagePreview || null,
      }

      // Mock async submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      addCoupon(payload)

      // Show success toast
      setShowToast(true)

      // Reset form
      reset()
      setImagePreview(null)

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/my-coupons')
      }, 2000)
    } catch (error) {
      setErrorMessage('Failed to add coupon. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Custom validation for future date
  const validateFutureDate = (value) => {
    const selectedDate = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return selectedDate >= today || 'Expiry date must be in the future'
  }

  return (
    <motion.div
      className="container-md py-5 d-flex justify-content-center align-items-center"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="card shadow rounded bg-body p-4 w-100" style={{ maxWidth: '600px' }}>
        {/* Page Header */}
        <motion.div className="text-center mb-4" variants={headerVariants}>
          <h2 className="fw-bold">🎟 Share a New Coupon</h2>
          <p className="text-muted">Help others save by submitting your unused digital coupons.</p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Platform */}
          <motion.div className="mb-4">
            <div className="form-floating">
              <select
                className={`form-select ${errors.platform ? 'is-invalid' : ''}`}
                {...register('platform', { required: 'Platform is required' })}
              >
                <option value="">Select Platform</option>
                <option value="Google Pay">Google Pay</option>
                <option value="Paytm">Paytm</option>
                <option value="PhonePe">PhonePe</option>
                <option value="Amazon">Amazon</option>
              </select>
              <label htmlFor="platform">Platform</label>
            </div>
            {errors.platform && (
              <motion.div
                className="invalid-feedback d-block"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
              >
                {errors.platform.message}
              </motion.div>
            )}
          </motion.div>

          {/* Coupon Code */}
          <motion.div className="mb-4">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${errors.code ? 'is-invalid' : ''}`}
                {...register('code', {
                  required: 'Coupon code is required',
                  minLength: { value: 3, message: 'Coupon code must be at least 3 characters' },
                })}
              />
              <label htmlFor="code">Coupon Code</label>
            </div>
            {errors.code && (
              <motion.div
                className="invalid-feedback d-block"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
              >
                {errors.code.message}
              </motion.div>
            )}
          </motion.div>

          {/* Offer Description */}
          <motion.div className="mb-4">
            <div className="form-floating">
              <textarea
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                style={{ height: '100px' }}
                {...register('description', {
                  required: 'Description is required',
                  maxLength: { value: 150, message: 'Description must be 150 characters or less' },
                })}
              ></textarea>
              <label htmlFor="description">Offer Description</label>
            </div>
            {errors.description && (
              <motion.div
                className="invalid-feedback d-block"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
              >
                {errors.description.message}
              </motion.div>
            )}
          </motion.div>

          {/* Expiry Date */}
          <motion.div className="mb-4">
            <div className="form-floating">
              <input
                type="date"
                className={`form-control ${errors.expiry ? 'is-invalid' : ''}`}
                {...register('expiry', {
                  required: 'Expiry date is required',
                  validate: validateFutureDate,
                })}
              />
              <label htmlFor="expiry">Expiry Date</label>
            </div>
            {errors.expiry && (
              <motion.div
                className="invalid-feedback d-block"
                variants={errorVariants}
                initial="hidden"
                animate="visible"
              >
                {errors.expiry.message}
              </motion.div>
            )}
          </motion.div>

          {/* Upload Screenshot */}
          <motion.div className="mb-4">
            <label htmlFor="image" className="form-label">Upload Screenshot (Optional)</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg,image/png"
              {...register('image', { onChange: handleImageChange })}
            />
            {imagePreview && (
              <motion.div
                className="mt-3 ratio ratio-16x9"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img
                  src={imagePreview}
                  alt="Coupon preview"
                  className="img-thumbnail rounded"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="btn btn-primary w-100"
            disabled={!isValid || isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Submitting...
              </>
            ) : (
              'Add Coupon'
            )}
          </motion.button>
        </form>

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
              🎉 Coupon added successfully!
              <button
                type="button"
                className="btn-close ms-2"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <motion.div
            className="alert alert-danger mt-3"
            role="alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {errorMessage}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default AddCouponPage