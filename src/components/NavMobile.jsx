import classNames from "classnames";
import { Link } from "react-router-dom";
// import React, { useEffect } from "react";
import styles from "./NavMobile.module.css";

function NavMobile({ onClose }) {
  // const handleClose = () => {
  //   onClose?.();
  // };

  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, []);

  return (
    <div className={styles.menuSize}>
      <input type="checkbox" id="checkBox" />
      <label for="checkBox">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div id="sideMenu">
        <ul className={classNames(styles.menuList, "title40x")}>
          <Link to="/brand">
            <li className={"title40x"}>Brand</li>
          </Link>
          <Link to="/foundations">
            <li className={"title40x"}>Foundations</li>
          </Link>
          <Link to="/components">
            <li className={"title40x"}>Components</li>
          </Link>
          <Link to="/contents">
            <li className={"title40x"}>Contents</li>
          </Link>
          <Link to="/resources">
            <li className={"title40x"}>Resources</li>
          </Link>
        </ul>
        {/* footer */}
        <div className={styles.menuFooter}>
          <p className={(styles.copyright, "body14x")}>
            ⓒ2022 JJUN Creative Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
