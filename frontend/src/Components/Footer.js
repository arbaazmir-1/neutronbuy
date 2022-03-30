import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/footer.css'

 


const Footer = () => {
  return (
    <footer>
      <Container >
      <Row className='container-footer text-center'>
        <Col >
        
            <Row >
            
                <p className='mt-2'>
                  anneutron
                </p>
            </Row>
            <div className='logos justify-content-md-center'>
            <i  className="fa fa-facebook icons"></i>
            <i  className="fa fa-instagram icons"></i>
            <i  className="fa fa-twitter icons"></i>
            </div>
          </Col>
        
          <Col className='footer-links'>
          <Link to='/home'>
          About Us
          </Link>
            <a href='#'>
            Contact Us
          </a>
            <a href='#'>
            Privacy Policy
          </a>
            <a href='#'>
            Terms & Conditions
          </a>
          </Col>


          <Col>
            <p className='address-footer'>1301 N Arthur Ashe <br />
              Blvd, Richmond, <br />
              VA 23230, United States</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer