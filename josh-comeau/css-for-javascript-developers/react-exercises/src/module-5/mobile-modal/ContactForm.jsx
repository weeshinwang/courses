import React from 'react';
import styled from 'styled-components';

function ContactForm() {
  return (
    <form action='/' method='POST'>
      <Field id='name' type='text' label='Name' placeholder='Mary Jackson' />
      <Field
        id='email'
        type='email'
        label='Email'
        placeholder='mary.jackson@gmail.com'
      />
      <Field as='textarea' id='message' label='Message' placeholder=' ' />
      <Button>Submit</Button>
    </form>
  );
}

function Field({ as, id, label, ...delegated }) {
  // Textareas ought to be taller, since they're multi-line.
  const inputHeight = as === 'textarea' ? 140 : undefined;

  return (
    <FieldWrapper>
      <FieldLabel htmlFor={id}>{label}:</FieldLabel>
      <Input
        type='text'
        id={id}
        as={as}
        {...delegated}
        style={{ '--input-height': inputHeight + 'px' }}
      />
    </FieldWrapper>
  );
}

const FieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 4px;
`;

const FieldLabel = styled.label`
  flex: 2;
  max-width: 80px;
`;

const Input = styled.input`
  flex: 4;
  padding: 4px;
  font-size: 1rem;
  height: var(--input-height);
  min-width: 80px;
  outline-offset: 4px;
`;

const Button = styled.button`
  display: block;
  font-size: 1rem;
  margin: 32px auto 0;
  padding: 8px 32px;
  outline-offset: 6px;
`;

export default ContactForm;
