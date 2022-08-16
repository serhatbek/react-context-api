import './App.css';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import CounterContextProvider from './context/CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <div className='App'>
        <Counter />
        <ComponentA />
      </div>
    </CounterContextProvider>
  );
}

export default App;
