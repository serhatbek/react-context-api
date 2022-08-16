import { createContext, useState, useContext } from 'react';

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);

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

/**
 * * [createContext] kullanarak istediğimiz isimde bir context tanımlıyoruz.
 * * Daha sonra bu contexti kullanabilmek için aynı isimde bir {isim}Provider fonksiyonu kuruyoruz.
 * * [useState] hook u kullanarak bu bu providerın dışa taşımasını istediğimiz verileri tanımlıyoruz.
 * * Provider ı return etmeden önce value olarak verilerini tekrar tanımlıyoruz.
 * * return içerisinde Provider'a value ve props ataması yapıyoruz.
 * ? Kullanabilmek için oluşturduğumuz contexti, ve providerını export ediyoruz.
 * !
 * >
 */
