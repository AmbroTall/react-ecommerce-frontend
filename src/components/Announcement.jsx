import React from 'react'
import styled from 'styled-components'

const Top = styled.div`
    background-color: teal;
`

const Text = styled.div`
    dispaly: flex;
    text-align: center;
    padding : 5px 0px;
    color: #fff;
`

const Announcement = () => {
  return (
    <Top>
        <Text>Get affordable discount every Tuesday on our flash sales</Text>
    </Top>
  )
}

export default Announcement