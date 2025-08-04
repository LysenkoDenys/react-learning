import { useState } from 'react';
import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const UserLoginControl: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={() => setIsLoggedIn(false)} />
      ) : (
        <LoginButton onClick={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default UserLoginControl;
