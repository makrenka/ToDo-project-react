import { EmployeesListItem } from '../employees-list-item';

import './employees-list.css';

export const EmployeesList = ({ data }) => (
  <ul className="app-list list-group">
    {data.map(({ id, ...item }) =>
      <EmployeesListItem key={id} {...item} />
    )}
  </ul>
);
