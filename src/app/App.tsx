import React from 'react';
import { Logo } from '@/shared/ui/Logo';
import { Counter } from '@/features/counter/counter';
import viteLogo from '@/shared/assets/icons/vite.svg';
import reactLogo from '@/shared/assets/icons/react.svg';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#242424] text-white px-4 font-sans">
      <div className="flex justify-center gap-12 mb-12">
        <Logo
          href="https://vite.dev"
          src={viteLogo}
          alt="Vite logo"
          className="h-32 p-8 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          data-testid="vite-logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className="h-32 p-8 transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow"
          data-testid="react-logo"
        />
      </div>
      <h1 className="text-6xl font-extrabold mb-6">Vite + React</h1>
      <div className="p-10 bg-white/10 rounded-2xl my-10 flex flex-col items-center min-w-[340px]">
        <Counter />
        <p className="mt-4 text-lg">
          Edit <code className="font-bold text-indigo-400 text-2xl">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-lg mt-8">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default App;
