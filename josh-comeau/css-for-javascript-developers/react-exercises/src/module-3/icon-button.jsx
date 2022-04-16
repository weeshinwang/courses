import React from 'react';
import { Map, Save, ShoppingCart } from 'react-feather';
import styled from 'styled-components';

const IconWrapper = styled.button`
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const Icon = styled.span`
  display: block;
  color: ${(props) => props.isCurrent && 'deeppink'};
`;

function IconButton({ icon, children, isCurrent, ...delegated }) {
  return (
    <IconWrapper {...delegated}>
      <Icon isCurrent={isCurrent}>{icon}</Icon>
      {children}
    </IconWrapper>
  );
}

function IconButtonApp() {
  return (
    <ButtonWrapper>
      <IconButton isCurrent icon={<Map />}>
        Navigation
      </IconButton>
      <IconButton icon={<Save />}>Save Route</IconButton>
      <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
    </ButtonWrapper>
  );
}

export default IconButtonApp;
