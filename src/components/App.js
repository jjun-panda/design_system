import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from './App.module.css';
import './App.font.css';
import './App.color.css';
import './App.reset.css';

function App({ children }) {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
