import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './button';

test('OUR FIRST RENDER', () => {
  render(<Button>Nice</Button>);
  const element = screen.queryByText('Nice');
  expect(element).toBeTruthy();
});
