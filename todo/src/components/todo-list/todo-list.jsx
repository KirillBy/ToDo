import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'
import { useSelector, useDispatch } from 'react-redux';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel';
import { changeAddItemForm, changeItemListForm } from '../../actions/components';

const TodoList = () => {

  const items = useSelector(state => state.item.items);
  const filter = useSelector(state => state.item.filter);
  const term = useSelector(state => state.item.term);
  const visible = useSelector(state => state.components.itemListForm);
  const dispatch = useDispatch();

  const filterItems = (arr, term) => {
    if (term.length === 0) {
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

  const showItemAddForm = () => {
    dispatch(changeAddItemForm(true));
    dispatch(changeItemListForm(false));
  }

  const visibleItems = filterStatus(filterItems(items, term), filter);

  const elments = visibleItems.map((item) => {
    return (

      <li key={item.id} className="ul">
        <TodoListItem item={item} />
      </li>

    );
  });
  if (!visible) {
    return null;
  }
  return (
    <div>
      <div className="top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ul className="list-group todo-list">
        {elments}
      </ul>
      <button
        className="toggle-button"
        id="centered-toggle-button"
        onClick={showItemAddForm}
      > + </button>
    </div>
  );
};

export default TodoList;