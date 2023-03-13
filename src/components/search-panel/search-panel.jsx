import { Component } from 'react';

import './search-panel.css';

export class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  onUpdateData = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onUpdateData(value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        onChange={this.onUpdateData}
        value={this.state.value}
      />
    )
  }
}