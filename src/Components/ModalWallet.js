import React from 'react';
import styled from 'styled-components';
import { caretRight, metatask2, walletconnect } from '../assets';
import { IoMdClose } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';

const ModalWallet = ({ isModalOpen, setModalOpen }) => {
  return (
    <Wrapper>
      <div className={isModalOpen ? 'container' : 'hide'}>
        <div className="title">
          <p>Connect Wallet</p>
          <span>
            <IoMdClose onClick={() => setModalOpen(false)} />
          </span>
        </div>
        <hr />
        <div className="details">
          <p>Choose your preferred wallet:</p>
          <div className="btn-container">
            <button className="btn" onClick={() => setModalOpen(false)}>
              <img src={metatask2} alt="logo" />
              <span>
                <AiOutlineRight className="arrow" />
              </span>
            </button>
          </div>
          <div className="btn-container">
            <button className="btn" onClick={() => setModalOpen(false)}>
              <img src={walletconnect} alt="wallet" />
              <span>{<AiOutlineRight className="arrow" />}</span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ModalWallet;

const Wrapper = styled.div`
  .container {
    position: fixed;
    border-radius: 12px;
    background-color: white;
    width: 50%;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 60;
    transition: all 0.5s ease-in;
  }
  .title {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bolder;
    p {
      font-size: 1.2rem;
    }
  }
  hr {
    border: 1px solid #cfd8dc;
  }
  .details {
    padding: 1rem;
    p{
      margin-bottom: 1rem;
    }
  }
  .btn-container {
    button {
      display: block;
      width: 100%;
      padding: 0.3rem 0.6rem;
      text-align: start;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      border: 1px solid #cfd8dc;

      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
  .arrow {
    background-color: cfd8dc;
  }
`;
