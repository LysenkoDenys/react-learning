import './App.css';
// import Counter from './components/Counter';
// import Form from './components/Form';
import Greetings from './components/Greetings';
import ThemeToggle from './components/ThemeToggle';
// import Header from './components/Header';
// import LoginForm from './components/LoginForm';
// import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <>
      {/* <Header />
      <LoginForm />
      <h1>Props from Zero to Hero</h1>
      <ParentComponent />
      <Form />
      <Counter /> */}
      <ThemeToggle />
      <Greetings name="John" surname="Lennon" />
      <Greetings name="James" />
    </>
  );
}

export default App;
