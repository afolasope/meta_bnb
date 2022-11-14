import React from 'react';
import styled from 'styled-components';
import { copyright, facebook, instagram, logo2, twitter } from '../assets';
import { colors, space } from '../styles/variables';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <div className="logo-container">
            <img src={logo2} alt="logo" className="logo" />
          </div>
          <div className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <ul>
          <li className="title">
            <b>Community</b>
          </li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlord</li>
          <li>Discord</li>
        </ul>
        <ul>
          <li className="title">
            <b>Places</b>
          </li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
        <ul>
          <li className="title">
            <b>About us</b>
          </li>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
        <div className="copyright mobile">
          <img src={copyright} alt="copyright" />
        </div>
      </div>
      <div className="copyright desktop">
        <img src={copyright} alt="copyright" />
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #1d1d1e;
  color: ${colors.bgAlpha};
  display: flex;
  justify-content: center;
  padding: 2rem;
  @media (min-width: 690px) {
    flex-direction: column;
  }
  @media (min-width: 800px) {
    padding: 4rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 4rem ${space.xxlSpacing};
  }
  /* @media (min-width: 690px) {
    padding: 5rem;
  } */
  .container {
    width: 100%;
    @media (min-width: 690px) {
      display: flex;
      justify-content: space-between;
    }
  }
  .logo-container {
    margin-bottom: 1rem;
    text-align: center;
  }
  .logo {
    height: 1.5rem;
    @media (min-width: 690px) {
      height: 2rem;
    }
  }
  .social-icons {
    margin-bottom: 1.5rem;
    text-align: center;
    img {
      margin-right: 1rem;
    }
  }
  ul {
    list-style: none;
    text-align: center;
    margin-bottom: 2rem;

    li {
      margin-bottom: 1rem;
      font-weight: lighter;
    }
  }
  .title {
    margin-bottom: 1rem;
    font-weight: bolder;
  }
  .copyright {
    text-align: center;
    &.mobile {
      @media (min-width: 690px) {
        display: none;
      }
    }
    &.desktop {
      align-self: flex-start;
      display: none;
      @media (min-width: 696px) {
        display: block;
      }
    }
  }
`;
