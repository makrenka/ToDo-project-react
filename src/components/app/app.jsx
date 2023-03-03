import { Component } from 'react';

import { AppInfo } from '../app-info';
import { SearchPanel } from '../search-panel';
import { AppFilter } from '../app-filter';
import { EmployeesList } from '../employees-list';
import { EmployeesAddForm } from '../employees-add-form';

import './app.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Alex M.", salary: 1000, id: 1 },
        { name: "John S.", salary: 3000, id: 2 },
        { name: "Michael K.", salary: 5000, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id)
    }))
  }

  addItem = (name, salary) => {
    const newItem = { name, salary, id: this.maxId++ };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}
