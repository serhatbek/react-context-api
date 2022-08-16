import { useCounter } from '../context/CounterContext';

const ComponentB = () => {
  const { incCount } = useCounter();
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h3>ComponentB</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
};

export default ComponentB;
