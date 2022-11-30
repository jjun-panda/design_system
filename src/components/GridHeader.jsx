import classNames from "classnames";
import styles from "./GridHeader.module.css";

function GridHeader({ className, children }) {
  return <div className={classNames(styles.gridHeader, className)}>{children}</div>;
}

export default GridHeader;
