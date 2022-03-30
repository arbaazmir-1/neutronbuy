import React,{useState,useEffect} from 'react'
import {Row,Col,Image}  from 'react-bootstrap'
import Product from '../Components/Product'
import banner from '../banner.png'
import {Link} from 'react-router-dom'
import axios from 'axios'





const HomeScreen = () => {
  const [products,setProducts]  =useState([])
  useEffect(()=>{
    const fetchdata = async()=>{
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchdata()
  },[])
  return (
    <>
    <Link to="/promotion">
    <Image src={banner} fluid className='m-2'/>
    </Link>
        <h1 className='m-2'>Hottest Products</h1>
        <Row>
          
          {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>
        

        </>
  )
}

export default HomeScreen