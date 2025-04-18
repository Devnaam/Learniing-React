import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

function ProductCard({ product }) {
  return (
    <div className="product-card card h-100 border-0 shadow-sm">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <div className="card-body">
        <h6 className="card-title text-capitalize">{product.brand}</h6>
        <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
          {product.name}
        </p>
        <div className="d-flex align-items-center">
          <span className="fw-bold">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-muted text-decoration-line-through ms-2">
              ₹{product.originalPrice}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-pink ms-2">
              ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
            </span>
          )}
        </div>
        <div className="d-flex align-items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} color={i < product.rating ? '#ff3f6c' : '#ddd'} />
          ))}
          <span className="ms-1 text-muted">({product.rating})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;