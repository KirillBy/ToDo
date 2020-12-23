import React, { useState, useEffect } from 'react';
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

  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [info, setInfo] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [chosenId, setChosenId] = useState(0);
  const [edit, setEdit] = useState(false);


  const dispatch = useDispatch();
  useEffect(() => {
    console.log(itemEditForm)
  })
  
  const showItemAddForm = () => {
    dispatch(changeAddItemForm(true));
    dispatch(changeItemListForm(false));
  }

  const editTask = () => {
    setEdit(true);
    setInfo(false);
    setShowItems(true);
  }

  const hideInfo = () => {
    setInfo(false);
    setShowItems(true);
  }

  const closeEdit = () => {
    setEdit(false);
    setInfo(true);
  }

  const showInfo = (id) => {
    setInfo(true);
    setShowItems(false);
    setChosenId(id);
  }


  const saveEdit = (item) => {
    const idx = todoData.findIndex((el) => el.id === item.id);
    let newArray = [...todoData.slice(0, idx), item, ...todoData.slice(idx +1)];
    setTodoData(newArray);
    setEdit(false);
    setInfo(true);
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const doneCount = todoData
                    .filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  const chosenItem = todoData.find((el) => el.id === chosenId);

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        {showItems && (
         <div> 
        <div className="top-panel">
          <SearchPanel/>
          <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
        </div>
        <TodoList 
        onInfo = {showInfo}
        />
        <button
          className="toggle-button"
          id="centered-toggle-button"
          hidden = {!itemListForm}
          onClick={showItemAddForm}
        > + </button> </div> )}
        <ItemCart 
        onTaskEdit={editTask}/>
        {itemEditForm && 
        <ItemEdit 
        onClose={closeEdit}
        onEdit={saveEdit}/>}
        <ItemAddForm />
      </div>
    );
};

export default App;