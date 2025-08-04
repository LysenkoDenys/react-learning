interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return <h2>{isLoggedIn ? 'Welcome!' : 'Please log in'}</h2>;
};

export default Greeting;
