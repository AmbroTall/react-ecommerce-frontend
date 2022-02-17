import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import { mobile } from '../components/ResposiveStyled'

const KEY = process.env.REACT_APP_STRIPE

const Header = styled.h1`
    text-align: center;
    padding: 10px;
    font-weight: 400;
    
`
const Content = styled.div`
    padding: 10px;
`
const Header2 = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`
const ContShopping = styled.p`
    padding: 15px;
    border: 1px solid black;
    color: black;
    cursor:pointer;
    text-decoration: none;

    &:hover{
        color: #fff;
        background: #ccc;
    }

    ${mobile({fontSize: "12px", padding: "5px"})}
`
const Center = styled.div`
    display: flex;

`
const Shoppin = styled.p`
    padding: 0px 5px;
    font-size: 12px;
    text-decoration: underline;
`
const CheckoutShop = styled.p`
padding: 15px ;
background: black;
color: #fff;
cursor:pointer;
cursor:pointer;

${mobile({fontSize: "12px", padding: "5px"})}
`
// const CheckoutShp = styled.button`
// padding: 15px ;
// background: #fff;
// color: black;
// cursor:pointer;
// text-align: center;
// border: 1px solid teal;
// margin-top: 10px;

// &:hover{
//     background: teal;
//     color: #fff;
// }
// `
const ProdSection = styled.div`
    display: flex;

    ${mobile({flexDirection: "column"})}
`
const ContentProd = styled.div`
 display: flex;
 flex: 2;
 padding: 5px;
`
const Image = styled.img`
    flex: 1;
    width: 200px;
    height: 200px;
    padding: 5px;
`
const ProdSummary = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    line-height: 3rem;
`
const Name = styled.h6`
 font-size: 16px;
`
const ProdName = styled.span`
  font-weight: 400;

`
const Color = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${props => props.color};
`
const QulPrice = styled.div`
flex: 1
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height: 3rem;
padding: 40px 0px;
padding-right: 50px;
`
const Quantity = styled.div`
    display: flex;
`
const Minus = styled.h3`
display: flex;
align-items: center;
padding: 5px;
cursor:pointer;
`
const Price = styled.h3`
    font-style: italic;
    cursor:pointer;
`
const OrderSummary = styled.div`
flex : 1;
padding: 25px;
text-align: start;
border: 1px solid #ccc;
border-radius: 25px;
height: 250px;

${mobile({marginTop: "10px"})}

`
const SummaryHeader = styled.h1`
 font-weight: 600;
`
const InnerSummery = styled.div`
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
`
const InnerHeader = styled.p`
    font-size: 14px;
`
const InnerHeadr = styled.h3`
    
`
const Kuzipanga = styled.div`
    display: flex;
    flex-direction: column;
`

const Checkout = () => {

    const cart = useSelector(state=> state.cart)
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token);
    }

    console.log(stripeToken)
  return (
    <div>
        <NavBar />
        <Announcement />
        <Header>YOUR CART</Header>
        <Content>
            <Header2>
                <Link to='/products'>
                    <ContShopping>CONTINUE SHOPPING</ContShopping>
                </Link>
                <Center>
                    <Shoppin>Shopping Bag (2)</Shoppin>
                    <Shoppin>Your Whilist (0)</Shoppin>
                </Center>
                <CheckoutShop>CHECKOUT NOW</CheckoutShop>
            </Header2>
            <ProdSection>
                <Kuzipanga>
            {cart.products.map((product) =>(
                <ContentProd key={product._id}>
                    <Image src={product.img} />
                    <ProdSummary>
                        <Name>Product: <ProdName>{product.title}</ProdName></Name>
                        <Name>ID: <ProdName>{product._id}</ProdName></Name>
                        <Color color={product.color} />
                        <Name>Size: <ProdName>{product.size}</ProdName></Name>
                    </ProdSummary>

                    <QulPrice>
                        <Quantity>
                            <Minus>-</Minus>
                            <Minus>{product.quantity}</Minus>
                            <Minus>+</Minus>
                        </Quantity>
                        <Price>$ {product.price}</Price>
                    </QulPrice>
                </ContentProd>
                ))}
                </Kuzipanga>
                
                <OrderSummary>
                    <SummaryHeader>Order Summary</SummaryHeader>
                    <InnerSummery>
                        <InnerHeader>Subtoatal</InnerHeader>
                        <InnerHeader>$ {cart.total}</InnerHeader>
                    </InnerSummery>
                    <InnerSummery>
                        <InnerHeader>Estimated Shipping</InnerHeader>
                        <InnerHeader>$ 80</InnerHeader>
                    </InnerSummery>
                    <InnerSummery>
                        <InnerHeader>Shipping Discount</InnerHeader>
                        <InnerHeader>$ 20</InnerHeader>
                    </InnerSummery>
                    <InnerSummery>
                        <InnerHeadr>Total</InnerHeadr>
                        <InnerHeadr>$ {cart.total}</InnerHeadr>
                    </InnerSummery>
                    <StripeCheckout 
                        name="Ambro Shop"
                        image="https://www.kindpng.com/picc/m/366-3668689_transparent-shopping-cart-logo-hd-png-download.png"
                        billingAddress
                        shippingAddress
                        description={`Your total is ${cart.total}`}
                        amount={cart.amount *100}
                        token = {onToken}
                        stripeKey = {KEY}
                    >
                        <Button style={{backgroundColor: "black", color: '#fff'}}>CHECKOUT NOW</Button>

                    </StripeCheckout>
                    {/* <CheckoutShp>CHECKOUT NOW</CheckoutShp> */}
                </OrderSummary>
            </ProdSection>
            
            
        </Content>
        <Footer />
    </div>
  )
}

export default Checkout