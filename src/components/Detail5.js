import React from 'react'
import styled from 'styled-components'
function Detail5() {
  return (
    <Container>
        <Background>
            <img src='https://64.media.tumblr.com/4943253fdeb4df50b706d23c03d7f71f/d2c966913958953f-e0/s500x750/c4f9df02a4024f551b7f9774d65a65fa078379c3.gif'/>
        </Background>
        <ImgTitle>
        {/* <img src=''/> */}
        </ImgTitle>
        <Controls>
            <PlayButton>    
            <img src='/images/play-icon-black.png'/>
            <span>
                PLAY
            </span>
            </PlayButton>
            <TrailerButton>
            <img src='/images/play-icon-white.png'/>
            <span>
               TRAILER
            </span>
            </TrailerButton>
            <AddButton>
                <span>
                   + 
                </span>
            </AddButton>
            <GroupWatchButton>
                <img src='/images/group-icon.png'/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
        2012 * 20m * Family, Fantasy, Kids, Animation, Thrill
        </SubTitle>
        <Description>
        Paperman is a 2012 American black-and-white computer-cel animated romantic comedy short film produced by Walt Disney Animation Studios. Directed by John Kahrs, it blends traditional and computer animation, and features the voices of Kahrs and Kari Wahlgren in the leading roles.

The film was released on November 2, 2012 alongside Wreck-It Ralph. </Description>

    </Container>
  )
}

export default Detail5
const Container=styled.div`
min-height: calc(100vh - 70px); //area of Detail6 page as header stays
padding:0 calc(3.5vw + 5px);
overflow: hidden;
`
const Background=styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0; 
opacity:0.8;
z-index:-1;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const ImgTitle=styled.div`
height:30vh;
min-height:170px;
width: 35vw;
min-width:200px;
margin-top:60px;
margin-bottom:20px;

img {
   width: 100%;
   height: 100%;
   object-fit: contain; 
}
`
const Controls=styled.div`
display:flex;
align-items:center;
//margin-top:16px;

`
const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background: rgb (249, 249, 249);
border:none;
letter-spacing:1.8px;
cursor:pointer;
&:hover{
    background: rgb(198, 198, 198);
}

`
const TrailerButton=styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color:white;
`
const AddButton=styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
background-color: rgba(0, 0, 0, 0.6);
cursor:pointer;
border-radius:50%;
border:2px solid white;
align-items:center; 
justify-content:center;//used for horizontal centering
span{
    font-size: 30px;
    color:white;
}
`
const GroupWatchButton=styled(AddButton)`
background: rgb(0, 0, 0);

`
const SubTitle=styled.div`
color: rgb(249, 249, 249);
font-size:15px;
min-height: 20px;
margin-top:26px;
`
const Description=styled.div`
margin-top:16px;
font-size:20px;
line-height:1.4;
color: rgb(249, 249, 249);
max-width:760px;
`

// Media queries for mobile responsiveness
const mediaQuery = "@media (max-width: 768px)";
const MobileContainer = styled(Container)`
  padding: 0 10px;
`;

const MobileImgTitle = styled(ImgTitle)`
  width: 100%;
`;

const MobileControls = styled(Controls)`
  flex-direction: column;
  align-items: flex-start;
`;

const MobileButton = styled(PlayButton)`
  margin-bottom: 15px;
`;

const MobileTrailerButton = styled(TrailerButton)`
  margin-bottom: 15px;
`;

const MobileAddButton = styled(AddButton)`
  margin-bottom: 15px;
`;

const MobileGroupWatchButton = styled(GroupWatchButton)`
  margin-bottom: 15px;
`;

const MobileSubTitle = styled(SubTitle)`
  ${mediaQuery} {
    margin-top: 16px;
  }
`;

const MobileDescription = styled(Description)`
  ${mediaQuery} {
    margin-top: 16px;
  }
`;

Detail5.defaultProps = {
  media: mediaQuery
};