import './app-info.css';

export const AppInfo = ({ total, increase }) => (
  <div className="app-info">
    <h1>Учет сотрудников в компании</h1>
    <h2>Общее число сотрудников: {total}</h2>
    <h2>Премию получат: {increase}</h2>
  </div>
);
