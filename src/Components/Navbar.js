import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LogoSvg } from '../assets';
import { colors, space } from '../styles/variables';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import ConnectWalletBtn from './btn/ConnectWalletBtn';

const Navbar = ({ navbarOpen, setNavbarOpen, isModalOpen, setModalOpen }) => {
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
            <Link to="/place-to-stay">Place to stay</Link>
          </li>
          <li>
            <Link to="#">NFTs</Link>
          </li>
          <li>
            <Link to="#">Community</Link>
          </li>
        </ul>
      </nav>
      <div className="btn-container">
        {/* <button className="btn btn-connect">Connect Wallet</button> */}
        <ConnectWalletBtn
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
      <div
        className="nav-btns"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        <GiHamburgerMenu className={navbarOpen ? 'hide' : 'close-nav'} />
        <IoMdClose className={navbarOpen ? 'open-nav' : 'hide'} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    height: 1.5rem;
    img {
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

  nav {
    display: none;
    @media (min-width: 800px) {
      display: block;
      color: ${colors.textPry};
      width: 40%;
      ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
      }
    }
  }
  .btn-container {
    display: none;
    @media (min-width: 800px) {
      display: block;
    }
  }
  .nav-btns {
    height: 2rem;
    width: 2rem;
    font-size: 1.5rem;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;

    .open-nav,
    .close-nav {
      height: 100%;
    }
    @media (min-width: 800px) {
      display: none;
    }
  }
  .hide {
    display: none;
  }
`;

export default Navbar;
