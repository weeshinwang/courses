import React from 'react';
import styled from 'styled-components/macro';
import ContactForm from './ContactForm';
import Modal from './Modal';

import './styles.css';

function ModalApp() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Header>
        <Title>Mary's Homepage</Title>
        <nav>
          <NavList>
            <li>
              <NavLink href='/'>Home</NavLink>
            </li>
            <li>
              <NavLink href='/'>Blog</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <ContactButton onClick={() => setShowModal(true)}>
          Open contact form
        </ContactButton>
      </Main>

      <Modal
        title='Contact Us'
        isOpen={showModal}
        handleDismiss={() => setShowModal(false)}
      >
        <ContactForm />
      </Modal>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const NavList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: hsl(265deg 90% 40%);
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0px 16px;
  outline-offset: 4px;
`;

const Main = styled.main`
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactButton = styled.button`
  font-size: 1.125rem;
  padding: 16px 48px;
  outline-offset: 8px;
`;

export default ModalApp;
