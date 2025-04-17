import { useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { dummyUsers, dummyPosts } from '../data/dummyData'

function Profile() {
  const { userId } = useParams()
  const user = dummyUsers.find(u => u.id === userId)
  const userPosts = dummyPosts.filter(p => p.userId === userId)

  if (!user) return <div>User not found</div>

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src={user.profilePic} alt={user.name} className="rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
            <h3>{user.name}</h3>
            <p className="text-muted">{user.bio}</p>
            <button className="btn btn-outline-primary">Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {userPosts.map(post => (
            <div key={post.id} className="col">
              <PostCard post={post} user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile