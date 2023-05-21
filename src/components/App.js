import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./App.module.css";
import "./webFont.css";
import "./webColor.css";
import "./webReset.css";

// import styled, { CSS } from "styled-components";

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      {/* <NavMobile className={styles.NavMobile} /> */}
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
