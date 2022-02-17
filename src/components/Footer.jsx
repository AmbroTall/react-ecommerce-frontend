import React from 'react'
import {Facebook, Instagram,Room, Phone, MailOutline, Pinterest, Twitter} from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from './ResposiveStyled'

const Section = styled.div`
  padding: 30px;
  display: flex;
  background: teal;

  ${mobile({flexDirection: "column", alignItems: "center"})}
`

const Content = styled.p`
  font-size: 600;
  font-weight : bold;
  line-height: 2rem;
  text-align: start;
  letter-spacing: 3px;
  ${mobile({TextAlign: "center"})}
`

const SocialContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  // color: #fff;
`
const LinkHeader = styled.h3`
  text-align: center;
`
const Links = styled.p`
  padding: 12px 15px;
  cursor: pointer;
`
const Desc = styled.p`
  font-weight: 500px;
  letter-spacing: 3px;
  font-size: 30px;
`
const PartA = styled.div`
  flex: 1;
  ${mobile({paddingBottom: "20px"})}
`
const PartB = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;

${mobile({display: "none"})}
`
const PartC = styled.div`
flex: 1;
`

const SocialIcon = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-left: 5px;
//   width: 40px;
// height: 40px;
border-radius: 50%;
background-color: #${props => props.color};
cursor: pointer;

`

const Footer = () => {
  return (
    <Section>
      <PartA>
        <Content>Welcome to my e-commerce designed using React js and material icons.Welcome to my e-commerce designed using React js and material icons.Welcome to my e-commerce designed using React js and material icons.</Content>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </PartA>
      <PartB>
        <LinkHeader>Other Links</LinkHeader>
        <Links>E-commerce</Links>
        <Links>Github</Links>
        <Links>Facebook</Links>
        <Links>Twitter</Links>
        <Links>Facebook</Links>
        <Links>Cart</Links>
        <Links>React</Links>
      </PartB>
      <PartC>
        <Desc>Your satisfaction is our happiness. Shop with us always to enjoy great experience of shopping from wherever.</Desc>
        <Links><Room />Nairobi , Kenya</Links>
        <Links><Phone />+254722808670</Links>
        <Links><MailOutline /> ambrosetall@gmail.com</Links>
      </PartC>
    </Section>
  )
}

export default Footer