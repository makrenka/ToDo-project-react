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
        { name: "Alex M.", salary: 1000, id: 1, rise: false, increase: false, isEdditing: false },
        { name: "John S.", salary: 3000, id: 2, rise: false, increase: false, isEdditing: false },
        { name: "Michael K.", salary: 5000, id: 3, rise: false, increase: false, isEdditing: false },
      ],
      value: '',
      filter: 'all',
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
  };

  editItem = (id, name, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) =>
        item.id === id ? { ...item, name: name, salary: salary } : item),
    }));
  };

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

  searchItems = (data, value) => {
    if (value.length === 0) return data;
    return data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
  }

  onUpdateData = (value) => {
    this.setState({ value });
  }

  filterItems = (data, filter) => {
    switch (filter) {
      case 'rise':
        return data.filter((item) => item.rise);
      case 'moreThan1000':
        return data.filter((item) => item.salary > 1000);
      default:
        return data;
    };
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, value, filter } = this.state;

    return (
      <div className="app">
        <AppInfo
          total={data.length}
          increase={data.filter((item) => item.increase).length}
        />

        <div className="search-panel">
          <SearchPanel onUpdateData={this.onUpdateData} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeesList
          data={this.filterItems(this.searchItems(data, value), filter)}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          editItem={this.editItem}
        />
        <EmployeesAddForm onAddItem={this.addItem} />
      </div>
    )
  }
}
