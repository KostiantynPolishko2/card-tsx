import React from 'react';
import './CardProps.css';
import item from './img/default.png';

const CardProps = () => (
  <div className='card-props'>
    <div className='card-props__title'>
      <p className='card-props__title-name'>Header of item</p>
      <p>
        <span>Price</span>&nbsp;<span>UAH</span>
      </p>
    </div>
    <img src={item} alt='picture'></img>
  </div>
);

export default CardProps;
