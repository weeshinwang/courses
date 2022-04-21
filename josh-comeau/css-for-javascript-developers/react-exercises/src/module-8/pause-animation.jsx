import React from 'react';
import styled, {
  createGlobalStyle,
  keyframes,
  css,
} from 'styled-components/macro';

function App() {
  const [animated, setAnimated] = React.useState(false);

  return (
    <>
      <Wrapper>
        <Box animated={animated} />
        <button
          onClick={() => {
            setAnimated(!animated);
          }}
        >
          {animated ? 'Pause animation' : 'Start animation'}
        </button>
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

const jump = keyframes`
0% {
  transform: translateY(0%);
}
30% {
  transform: translateY(-50%);
}
50% {
  transform: translateY(0%);
}`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100vh;
`;

const Box = styled.div`
  width: 80px;
  height: 80px;
  background: slateblue;
  animation: ${jump} 1000ms infinite;
  animation-play-state: ${(props) => (props.animated ? 'running' : 'paused')};
`;

const AniPauseApp = () => {
  return <App />;
};

export default AniPauseApp;
