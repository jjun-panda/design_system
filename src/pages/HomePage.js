import Button from '../components/Button';
import Container from '../components/Container';
import Lined from '../components/Lined';
import styles from './HomePage.module.css';
import landingImg from '../assets/landing.svg';
import classNames from 'classnames';

function HomePage() {
  return (
    <>
      <div className={styles.bg}/>
      <Container className={styles.container}>
          <div className={styles.texts}>
              <h1 className={styles.heading}>
                  일관되고 지속적인 경험을
                  디자인하기 위한 단 하나의 시스템
              </h1>
              <p className={classNames(styles.description, 'body-24')}>
                  BIGWAVE Creative는 디자인 전반을 구성하는 통합 가이드라인 입니다.
              </p>
          </div>
      </Container>
      <div className={styles.boxs}>
          <div className={styles.box_bran}>
              <div className={styles.box_one}>
                  <div className={styles.content}>내부 컨텐츠</div>
              </div>
          </div>
        </div>
        <div className={styles.boxs}>
          <div className={styles.box_two}>
              <div className={styles.content}>내부 컨텐츠</div>
          </div>
          <div className={styles.box_two}>
              <div className={styles.content}>내부 컨텐츠</div>
          </div>
      </div>
    </>
  );
}

export default HomePage;
