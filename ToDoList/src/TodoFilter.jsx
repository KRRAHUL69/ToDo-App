/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoFilter = ({handleSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={term}
      onChange={handleChange}
      placeholder="Search Todos"
    />
  );
};

export default TodoFilter;