import React from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css'
import { useSelector } from 'react-redux';

const TodoList = ({onDeleted, onToggleImportant, onToggleDone, onInfo}) => {

  const items = useSelector(state => state.item.items);
  const filter = useSelector(state => state.item.filter);
  const term = useSelector(state => state.item.term);

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
      const {id, ...itemProps } = item;
        return ( 
        <li key={id} className="ul">
          <TodoListItem {...itemProps} 
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          onInfo={() => onInfo(id)}/>
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