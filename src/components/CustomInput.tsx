import { useImperativeHandle, useRef, forwardRef } from 'react';

export type CustomInput = {
  focus: () => void;
  clear: () => void;
  setValue: () => void;
};

const CustomInput = forwardRef<CustomInput>((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      if (inputRef.current) {
        inputRef.current?.focus();
      }
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
    setValue: () => {
      if (inputRef.current) {
        inputRef.current.value = 'some text';
      }
    },
  }));

  return (
    <>
      <input type="text" className="custom-input" ref={inputRef} />
    </>
  );
});

export default CustomInput;
