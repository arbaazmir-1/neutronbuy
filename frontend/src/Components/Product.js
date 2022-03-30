import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Rating from "./Rating";

const Product = (props) => {
  const { product } = props;
  return (
    <>
      <Card className="my-3 p-3 rounded">
      
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} style={{textDecoration:"none",color:"black"}}>
            <Card.Title as='div'><strong>{product.name}</strong>{" "}
            {product.countInStock>0? 
                    <span className="badge rounded-pill bg-success mb-2">Avaiable</span> :
                    <span className="badge rounded-pill bg-danger mb-2">Out Of Stock</span>
        }
            </Card.Title>
          </Link>
          <Card.Text as='h6'>
            ${product.price}
          </Card.Text>
         <Rating value={product.rating} text={`${product.numReviews} reviews`} color="#00b4d8"/>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
