import React, {useState } from 'react';
import './search-panel.css';

const SearchPanel = ({onSearch}) => {
  
  const [label, setLabel] = useState('');

  const searchText = 'Type here to search';

  const onSearchChange = (e) => {
    const label = e.target.value;
    setLabel(label);
    onSearch(label);
  };
  
    return (
      <input type="text" className="search-input"
            placeholder={searchText} 
            value={label}
            onChange={onSearchChange}
      />
    );
  }
  
  export default SearchPanel;
