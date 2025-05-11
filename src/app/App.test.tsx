import { render, screen } from '@testing-library/react';

import App from './App';

import '@testing-library/jest-dom';

describe('App', () => {
  it('рендерит заголовок', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });

  it('рендерит подсказку для редактирования', () => {
    render(<App />);
    expect(
      screen.getByText((content) => content.includes('Edit')),
    ).toBeInTheDocument();
  });

  it('рендерит подсказку для документации', () => {
    render(<App />);
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i),
    ).toBeInTheDocument();
  });
});
