import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectUserName,
  setUserLogin,
  selectUserPhoto,
  setSignOut
} from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // Here for google authentication when clicked on sign in
  const signIn = async () => {
    try {
      // Here you have just set up the login/logout using Google authentication
      await signInWithPopup(auth, googleProvider).then((result) => {
        // In the above auth, you have done logged in,
        // now from .then, we are getting the result of the auth object
        // and accessing the user with its name, photo, and email, which comes from the Gmail ID you logged in from
        let user = result.user;
        dispatch(
          setUserLogin({
            // So now this will dispatch the details which include user name,
            // and thus userName will be updated, so now it exists, and the navbar with all the menu will pop up
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
        );
      });
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth).then(() => {
        // So dispatch this to setSignOut in useSlice.js which updates acc
        // and thus user will cease to exist, and then the nav will have only the sign-in button
        dispatch(setSignOut());
        // Now redirect back to the login page
        navigate('/login');
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Nav>
      <Link exact to="/">
        <Logo src="/images/logo.svg" />
      </Link>
      {!userName ? (
        // Hence, if the user name exists (that is logged in), then we show the nav menu, otherwise, we show the navbar with just a login button
        <LoginContainer>
          <Loginbtn onClick={signIn}>Login</Loginbtn>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" />
              <span>SERIES</span>
            </a>
            <UserImg
              src="https://media.licdn.com/dms/image/D4D03AQEjjQrabqy_qA/profile-displayphoto-shrink_400_400/0/1690208221996?e=1695859200&v=beta&t=Aamgrl7UPjbDyKRvp4pQUvz7IpzkhrXNuSWk8PKRKDc"
              onClick={logOut}
            />
          </NavMenu>
          {/* MobileNavMenu for Mobile View */}
          <MobileNavMenu>
            {/* Rest of the MobileNavMenu items... */}
          </MobileNavMenu>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  @media (max-width: 768px) {
    display: none; /* Hide the NavMenu on smaller screens */
  }
  a {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  margin-left: 685px;
  @media (max-width: 768px) {
    margin-left: 15px; /* Adjust the margin on smaller screens */
  }
`;

const Loginbtn = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex: 2; /* Adjust the flex value on smaller screens */
  }
`;

const MobileNavMenu = styled.div`
  display: none; // Initially, hide the NavMenu in mobile view

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: #090b13;
    padding: 10px;
    z-index: 1;
  }
`;

const MobileNavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;

  img {
    height: 20px;
    margin-right: 10px;
  }

  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;

    &:after {
      content: '';
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }

  &:hover {
    span: after {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`;