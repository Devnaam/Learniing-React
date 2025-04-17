import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Search from './pages/Search'
import Notifications from './pages/Notifications'
import Settings from './pages/Settings'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/search" element={<Search />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <footer className="text-center py-3 bg-light">
        <p>© 2025 Social Media App</p>
      </footer>
    </div>
  )
}

export default App