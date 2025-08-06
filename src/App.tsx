import { useState } from 'react';
import './App.css';
// import UserLoginControl from './components/UserLoginControl';
import CurrencyContext from './components/CurrencyContext';
import CurrenciesContainer from './components/CurrenciesContainer';
import CurrencyDisplay from './components/CurrencyDisplay';
// import Counter from './components/Counter';
// import Form from './components/Form';
// import Greetings from './components/Greetings';
// import MyComponent from './components/MyComponent';
// import ThemeToggle from './components/ThemeToggle';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import ParentComponent from './components/ParentComponent';
// import UserProfile from './components/UserProfile';

function App() {
  const [price, setPrice] = useState(0);
  return (
    <>
      {/* <Header />
      <LoginForm />
      <h1>Props from Zero to Hero</h1>
      <ParentComponent />
      <Form />
      <Counter />
      <ThemeToggle />
      <Greetings name="John" surname="Lennon" />
      <Greetings name="James" />
      <MyComponent />
      <UserProfile />
      <UserLoginControl /> */}

      <CurrencyContext.Provider value={price}>
        <h2>Currency converter</h2>
        <h3>Enter price in USD</h3>
        <input
          className="input-text"
          type="number"
          value={price}
          onChange={(event) => setPrice(parseFloat(event.target.value))}
        />
        <CurrenciesContainer />
        <div style={{ border: '1px solid red', padding: 10 }}>
          <CurrencyDisplay currency="Tugrics" rate={2} />
        </div>
      </CurrencyContext.Provider>
    </>
  );
}

export default App;
