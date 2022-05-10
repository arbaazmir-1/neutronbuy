import React, { useEffect ,useState} from "react";
import {  useParams ,useNavigate} from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Container,
  ListGroupItem,
  FormControl,
  
} from "react-bootstrap";
import Rating from "../Components/Rating";
import { useDispatch,useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const ProductScreen = ({ match }) => {
  const dispatch= useDispatch()
  let { id } = useParams();
  const productDetails = useSelector(state =>state.productDetails)
  const {loading,product,error} = productDetails
  const history= useNavigate()
  const[qty,setQty]= useState(1)

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch,id]);
  
  let lowStock = () => {
    if (product.countInStock < 5 && product.countInStock > 0) {
      return true;
    }
  };
  const addtoCartHandler=()=>{
    history(`/cart/${id}?qty=${qty}`)
  }
  
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
             
             
             } {" "}
             {lowStock() && (
                <span className="badge rounded-pill bg-warning mb-2">
                  Low In Stock, Only {product.countInStock} left
                </span>
              )}
              
              
              
               </h5>
            </ListGroupItem>
            <ListGroupItem>
              <p> {product.description}</p>
              <h6>Brand: {product.brand}</h6>
              <h6>Category: {product.category}</h6>
             
              
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
              
               <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />

              
              {product.countInStock > 0 && (
                
                  <Row className="mt-2 mb-2">
                    
                    <Col>
                     <h6>Select Quantity</h6>
                    <FormControl as='select' value={qty} onChange={(e)=> setQty(e.target.value)}>
                      {
                    [...Array(product.countInStock).keys()].map((x) => (
                      <option key={x+1} value={x+1}>
                        {x+1}
                      </option>
                    ))}
                    </FormControl>
                    </Col>
                  </Row>
                
              )}
              <div>
                <Button disabled={product.countInStock === 0} className="m-1" onClick={addtoCartHandler}>
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
