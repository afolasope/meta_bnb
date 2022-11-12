import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSvg } from '../assets';
import { colors, space } from '../styles/variables';

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
  @media (min-width: 800px) {
    padding: 2rem  ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 2rem  ${space.xxlSpacing};
  }
.btn-contribute{
  background: ${colors.bg};
  font-size: inherit;
}
`;

export default Navbar;
