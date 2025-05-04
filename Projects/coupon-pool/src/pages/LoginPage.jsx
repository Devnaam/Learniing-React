import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuthStore } from '../store/authStore'
import logo from '../assets/logo.png'

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

const errorVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
}

function LoginPage() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' })
  const { login, user } = useAuthStore()
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  // Handle dark mode toggle
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const onSubmit = (data) => {
    setIsSubmitting(true)
    setTimeout(() => {
      login(data.email)
      setIsSubmitting(false)
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center vh-100 w-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container-sm container-md">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-lg p-4 rounded-4">
              {/* Dark Mode Toggle */}
              <motion.div
                className="d-flex justify-content-end mb-3"
                variants={itemVariants}
                custom={0}
              >
                <motion.button
                  className={`btn btn-outline-${isDarkMode ? 'light' : 'dark'} rounded-circle p-2`}
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
              </motion.div>

              {/* Branding/Header */}
              <motion.div
                className="text-center mb-4"
                variants={itemVariants}
                custom={1}
              >
                <motion.img
                  src={logo}
                  alt="CouponPool Logo"
                  style={{ width: '60px', marginBottom: '10px' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                />
                <h3 className="fw-bold">CouponPool</h3>
                <p className="text-muted small">Find & Share Your Best Digital Deals</p>
              </motion.div>

              {/* Login Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <motion.div className="mb-3" variants={itemVariants} custom={2}>
                  <div className="form-floating">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="Email address"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: 'Invalid email format',
                        },
                      })}
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  {errors.email && (
                    <motion.div
                      className="invalid-feedback d-block"
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {errors.email.message}
                    </motion.div>
                  )}
                </motion.div>

                {/* Password Field */}
                <motion.div className="mb-3" variants={itemVariants} custom={3}>
                  <div className="form-floating">
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="Password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  {errors.password && (
                    <motion.div
                      className="invalid-feedback d-block"
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {errors.password.message}
                    </motion.div>
                  )}
                </motion.div>

                {/* Remember Me + Forgot Password */}
                <motion.div
                  className="d-flex justify-content-between align-items-center mb-3"
                  variants={itemVariants}
                  custom={4}
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      {...register('rememberMe')}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-muted small">
                    Forgot Password?
                  </Link>
                </motion.div>

                {/* Login Button */}
                <motion.div variants={itemVariants} custom={5}>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </motion.div>
              </form>

              {/* Divider */}
              <motion.div
                className="d-flex align-items-center my-4"
                variants={itemVariants}
                custom={6}
              >
                <hr className="flex-grow-1" />
                <span className="px-3 text-muted">OR</span>
                <hr className="flex-grow-1" />
              </motion.div>

              {/* Google Login Button */}
              <motion.div variants={itemVariants} custom={7}>
                <motion.button
                  className="btn btn-outline-secondary w-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-google me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Sign in with Google
                </motion.button>
              </motion.div>

              {/* Sign Up Link */}
              <motion.div
                className="text-center mt-4"
                variants={itemVariants}
                custom={8}
              >
                <p className="text-muted small">
                  Don’t have an account?{' '}
                  <Link to="/register" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LoginPage