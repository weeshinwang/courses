// NOTE: You ABSOLUTELY should not build your own modal.
// Use Reach UI, or similar! This modal is woefully inadequate,
// and has major usability and accessibility problems:
//
// - Focus isn't locked, so the user can tab outside the modal
// - Focus isn't transported to the first active element within
//   the modal
// - Scrolling isn't locked while the modal is open
import React from 'react';
import styled from 'styled-components';

function Modal({ isOpen, onDismiss, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <Wrapper>
      <Backdrop onClick={onDismiss} />
      <ModalContent>
        <CloseButton onClick={onDismiss}>Close</CloseButton>
        <ChildWrapper>{children}</ChildWrapper>
      </ModalContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(0deg, 0%, 0%, 0.5);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 75vw;
  height: 75vh;
  color: black;
  background: white;
  padding: 32px;
  border-radius: 32px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const ChildWrapper = styled.div`
  padding-top: 32px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -32px;
  right: 0;
`;

export default Modal;
