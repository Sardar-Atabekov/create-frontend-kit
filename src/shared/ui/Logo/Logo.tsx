import React from 'react';

type LogoProps = {
  href: string;
  src: string;
  alt: string;
  className?: string;
  'data-testid'?: string;
};

export const Logo: React.FC<LogoProps> = ({
  href,
  src,
  alt,
  className,
  'data-testid': dataTestId,
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} className={className} alt={alt} data-testid={dataTestId} />
  </a>
);
