import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.label);
    this.setState({
      label: ''
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