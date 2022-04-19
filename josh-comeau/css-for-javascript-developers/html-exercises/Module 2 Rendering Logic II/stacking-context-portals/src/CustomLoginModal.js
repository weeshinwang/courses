import React from 'react';
import styled from 'styled-components';

import Modal from './Modal';

function LoginModal({ isOpen, onDismiss }) {
  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss}>
      <form>
        <p>Welcome back, friend! Enter your details to log in.</p>

        <InputWithLabel>
          <label>
            Email:
            <br />
            <input type='email' />
          </label>
        </InputWithLabel>
        <InputWithLabel>
          <label>
            Password:
            <br />
            <input type='password' />
          </label>
        </InputWithLabel>
        <button type='submit'>Log in</button>
      </form>
    </Modal>
  );
}

const InputWithLabel = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default LoginModal;
