import { createContext, useState } from 'react';

export const CounterContext = createContext();

const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount((prev) => prev + 1);
  };

  const decCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const values = { count, incCount, decCount };

  return (
    <CounterContext.Provider value={values}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContextProvider;
