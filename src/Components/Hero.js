import React from 'react';
import styled from 'styled-components';
import { hero_img1, hero_img2, hero_img3, hero_img4 } from '../assets';
import { colors, space } from '../styles/variables';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-text">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the
          <span> Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
      <div className="hero-images">
        <div>
          <img src={hero_img1} alt="" />
          <img src={hero_img2} alt="" />
        </div>
        <div>
          <img src={hero_img3} alt="" />
          <img src={hero_img4} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 2rem;
  @media (min-width: 800px) {
    padding: 2rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 2rem ${space.xxlSpacing};
  }
  .hero-text {
    max-width: 40rem;
    color: ${colors.textPry};
    margin-right: 3rem;
    h1 {
      font-size: 2.1rem;
      @media (min-width: 600px) {
        font-size: 2.5rem;
      }
      @media (min-width: 1200px) {
        font-size: 3.5rem;
      }
      span {
        color: ${colors.bg};
        color: purple;
      }
    }
    p {
      font-size: 1.1rem;
      @media (min-width: 600px) {
        font-size: 1.3rem;
      }
      @media (min-width: 800) {
        font-size: 1.5rem;
      }
    }
  }
  .hero-images {
    display: none;
  }
  @media (min-width: 700px) {
    .hero-images {
      display: block;
      border: 2px solid gainsboro;
      display: flex;
      justify-content: flex-end;

      img {
        width: 11rem;
        border: 3px solid teal;
      }
    }
  }
`;

export default Hero;
