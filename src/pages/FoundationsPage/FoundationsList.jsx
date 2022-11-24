import { Link } from "react-router-dom";
import styles from "./FoundationsPage.module.css";
import classNames from "classnames";

function List() {
  return (
    <>
      <div className={styles.navigatorMain}>
        <div className={styles.navigatorWrapper}>
          <p className={classNames(styles.naviTitle, "bodyB20x")}>Foundations</p>
          <ul className={styles.navigator}>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Color</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Typorgaphy</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Icon</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Grid</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Radius</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Shadow</a>
            </li>
            <li className={styles.menuWrapper}>
              <a className={classNames(styles.menu, "body16x")}>Border</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
