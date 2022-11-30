import classNames from "classnames";
import styles from "./GridBody.module.css";

function GridBody({ className, children }) {
  return <div className={classNames(styles.gridBody, className)}>{children}</div>;
}

export default GridBody;
