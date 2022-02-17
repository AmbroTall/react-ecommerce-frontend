import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ProductContainer from './ProductContainer'


const PodSection = styled.div`
  background: rgba(0,0,0,0.3);
  // padding: 0px 20px;

`

const ProdContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Products = ({cat , filters, sort}) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get( cat ? `http://localhost:5000/commerce/product/find?category=${cat}` : 'http://localhost:5000/commerce/product/find')
        setProducts(res.data)
      }catch(err){}
    }
    getProducts()
  },[cat])


  // filteredProducts call

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
        item[key].includes(value)
      ))
    )
  },[products,cat,filters])


  // Sorting Products
  useEffect(()=>{
    if ((sort === "newest")){
      setFilteredProducts((prev)=> 
      [...prev].sort((a,b)=> a.createdAt - b.createdAt))
    } else if ((sort === "asc")){
      setFilteredProducts((prev)=> 
      [...prev].sort((a,b)=> a.price - b.price))
    } else  {
      setFilteredProducts((prev)=> 
      [...prev].sort((a,b)=> b.price - a.price))
    }
  }, [sort])

  return (
    <PodSection>
      <ProdContainer>
        { cat ?
           filteredProducts.map((product) =>(
          <ProductContainer product={product} key={product._id} /> 
        )): products.slice(0,8).map((product) =>(
          <ProductContainer product={product} key={product._id} /> 
        ))}
      </ProdContainer>
    </PodSection>
  )
}

export default Products