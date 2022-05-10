import React,{useEffect} from 'react'
import {Row,Col,Alert}  from 'react-bootstrap'
import Product from '../Components/Product'

import {useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import CategoryHome from '../Components/CategoryHome'
import PromotionCarousel from '../Components/PromotionCarousel'






const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state =>state.productList);
  const {loading,products,error}=productList
  
  useEffect(()=>{
   dispatch(listProducts())

  },[dispatch])
  
  
  return (
    <>
    
      <PromotionCarousel/>
        
        <CategoryHome/>
    
    
        <h2 className='m-3'>Hottest Products</h2>


        {loading ? 
        (
          <Loader/>
        )
        : error ? 
          (<div >
          <Message text={error} />
          <Alert variant="danger"  className='m-2' >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error}.{" "}
          We are on it and the issue will be fixed soon!!!
        </p>
      </Alert>
          
          </div>
          )
        : 
        
        (<Row>
          
          {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>)
        }

        
        

        </>
  )
}

export default HomeScreen