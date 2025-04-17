function CreatePost() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Create Post</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Upload Image</label>
                  <input type="file" className="form-control" id="image" accept="image/*" />
                </div>
                <div className="mb-3">
                  <label htmlFor="caption" className="form-label">Caption</label>
                  <textarea className="form-control" id="caption" rows="4" placeholder="What's on your mind?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CreatePost