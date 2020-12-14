import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: '',
    firstName: '',
    lastName: '',
    email: '',
    startDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    finishDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
    type: 'work'
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      startDate: this.state.startDate,
      finishDate: this.state.finishDate,
      type: this.state.type,
      label: this.state.label
    }
    this.props.onAdd(newCart);
    this.setState({
      label: '',
      firstName: '',
      lastName: '',
      email: '',
      startDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      finishDate: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    });
  };
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
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
            <select className="todo-select" onChange={this.onTypeChange}>
              <option value="" selected disabled hidden>Choose type</option>
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
            Add
        </button>
        </form>
        <button class="toggle-button" onClick={this.onClose}>
          close
        </button>
      </React.Fragment>

    );
  }
}