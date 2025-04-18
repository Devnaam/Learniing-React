function Footer() {
    return (
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-uppercase">Online Shopping</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Men</a></li>
                <li><a href="#" className="text-white text-decoration-none">Women</a></li>
                <li><a href="#" className="text-white text-decoration-none">Kids</a></li>
                <li><a href="#" className="text-white text-decoration-none">Home & Living</a></li>
                <li><a href="#" className="text-white text-decoration-none">Beauty</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-uppercase">Customer Policies</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                <li><a href="#" className="text-white text-decoration-none">Terms Of Use</a></li>
                <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-uppercase">Connect With Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
                <li><a href="#" className="text-white text-decoration-none">Twitter</a></li>
                <li><a href="#" className="text-white text-decoration-none">Instagram</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="text-uppercase">Keep In Touch</h5>
              <p>Subscribe to our newsletter for updates.</p>
            </div>
          </div>
          <hr />
          <p className="text-center mb-0">© 2025 Myntra Clone. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;