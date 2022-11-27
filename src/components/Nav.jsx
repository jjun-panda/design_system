import { Link } from "react-router-dom";
import Container from "./Container";
import Grid from "./Grid";
import styles from "./Nav.module.css";
import classNames from "classnames";
import "../components/webMenu.css";
import NavMobile from "../components/NavMobile";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container>
        <Grid className={styles.container}>
          <Link to="/">
            <div className={classNames(styles.logo, "title24x")}>JJUN Creative</div>
          </Link>
          <ul className={styles.menu}>
            <Link to="/brand">
              <li>Brand</li>
            </Link>
            <Link to="/foundations">
              <li>Foundations</li>
            </Link>
            <Link to="/components">
              <li>Components</li>
            </Link>
            <Link to="/contents">
              <li>Contents</li>
            </Link>
            <Link to="/resources">
              <li>Resources</li>
            </Link>
          </ul>
          <NavMobile className={styles.NavMobile} />
        </Grid>
      </Container>
    </div>
  );
}

export default Nav;
