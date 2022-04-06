import React from 'react';
import sun from './sun.svg';
import './Carousel.css';

export const Carousel = ({ src }) => (
  <div>
    <h1>My Summer Vacation</h1>
    <img src={sun} className='sun' alt='icon of sun' />
    <img
      src={src}
      className='vacationImg'
      alt='photos from my summer vacation'
    />
  </div>
);
