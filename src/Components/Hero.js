import React from 'react';
import styled from 'styled-components';
import {
  hero_img1,
  hero_img2,
  hero_img3,
  hero_img4,
  mbToken,
  metaTask,
  openSea,
} from '../assets';
import { colors, space } from '../styles/variables';

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero">
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
          <div className="input-control">
            <input type="text" />
            <button className="btn">Search</button>
          </div>
        </div>
        <div className="hero-images">
          <div>
            <div>
              <img src={hero_img1} alt="" />
            </div>
            <div>
              <img src={hero_img2} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src={hero_img3} alt="" />
            </div>
            <div>
              <img src={hero_img4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="companies">
        <img src={mbToken} alt="logo" />
        <img src={metaTask} alt="logo" />
        <img src={openSea} alt="logo" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid gray;
    padding: 2rem;
    @media (min-width: 800px) {
      padding: 7rem ${space.lgSpacing};
    }
    @media (min-width: 1200px) {
      padding: 7rem ${space.xxlSpacing};
    }
  }
  .hero-text {
    max-width: 40rem;
    color: ${colors.textPry};
    margin-right: 3rem;
    h1 {
      font-size: 2.1rem;

      @media (min-width: 600px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      @media (min-width: 1200px) {
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      span {
        color: ${colors.bg};
        color: purple;
      }
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      @media (min-width: 600px) {
        font-size: 1.3rem;
        margin-bottom: 2rem;
      }
      @media (min-width: 800) {
        font-size: 1.5rem;
      }
    }
    .input-control {
      display: flex;
      max-width: 35rem;

      input {
        flex-basis: 70%;
        color: inherit;
        border-radius: ${space.borderRadius};
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #a3a3a3;
        padding: 0.3rem;
        &:focus {
          outline: 1px solid ${colors.bg};
        }
      }
      button {
        flex-basis: 30%;
        padding: 1rem 0.3rem;
        background: ${colors.bg};
        font-size: inherit;
        color: ${colors.bgAlpha};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
  .hero-images {
    display: none;
  }
  @media (min-width: 800px) {
    .hero-images {
      display: block;
      display: flex;
      justify-content: flex-end;
      gap: 0.3rem;

      img {
        width: 11rem;
      }
      & > div:first-of-type {
        transform: translateY(15%);
      }
      & > div:last-of-type {
        transform: translateY(-15%);
      }
    }
  }
  .companies {
    padding: 0.5rem 0;
    background: ${colors.bg};
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (min-width: 600px) {
      padding: 1rem;
    }
    img {
      height: 1rem;

      @media (min-width: 600px) {
        height: 1.5rem;
      }
    }
  }
`;

export default Hero;
