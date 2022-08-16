import axios from 'axios';
import { useEffect } from 'react';

import { useCounter } from '../context/CounterContext';

const url = 'https://randomuser.me/api/?results=10';

const Counter = () => {
  const { count, incCount, decCount } = useCounter();

  const getUsers = async () => {
    const response = await axios.get(url);
    const data = response.data.results;
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
