import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    price: [0, 5000],
    rating: 0,
    discount: 0,
  });
  const [sort, setSort] = useState('popularity');

  useEffect(() => {
    let filtered = [...productsData];
    if (filters.category.length) {
      filtered = filtered.filter((p) => filters.category.includes(p.category));
    }
    if (filters.brand.length) {
      filtered = filtered.filter((p) => filters.brand.includes(p.brand));
    }
    filtered = filtered.filter(
      (p) => p.price >= filters.price[0] && p.price <= filters.price[1]
    );
    if (filters.rating) {
      filtered = filtered.filter((p) => p.rating >= filters.rating);
    }
    if (filters.discount) {
      filtered = filtered.filter(
        (p) =>
          p.originalPrice &&
          ((p.originalPrice - p.price) / p.originalPrice) * 100 >= filters.discount
      );
    }
    if (sort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setProducts(filtered);
  }, [filters, sort]);

  return (
    <Container fluid className="py-4">
      <Row>
        <Col md={3} className="border-end pe-4">
          <h5 className="text-uppercase">Filters</h5>
          <Form>
            <h6 className="mt-3">Category</h6>
            {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'].map((cat) => (
              <Form.Check
                key={cat}
                label={cat}
                onChange={(e) => {
                  setFilters((prev) => ({
                    ...prev,
                    category: e.target.checked
                      ? [...prev.category, cat]
                      : prev.category.filter((c) => c !== cat),
                  }));
                }}
              />
            ))}
            <h6 className="mt-3">Brand</h6>
            {['Roadster', 'Anouk', 'H&M', 'Max'].map((brand) => (
              <Form.Check
                key={brand}
                label={brand}
                onChange={(e) => {
                  setFilters((prev) => ({
                    ...prev,
                    brand: e.target.checked
                      ? [...prev.brand, brand]
                      : prev.brand.filter((b) => b !== brand),
                  }));
                }}
              />
            ))}
            <h6 className="mt-3">Price Range</h6>
            <Form.Range
              min={0}
              max={5000}
              step={100}
              value={filters.price[1]}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  price: [prev.price[0], Number(e.target.value)],
                }))
              }
            />
            <p className="small">
              ₹{filters.price[0]} - ₹{filters.price[1]}
            </p>
            <h6 className="mt-3">Rating</h6>
            <Form.Select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, rating: Number(e.target.value) }))
              }
            >
              <option value="0">All</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
            </Form.Select>
            <h6 className="mt-3">Discount</h6>
            <Form.Select
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, discount: Number(e.target.value) }))
              }
            >
              <option value="0">All</option>
              <option value="10">10% and above</option>
              <option value="20">20% and above</option>
              <option value="30">30% and above</option>
            </Form.Select>
          </Form>
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-uppercase">Products ({products.length})</h5>
            <Form.Select
              style={{ width: '200px' }}
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </Form.Select>
          </div>
          <Row className="row-cols-2 row-cols-md-4 g-3">
            {products.map((product) => (
              <div key={product.id} className="col">
                <ProductCard product={product} />
              </div>
            ))}
          </Row>
          {!products.length && <p className="text-center mt-4">No products found.</p>}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductListing;