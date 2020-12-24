import React from 'react';
import './app-header.css';
import { useSelector } from 'react-redux';

const AppHeader = () => {
  const itemList = useSelector(state => state.item.items)

  const done = itemList
  .filter((el) => el.done).length;
  const toDo = itemList.length - done;

    return (
      <div className="app-header">
        <h1>Todo List</h1>
        <h2>{toDo} more to do, {done} done</h2>
      </div>
    );
  };

  export default AppHeader;
  