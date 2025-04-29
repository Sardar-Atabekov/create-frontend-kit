import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        onClick={increment}
        className="rounded-lg border border-transparent cursor-pointer bg-[#1a1a1a] px-[1.2em] py-[0.6em] font-medium text-white transition-colors duration-200 hover:border-[#646cff] focus:outline-none focus-visible:outline-4"
      >
        Count is {count}
      </button>
    </div>
  );
};
