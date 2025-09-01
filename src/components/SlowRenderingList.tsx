import { useDeferredValue, useMemo, useState } from 'react';

const SlowRenderingList = () => {
  const [inputValue, setInputValue] = useState('');

  const items = Array.from({ length: 10000 }, (_, i) => i);

  const filteredItems = useMemo(() => {
    const start = performance.now();

    while (performance.now() - start < 50) {
      // simulate to slow operation
    }
    return items.filter((number) => number.toString().includes(inputValue));
  }, [items, inputValue]);

  const differedFilteredItems = useDeferredValue(filteredItems);

  return (
    <>
      <p>Input value:</p>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {differedFilteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SlowRenderingList;
