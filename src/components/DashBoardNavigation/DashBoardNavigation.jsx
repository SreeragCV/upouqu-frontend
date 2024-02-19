import { NavLink } from 'react-router-dom';
import classes from './DashBoardNavigation.module.css';

function DashBoardNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="users">Users</NavLink>
          </li>
          <li>
            <NavLink to="admins">Admins</NavLink>
          </li>
          <li>
            <NavLink to="admins">Total Books</NavLink>
          </li><li>
            <NavLink to="admins">Total Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashBoardNavigation;
