import { Component } from 'react';
import classNames from 'classnames';
import './employees-list-item.css';

export class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rise: false,
      increase: false,
    }
  }

  onRise = () => {
    this.setState((state) => ({
      rise: !state.rise,
    }));
  };

  onIncrease = () => {
    this.setState((state) => ({
      increase: !state.increase,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state;

    return (
      <li className={
        classNames("list-group-item d-flex justify-content-between",
          { increase },
          { like: rise })
      }>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + '$'}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}
