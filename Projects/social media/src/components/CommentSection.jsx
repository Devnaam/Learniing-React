function CommentSection({ comments, postId }) {
    return (
      <div>
        <form className="mb-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Add a comment..." />
            <button className="btn btn-primary" type="submit">Post</button>
          </div>
        </form>
        {comments.map(comment => (
          <div key={comment.id} className="border-top pt-2 mb-2">
            <p className="mb-0"><strong>User {comment.userId}</strong>: {comment.text}</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default CommentSection