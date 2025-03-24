import { render, screen, fireEvent } from '@testing-library/react';
import ItemActionButton from '../components/ItemActionButton';

import '@testing-library/jest-dom';

describe('ItemActionButton', () => {
  it('renders correctly with default props', () => {
    const testText = 'Test Button';
    const handleClick = jest.fn();
    render(
      <ItemActionButton onClick={handleClick}>{testText}</ItemActionButton>
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ItemActionButton onClick={handleClick}>Click me</ItemActionButton>);

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    const handleClick = jest.fn();
    const testText = 'Test Button Text';
    render(
      <ItemActionButton onClick={handleClick}>{testText}</ItemActionButton>
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
