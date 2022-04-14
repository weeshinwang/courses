import React from 'react';
import styled from 'styled-components';

// Flip which import is used, to switch between our custom modal
// (with the buggy behavior) and the ReachUI modal (which solves it).
// import LoginModal from './CustomLoginModal';
import LoginModal from './ReachLoginModal';

function Header() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Wrapper>
      <h1>Cool App</h1>
      <Button onClick={() => setShowModal(true)}>Log In</Button>

      <LoginModal isOpen={showModal} onDismiss={() => setShowModal(false)} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  /* We'll learn all about flexbox soon! */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 0 32px;
`;

const Button = styled.button`
  padding: 8px;
`;

export default Header;
