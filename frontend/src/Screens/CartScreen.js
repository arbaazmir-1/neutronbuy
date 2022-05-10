import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../Components/Message'
import { Link, useParams,useNavigate,useSearchParams } from 'react-router-dom'
import { Row,Col,ListGroup,Image,Button,Card,Alert,FormControl,Container } from 'react-bootstrap'
import {addToCart,removeFromCart} from '../actions/cartAction'
import { LinkContainer } from 'react-router-bootstrap'
import '../css/cart.css'

const CartScreen = () => {
    let {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const qty = searchParams.get("qty") 
   
    const dispatch = useDispatch()
    const cart = useSelector(state=> state.cart)
    const {cartItems} = cart
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id,qty))
            
        }
    },[dispatch,id,qty])
    const history= useNavigate()
    const removeItemHandler =(id)=>{
        dispatch(removeFromCart(id))
        
    }
    const checkOutHandler= ()=>{
        
    }
  return (<Container className='mt-3'>
      <h1>Shopping Cart</h1>
       <button  className="btn btn-light my-2" onClick={() => history(-1)}>
      <i className="fas fa-arrow-left"></i> Back
      </button>
      
    <Row>
        <Col md={8}>
        
        {cartItems.length ===0 ? (<div>
            <Message text={"Your Cart is Empty!"}/>
            <Alert  variant="primary">
            Your Cart Is Empty! <Link to='/'>Shop for Products</Link>
            </Alert>
            
        </div>) :
        (
            <ListGroup variant='flush'>
               

                {cartItems.map((item)=>(
                    
                    <ListGroup.Item key={item.product}> 
                    <Row>
                    
                        <Col md={2}>
                            <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col md={3}>
                            
                            <LinkContainer to={`/product/${item.product}`}>
                                <h5 className='itemName'>{item.name}</h5>
                            </LinkContainer>
                        </Col>
                        <Col md={2}>
                            ${item.price}
                        </Col>
                        <Col md={2}>
                        <FormControl as='select' value={item.qty} onChange={(e)=> dispatch(addToCart(item.product,Number(e.target.value)))}>
                      {
                    [...Array(item.countInStock).keys()].map((x) => (
                      <option key={x+1} value={x+1}>
                        {x+1}
                      </option>
                    ))}
                    </FormControl>
                        </Col>
                        <Col md={2}>
                            <Button variant='light' type='button' onClick={() => removeItemHandler(item.product)}>Remove</Button>
                        </Col>
                        
                    </Row>

                    </ListGroup.Item>
            ))}
            </ListGroup>

           
              
           

        )
        }
        </Col>

        <Col md={4} className='mt-1'>
        <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                    {/* ({cartItems.reduce((acc, item) => acc+ item.qty,0)}) */}
                                    
                                        <h4>SubTotal  </h4>
                                       Total: ${cartItems.reduce((acc,item)=>acc+ item.qty * item.price,0).toFixed(2)}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Button type='button' className='btn-block' disabled={cartItems.length===0} onClick={checkOutHandler}>Check Out</Button>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>
        </Col>
        
       

    </Row>
    
    </Container>
  )
}

export default CartScreen