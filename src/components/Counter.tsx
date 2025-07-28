import { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="">
        We clicked <b>{count}</b> times
      </div>
      <button
        type="button"
        className="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add One
      </button>
    </>
  );
};

export default Counter;
