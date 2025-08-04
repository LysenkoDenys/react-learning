export interface ButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: 'blue', color: 'white' }}
      onClick={onClick}
    >
      Login
    </button>
  );
};

export default LoginButton;
