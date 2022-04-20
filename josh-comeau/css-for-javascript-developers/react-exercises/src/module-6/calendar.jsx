import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

function Calendar() {
  return (
    <>
      <Wrapper>
        {DAYS.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
`;

const Wrapper = styled.div`
  border: 3px solid;
  display: grid;
  grid-template-columns: repeat(7, 2rem);
  width: max-content;
  padding: 16px;
  gap: 4px;
  background-color: lightpink;
`;

const Day = styled.div`
  border: 2px solid;
  border-radius: 4px;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const CalendarApp = () => <Calendar />;

export default CalendarApp;
