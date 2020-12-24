import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'
import { useSelector } from 'react-redux';

const TodoList = () => {

  const items = useSelector(state => state.item.items);
  const filter = useSelector(state => state.item.filter);
  const term = useSelector(state => state.item.term);
  const visible = useSelector(state => state.components.itemListForm);

  const filterItems = (arr, term) => {
    if (term.length === 0){
      return arr;
    }
    return arr.filter((elem) => {
      return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  const filterStatus = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  const visibleItems = filterStatus(filterItems(items, term), filter);

  const elments = visibleItems.map((item) =>  {
      if (!visible) {
        return null;
      }
        return ( 
        <li key={item.id} className="ul">
          <TodoListItem item = {item} />
        </li>
        );
    });

  return (     
    <ul className="list-group todo-list">
        {elments}
    </ul> 
  );
  };

  export default TodoList;