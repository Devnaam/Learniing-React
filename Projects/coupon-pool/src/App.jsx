import { Routes, Route } from 'react-router-dom'
     import { motion } from 'framer-motion'
     import Navbar from './components/Navbar'
     import Footer from './components/Footer'
     import LandingPage from './pages/LandingPage'
     import LoginPage from './pages/LoginPage'
     import DashboardPage from './pages/DashboardPage'
     import AddCouponPage from './pages/AddCouponPage'
     import ExploreCouponsPage from './pages/ExploreCouponsPage'
     import MyCouponsPage from './pages/MyCouponsPage'
     import NotFoundPage from './pages/NotFoundPage'
     import './App.css'

     const pageVariants = {
       initial: { opacity: 0, y: 20 },
       animate: { opacity: 1, y: 0 },
       exit: { opacity: 0, y: -20 },
     }

     function App() {
       return (
         <div className="app-container">
           <Navbar />
           <main>
             <motion.div
               initial="initial"
               animate="animate"
               exit="exit"
               variants={pageVariants}
               transition={{ duration: 0.5 }}
             >
               <Routes>
                 <Route path="/" element={<LandingPage />} />
                 <Route path="/login" element={<LoginPage />} />
                 <Route path="/register" element={<NotFoundPage />} />
                 <Route path="/forgot-password" element={<NotFoundPage />} />
                 <Route path="/dashboard" element={<DashboardPage />} />
                 <Route path="/add-coupon" element={<AddCouponPage />} />
                 <Route path="/explore" element={<ExploreCouponsPage />} />
                 <Route path="/my-coupons" element={<MyCouponsPage />} />
                 <Route path="*" element={<NotFoundPage />} />
               </Routes>
             </motion.div>
           </main>
           <Footer />
         </div>
       )
     }

     export default App