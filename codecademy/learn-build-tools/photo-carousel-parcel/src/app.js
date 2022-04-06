import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from './Carousel';

const beach = new URL('./assets/beach.jpg', import.meta.url);
const drinks = new URL('./assets/drinks.jpg', import.meta.url);
const ocean = new URL('./assets/ocean.jpg', import.meta.url);
const pool = new URL('./assets/pool.jpg', import.meta.url);
const van = new URL('./assets/van.jpg', import.meta.url);

const PATHS = [beach, drinks, ocean, pool, van];

const CarouselContainer = () => {
  const [currentImg, setCurrentImg] = React.useState(0);
  const nextImg = () => setCurrentImg((current) => ++current % PATHS.length);

  React.useEffect(() => {
    const interval = setInterval(nextImg, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Carousel src={PATHS[currentImg]} />;
};

ReactDOM.render(<CarouselContainer />, document.getElementById('app'));
