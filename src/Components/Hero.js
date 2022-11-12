import React from 'react';
import styled from 'styled-components';
import { hero_img1, hero_img2, hero_img3, hero_img4 } from '../assets';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1>Rent a Place away from Home in the Metaverse</h1>
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
      <div>
        <img src={hero_img1} alt="" />
        <img src={hero_img2} alt="" />
        <img src={hero_img3} alt="" />
        <img src={hero_img4} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Hero;
