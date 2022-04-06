import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import  Carousel  from './Carousel';

import beach from './assets/beach.jpg';
import drinks from './assets/drinks.jpg';
import ocean from './assets/ocean.jpg';
import pool from './assets/pool.jpg';
import van from './assets/van.jpg';

const PATHS = [
    beach,
    drinks,
    ocean,
    pool,
    van
];

const CarouselContainer = () => {
    const [currentImg, setCurrentImg] = useState(0);
    const nextImg = () => setCurrentImg(current => ++current % PATHS.length);

    useEffect(() => {
        const interval = setInterval(nextImg, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <Carousel src={PATHS[currentImg]} />
}

ReactDOM.render(
  <CarouselContainer />,
    document.getElementById('app')
);