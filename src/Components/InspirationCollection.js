import React from 'react';
import styled from 'styled-components';
import {
  inspo1,
  inspo2,
  inspo3,
  inspo4,
  inspo5,
  inspo6,
  inspo7,
  inspo8,
  stars,
} from '../assets';
import { space } from '../styles/variables';

const InspirationClooection = () => {
  return (
    <Wrapper>
      <h3>Inspiration for your next adventure</h3>
      <div className="cards">
        <div className="card-container">
          <div className="img-container">
            <img src={inspo1} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo2} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo3} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo4} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo5} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo6} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo7} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="card-container">
          <div className="img-container">
            <img src={inspo8} alt="nft" />
          </div>
          <div className="card-details">
            <p>
              <span>Desert King</span> <span>1MB per night</span>
            </p>
            <p>
              <span>2345km away </span> <span>available for 2 weeks stay</span>
            </p>
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default InspirationClooection;

const Wrapper = styled.div`
  padding: 2rem;
  @media (min-width: 800px) {
    padding: 5rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 5rem ${space.xxlSpacing};
  }
`;
