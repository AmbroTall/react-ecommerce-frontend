import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components'
import {mobile} from './ResposiveStyled'
import {sliderItems} from '../Products'



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  ${mobile({ display: "none"})}
`

const DirectionBtn = styled.div`
  display : flex;
  width : 50px;
  height:50px;
  border-radius : 50%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  top : 0;
  bottom: 0;
  // taking in props
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin : auto;
  position: absolute;
  margin :auto;
  cursor: pointer;
  z-index: 2;
  

  &:hover{
    background-color: #333;
    color: #fff;
  }
`



const Silder = styled.div`

  height : 100%;
  display : flex;
  transform: translateX(${props=>props.sliderIndex * -100}vw)
  // transform: translateX(-100vw)
`

const Slide = styled.div`
  min-width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 3px;
`

const Slider = () => {

  const [sliderIndex,setSliderIndex ] = useState(0)
  const handleClick = (direction) => {
    if(direction === "left"){
      setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2)
    }else{
      setSliderIndex(sliderIndex < 2 ? sliderIndex+1 : 0)
    }
  }

  return (
    <Container>
      <DirectionBtn direction="left" onClick={()=> handleClick("right")}>
        <ArrowLeftOutlined />
      </DirectionBtn>
      <Silder sliderIndex={sliderIndex}>
        { sliderItems.map((item)=>(
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>More Info</Button>
            </InfoContainer>
          </Slide>
        ))}
        
      </Silder>
      <DirectionBtn direction="right" onClick={()=> handleClick("right")}>
        <ArrowRightOutlined />
      </DirectionBtn>
    </Container>
  )
}

export default Slider