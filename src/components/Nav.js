import {Link} from 'react-router-dom'
import Container from './Container';
import Grid from './Grid';
import UserMenu from './UserMenu';
import logoImg from '../assets/logo.svg';
import styles from './Nav.module.css';
import classNames from 'classnames';

function Nav() {
  return (
    <div className={styles.nav}>
      <Container>
        <Grid className={styles.container}>
        {/* <img src={logoImg} alt="Codethat Logo" /> */}
        <Link to="/"><div className={classNames(styles.logo, 'title-24')}>BIGWAVE Creative</div></Link>
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
        </Grid>
      </Container>
    </div>
  );
}

export default Nav;
