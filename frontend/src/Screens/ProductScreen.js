import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Container,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      let { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);
  let lowStock = ()=>{
      if(product.countInStock<5 && product.countInStock >0){
          return true;
      }
  }
  return (
    <Container className="m-3">
      <Link className="btn btn-light mb-2" to="/home">
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt="productname" fluid />
        </Col>

        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroupItem>
              {product.countInStock > 0 ? (
                <span className="badge rounded-pill bg-success mb-2">
                  Avaiable
                </span>
              ) : (
                <span className="badge rounded-pill bg-danger mb-2">
                  Out Of Stock
                </span>
              )}

              <h5> {product.name}</h5>
            </ListGroupItem>
            <ListGroupItem>
              <p> {product.description}</p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <h6>Price: ${product.price}</h6>
             
                    {lowStock() &&  <span className="badge rounded-pill bg-warning mb-2">Low In Stock</span>}
              <div>
                <Button disabled={product.countInStock === 0} className="m-1">
                  Add To Cart
                </Button>
                <Button disabled={product.countInStock === 0} variant="success">
                  Buy Now
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
