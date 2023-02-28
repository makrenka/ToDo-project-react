import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ data, onDelete }) => (
  <ul className="app-list list-group">
    {data.map(({ id, ...item }) =>
      <EmployeesListItem
        key={id}
        {...item}
        onDelete={() => onDelete(id)}
      />
    )}
  </ul>
);
