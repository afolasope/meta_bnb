import React from 'react';
import styled from 'styled-components';
import {
  place1,
  place10,
  place11,
  place12,
  place13,
  place14,
  place15,
  place16,
  place2,
  place3,
  place4,
  place5,
  place6,
  place7,
  place8,
  place9,
  settings,
  stars,
} from '../../assets';
import { colors, space } from '../../styles/variables';

const places = [
  'restaurant',
  'cottage',
  'castle',
  'fantast city',
  'beach',
  'carbins',
  'offgrid',
  'farm',
];

const Nfts = [
  {
    img: place1,
  },
  {
    img: place2,
  },
  {
    img: place3,
  },
  {
    img: place4,
  },
  {
    img: place5,
  },
  {
    img: place6,
  },
  {
    img: place7,
  },
  {
    img: place8,
  },
  {
    img: place9,
  },
  {
    img: place10,
  },
  {
    img: place11,
  },
  {
    img: place12,
  },
  {
    img: place13,
  },
  {
    img: place14,
  },
  {
    img: place15,
  },
  {
    img: place16,
  },
];

const Places = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          {places.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
          <li className="location">
            <span>location</span>
            <span>
              <img src={settings} alt="" />
            </span>
          </li>
        </ul>
      </nav>
      <div className="grid">
        {Nfts.map((item) => {
          return (
            <div className="card-container">
              <div className="img-container">
                <img src={item.img} alt="nft" />
              </div>
              <div className="card-details">
                <p>
                  <span>Desert King</span> <span>1MB per night</span>
                </p>
                <p>
                  <span>2345km away </span>
                  <span>available for 2 weeks stay</span>
                </p>
              </div>
              <img src={stars} alt="rating" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Places;

const Wrapper = styled.div`
  padding: 0.8rem;
  position: relative;
  @media (min-width: 700px) {
    padding: 3rem ${space.lgSpacing};
  }
  @media (min-width: 1200px) {
    padding: 6rem ${space.xlSpacing};
  }
  .card-container {
    border: 1px solid #d7d7d7;
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;

    .img-container {
      img {
        height: 100%;
        width: 100%;
      }
    }
    p {
      font-size: 0.75rem;
      display: flex;
      justify-content: space-between;
    }
  }
  ul {
    list-style-type: none;
    display: grid;
    gap: 0.6rem;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${colors.textPry};
    margin-bottom: 3rem;

    @media (min-width: 960px) {
       display: flex;
      gap: 1.5rem;
    }

    li {
      border: 1px solid transparent;
      padding: 0.3rem;
      width: max-content;
      border-radius: 6px;
      text-transform: capitalize;
      &:hover {
        border: 1px solid #d7d7d7;
        color: purple;
      }
    }
  }
  .location {
    border: 1px solid #d7d7d7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 0.8rem;
      margin-left: 0.5rem;
      margin-top: 0.3rem;
    }
  }
  .grid {
    @media (min-width: 600px) {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
