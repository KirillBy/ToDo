import React, { Component } from 'react';

import './item-edit.css';

export default class ItemEdit extends Component {
    
  state = {
    id: this.props.item.id,
    label: this.props.item.label,
    firstName: this.props.item.firstName,
    lastName: this.props.item.lastName,
    email: this.props.item.email,
    startDate: this.props.item.startDate,
    finishDate: this.props.item.finishDate,
    type: this.props.item.type
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  onLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  onFinishDateChange = (e) => {
    this.setState({
      finishDate: e.target.value
    })
  }

  onTypeChange = (e) => {
    this.setState ({
      type: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    let newCart = {
      id: this.state.id,  
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      startDate: this.state.startDate,
      finishDate: this.state.finishDate,
      type: this.state.type,
      label: this.state.label
    }
    this.props.onEdit(newCart);
  };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    return (
      <React.Fragment>
        <form className="item-add-form"
          onSubmit={this.onSubmit}>
          <input type="text"
            className="form-control"
            onChange={this.onFirstNameChange}
            placeholder="First name"
            value={this.state.firstName} />
          <input type="text"
            className="form-control"
            onChange={this.onLastNameChange}
            placeholder="Last name"
            value={this.state.lastName} />
          <input type="email"
            className="form-control"
            onChange={this.onEmailChange}
            placeholder="Email"
            value={this.state.email} />
          <div className = "date-group">
            <span className="form-span">from </span>
            <input type="date"
              className="form-control  form-date"
              onChange={this.onStartDateChange}
              value={this.state.startDate} />
            <span className="form-span">to </span>
            <input type="date"
              className="form-control  form-date"
              onChange={this.onFinishDateChange}
              value={this.state.finishDate} />
          </div>
          <div select-group>
          <span className="form-span">Type </span>
            <select className="todo-select" onChange={this.onTypeChange} defaultValue={this.state.type}>
              <option value='work'>Work</option>
              <option value='study'>Study</option>
              <option value='hobby'>Hobby</option>
              <option value='sport'>Sport</option>
            </select>
          </div>
          <input type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="What needs to be done"
            value={this.state.label} />
          <button
            className=" btn item-add-btn btn-outline-success">
            Edit
        </button>
        </form>
        <button class="toggle-button" onClick={this.onClose}>
          close
        </button>
      </React.Fragment>

    );
  }
}