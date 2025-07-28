import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <>
      {/* <Header />
      <LoginForm />
      <h1>Props from Zero to Hero</h1>
      <ParentComponent /> */}
      <Form />
      <Counter />
    </>
  );
}

export default App;
