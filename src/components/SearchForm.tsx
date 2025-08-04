import React, { useState } from 'react';

interface SearchFormProps {
  initialQuery: string;
  onSearch: (query: string) => void;
};

function SearchForm({ initialQuery, onSearch }: SearchFormProps){
  const [query, setQuery] = useState(initialQuery);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
  };

  const handleButtonClick = () => {
    onSearch(query);
  };

  return (
    <>
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown} // Handle Enter key
        placeholder="What do you want to watch?"
      />
      <button onClick={handleButtonClick} style={{ padding: '8px' }}>
        Search
      </button>
    </div>
    </>
  )
}

export default SearchForm