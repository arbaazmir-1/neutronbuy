import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {Link} from 'react-router-dom'

const CategoryHome = () => {
  return (
    <>
    <h2 className='m-3'>Browse By Category</h2>
      <Row style={{margin:"0 auto"}}>
        <Col sm={8} md={6} lg={4} xl={4}>
        
          <Card>
          <Link to={"/categories"}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/10040216/pexels-photo-10040216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            </Link>
            <Card.Body>
              <Card.Text >Man</Card.Text>
            </Card.Body>
          </Card>
          
        </Col>
        <Col sm={8} md={6} lg={4} xl={4}>
          <Card>
          <Link to={"/categories"}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/11409541/pexels-photo-11409541.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            </Link>
            <Card.Body>
              <Card.Text>Woman</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={4} xl={4}>
        
          <Card>
          <Link to={"/categories"}>
            <Card.Img 
              variant="top"
              src="https://images.pexels.com/photos/1697220/pexels-photo-1697220.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            </Link>
            <Card.Body >
              <Card.Text>Accessories</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CategoryHome;
