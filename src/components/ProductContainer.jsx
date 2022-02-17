import { FavoriteBorderOutlined, Search, ShoppingBasketOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const ProdIcons = styled.div`
position: absolute;
top: 0;
left:0;
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0,0,0,0.7);
opacity: 0;
transition:all 0.5s ease;
`


const ProductSelf = styled.div`
    display: flex;
    flex: 1;
    min-width: 280px;
    height: 350px;
    margin : 5px;
    position: relative;

    &:hover ${ProdIcons}{
        opacity : 1;
    }
`



const ProdImg = styled.img`
    width : 100%;
    object-fit: cover;
`

const Icons = styled.div`
    padding: 10px;
    margin: 5px;
    background: #fff;
    display: flex;
    border-radius: 50px;
    align-itemss: center;
    justify-content: center;
    transition : all 0.5s ease;
    cursor: pointer;
    
    &:hover{
        transform : scale(1.1);
    } 
`

const ProductContainer = ({product}) => {
  return (
    <ProductSelf>
        <ProdImg src={product.img}/>
        <ProdIcons>
            <Link to={`/product/${product._id}`}>
            <Icons>
                <Search />
            </Icons>
            </Link>
            <Icons>
                <ShoppingBasketOutlined />
            </Icons>
            <Icons>
                <FavoriteBorderOutlined />
            </Icons>
        </ProdIcons>
    </ProductSelf>
  )
}

export default ProductContainer