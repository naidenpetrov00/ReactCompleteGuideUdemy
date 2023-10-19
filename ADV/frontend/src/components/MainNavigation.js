import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const isActive = ({ isActive }) => (isActive ? classes.active : undefined);

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={isActive} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={isActive}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
