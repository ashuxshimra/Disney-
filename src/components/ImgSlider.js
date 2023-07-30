import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
function ImgSlider() {

let settings ={ //these are the settigs for the slider component
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
}

  return ( 
    //this below is called destructruing and from documntation , now between this slider you have to provide div;s to slide , that is content
    <Carousel {...settings}> 
     <Wrap>      
        {/* now this wrap is the section for slide and inside what conent you need for sliding , we need image */}
      <Link exact to="/detail/id:8">
      <img src='https://i.pinimg.com/originals/1b/78/a2/1b78a260b4f4b67efb8bac8011ef10e4.gif'/> 
     </Link>
     </Wrap>
     
     <Wrap> 
        {/* now this wrap is the section for slide and inside what conent you need for sliding , we need image */}
      <Link exact to="/detail/id:3">
      <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNrOTJucng1ZGt2cWJnY2lwbmUwN2VodHJwY3ZrOXRiaGg0cmtmbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1X8RHAt20BUtPYT2Wz/200.gif'/> 
    </Link>
     </Wrap>
     <Wrap> 
        {/* now this wrap is the section for slide and inside what conent you need for sliding , we need image */}
      <Link exact to="/detail/id:7">
      <img src='https://i.pinimg.com/originals/8c/5c/f4/8c5cf43f98efde6c4440fe8a56ab0fab.gif'/> 
     </Link>
     </Wrap>
    </Carousel>
  )
}
 
export default ImgSlider

const Carousel=styled(Slider)`
margin-top: 20px;

ui li button{
    &:before{
        font-size: 100px;
        color: rgb(150, 158, 171);
    }
}
//the existinng button below slider adjustment which is actuve
li.slick-active button:before{
    color:rgb(150, 158, 171);
}

//by default slick stops overflow in its css so edit it to see other next and previous images in current slide image
.slick-list { 
    overflow:visible;
}
button{
    z-index:1; //shifting left and right slide button upwards 
}


`
const Wrap=styled.div`

height:325px;
img{
    border: 4px solid transparent; //to give distance between images in slider
    border-radius:4px;
    width:100%;
    height:100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, //used for giving shadow effects of photos
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration:300ms;
    &:hover{
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`