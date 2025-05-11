import React from 'react';

import reactLogo from '@/shared/assets/icons/react.svg';
import viteLogo from '@/shared/assets/icons/vite.svg';
import { Logo } from '@/shared/ui/Logo';
import { Counter } from '@/features/counter/counter';

import styles from './styles/App.module.css';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#242424] px-4 font-sans text-white">
      <div className="mb-8 flex justify-center gap-8">
        <Logo
          href="https://vite.dev"
          src={viteLogo}
          alt="Vite logo"
          className={`h-36 p-[24px] ${styles.logo}`}
          data-testid="vite-logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className={`h-36 p-[24px] ${styles.logo} ${styles.react}`}
          data-testid="react-logo"
        />
      </div>
      <h1
        className={`mb-4 text-[3.2em] leading-tight font-normal ${styles.title}`}
      >
        Vite + React
      </h1>
      <div className="my-6 mb-4 rounded-lg p-[2em]">
        <Counter />
        <p className="mt-4">
          Edit{' '}
          <code className="text-base font-bold text-[#646cff]">
            src/App.tsx
          </code>{' '}
          and save to test HMR
        </p>
      </div>
      <p className={`mt-8 text-gray-400 ${styles.docs}`}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
