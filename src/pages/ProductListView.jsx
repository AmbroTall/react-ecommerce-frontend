import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {useLocation} from "react-router-dom";


const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const Header = styled.h1`
    letter-spacing: 2px;
    text-align: start;
`
const FiltSort = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.p`
    font-size: 20px;
    padding: 20px 0px;
    margin-right: 10px;
    
`
const Sort = styled.p`
    font-size: 20px;
    margin-top: 30px;
    margin-right: 10px;

`
const Select = styled.select`
    margin : 5px;
    background-color: rgba(0,0,0,0.2);
`
const Option = styled.option`

`

const Cont = styled.div`
    display: flex;
    padding: 4px 0px;
    `

const Product = () => {
    // router-dom function use location to get the location of the currrent page
    const location = useLocation()
    const cat = location.pathname.split("/")[2]

    //useState to manage the filters on product page
    const [ filters, setFilters] = useState({})

    //useState to manage the sorting on product page
    const [ sort, setSort] = useState("newest")


    const handleChange =(e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value
        })
    }

    
  return (
    <div>
        <Announcement />
        <Content>
            <Header>
                {cat}
            </Header>
            <FiltSort>
                <Cont>
                <Filter >Filter Products:</Filter>
                <Select name="color" onChange={handleChange}>
                    <Option disabled>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name="size" onChange={handleChange}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Cont>
                <Cont>
                    <Sort>Sort:</Sort>
                    <Select name="size" onChange={(e)=>setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Cont>
            </FiltSort>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer />
        </Content>
    </div>
    
  )
}

export default Product