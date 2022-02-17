import React from 'react'
import styled from 'styled-components'
import { Send } from '@material-ui/icons'
import { mobile } from './ResposiveStyled'

const SubSection= styled.div`
  padding: 40px;
  display: flex;
  flex-direction :column; 
  align-items: center;
  justify-content: center;
  background-color: #fcf5f5;
`
const Header = styled.h1`
  padding: 20px 0px;
  letter-spacing: 2px;
`

const Desc = styled.p`
  font-weight : 400px;
  letter-spacing: 2px;
  margin-bottom: 10px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 500px;
  padding: 4px 0px;

  ${mobile({ width: "100%"})}
`

const Button = styled.button`
  background: teal;
  padding: 3px 10px;
  border-radius: 2px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
`

const Subscribe = () => {
  return (
    <SubSection>
        <Header>Newsletter</Header>
        <Desc>Subscribe for Latest Products Alert</Desc>
      <Container>
        <Input placeholder="Enter your Email" />
        <Button>
          <Send />
        </Button>
      </Container>
    </SubSection>
  )
}

export default Subscribe