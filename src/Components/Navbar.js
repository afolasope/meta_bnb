import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSvg } from '../assets';

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <img src={LogoSvg} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/connect-wallet">Place to stay</Link>
            <Link to="#">NFTs</Link>
            <Link to="#">Community</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button>Connect Wallet</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
