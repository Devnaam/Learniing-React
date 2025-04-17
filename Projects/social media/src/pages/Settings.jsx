function Settings() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Settings</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea className="form-control" id="bio" rows="3" placeholder="Tell about yourself"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter new password" />
                </div>
                <button type="submit" className="btn btn-primary me-2">Save Changes</button>
                <button type="button" className="btn btn-outline-danger">Logout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Settings