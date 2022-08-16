import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((prev) => prev + 1);
  };

  const decCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <br />
      <button onClick={incCount}>Increase Count</button>
      <button onClick={decCount}>Decrease Count</button>
    </div>
  );
};

export default Counter;
