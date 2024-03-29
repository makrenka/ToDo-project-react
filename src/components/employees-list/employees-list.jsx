import { Component } from 'react';
import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ data, onDelete, onToggleProp, editItem }) => (
  (data.length) ?
    <ul className="app-list list-group">
      {data.map(({ id, ...item }) =>
        <EmployeesListItem
          key={id}
          id={id}
          {...item}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
          editItem={(id, name, salary) => editItem(id, name, salary)}
        />
      )}
    </ul> :
    <p className='search-error-message'>Совпадений не найдено</p>
)