import classNames from "classnames";
import styles from "./Grid.module.css";

function Grid({ className, children }) {
  return <div className={classNames(styles.grid, className)}>{children}</div>;
}

export default Grid;
