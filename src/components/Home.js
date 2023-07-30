import React , {useEffect} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
// useEffect(()=>{ //use effect basically does whta is that whenever a component is loaded , it will load whatever is asked within it
// // console.log("HELLO");
// db.Collection('movies').onSnapshot((snapshot)=>{
//   let tempMovies = snapshot.docs.map((doc)=>{
//     return { id: doc.id, ...doc.data()}
//   })
// })
// },[])


  return (
     <Container>
       <ImgSlider/>
       <Viewers/>
       <Movies/>
     </Container>
  )
}

export default Home

const Container=styled.main` //this basically means that its a div only but the main content and tells google and other browsers that its the main content
min-height: calc(100vh - 70px);//now home height will be 100vertical height which is top to bottom and - height of header so that section is our home where we will be working
padding:0 calc(3.5vw + 5px);//This can be useful for creating responsive designs where the padding adjusts based on the size of the viewport , so calculating width
position:relative;
overflow-x:hidden;

&:before { //here we want a background image behind the content of the home page so using this , hence this will come before Container tag
    background:url("/images/home-background.png") center center / cover   
    no-repeat fixed; //image you want behind the home contents , and fixed so no change while scrolling so no change in the background rest home components will change while scroll
    content: ""; //no content as we just wanted image
    position: absolute; 
    top:0; //all these means that basically , image will stretch out to max under home component
    left:0;
    right:0;
    bottom:0;
    z-index:-1; //now at las putting behind the home components
}

`