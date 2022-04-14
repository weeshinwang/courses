import React from 'react';
import styled from 'styled-components';
import '@reach/dialog/styles.css';

import GlobalStyles from './GlobalStyles';
import Header from './Header';

export default function App() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>
        <ContentWrapper>(Imagine an entire app here!)</ContentWrapper>
      </Main>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: hsl(0deg, 0%, 5%);
  color: white;
  isolation: isolate;
`;

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: hsla(0deg, 0%, 0%, 0.5);
  backdrop-filter: blur(10px);
`;

const Main = styled.main`
  position: relative;
  padding: 8px;
`;
const ContentWrapper = styled.div`
  background: white;
  color: hsl(0deg, 0%, 10%);
  border-radius: 16px;
  /* HACK: Forcing it to be tall enough to scroll */
  min-height: 1200px;
  padding: 16px;
  box-shadow: 0px 0px 16px black;
`;
