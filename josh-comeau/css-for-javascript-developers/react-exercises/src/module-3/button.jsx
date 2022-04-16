import React from 'react';
import styled from 'styled-components';

const Base = styled.button`
  font-size: 21px;
`;

const PrimaryButton = styled(Base)`
  background: blue;
  color: white;
`;

const Button = () => {
  return <PrimaryButton>Button</PrimaryButton>;
};

export default Button;
