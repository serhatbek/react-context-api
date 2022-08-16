import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const ComponentA = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h3>ComponentA</h3>
      <p>Count is : {count}</p>
    </div>
  );
};

export default ComponentA;
