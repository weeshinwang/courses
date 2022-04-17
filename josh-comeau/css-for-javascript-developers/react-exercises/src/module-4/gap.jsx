import React from 'react';
import styled from 'styled-components/macro';
function Header() {
  return (
    <Wrapper>
      <Logo>My Thing</Logo>
      <AuthButton>Log in</AuthButton>
      <Spacer size={8} />
      <AuthButton>Sign up</AuthButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  /* gap: 8px; */
`;
const Spacer = styled.div`
  min-width: ${(props) => props.size}px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  margin-right: auto;
`;

const AuthButton = styled.button``;

const HeaderApp = () => {
  return <Header />;
};

export default HeaderApp;
