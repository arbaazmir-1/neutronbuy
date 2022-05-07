import React, { useEffect } from "react";
import {  useParams ,useNavigate} from "react-router-dom";
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
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ProductScreen = ({ match }) => {
  const dispatch= useDispatch()
  let { id } = useParams();
  const productDetails = useSelector(state =>state.productDetails)
  const {loading,product,error} = productDetails

  const history= useNavigate()

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch,id]);
  
  let lowStock = () => {
    if (product.countInStock < 5 && product.countInStock > 0) {
      return true;
    }
  };
  const addedToCart = () => toast('Added To Cart');
  
  return (
    <Container>
      
      <button  className="btn btn-light my-2" onClick={() => history(-1)}>
      <i className="fas fa-arrow-left"></i> Back
      </button>

    {loading ? 
    (
      <Loader/>
    
    )
    : error ? 

    (
      <Message text={error}/>
    )
    : 

      (<Row>
        <Col md={6}>
          <Image src={product.image} alt="productName" fluid />
        </Col>

        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroupItem>
              {product.countInStock <= 0 && (
                <span className="badge rounded-pill bg-danger mb-2">
                  Out Of Stock
                </span>
              )}

              <h5> {product.name} {" "}
             {product.promotions && 
             product.promotions.isOnSale===true &&
             (
              <span className="badge rounded-pill bg-primary mb-2">
              On Sale
            </span>
             )
             
             
             }
              
              
              
               </h5>
            </ListGroupItem>
            <ListGroupItem>
              <p> {product.description}</p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              {
                product.promotions &&
                product.promotions.isOnSale=== true ?
                (
                  <h6>Price:
                    <strike> ${product.price}</strike> {" "}
                    <span style={{color:"green"}}>
                     ${product.promotions.promoPrice}
                     </span>
                    </h6>
                ) 
                :
                (
                  <h6>
                    Price: ${product.price}
                  </h6>
                )
              }
            
           

              {lowStock() && (
                <span className="badge rounded-pill bg-warning mb-2">
                  Low In Stock
                </span>
              )}
              <div>
                <Button disabled={product.countInStock === 0} className="m-1" onClick={addedToCart}>
                  Add To Cart
                </Button>
                <Button disabled={product.countInStock === 0} variant="success">
                  Buy Now
                </Button>
                <ToastContainer />
              </div>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>)
  }
    </Container>
  );
};

export default ProductScreen;
