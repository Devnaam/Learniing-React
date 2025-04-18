import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa';
import ReviewCard from '../components/ReviewCard';
import productsData from '../data/products.json';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [pincode, setPincode] = useState('');
  const [reviews] = useState([
    { rating: 4, comment: 'Great fit and quality!', user: 'John D.', date: '2025-04-10' },
    { rating: 5, comment: 'Absolutely love it!', user: 'Sarah M.', date: '2025-04-09' },
  ]);

  useEffect(() => {
    const prod = productsData.find((p) => p.id === id);
    setProduct(prod);
  }, [id]);

  if (!product) return <div className="text-center py-5">Loading...</div>;

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <Carousel>
            {[product.image, product.image, product.image].map((img, idx) => (
              <Carousel.Item key={idx}>
                <img src={img} alt={product.name} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h4 className="text-capitalize">{product.brand}</h4>
          <h5 className="text-muted">{product.name}</h5>
          <p>{product.description}</p>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold fs-4">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2 fs-5">
                ₹{product.originalPrice}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-pink ms-2">
                ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF)
              </span>
            )}
          </div>
          <div className="d-flex align-items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={16} color={i < product.rating ? '#ff3f6c' : '#ddd'} />
            ))}
            <span className="ms-1">({product.rating})</span>
          </div>
          <h6>Select Size</h6>
          <div className="d-flex mb-3">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'dark' : 'outline-dark'}
                className="me-2 rounded-0"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="d-flex mb-3">
            <Button
              variant="danger"
              className="me-2 rounded-0"
              onClick={() => navigate('/cart')}
              disabled={!selectedSize}
            >
              Add to Bag
            </Button>
            <Button variant="outline-dark" className="rounded-0">
              <FaHeart className="me-1" /> Wishlist
            </Button>
          </div>
          <h6>Check Delivery</h6>
          <Form.Group className="d-flex mb-3">
            <Form.Control
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{ width: '200px' }}
            />
            <Button variant="link" className="text-pink">
              Check
            </Button>
          </Form.Group>
          {pincode && (
            <p className="text-muted small">
              Delivery by {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </p>
          )}
          <h6>Ratings & Reviews</h6>
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;