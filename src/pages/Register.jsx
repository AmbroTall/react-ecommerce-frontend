import React from 'react'
import styled from 'styled-components'

import {Link } from "react-router-dom";

const Section = styled.section`
    // height: 100vh;
    // width: 100vw;
    background-image: url("https://static01.nyt.com/images/2017/08/23/business/23GOOGLE1/23GOOGLE1-facebookJumbo.jpg?year=2017&h=550&w=1050&s=bac03d4dae9107dcbea1c32fb0776930e2febbf6e24979dbefc68dfec8ac9870&k=ZQJBKqZ0VN");
    background-size: cover;
    background-position: center;
  background-repeat: no-repeat;
`

const Content = styled.div`
    background-image: url("https://static01.nyt.com/images/2017/08/23/business/23GOOGLE1/23GOOGLE1-facebookJumbo.jpg?year=2017&h=550&w=1050&s=bac03d4dae9107dcbea1c32fb0776930e2febbf6e24979dbefc68dfec8ac9870&k=ZQJBKqZ0VN");
    background-size: cover;
    background-color: teal;
    background-blend-mode: multiply;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    padding: 20px;
    background: #333;
    margin-top: 10px;
    
    color: white;
`
const Btn = styled.button`
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
background: teal;
color: white;
cursor: pointer;
outline: none;
border: none;
margin-bottom: 5px;

&:disabled{
    color: red ;
    cursor: not-allowed;
}
`

const SmallLink = styled.p`
    font-size: 12px;
    text-decoration : underline;
    cursor: pointer;
    padding-top: 10px;
`
const Header = styled.h1`
    padding: 20px 0px;
    
`


const Div = styled.div`
    background: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 20px;
` 

const Register = () => {
    return (

    <Section>
        <Content>
            <Div>
                <Header>Create An Account</Header>
                <Input placeholder='username' />
                <Input placeholder='username' />
                <Input type="email" placeholder='email'/>
                <Input type="password" placeholder='password'/>
                <Btn>Register</Btn>
         
                <Link to='/login'>
                    <SmallLink>SignIn</SmallLink>
                </Link>
            </Div>
        </Content>
    </Section>
  )  
}

export default Register