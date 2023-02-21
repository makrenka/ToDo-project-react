import { AppInfo } from '../app-info';
import { SearchPanel } from '../search-panel';
import { AppFilter } from '../app-filter';
import { EmployeesList } from '../employees-list';
import { EmployeesAddForm } from '../employees-add-form';
import './app.css';
import { employees } from '../../constants/employees';

export const App = () => (
  <div className="app">
    <AppInfo />

    <div className="search-panel">
      <SearchPanel />
      <AppFilter />
    </div>

    <EmployeesList data={employees} />
    <EmployeesAddForm />
  </div>
)
