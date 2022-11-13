import React from 'react';
import styled from 'styled-components';
import { meta1, meta2, meta3 } from '../assets';
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
      <div className="meta">
        <div className="img-wrapper">
          <div className="img-container">
            <img src={meta1} alt="NFT" className="meta-1" />
          </div>
          <div className="img-container">
            <img src={meta2} alt="NFT" className="meta-2" />
          </div>
          <div className="img-container">
            <img src={meta3} alt="NFT" className="meta-3" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Metabnb;

const Wrapper = styled.div`
  background: ${colors.bg};
  padding: 2rem;
  position: relative;
  @media (min-width: 700px) {
    padding: 3rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 6rem ${space.xxlSpacing};
  }
  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10rem;
  }
  .text {
    /* margin-bottom: 2rem; */
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
    @media (min-width: 700px) {
      max-width: 20rem;
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
  .img-wrapper {
    height: 20rem;
  }
  .img-container {
    position: relative;
    height: 5rem;
    width: 13rem;
    img {
      position: absolute;
      width: 100%;
    }
    @media (min-width: 700px) {
      margin-right: 4rem;
    }
    @media (min-width: 900px) {
      margin-right: 4rem;
      width: 20rem;
      img {
        width: 100%;
      }
    }
  }
  .btn {
    background: ${colors.bgAlpha};
    color: purple;
  }
  .meta-1 {
    transform: translate(-40%, 40%);
    /* border: 2px solid firebrick; */
    z-index: 40;
  }
  .meta-2 {
    transform: translate(12%, -28%);
    z-index: 30;
    /* border: 2px solid yellow; */
  }
  .meta-3 {
    transform: translate(23%, 17%);
    z-index: 45;
    /* border: 2px solid blue; */
  }
  .meta {
    /* border: 3px solid teal; */
    display: flex;
    justify-content: center;
  }
`;
