import React from 'react';
import './item-status-filter.css';
import { useDispatch, useSelector } from "react-redux";
import {changeFilter} from './../../actions/item'

const ItemStatusFilter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.item.filter);
  
  const buttonsList = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ];

  const onFilterChange = (name) => {
    dispatch(changeFilter(name));
  }

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