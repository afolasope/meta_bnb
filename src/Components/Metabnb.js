import React from 'react';
import styled from 'styled-components';
import { boxes } from '../assets';
import { colors, space } from '../styles/variables';

const Metabnb = () => {
  return (
    <Wrapper>
      <div className="text">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="btn">Learn more</button>
      </div>
      <div className="img-container">
        <img src={boxes} alt="nfts" />
      </div>
    </Wrapper>
  );
};

export default Metabnb;

const Wrapper = styled.div`
  background: ${colors.bg};
  padding: 2rem;
  position: relative;
  text-align: center;

  @media (min-width: 700px) {
    padding: 3rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 6rem ${space.xlSpacing};
  }
  @media (min-width: 960px) {
    p {
      max-width: 20rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: start;
  }
  .text {
    h2,
    p {
      color: ${colors.bgAlpha};
    }
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1.5rem;
    }
    @media (min-width: 760px) {
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .img-container {
    margin-top: 3rem;
    max-width: 30rem;
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    @media (min-width: 960px) {
      margin-top: 0;
      margin-left: 4rem;
    }
    @media (min-width: 1200px) {
      max-width: 40rem;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }
  .btn {
    background: ${colors.bgAlpha};
    color: purple;
  }
`;
