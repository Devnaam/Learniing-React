import { Link } from 'react-router-dom'
import CommentSection from './CommentSection'

function PostCard({ post, user }) {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex align-items-center">
        <img src={user.profilePic} alt={user.name} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
        <Link to={`/profile/${user.id}`} className="text-decoration-none fw-bold">{user.name}</Link>
      </div>
      <img src={post.image} className="card-img-top" alt="Post" />
      <div className="card-body">
        🙂<p className="card-text">{post.content}</p>
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-heart"></i> {post.likes}
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-chat"></i> {post.comments.length}
          </button>
          <button className="btn btn-outline-info btn-sm">
            <i className="bi bi-share"></i> Share
          </button>
        </div>
        <CommentSection comments={post.comments} postId={post.id} />
      </div>
    </div>
  )
}

export default PostCard