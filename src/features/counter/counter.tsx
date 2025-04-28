import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div  className="mt-4 flex flex-col items-center">
      <button onClick={increment} className="bg-blue-500 text-white px-4 py-2 rounded">Сount is {count}</button>
    </div>
  );
};
