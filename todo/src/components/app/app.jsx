import React from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import './app.css';
import ItemAddForm from '../item-add-form';
import ItemCart from '../cart';
import ItemEdit from '../item-edit';

import { useSelector} from 'react-redux';
import { Route } from 'react-router-dom';

const App = () => {
  const itemEditForm = useSelector(state => state.components.itemEditForm);

    return (
      <div className="todo-app">
        <AppHeader />
        <TodoList />
        <ItemCart />
        {itemEditForm && 
        <ItemEdit />}
        <ItemAddForm />
      </div>
    );
};

export default App;