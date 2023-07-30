import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
    <Wrap>
        <img src='/images/viewers-disney.png'/>
    </Wrap>
    <Wrap>
        <img src='/images/viewers-pixar.png'/>
    </Wrap>
    <Wrap>
        <img src='/images/viewers-marvel.png'/>
    </Wrap>
    <Wrap>
        <img src='/images/viewers-starwars.png'/>
    </Wrap>
    <Wrap>
        <img src='/images/viewers-national.png'/>
    </Wrap>
    </Container>
  )
}

export default Viewers

const Container=styled.div`
margin-top:30px;
display:grid; 
grid-gap:25px;
grid-template-columns: repeat(5, minmax(0, 1fr)); //this will have 5 columns in grid and will expand stretch in entire div so no space is left too much at rhs
padding:30px 0px 26px; //top-l/r-bottom
`
const Wrap=styled.div`
border-radius:10px;
cursor:pointer;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, //giving box shadow below the wrap div as we want shadow effect there
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //remmeber this line , mostly used for transition and when there some transition then this takes place , so when hovered as done transofrm happens , border color , shadow etc so this is transition will render these changes as described here
img{
    width:100%;
    height:100%;
    object-fit:cover; //fit this image as much as inside wrap div
}
&:hover{
    transform: scale(1.09); //when hoverde on the these wrap divs, the content should appear bigger so scaling that
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, //giving box shadow below the wrap div as we want shadow effect there
rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`