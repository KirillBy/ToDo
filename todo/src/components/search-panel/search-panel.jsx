import React, {useState } from 'react';
import './search-panel.css';
import {useDispatch} from 'react-redux'
import {changeTerm} from './../../actions/item'

const SearchPanel = () => {
  const dispatch = useDispatch();
  
  const [label, setLabel] = useState('');

  const searchText = 'Type here to search';

  const onSearchChange = (e) => {
    const label = e.target.value;
    setLabel(label);
    dispatch(changeTerm(label));
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
