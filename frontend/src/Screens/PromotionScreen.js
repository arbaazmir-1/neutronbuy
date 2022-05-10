import React,{useEffect} from 'react'
import Product from '../Components/Product'
import {Row,Col}  from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { listProductPromotions } from '../actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
import PromotionCarousel from '../Components/PromotionCarousel'


const PromotionScreen = () => {
    const dispatch = useDispatch()
    const productListPromotions = useSelector(state => state.productListPromotions)
    const {products,loading,error} = productListPromotions
    useEffect(()=>{
      dispatch(listProductPromotions())
    },[dispatch])
    
    return (
      <>
        <PromotionCarousel/>
          <h1 className='m-2'>Promo Products</h1>
          {loading ? 
          (<Loader/>)
          : error ? 
          (
            <Message text= {error}/>
          )
          :(

          

          <Row>
            
            
            {products.map((product)=>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                {product.countInStock >0 && 
                (<Product product={product}/>)
               }
              </Col>
            ))}
          </Row>
          )
        }
  
          </>
    )
}

export default PromotionScreen