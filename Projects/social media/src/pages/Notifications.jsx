import { dummyNotifications, dummyUsers } from '../data/dummyData'

function Notifications() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <h2>Notifications</h2>
        <div className="list-group">
          {dummyNotifications.map(notification => {
            const user = dummyUsers.find(u => u.id === notification.userId)
            return (
              <div key={notification.id} className="list-group-item">
                <div className="d-flex align-items-center">
                  <img src={user.profilePic} alt={user.name} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                  <div>
                    <p className="mb-0">
                      <strong>{user.name}</strong> {notification.type === 'like' ? 'liked your post' : 'followed you'}
                    </p>
                    <small className="text-muted">{notification.time}</small>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Notifications