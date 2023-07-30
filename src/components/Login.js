import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>
          <a href="https://www.hotstar.com/in/home?ref=%2Fin" target="_blank" rel="noopener noreferrer">
            GET ALL THERE
          </a>
        </SignUp>
        <Description>
          Introducing Primere Access, a premium subscription service that offers exclusive benefits and unparalleled access to a world of entertainment.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img`
  width: 90%;
`;

const SignUp = styled.div`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  // Style the anchor tag within the SignUp div to remove default styles
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit; // Inherit the color from the parent div
  }

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;

// Media query for mobile responsiveness
const mediaQuery = "@media (max-width: 768px)";

const MobileContainer = styled(Container)`
  padding: 0 10px;
`;

const MobileCTA = styled(CTA)`
  padding: 60px 20px;
`;

const MobileCTALogoOne = styled(CTALogoOne)`
  width: 70%;
`;

const MobileCTALogoTwo = styled(CTALogoTwo)`
  width: 70%;
`;

Login.defaultProps = {
  media: mediaQuery
};
