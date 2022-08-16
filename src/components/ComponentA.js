import { useCounter } from '../context/CounterContext';

const ComponentA = () => {
  const { count } = useCounter();
  return (
    <div style={{ backgroundColor: 'green' }}>
      <h3>ComponentA</h3>
      <p>Count is : {count}</p>
    </div>
  );
};

export default ComponentA;
