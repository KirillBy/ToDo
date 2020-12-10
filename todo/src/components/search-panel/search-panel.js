import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  
  state = {
    label: ''
  };

  searchText = 'Type here to search';


  onSearchChange = (e) => {
    const label = e.target.value;
    this.setState({label});
    this.props.onSearch(label);
  };
  render() {
    return (
      <input type="text" className="search-input"
            placeholder={this.searchText} 
            value={this.state.label}
            onChange={this.onSearchChange}
      />
    );
  }
  };

