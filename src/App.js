import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import Counter from './components/Counter';
import CounterContextProvider from './context/CounterContext';
import UsersContextProvider from './context/UserContext';

function App() {
  return (
    <CounterContextProvider>
      <UsersContextProvider>
        <div className='App'>
          <Counter />
          <ComponentA />
          <ComponentB />
        </div>
      </UsersContextProvider>
    </CounterContextProvider>
  );
}

export default App;
