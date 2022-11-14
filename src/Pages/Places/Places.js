import React from 'react';
import styled from 'styled-components';
import { place1, place10, place11, place13, place14, place15, place16, place2, place3, place4, place5, place6, place7, place8, place9 } from '../../assets';

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

const Places = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          {places.map((item, index) => {
            return <li key={index}> {item}</li>;
          })}
        </ul>
        <div>
          <div>
            <img src={place1} alt="" />
          </div>
          <div>
            <img src={place2} alt="" />
          </div>
          <div>
            <img src={place3} alt="" />
          </div>
          <div>
            <img src={place4} alt="" />
          </div>
          <div>
            <img src={place5} alt="" />
          </div>
          <div>
            <img src={place6} alt="" />
          </div>
          <div>
            <img src={place7} alt="" />
          </div>
          <div>
            <img src={place8} alt="" />
          </div>
          <div>
            <img src={place9} alt="" />
          </div>
          <div>
            <img src={place10} alt="" />
          </div>
          <div>
            <img src={place11} alt="" />
          </div>
          <div>
            <img src={place13} alt="" />
          </div>
          <div>
            <img src={place14} alt="" />
          </div>
          <div>
            <img src={place15} alt="" />
          </div>
          <div>
            <img src={place16} alt="" />
          </div>

        </div>
      </nav>
    </Wrapper>
  );
};

export default Places;


const Wrapper = styled.div`

`;