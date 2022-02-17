import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";


const Content = styled.div`
  position : relative;
  padding: 10px;
  flex: 1;
  backgound: #ccc;
`

const ContImg = styled.img`
  width: 100%;
  height: 100%
  object-fit: cover;
`

const ContDesc = styled.div`
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeadCont = styled.h1`
  color:#fff;

`

const BtnCont = styled.button`
    outlne: none;
    border: none;
    border-radius: 5px;
    padding : 10px 20px;
    background : teal;
    color: #fff;
`

const CategoriesSelect = (props) => {
  return (
    <Content>
      <Link to={`/products/${props.cat}`} >
        <ContImg src={props.img} />
        <ContDesc>
            <HeadCont>{props.name}</HeadCont>
            <BtnCont>Shop Now</BtnCont>
        </ContDesc>
        </Link>
    </Content>
  )
}

export default CategoriesSelect 