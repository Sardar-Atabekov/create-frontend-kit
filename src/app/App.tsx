import React from 'react';
import { Logo } from '@/shared/ui/Logo';
import { Counter } from '@/features/counter/counter';
import viteLogo from '@/shared/assets/icons/vite.svg';
import reactLogo from '@/shared/assets/icons/react.svg';
import styles from './styles/App.module.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex justify-center gap-8 mb-8">
        <Logo
          href="https://vite.dev"
          src={viteLogo}
          alt="Vite logo"
          className={styles.logo}
          data-testid="vite-logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className={`${styles.logo} react`}
          data-testid="react-logo"
        />
      </div>
      <h1 className={styles.title}>Vite + React</h1>
      <div className={styles.card}>
        <Counter />
        <p>
          Edit <code className={styles.code}>src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className={styles.docs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
