import { useState } from 'react'

function FollowButton({ userId }) {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <button
      className={`btn ${isFollowing ? 'btn-outline-secondary' : 'btn-primary'} btn-sm`}
      onClick={handleFollow}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}

export default FollowButton