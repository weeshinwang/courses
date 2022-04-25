import * as React from 'react';
import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const useMousePosition = (): Position => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('in effect', position.x);

    const updateMouse = (e: MouseEvent) => {
      setPosition({ ...position, x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updateMouse);

    return () => {
      console.log('remove', position.x);
      document.removeEventListener('mousemove', updateMouse);
    };
  });

  return position;
};

export default useMousePosition;
