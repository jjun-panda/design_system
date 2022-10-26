import {Link} from 'react-router-dom'
import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import styles from './FoundationsPage.module.css';
import classNames from 'classnames';
import Grid from '../components/Grid';
import myImg from '../assets/b_book_2016.jpeg';

function FoundationsPage() {
    return (
        <Container className={styles.topics}>
            <Grid>
                <div className={styles.side}>
                    {/* leftSide */}
                    <div className={styles.navigatorMain}>
                        <div className={styles.navigatorWrapper}>
                            <p className={classNames(styles.naviTitle, 'title_20x')}>Foundations</p>
                            <ul className={styles.navigator}>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Colors</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Typorgaphy</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Icon</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Grid</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Radius</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Shadow</a>
                                </li>
                                <li className={styles.menuWrapper}>
                                    <a className={classNames(styles.menu, 'body_16x')}>Border</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* rightSide */}
                    <div className={classNames(styles.storyMain, 'w2')}>
                        <div className={styles.storyTitle}>
                            <p className={classNames(styles.titleMain, 'title_40x')}>Colors</p>
                            <p className={classNames(styles.titleSeb, styles.callout, 'body_16x')}>컬러가이드라인을 참고하여 웹표준 및 접근성가이드라인에 준수할 것을 권장합니다.</p>
                        </div>
                        <div>
                            <p className={classNames(styles.textMain, 'title_24x')}>01. Brand Colors</p>
                            <p className={classNames(styles.textSeb, 'body_16x')}>마로솔은 `Brand Main Color`의 `Primary` 색상을 브랜드 컬러 메인으로 사용합니다. <br></br>컨텐츠의 위계 구조에 따라 `Secondary` 컬러를 부가적으로 사용할 수 있습니다. 마로솔 디자인 시스템의 브랜드 컬러는 서비스에 맞게 색상 변경이 가능하며, 각 색상은 `Brand Sub Color`와 대응되어 아이콘, 컴포넌트 등의 요소에 사용됩니다.</p>
                        </div>

                    </div>
                </div>

            </Grid>
        </Container>
    );
}

export default FoundationsPage;
