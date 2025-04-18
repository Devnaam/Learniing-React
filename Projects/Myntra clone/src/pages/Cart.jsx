import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import productsData from '../data/products.json';
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: '1', quantity: 1, size: 'M' },
    { id: '2', quantity: 2, size: 'L' },
  ]);

  const getTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = productsData.find((p) => p.id === item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={8}>
          <h5 className="text-uppercase mb-3">My Bag ({cartItems.length} items)</h5>
          {cartItems.map((item) => {
            const product = productsData.find((p) => p.id === item.id);
            if (!product) return null;
            return (
              <div key={item.id} className="d-flex border-bottom py-3">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div className="ms-3 flex-grow-1">
                  <h6>{product.brand}</h6>
                  <p className="text-muted">{product.name}</p>
                  <p className="small">Size: {item.size}</p>
                  <Form.Select
                    value={item.quantity}
                    onChange={(e) =>
                      setCartItems((prev) =>
                        prev.map((i) =>
                          i.id === item.id ? { ...i, quantity: Number(e.target.value) } : i
                        )
                      )
                    }
                    style={{ width: '100px' }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        Qty: {n}
                      </option>
                    ))}
                  </Form.Select>
                  <Button
                    variant="link"
                    className="text-danger p-0 mt-2"
                    onClick={() =>
                      setCartItems((prev) => prev.filter((i) => i.id !== item.id))
                    }
                  >
                    <FaTrash /> Remove
                  </Button>
                </div>
                <div className="text-end">
                  <p className="fw-bold">₹{product.price * item.quantity}</p>
                </div>
              </div>
            );
          })}
          {!cartItems.length && <p className="text-center mt-4">Your bag is empty.</p>}
        </Col>
        <Col md={4}>
          <h5 className="text-uppercase mb-3">Price Details</h5>
          <div className="border p-3">
            <div className="d-flex justify-content-between">
              <span>Total MRP</span>
              <span>₹{getTotal()}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Discount on MRP</span>
              <span className="text-success">₹0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Delivery Charges</span>
              <span className="text-success">FREE</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total Amount</span>
              <span>₹{getTotal()}</span>
            </div>
            <Button variant="danger" className="w-100 mt-3 rounded-0">
              Proceed to Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;