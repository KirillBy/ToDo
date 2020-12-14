import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';
import ItemAddForm from '../item-add-form';
import ItemCart from '../cart';
import ItemEdit from '../item-edit';

export default class App extends Component {

  maxId = 100;
  state = {
    todoData: [], 
    term: "",
    filter: "all", //active, act, done
    show: false,
    info: false,
    showItems: true,
    chosenId: 0,
    edit: false
  };

  showModal = e => {
    this.setState({
      show: true,
      showItems: false
    });
  };

  editTask = () => {
    this.setState({
      edit: true,
      info: false,
      showItems: false
    })
  }

  hideInfo = () => {
    this.setState({
      info: false,
      showItems: true, 
    })
  }

  closeEdit = () => {
    this.setState({
      edit: false,
      info: true
    })
  }

  showInfo = (id) => {
    this.setState({
      info: true,
      showItems: false, 
      chosenId: id
    })
  }

  filter(items, filter) {
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

  createTodoItem(cart) {
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
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx +1);
      const newArray= [...before, ...after]
      return {
        todoData: newArray
      }
    })
  };

  addItem = (cart, show) => {
    this.setState(({todoData}) => {
      const newArray = [...todoData, this.createTodoItem(cart)];
      return {
        todoData: newArray,
        show: false,
        showItems: true
      }
    })
  }

  saveEdit = (item) => {
    console.log(item);
    const idx = this.state.todoData.findIndex((el) => el.id === item.id);
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData.slice(0, idx), item, ...todoData.slice(idx +1)],
        edit: false,
        info: true
      } 
    });
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx +1)];    
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    })
  };

  filterItems = (arr, term) => {
    if (term.length === 0){
      return arr;
    }
    return arr.filter((elem) => {
      return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  changeTerm = (term) => {
    this.setState({term});
  }

  onFilterChange = (filter) => {
    this.setState({filter});
  }

  render() {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData
                      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleData = this.filter(this.filterItems(todoData, term), filter);
    const chosenItem = todoData.find((el) => el.id === this.state.chosenId);
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        {this.state.showItems && (
         <div> 
        <div className="top-panel">
          <SearchPanel onSearch={this.changeTerm}/>
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList 
        todos={visibleData} 
        onDeleted={ this.deleteItem} 
        onToggleImportant={this.onToggleImportant}
        onToggleDone = {this.onToggleDone}
        onInfo = {this.showInfo}
        />
        <button
          class="toggle-button"
          id="centered-toggle-button"
          hidden = {this.state.show}
          onClick={e => {
            this.showModal(e);
          }}
        > + </button> </div> )}
        {this.state.info && 
        <ItemCart 
        item={chosenItem} 
        onBack={this.hideInfo}
        onTaskEdit={this.editTask}/>}
        {this.state.edit && 
        <ItemEdit 
        item={chosenItem}
        onClose={this.closeEdit}
        onEdit={this.saveEdit}/>}
        <ItemAddForm 
        onAdd ={this.addItem}
        onClose={this.showModal}
        show={this.state.show}/>
      </div>
    );
  };
};

