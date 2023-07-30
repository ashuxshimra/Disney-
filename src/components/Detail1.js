import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 70px); // Area of Detail1 page as header stays
  padding: 0 calc(3.5vw + 5px);
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //margin-top: 16px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid white;
  align-items: center;
  justify-content: center; // Used for horizontal centering
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height: 1.4;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;

function Detail1() {
  return (
    <Container>
      {/* Background Image */}
      <Background>
        <img src='https://api.time.com/wp-content/uploads/2018/06/bo-rgb-s120_22a_cs_pub-pub16-318.jpg' />
      </Background>
      {/* Image Title */}
      <ImgTitle>
        <img src='https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png' />
      </ImgTitle>
      {/* Controls */}
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      {/* SubTitle */}
      <SubTitle>
        2018 * 7m * Family, Fantasy, Kids, Animation
      </SubTitle>
      {/* Description */}
      <Description>
        Step into a world of wonder and enchantment with Bao, an extraordinary animated short film that will captivate audiences of all ages. Directed by the talented storyteller, Domee Shi, Bao takes us on a heartfelt journey that explores the bonds of family, cultural traditions, and the universal theme of love.
      </Description>
    </Container>
  );
}

export default Detail1;
