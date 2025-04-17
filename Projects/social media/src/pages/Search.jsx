import UserCard from '../components/UserCard'
import { dummyUsers } from '../data/dummyData'

function Search() {
  return (
    <div>
      <div className="mb-4">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search users or hashtags" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
      <h3>Search Results</h3>
      <div className="row">
        {dummyUsers.map(user => (
          <div key={user.id} className="col-md-6">
            <UserCard user={user} />
          </div>
        ))}
      </div>
      <h4 className="mt-4">Trending Hashtags</h4>
      <div className="d-flex gap-2">
        <span className="badge bg-primary">#React</span>
        <span className="badge bg-primary">#SocialMedia</span>
        <span className="badge bg-primary">#Tech</span>
      </div>
    </div>
  )
}

export default Search