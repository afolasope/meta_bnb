import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const ConnectWalletBtn = ({isModalOpen,setModalOpen,}) => {
  return (
    <Wrapper>
      <button className="btn" onClick={() => setModalOpen(!isModalOpen)}>
        Connect wallet
      </button>
    </Wrapper>
  );
};

export default ConnectWalletBtn;

const Wrapper = styled.div`
  button {
    background: ${colors.bg};
    font-size: inherit;
    color: ${colors.bgAlpha};
  }
`;
