import React from 'react';
import styled from 'styled-components';
import { facebook, instagram, logo2, twitter } from '../assets';

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <img src={logo2} alt="" />
        </div>
        <div>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
        <ul>
          <li><b>Community</b></li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlord</li>
          <li>Discord</li>
      </ul>
      <ul>
        <li><b>Castle</b></li>
        <li>Castle</li>
        <li>Farms</li>
        <li>Beach</li>
        <li>Learn more</li>
      </ul>
      <ul>
        <li><b>About us</b></li>
        <li>Road map</li>
        <li>Creators</li>
        <li>Career</li>
        <li>Contact us</li>
      </ul>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: #1d1d1e;
`;
