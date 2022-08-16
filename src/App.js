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
        <div
          className='App'
          style={{ backgroundColor: '#181818', height: '100vh' }}
        >
          <Counter />
          <ComponentA />
          <ComponentB />
        </div>
      </UsersContextProvider>
    </CounterContextProvider>
  );
}

export default App;
