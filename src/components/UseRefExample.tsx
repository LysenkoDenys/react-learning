import React, { useRef, useState } from 'react';

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = event.target.value;
      console.log(inputRef.current.value);
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const triggerSetState = () => {
    if (inputRef.current) {
      setState(inputRef.current?.value);
    }
  };

  return (
    <>
      <input
        className="inputs"
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
      />
      <button className="button" onClick={focusInput}>
        Focus Input
      </button>
      <button className="button" onClick={clearInput}>
        Clear Input
      </button>
      <button className="button" onClick={triggerSetState}>
        Trigger set state
      </button>
      <p>Current input value: {inputRef.current?.value}</p>
    </>
  );
};

export default UseRefExample;
