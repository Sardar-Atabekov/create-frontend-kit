import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter } from './counter';

describe('Counter', () => {
  it('отображает начальное значение счетчика', () => {
    render(<Counter />);
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('увеличивает счетчик при клике', () => {
    render(<Counter />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/count is 2/i)).toBeInTheDocument();
  });
});
