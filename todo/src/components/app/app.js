import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form';
import ItemCart from '../cart';
import ItemEdit from '../item-edit';
import {changeAddItemForm} from '../../actions/components';
import { useDispatch, useSelector} from 'react-redux';

const App = () => {

  const [todoData, setTodoData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [chosenId, setChosenId] = useState(0);
  const [edit, setEdit] = useState(false);

  const itemAddForm = useSelector(state => state.components.ItemAddForm);
  const dispatch = useDispatch();

  const closeModal = () => {
    setShow(false);
    setShowItems(true);
  };

  const showModal = e => {
    setShow(true);
    setShowItems(false);
  };

  const showItemAddForm = () => {
    dispatch(changeAddItemForm(true))
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


  const deleteItem = (id) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx +1);
      const newArray= [...before, ...after]
      setTodoData(newArray);
  };

  const saveEdit = (item) => {
    const idx = todoData.findIndex((el) => el.id === item.id);
    let newArray = [...todoData.slice(0, idx), item, ...todoData.slice(idx +1)];
    setTodoData(newArray);
    setEdit(false);
    setInfo(true);
  }

  const toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx +1)];    
  }

  const onToggleImportant = (id) => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  };

  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  };

 
  const changeTerm = (term) => {
    setTerm(term)
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
          <SearchPanel onSearch={changeTerm}/>
          <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
        </div>
        <TodoList 
        onDeleted={deleteItem} 
        onToggleImportant={onToggleImportant}
        onToggleDone = {onToggleDone}
        onInfo = {showInfo}
        />
        <button
          className="toggle-button"
          id="centered-toggle-button"
          hidden = {itemAddForm}
          onClick={showItemAddForm}
        > + </button> </div> )}
        {info && 
        <ItemCart 
        item={chosenItem} 
        onBack={hideInfo}
        onTaskEdit={editTask}/>}
        {edit && 
        <ItemEdit 
        item={chosenItem}
        onClose={closeEdit}
        onEdit={saveEdit}/>}
        <ItemAddForm />
      </div>
    );
};

export default App;