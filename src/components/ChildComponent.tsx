import React from 'react';

interface ChildComponentProps {
  name: string;
  age: number;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ name, age }) => {
  return (
    <>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </>
  );
};

export default ChildComponent;
