import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

function Wishlist() {
  const wishlistItems = productsData.slice(0, 3); // Mock wishlist items

  return (
    <Container className="py-4">
      <h5 className="text-uppercase mb-3">My Wishlist ({wishlistItems.length} items)</h5>
      <Row className="row-cols-2 row-cols-md-4 g-3">
        {wishlistItems.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      {!wishlistItems.length && <p className="text-center mt-4">Your wishlist is empty.</p>}
    </Container>
  );
}

export default Wishlist;