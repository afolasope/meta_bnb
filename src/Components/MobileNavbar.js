import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const MobileNavbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <Wrapper>
      <ul onClick={() => setNavbarOpen(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="connnect wallet">Place to stay</Link>
        </li>
        <li>
          <Link to="/">NFTs</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <div>
          <button className="btn">Connect wallet</button>
        </div>
      </ul>
    </Wrapper>
  );
};

export default MobileNavbar;

const Wrapper = styled.nav`
  ul {
    position: absolute;
    padding: 2rem;
    transform: translateX(12%);
    width: 80%;
    list-style-type: none;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.5s ease-out;
    @media (min-width: 400px) {
      transform: translateX(33%);
      width: 60%;
    }
    li {
      padding: 0.6rem;
      text-align: center;
      color: ${colors.textPry};
    }
  }
  div {
    display: flex;
    justify-content: center;
    button {
      margin-top: 0.5rem;
      background: ${colors.bg};
      color: white;
    }
  }
  @media (min-width: 800px) {
    display: none;
  }
`;
