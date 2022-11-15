import React from 'react';
import styled from 'styled-components';
import { metatask2, times, walletconnect } from '../assets';

const ModalWallet = () => {
  return (
    <Wrapper>
      <div>
        <p>Connect Wallet</p>
        <span>x</span>
        {/* <span>{times}</span> */}
      </div>
      <hr />
      <p>Choose your preferred wallet:</p>
      <div>
        <button>
          <img src={metatask2} alt="logo" />
        </button>
        <button>
          <img src={walletconnect} alt="" />
        </button>
      </div>
    </Wrapper>
  );
};

export default ModalWallet;

const Wrapper = styled.div`
display: none;
  border: 2px solid red;
  position: fixed;
  background-color: white;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
`;
