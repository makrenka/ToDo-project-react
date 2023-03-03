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
        { name: "Alex M.", salary: 1000, id: 1, rise: false, increase: false, },
        { name: "John S.", salary: 3000, id: 2, rise: false, increase: false, },
        { name: "Michael K.", salary: 5000, id: 3, rise: false, increase: false, },
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

  // onToggleIncrease = (id) => {
  // длинный метод
  // this.setState(({ data }) => {
  //   const index = data.findIndex((el) => el.id === id);
  //   const old = data[index];
  //   const newItem = { ...old, increase: !old.increase };
  //   const newArr = [
  //     ...data.slice(0, index),
  //     newItem,
  //     ...data.slice(index + 1),
  //   ];
  //   return {
  //     data: newArr,
  //   };
  // })
  // короткий метод
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       return item.id === id ? { ...item, increase: !item.increase } : item;
  //     }),
  //   }));
  // }

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       return item.id === id ? { ...item, rise: !item.rise } : item;
  //     }),
  //   }));
  // }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, [prop]: !item[prop] } : item),
    }));
  }

  render() {
    return (
      <div className="app">
        <AppInfo
          total={this.state.data.length}
          increase={this.state.data.filter((item) => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}
