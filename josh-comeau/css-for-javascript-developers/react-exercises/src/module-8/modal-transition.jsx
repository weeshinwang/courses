import React from 'react';
import styled from 'styled-components/macro';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
      <Modal
        title='Example Modal'
        isOpen={isOpen}
        handleDismiss={() => setIsOpen(false)}
      >
        Hello World
      </Modal>
    </>
  );
}

/*
  NOTE: This is NOT a very robust modal implementation.
  Please use something like Reach UI! This is a quick and
  dirty implementation to teach the animation concept.
*/
const Modal = ({ title, isOpen, handleDismiss }) => {
  const ENTER_DURATION = '500ms';
  const EXIT_DURATION = '250ms';
  const ENTER_EASE = 'ease-out';
  const EXIT_EASE = 'ease-in';

  const transitionDuration = isOpen ? ENTER_DURATION : EXIT_DURATION;
  const ease = isOpen ? ENTER_EASE : EXIT_EASE;

  // Close modal on "Escape"
  React.useEffect(() => {
    function handleKeydown(ev) {
      if (ev.key === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <ModalWrapper
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
        // Set CSS variables that change when 'isOpen' changes
        '--transition-duration': transitionDuration,
        '--ease': ease,
      }}
    >
      <ModalBackdrop
        onClick={handleDismiss}
        style={{
          opacity: isOpen ? 0.75 : 0,
        }}
      />
      <ModalContentWrapper
        style={{
          transform: isOpen ? 'translateY(0%)' : 'translateY(100%)',
        }}
      >
        <ModalContent>
          <CloseButton onClick={handleDismiss}>
            {/*
              NOTE: Normally there'd be an icon
              and visually-hidden text here.
            */}
            Close
          </CloseButton>
          <Title>{title}</Title>
          <p>This is a modal!</p>
        </ModalContent>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*
    Don't allow the slid-down modal to
    introduce a scrollbar.
  */
  overflow: hidden;
`;

const ModalBackdrop = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  /* Use those CSS variables in the 'transition' declaration */
  transition: opacity var(--transition-duration) var(--ease);
`;

const ModalContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Use those CSS variables in the 'transition' declaration */
  transition: transform var(--transition-duration) var(--ease);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  height: 60%;
  margin: auto;
  background: white;
  padding: 32px;
  border-radius: 8px;
  pointer-events: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 32px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  display: grid;
  place-content: center;
  width: 64px;
  height: 64px;
  background: transparent;
  border: none;
  color: white;
`;

const ModalApp = () => {
  return <App />;
};

export default ModalApp;
