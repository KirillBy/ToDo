import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form';
import ItemCart from '../cart';
import ItemEdit from '../item-edit';
import {changeAddItemForm, changeItemListForm} from '../../actions/components';
import { useDispatch, useSelector} from 'react-redux';

const App = () => {
  const itemListForm = useSelector(state => state.components.itemListForm);
  const itemEditForm = useSelector(state => state.components.itemEditForm);

  const dispatch = useDispatch();

  
  const showItemAddForm = () => {
    dispatch(changeAddItemForm(true));
    dispatch(changeItemListForm(false));
  }

    return (
      <div className="todo-app">
        <AppHeader />
        {itemListForm && (
         <div> 
        <div className="top-panel">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        <TodoList />
        <button
          className="toggle-button"
          id="centered-toggle-button"
          hidden = {!itemListForm}
          onClick={showItemAddForm}
        > + </button> </div> )}
        <ItemCart />
        {itemEditForm && 
        <ItemEdit />}
        <ItemAddForm />
      </div>
    );
};

export default App;