import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({filter, onFilterChange}) => {

  const buttonsList = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

    const buttons = buttonsList.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info': 'btn-outline-secondary'
      return (      
      <div className="btn-group">
        <button type="button"
                className={`btn ${clazz}`}
                key = {name}
                onClick= {() => onFilterChange(name)} >
                 {label}
        </button>
       </div>       
    )
  });
    return (
      <div className="btn-group">
        {buttons}
      </div>

    );
  }


export default ItemStatusFilter;