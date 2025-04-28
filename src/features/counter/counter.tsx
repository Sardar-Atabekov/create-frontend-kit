import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={increment}>count is {count}</button>
    </div>
  );
};
