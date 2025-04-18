import { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import productsData from '../data/products.json';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.slice(0, 8)); // Load first 8 products
  }, []);

  return (
    <Container fluid className="py-4">
      <Carousel interval={3000} className="mb-4">
        {[1, 2, 3].map((num) => (
          <Carousel.Item key={num}>
            <div
              className="hero-banner"
              style={{
                backgroundImage: `url(https://via.placeholder.com/1200x400?text=Banner+${num})`,
              }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>
      <h3 className="my-4 text-uppercase">Shop By Category</h3>
      <div className="row g-3">
        {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'].map((category) => (
          <div key={category} className="col-md-2 col-6">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
      <h3 className="my-4 text-uppercase">Trending Now</h3>
      <div className="row row-cols-2 row-cols-md-4 g-3">
        {products.map((product) => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <h3 className="my-4 text-uppercase">Top Deals</h3>
      <div className="row g-3">
        {[1, 2].map((num) => (
          <div key={num} className="col-md-6">
            <img
              src={`https://via.placeholder.com/600x200?text=Sale+Banner+${num}`}
              className="img-fluid"
              alt={`Sale Banner ${num}`}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home;