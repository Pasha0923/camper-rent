import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
