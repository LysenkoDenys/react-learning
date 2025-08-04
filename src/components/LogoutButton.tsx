import type { ButtonProps } from './LoginButton';

const LogoutButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: 'red', color: 'white' }}
      onClick={onClick}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
