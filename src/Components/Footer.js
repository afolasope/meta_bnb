import React from 'react';
import styled from 'styled-components';
import { copyright, facebook, instagram, logo2, twitter } from '../assets';
import { colors } from '../styles/variables';

const Footer = () => {
  return (
    <Wrapper>
      <div>
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
        <div className="copyright">
          <img src={copyright} alt="" />
        </div>
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
  padding: 3rem;
  .logo-container {
    margin-bottom: 1rem;
  }
  .logo {
    height: 2rem;
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
      margin-bottom: 0.5rem;
      font-weight: lighter;
    }
  }
  .title {
    margin-bottom: 1rem;
    font-weight: bolder;
  }
  .copyright {
    text-align: center;
  }
`;
