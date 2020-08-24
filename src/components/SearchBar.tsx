import React, { useState, useRef } from 'react';
import './SearchBar.css';

interface Props {
  handleSearch: (searchValue: string) => void
}

const SearchBar: React.FC<Props> = ({ handleSearch }) => {

  const [searchValue, setSearchValue] = useState<string>('ditto');

  const searchRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if(event.key === 'Enter') {
      search();
    }
  }

  const search = (): void => {
    handleSearch(searchValue);
    setSearchValue('');
  }

  return  <div className="searchBar">
    <input
      type="text"
      className="searchInput"
      ref={searchRef}
      value={searchValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
    <button
      type="submit"
      className="searchSubmit"
      onClick={search}>
        Search
      </button>
  </div>
}
export default SearchBar;