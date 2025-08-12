import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';

const MeasuredHeight: React.FC = () => {
  const [heightInUseLayoutEffect, setHeightInUseLayoutEffect] = useState(0);
  const [messageFromUseEffect, setMessageFromUseEffect] = useState('');

  const divRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const measureHeight = divRef.current?.getBoundingClientRect().height;
      setHeightInUseLayoutEffect(measureHeight);
      console.log('useLayoutEffect:', measureHeight); //
    }
  }, []);

  useEffect(() => {
    setMessageFromUseEffect(
      `useEffect: Measured height: ${heightInUseLayoutEffect.toFixed()}`
    );
    console.log('useEffect: component has rendered'); //
  }, [heightInUseLayoutEffect]);

  return (
    <>
      <div
        className="margin-top-10 margin-left-10 margin-right-10"
        ref={divRef}
        style={{ padding: '20px', border: '1px solid red' }}
      >
        Height of the element measuring via useLayoutEffect
      </div>
      <p>
        Measured height of the element: {heightInUseLayoutEffect.toFixed()} px
      </p>
      <p>{messageFromUseEffect} px</p>
    </>
  );
};

export default MeasuredHeight;
