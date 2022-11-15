import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import ConnectWalletBtn from './btn/ConnectWalletBtn';

const MobileNavbar = ({ setNavbarOpen, isModalOpen, setModalOpen }) => {
  return (
    <Wrapper>
      <ul onClick={() => setNavbarOpen(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="place-to-stay">Place to stay</Link>
        </li>
        <li>
          <Link to="/">NFTs</Link>
        </li>
        <li>
          <Link to="/">Community</Link>
        </li>
        <div>
          <ConnectWalletBtn
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </ul>
    </Wrapper>
  );
};

export default MobileNavbar;

const Wrapper = styled.nav`
  padding: 1rem;
  box-shadow: 0px 6px 10px -11px #111;

  @media (min-width: 800px) {
    display: none;
  }

  ul {
    list-style-type: none;
    li {
      margin-bottom: 0.7rem;
      padding: 0.3rem;
    }
  }
  /* ul {
    position: absolute;
    padding: 2rem;
    transform: translateX(12%);
    z-index: 15;
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
    justify-content: center; */
  /* button {
      margin-top: 0.5rem;
      background: ${colors.bg};
      color: white;
    } */
  /* } */
  /* @media (min-width: 800px) {
    display: none;
  } */
`;
