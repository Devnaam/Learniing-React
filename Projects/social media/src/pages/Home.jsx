import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { dummyPosts, dummyUsers } from '../data/dummyData'

function Home() {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="mb-4">
          <Link to="/create-post" className="btn btn-primary">Create Post</Link>
        </div>
        {dummyPosts.map(post => {
          const user = dummyUsers.find(u => u.id === post.userId)
          return <PostCard key={post.id} post={post} user={user} />
        })}
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Suggested Users</h5>
            {dummyUsers.map(user => (
              <div key={user.id} className="d-flex align-items-center mb-3">
                <img src={user.profilePic} alt={user.name} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                <Link to={`/profile/${user.id}`} className="text-decoration-none">{user.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home