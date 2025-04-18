import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <div className="category-card card border-0">
      <Link to={`/products?category=${category.toLowerCase()}`}>
        <img
          src={`https://via.placeholder.com/150?text=${category}`}
          className="card-img-top"
          alt={category}
        />
      </Link>
      <div className="card-body text-center">
        <h6 className="card-title text-uppercase">{category}</h6>
      </div>
    </div>
  );
}

export default CategoryCard;