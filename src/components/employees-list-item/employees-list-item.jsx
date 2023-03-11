import classNames from 'classnames';
import { Component } from 'react';
import './employees-list-item.css';

export class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameItem: '',
      salaryItem: '',
    }
  }

  editItem = (e) => {
    e.preventDefault();
    const { nameItem, salaryItem } = this.state;
    if (nameItem !== '' && salaryItem !== '') {
      this.props.editItem(nameItem, salaryItem);
    };
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const {
      name,
      salary,
      increase,
      rise,
      isEdditing,
      onDelete,
      onToggleProp,
    } = this.props;
    const { nameItem, salaryItem } = this.state;

    return (
      <li className={classNames("list-group-item d-flex justify-content-between", {
        increase,
        like: rise
      })}>
        {isEdditing ?
          <form className="edit-form d-flex" onSubmit={this.editItem}>
            <input
              type="text"
              className="form-control new-post-label"
              placeholder={name}
              name="name"
              value={nameItem}
              onChange={this.onValueChange}
            />
            <input
              type="number"
              className="form-control new-post-label"
              placeholder={salary}
              name='salary'
              value={salaryItem}
              onChange={this.onValueChange}
            />

            <button type="submit" className="btn btn-outline-light">
              Добавить
            </button>
          </form> :
          <>
            <span
              className="list-group-item-label"
              onClick={onToggleProp}
              data-toggle="rise"
            >
              {name}
            </span>
            <input
              type="text"
              className="list-group-item-input"
              defaultValue={salary + '$'}
            />
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleProp}
                data-toggle="increase"
              >
                <i className="fas fa-cookie"></i>
              </button>
              <button
                type="button"
                className="btn-pencil btn-sm "
                onClick={onToggleProp}
                data-toggle="isEdditing"
              >
                <i className="fas fa-pencil"></i>
              </button>
              <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
            </div>
          </>}
      </li>
    )
  }
}