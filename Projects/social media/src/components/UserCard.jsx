import { Link } from 'react-router-dom'
import FollowButton from './FollowButton'

function UserCard({ user }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <img src={user.profilePic} alt={user.name} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div className="flex-grow-1">
          <Link to={`/profile/${user.id}`} className="text-decoration-none fw-bold">{user.name}</Link>
          <p className="text-muted mb-0">{user.bio}</p>
        </div>
        <FollowButton userId={user.id} />
      </div>
    </div>
  )
}

export default UserCard