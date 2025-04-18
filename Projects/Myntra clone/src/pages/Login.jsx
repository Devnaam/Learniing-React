import { Container, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Container className="py-4" style={{ maxWidth: '400px' }}>
      <h5 className="text-uppercase mb-3">Login</h5>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email or Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter email or mobile" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="danger" className="w-100 rounded-0 mb-3">
          Login
        </Button>
        <p className="text-center">
          New to Myntra? <a href="#" className="text-pink">Create an account</a>
        </p>
      </Form>
    </Container>
  );
}

export default Login;