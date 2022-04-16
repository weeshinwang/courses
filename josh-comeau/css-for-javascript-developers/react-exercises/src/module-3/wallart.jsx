import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import WallArtImg from './wallart.jpg';

const GlobalStyles = createGlobalStyle`
  body {
    background: pink;
  }
`;

const Wrapper = styled.div`
  padding: 8px;
  position: absolute;
  isolation: isolate;
  background: white;
  box-shadow: 0 2.7px 1.9px -2px rgba(0, 0, 0, 0.028),
    0 6.4px 6.1px -2px rgba(0, 0, 0, 0.046),
    0 12px 13.2px -2px rgba(0, 0, 0, 0.061),
    0 21.4px 24.5px -2px rgba(0, 0, 0, 0.073),
    0 -15px 40px -20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Img = styled.img`
  display: block;
  border-radius: 4px;
  width: var(--width);
  height: var(--height);
  margin: 0 auto;
`;

const Caption = styled.p`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: -8px;
  text-align: center;
  padding: 8px;
  background: hsl(0deg 0% 100% / 0.9);
  backdrop-filter: blur(10px);
`;

function WallArt({ src, alt, caption, width }) {
  const aspectRatio = 3 / 2;
  const height = width * aspectRatio;

  return (
    <Wrapper>
      <Img
        src={src}
        alt={alt}
        style={{
          '--width': width + 'px',
          '--height': height + 'px',
        }}
      />
      <Caption>{caption}</Caption>
    </Wrapper>
  );
}

function WallArtApp() {
  return (
    <>
      <WallArt
        src={WallArtImg}
        alt='A hallway with rainbow-coloured lights'
        caption='Photo by Efe Kurnaz'
        width={250}
      />
      <GlobalStyles />
    </>
  );
}

export default WallArtApp;
