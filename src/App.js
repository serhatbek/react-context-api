import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Counter from './components/Counter';
import CounterContextProvider from './context/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <div className='App'>
        <Counter />
        <ComponentA />
        <ComponentB />
      </div>
    </CounterContextProvider>
  );
}

export default App;
