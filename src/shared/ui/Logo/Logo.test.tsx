import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from './Logo';

describe('Logo', () => {
  const defaultProps = {
    href: 'https://example.com',
    src: 'test-logo.png',
    alt: 'Test Logo',
  };

  it('рендерит ссылку с правильным href', () => {
    render(<Logo {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', defaultProps.href);
  });

  it('рендерит изображение с правильными атрибутами', () => {
    render(<Logo {...defaultProps} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', defaultProps.src);
    expect(img).toHaveAttribute('alt', defaultProps.alt);
  });

  it('применяет переданный className', () => {
    const testClassName = 'test-class';
    render(<Logo {...defaultProps} className={testClassName} />);
    const img = screen.getByRole('img');
    expect(img).toHaveClass(testClassName);
  });

  it('добавляет data-testid если передан', () => {
    const testId = 'test-logo';
    render(<Logo {...defaultProps} data-testid={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it('добавляет rel="noopener noreferrer" для безопасности', () => {
    render(<Logo {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
