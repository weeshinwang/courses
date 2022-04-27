import React, { ReactNode } from 'react';

export enum ButtonSize {
  large = 'large',
  small = 'small',
}

export enum ButtonType {
  primary = 'primay',
  info = 'info',
  success = 'success',
  alert = 'alert',
  error = 'error',
}

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType: ButtonType;
  children: ReactNode;
}

function Button(props: ButtonProps): JSX.Element {
  const { btnType, disabled, size, children } = props;
  return <div>HELLO</div>;
}
