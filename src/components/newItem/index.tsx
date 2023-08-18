import { useState } from 'react';
import { NewItemProps } from '../../protocols/todos';

export const NewItem = ({ addItem }: NewItemProps) => {
  const [newItem, setNewItem] = useState('');
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newItem === '') return;
    addItem(newItem);
    setNewItem('');
  };
  return (
    <form className="font-mono w-full flex flex-col items-center justify-content text-white" onSubmit={handleSubmit}>
      <label htmlFor="item" className="mt-6 mb-4 text-3xl font-bold">
        Add a new Item
      </label>
      <input
        className="w-2/3 h-12 p-3 bg-gray-700 text-xl text-gray-300 border border-gray-600 rounded-xl ring-1 ring-gray-800 outline outline-offset-1 focus:ring-blue-500 focus:outline-blue-500 focus:border-blue-500 focus:bg-gray-700"
        type="text"
        id="item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="w-1/6 h-14 p-2 bg-gray-800 mt-10 text-xl text-slate-100 rounded-2xl border-2">Add Item</button>
    </form>
  );
};
