import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import {useLocation} from 'react-router-dom'
import {publicRequest} from '../AxiosRequest'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { mobile } from '../components/ResposiveStyled'

const Select = styled.select`
    margin : 5px;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
`
const Option = styled.option`

`

const Cont = styled.div`
    display: flex;
    padding: 4px 0px;
    align-items: center;
    justify-content: center;
    `

const Size = styled.p`
font-size: 20px;
margin-right: 10px;


`


const Section = styled.div`
    display : flex;
    padding : 30px;

    ${mobile({flexDirection: "column"})}
`
const Image = styled.img`
    flex: 1;
    width: 100%;
    height: 500px;
    object-fit: cover;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 50px;

`
const ItemName = styled.h1`
    letter-spacing: 2px;

`
const Desc = styled.p`
    line-height: 3rem;
`
const Price = styled.p`
    padding: 20px;
    font-size: 25px;
    font-style: italic;
`
const DivFlex = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

`
const InnColor = styled.div`
    padding:10px;
    background-color: ${props => props.bg};
    border-radius: 50%;
    margin-left: 5px;
    cursor: pointer;
`
const Minusm = styled.p`
    padding: 0px 5px;
    font-weight: bold;
    font-style: bold;
    display: flex;
    align-item: center;
    cursor: pointer;
`
const Minus = styled.p`
    padding:5px;
    font-weight: bold;
    font-style: bold;
    display: flex;
    align-item: center;
    cursor: pointer;
    border:1px solid teal;
    border-radius: 5px;
`
const Minusp = styled.p`
    padding: 0px 5px;
    font-weight: bold;
    font-style: bold;
    display: flex;
    align-item: center;
    cursor: pointer;
`
const BtnW = styled.button`
    padding: 10px 25px;
    background: rgba(0,0,0,0.3);
    color: black;
    cursor: pointer;
    outline: none;
    border: none;


    &:hover{
        border : 1px solid teal;
    }
`


const ProductPage = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    // Redux Dispatch function to update our store
    const dispatch = useDispatch()





    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get(`/product/find/${id}`)
                setProduct(res.data)
            }catch {}
        }
        getProduct()
    }, [id])


    // Function to update our store
    const handleClick = () =>{
            dispatch(addProduct({ ...product, quantity, color, size }))
    }

  return (
    <div>
        <Navbar />
        <Announcement />
        <Section>
            <Image src={product.img}/>
            <Content>
                <ItemName>{product.title}</ItemName>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eos officia aut saepe, impedit sit esse inventore deserunt repellendus beatae corrupti dolor itaque minima. Facilis nesciunt fugit non? Inventore, suscipit!</Desc>
                <Price>$ {product.price}</Price>
                <DivFlex>
                    <Cont>
                        <Size>Color</Size>
                        { product.color?.map((c)=> (
                            <InnColor key={c} bg={c} onClick={()=> setColor(c)} />
                        ))}
                    </Cont>
                    <Cont>
                        <Size>Size:</Size>
                        <Select onChange={(e)=> setSize(e.target.value)}>
                            <Option disabled>Size</Option>
                            { product.size?.map((s)=>(
                                <Option key={s}  >{s}</Option>
                            ))}
                            
                        </Select> 
                    </Cont>
                </DivFlex>
                <DivFlex>
                    <Cont>
                        <Minusm onClick={() =>setQuantity(quantity > 1 && quantity-1)}>-</Minusm>
                        <Minus>{quantity}</Minus>
                        <Minusp onClick={() =>setQuantity(quantity+1)}>+</Minusp>
                    </Cont>
                    <BtnW onClick={handleClick}>Add To Cart</BtnW>
                </DivFlex>
            </Content>
        </Section>
        <Footer />
    </div>
  )
}

export default ProductPage