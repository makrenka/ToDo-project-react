import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ data, onDelete, onToggleProp }) => (
  (data.length == 0) ?
    <p className='search-error-message'>Совпадений не найдено</p> :
    <ul className="app-list list-group">
      {data.map(({ id, ...item }) =>
        <EmployeesListItem
          key={id}
          {...item}
          onDelete={() => onDelete(id)}
          onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        />
      )}
    </ul>
);
