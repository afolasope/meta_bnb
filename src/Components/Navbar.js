import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSvg } from '../assets';
import { colors, space } from '../styles/variables';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo-container">
        <img src={LogoSvg} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/connect-wallet">Place to stay</Link>
          </li>
          <li>
            <Link to="#">NFTs</Link>
          </li>
          <li>
            <Link to="#">Community</Link>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn btn-contribute">Connect Wallet</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid red;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    height: 1.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 800px) {
    padding: 2rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 2rem ${space.xxlSpacing};
  }
  .btn-contribute {
    background: ${colors.bg};
    font-size: inherit;
    color: ${colors.bgAlpha};
  }
  nav {
    color: ${colors.textPry};
    width: 40%;
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
    }
  }
`;

export default Navbar;
