import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="payment-partners-app-container">
          <Col className="payment-container footer-cont" sm={12} md={4} lg={4} xl={4}>
            <div>
              <h5 style={{ color: "white" }}>Payment Methods</h5>
              <i className="fa fa-cc-visa"></i>
              <i className="fa fa-cc-paypal"></i>
              <i className="fa fa-cc-mastercard"></i>
              <i className="fa fa-cc-amex"></i>
              <i className="fa fa-cc-discover"></i>
            </div>
          </Col >
          <Col className="app-container footer-cont" sm={12} md={4} lg={4} xl={4}>
            <h5 style={{ color: "white" }}>Download Our App</h5>
            <Button variant="light">
              Google Play <i className="fab fa-google-play"></i>{" "}
            </Button>
            <Button variant="light">
              Apple Store <i className="fab fa-app-store"></i>{" "}
            </Button>
          </Col>

          <Col className="partners-container footer-cont"  sm={12} md={4} lg={4} xl={4}>
            <h5 style={{ color: "white" }}>anneutron Global</h5>
            <span>🇺🇸</span>
            <span>🇨🇦</span>
            <span>🇦🇪</span>
            <span>🇬🇧</span>
          </Col>
        </Row>

        <Row className="container-footer text-center">
          <Col>
            <Row>
              <h5 style={{color:"white"}}>neutron</h5>
            </Row>
            <p className="address-footer">
              1301 N Arthur Ashe <br />
              Blvd, Richmond, <br />
              VA 23230, United States
            </p>
            <a className="links" style={{color:"white",textDecoration:"none"}} href="tel:+1123-456-7890">Phone: 123-456-7890</a>
          </Col>

          <Col className="links-One">
            <h5 style={{color:"white"}}>Useful Links</h5>
            <Row>
              <Link className="links" to="#">About Us</Link>
              <Link className="links" to="#">Contact Us</Link>
              <Link className="links" to="#">Blogs</Link>
              <Link className="links" to="#">Customer Care</Link>
            </Row>
          </Col>

          <Col>
            <h5 style={{color:"white"}}>Other Useful Links</h5>
            <Row>
              <Link className="links" to="#">Career</Link>
              <Link className="links" to="#">Terms and Services</Link>
              <Link className="links" to="#">Privacy Policies</Link>
              <Link className="links" to="#">Contact Us</Link>
            </Row>
          </Col>

          <Col className="social-links">
          <h5 style={{color:"white"}}>Follow Our Socials</h5>
          <i className='fab fa-facebook-f social'></i>
          <i className="fa fa-twitter social"></i>
          <i className="fa fa-instagram social"></i>
          ​ <i className="fa fa-pinterest social"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
