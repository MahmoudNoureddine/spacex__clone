import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function SectionOfHome({title, subtitle, btnTxt, backgroundImage }) {
  return (
    <Wrapper bgImage={backgroundImage}>
      <Fade bottom duration={1500}> 
      <ItemContainer>
          <p>{title}</p>
          <h1>{subtitle}</h1>
          <Button>{btnTxt}</Button>
        </ItemContainer>
        </Fade>
    </Wrapper>
  )
}

export default SectionOfHome

const Wrapper = styled.div`
  
  width: 100%;
  height: 100vh;
  background-image: ${(props) => `url("../images/${props.bgImage}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 0 50px;
`


const ItemContainer = styled.div`
   margin-bottom: 100px;
   h1 {
    font-size: 3rem;
    max-width: 550px;
  },
`

const Button = styled.button`
   height: 55px;
   width: 170px;
   font-size: 20px;
   background: transparent;
   border: 2px solid #fff;
   margin-top: 20px;
   transition: all 0.5s !important;
    &:hover {
        box-shadow: inset 0px -80px 0px #fff;
        color: #000;
    },

   
    
`