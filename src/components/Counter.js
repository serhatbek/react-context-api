import { useCounter } from '../context/CounterContext';

const Counter = () => {
  const { count, incCount, decCount } = useCounter();

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
