import { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const [nameProp, setNameProp] = useState<string>('');
  const [ageProp, setAgeProp] = useState<number>(0);
  const [inputName, setInputName] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const updateName = () => {
    setNameProp(inputName);
  };

  return (
    <>
      <h2>Parent component</h2>
      <input
        type="text"
        className="input-text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="name"
      />
      <div className="">
        <button className="button" onClick={updateName}>
          Add a name
        </button>
        <button className="button" onClick={() => setAgeProp(ageProp + 1)}>
          Add an age
        </button>
      </div>
      <ChildComponent name={nameProp} age={ageProp} />
    </>
  );
};

export default ParentComponent;
