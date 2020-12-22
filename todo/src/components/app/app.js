import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form';
import ItemCart from '../cart';
import ItemEdit from '../item-edit';
import { useDispatch, useSelector } from 'react-redux';
import {incrementItemId} from '../../actions/item';

const App = () => {

  const [todoData, setTodoData] = useState([]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(false);
  const [showItems, setShowItems] = useState(true);
  const [chosenId, setChosenId] = useState(0);
  const [edit, setEdit] = useState(false);

  const itemIdCounter = useSelector(state => state.item.itemIdCounter);
  const dispatch = useDispatch();
  

  const closeModal = () => {
    setShow(false);
    setShowItems(true);
  };

  const showModal = e => {
    setShow(true);
    setShowItems(false);
  };

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

  const createTodoItem = (cart) => {
    dispatch(incrementItemId())
    console.log(itemIdCounter)
    return {
      firstName: cart.firstName,
      lastName: cart.lastName,
      email: cart.email,
      startDate: cart.startDate,
      finishDate: cart.finishDate,
      type: cart.type,
      label: cart.label,
      important: false,
      done: false,
      id: itemIdCounter
    }
  }

  const deleteItem = (id) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx +1);
      const newArray= [...before, ...after]
      setTodoData(newArray);
  };

  const addItem = (cart) => {
      let newArray = [...todoData, createTodoItem(cart)];
      setTodoData(newArray);
      setShow(false);
      setShowItems(true);
  }

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

  const filterItems = (arr, term) => {
    if (term.length === 0){
      return arr;
    }
    return arr.filter((elem) => {
      return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  const changeTerm = (term) => {
    setTerm(term)
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const doneCount = todoData
                    .filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  const visibleData = filterStatus(filterItems(todoData, term), filter);
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
        todos={visibleData} 
        onDeleted={deleteItem} 
        onToggleImportant={onToggleImportant}
        onToggleDone = {onToggleDone}
        onInfo = {showInfo}
        />
        <button
          className="toggle-button"
          id="centered-toggle-button"
          hidden = {show}
          onClick={e => {
            showModal(e);
          }}
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
        <ItemAddForm 
        onAdd ={addItem}
        onClose={closeModal}
        show={show}/>
      </div>
    );
};

export default App;