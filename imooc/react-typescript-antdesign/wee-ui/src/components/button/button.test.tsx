import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './button';

const defaultProps = {
  onClick: jest.fn(),
};

describe('Test Button Component', () => {
  it('should render default button', () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const element = screen.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');

    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'klass',
  };

  it('should render different component based on props', () => {
    render(<Button {...testProps}>Nice</Button>);
    const element = screen.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
    expect(element.disabled).toBeFalsy();
  });
  it('should render link component when btnType equals to link and href is provied', () => {
    render(
      <Button btnType='link' href='https:baidu.com'>
        Nice
      </Button>
    );
    const element = screen.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn-link');
  });

  const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
  };
  it('should render disabled button', () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const element = screen.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('disabled');
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
