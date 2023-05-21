import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import GridHeader from "./GridHeader";
import styles from "./Nav.module.css";
import classNames from "classnames";
import "../components/webMenu.css";
import NavMobile from "../components/NavMobile";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "var(--gray-900)" : "",
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container>
        <GridHeader className={classNames(styles.container, "header")}>
          <Link to="/">
            <div className={classNames(styles.logo, "title24x")}>JJUN Creative</div>
          </Link>
          <ul className={styles.menu}>
            <NavLink style={getLinkStyle} to="/brand">
              <li>Brand</li>
            </NavLink>
            <NavLink style={getLinkStyle} to="/foundations">
              <li>Foundations</li>
            </NavLink>
            <NavLink style={getLinkStyle} to="/components">
              <li>Components</li>
            </NavLink>
            <NavLink style={getLinkStyle} to="/contents">
              <li>Contents</li>
            </NavLink>
            <NavLink style={getLinkStyle} to="/resources">
              <li>Resources</li>
            </NavLink>
          </ul>
          <NavMobile className={styles.NavMobile} />
        </GridHeader>
      </Container>
    </div>
  );
}

export default Nav;
