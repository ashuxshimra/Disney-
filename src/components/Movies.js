import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function Movies() {
  return (  
    <Container>
        <h4>
         Recommended for You
        </h4>
        {/* the below content tag made for contents where we will have wrap div which will contain images , this done so that you can use display grid more easily also from structure wise after h4 we are creating content container div for this and doing */}
        <Content> 
          <Wrap>
            <Link exact to='/detail/id:1'>
            <img src='https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg'/>
            </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:2'>
            <img src='https://lumiere-a.akamaihd.net/v1/images/pp_frozen_herobanner_mobile_20501_ae840c59.jpeg?region=0,0,1024,768'/>
             </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:3'>
            <img src='https://images4.alphacoders.com/101/1012514.jpg'/>
            </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:4'>
          <img src='https://wallpaperset.com/w/full/7/f/a/130858.jpg'/>
           </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:5'>
            <img src='data:image/jpeg;base64,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'/>
           </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:6'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsTZ_T8QDrnUez1fm4Lsuw-JKN2z_VLp5bk2gJlM4&s'/>
          </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:7'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc6vyi_fMFcqCL7cqTVveX2wUxAKBNjCIgDdfyWaw&s'/>
          </Link>
          </Wrap>
          <Wrap>
          <Link exact to='/detail/id:8'>
            <img src='https://c4.wallpaperflare.com/wallpaper/670/895/829/movie-aladdin-2019-aladdin-disney-wallpaper-preview.jpg'/>
          </Link>
          </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`

overflow: hidden;
`
const Content=styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(4, minmax(0,1fr));
`
const Wrap=styled.div`
overflow:hidden;
border-radius:10px;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, //giving box shadow below the wrap div as we want shadow effect there
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //remmeber this line , mostly used for transition and when there some transition then this takes place , so when hovered as done transofrm happens , border color , shadow etc so this is transition will render these changes as described here
cursor:pointer;
width:90%;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    
}
&:hover{
    transform: scale(1.05); //when hoverde on the these wrap divs, the content should appear bigger so scaling that
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, //giving box shadow below the wrap div as we want shadow effect there
rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`
