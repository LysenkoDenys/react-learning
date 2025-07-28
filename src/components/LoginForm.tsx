import PasswordInput from './PasswordInput';

const LoginForm = () => {
  return (
    <form>
      <div className="inputs">
        <label className="label">Username</label>
        <input type="text" id="username" placeholder="username" />
        <PasswordInput />
      </div>
      <div className="">
        <button type="button" className="button">
          Enter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
