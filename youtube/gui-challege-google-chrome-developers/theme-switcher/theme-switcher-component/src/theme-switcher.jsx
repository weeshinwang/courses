import styled, { createGlobalStyle } from 'styled-components/macro';
import React, { useState } from 'react';

function ThemeSwitcher() {
  const storageKey = 'theme-preference';

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  const [color, setColor] = useState(getColorPreference);

  const handleClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setColor(theme.value);
    setPreference();
  };

  const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value);
  };

  const theme = {
    value: getColorPreference(),
  };

  reflectPreference();

  return (
    <>
      <GlobalStyle />
      <Button onClick={handleClick} aria-label={color}>
        <Svg aria-hidden='true' width='24' height='24' viewBox='0 0 24 24'>
          <mask className='moon' id='moon-mask'>
            <rect x='0' y='0' width='100%' height='100%' fill='white' />
            <circle cx='24' cy='10' r='6' fill='black' />
          </mask>
          <circle
            className='sun'
            cx='12'
            cy='12'
            r='6'
            mask='url(#moon-mask)'
            fill='currentColor'
          />
          <g className='sun-beams' stroke='currentColor'>
            <line x1='12' y1='1' x2='12' y2='3' />
            <line x1='12' y1='21' x2='12' y2='23' />
            <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
            <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
            <line x1='1' y1='12' x2='3' y2='12' />
            <line x1='21' y1='12' x2='23' y2='12' />
            <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
            <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
          </g>
        </Svg>
      </Button>
    </>
  );
}

const Button = styled.button`
  --size: 2rem;
  --icon-fill: hsl(210 10% 30%);
  --icon-fill-hover: hsl(210 10% 15%);

  background: none;
  border: none;
  padding: 0;

  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1;
  border-radius: 50%;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  outline-offset: 5px;

  & > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  [data-theme='dark'] & {
    --icon-fill: hsl(210 10% 70%);
    --icon-fill-hover: hsl(210 15% 90%);
  }

  @media (hover: none) {
    --size: 48px;
  }
`;

const Svg = styled.svg`
  --ease-1: cubic-bezier(0.25, 0, 0.5, 1);
  --ease-2: cubic-bezier(0.25, 0, 0.4, 1);
  --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
  --ease-4: cubic-bezier(0.25, 0, 0.2, 1);
  --ease-5: cubic-bezier(0.25, 0, 0.1, 1);
  --ease-in-1: cubic-bezier(0.25, 0, 1, 1);
  --ease-in-2: cubic-bezier(0.5, 0, 1, 1);
  --ease-in-3: cubic-bezier(0.7, 0, 1, 1);
  --ease-in-4: cubic-bezier(0.9, 0, 1, 1);
  --ease-in-5: cubic-bezier(1, 0, 1, 1);
  --ease-out-1: cubic-bezier(0, 0, 0.75, 1);
  --ease-out-2: cubic-bezier(0, 0, 0.5, 1);
  --ease-out-3: cubic-bezier(0, 0, 0.3, 1);
  --ease-out-4: cubic-bezier(0, 0, 0.1, 1);
  --ease-out-5: cubic-bezier(0, 0, 0, 1);
  --ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
  --ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
  --ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
  --ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
  --ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
  --ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
  --ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
  --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
  --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
  --ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
  --ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
  --ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
  --ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
  --ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
  --ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
  --ease-step-1: steps(2);
  --ease-step-2: steps(3);
  --ease-step-3: steps(4);
  --ease-step-4: steps(7);
  --ease-step-5: steps(10);

  & > :is(.moon, .sun, .sun-beams) {
    transform-origin: center center;
  }

  & > :is(.moon, .sun) {
    fill: var(--icon-fill);

    ${Button}:is(:hover, :focus-visible) > & {
      fill: var(--icon-fill-hover);
    }
  }

  & > .sun-beams {
    stroke: var(--icon-fill);
    stroke-width: 2px;

    ${Button}:is(:hover, :focus-visible) & {
      stroke: var(--icon-fill-hover);
    }
  }

  [data-theme='dark'] & {
    & > .sun {
      transform: scale(1.75);
    }

    & > .sun-beams {
      opacity: 0;
    }

    & > .moon > circle {
      transform: translateX(-7px);

      @supports (cx: 1) {
        transform: translateX(0);
        cx: 17;
      }
    }
  }

  & > .sun {
    transition: transform 0.5s var(--ease-elastic-3);
  }

  & > .sun-beams {
    transition: transform 0.5s var(--ease-elastic-4), opacity 0.5s var(--ease-3);
  }

  & .moon > circle {
    transition: transform 0.25s var(--ease-out-5);

    @supports (cx: 1) {
      transition: cx 0.25s var(--ease-out-5);
    }
  }

  [data-theme='dark'] & {
    & > .sun {
      transform: scale(1.75);
      transition-timing-function: var(--ease-3);
      transition-duration: 0.25s;
    }

    & > .sun-beams {
      transform: rotateZ(-25deg);
      transition-duration: 0.15s;
    }

    & > .moon > circle {
      transition-delay: 0.25s;
      transition-duration: 0.5s;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    block-size: 100%;
    color-scheme: light;

    &[data-theme="dark"] {
      color-scheme: dark;

      @supports not (color-scheme: dark) {
        background: #111;
      }
    }
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;

    display: grid;
    place-content: center;
  }

  @keyframes octocat-wave{
    0%,100% {
      transform: rotate(0)
    }
    20%,60% {
      transform: rotate(-25deg)
    }
    40%,80% {
      transform: rotate(10deg)
    }
  }
`;

export default ThemeSwitcher;
