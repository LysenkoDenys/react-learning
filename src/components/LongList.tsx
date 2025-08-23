import React, { useState, useTransition } from 'react';

type DataArray = {
  id: number;
  name: string;
}[];

const LongList = () => {
  const [filterInputValue, setFilterInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 25000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  const filterItems = (dataArray: DataArray, filterBy: string) =>
    dataArray.filter((item) =>
      item.name.includes(filterBy.toLocaleLowerCase())
    );

  const filteredItems = filterItems(items, filterInputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setFilterInputValue(event.target.value));
    // setFilterInputValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={filterInputValue}
        onChange={handleInputChange}
      />
      {isPending ? <p>Updating...</p> : null}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default LongList;
