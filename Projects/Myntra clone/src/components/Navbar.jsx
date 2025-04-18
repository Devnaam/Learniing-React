import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';

function Navbar() {
  const [search, setSearch] = useState('');

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Myntra Logo" style={{ height: '30px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link text-uppercase fw-medium"
                  to={`/products?category=${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <form className="d-flex mx-3 w-50">
            <div className="input-group">
              <span className="input-group-text bg-light border-0">
                <FaSearch className="text-muted" />
              </span>
              <input
                type="text"
                className="form-control bg-light border-0"
                placeholder="Search for products, brands and more"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="d-flex align-items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-profile" className="border-0">
                <FaUser className="text-muted" />
                <span className="ms-1 d-none d-lg-inline">Profile</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/orders">Orders</Dropdown.Item>
                <Dropdown.Item as={Link} to="/wishlist">Wishlist</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/wishlist" className="text-dark text-decoration-none">
              <FaHeart className="text-muted" />
              <span className="ms-1 d-none d-lg-inline">Wishlist</span>
            </Link>
            <Link to="/cart" className="text-dark text-decoration-none">
              <FaShoppingBag className="text-muted" />
              <span className="ms-1 d-none d-lg-inline">Bag</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;