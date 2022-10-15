import {Link} from 'react-router-dom'
import Container from './Container';
import UserMenu from './UserMenu';
import logoImg from '../assets/logo.svg';
import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        {/* <img src={logoImg} alt="Codethat Logo" /> */}
        <Link to="/"><div>BIGWAVE Creative</div></Link>
        <ul className={styles.menu}>
          <Link to="/brand"><li>Brand</li></Link>
          <Link to="/foundations"><li>Foundations</li></Link>
          <Link to="/components"><li>Components</li></Link>
          <Link to="/content"><li>Content</li></Link>
          <Link to="/resources"><li>Resources</li></Link>
          {/* <li>
            <UserMenu />
          </li> */}
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
