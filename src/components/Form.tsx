import { useState, ChangeEvent } from 'react';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <p>
          Our input: <b style={{ color: 'red' }}>{inputValue}</b>
        </p>
      </form>
    </>
  );
};

export default Form;
