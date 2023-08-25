import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./ContentsPage.module.css";
import Grid from "../../components/Grid";
import classNames from "classnames";

function ContentsHeader() {
  return (
    <Container className={styles.topics}>
      <Grid>
        <div className={styles.side}>
          {/* leftSide */}
          <div className={styles.navigatorMain}>
            <div className={styles.navigatorWrapper}>
              <p className={classNames(styles.naviTitle, "bodyB20x")}>Contents</p>
              <ul className={styles.navigator}>
                <li className={styles.menuWrapper}>
                  <div>
                    <Link className={classNames(styles.menu, "body16x")} to="/contents/thumbnail">
                      Thumbnail
                    </Link>
                  </div>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/contents/banner">
                    Banner
                  </Link>
                </li>
                <li className={styles.menuWrapper_check}>
                  <Link
                    className={classNames(styles.menu, styles.checked, "bodyB16x")}
                    to="/contents/header"
                  >
                    Header
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/contents/footer">
                    Footer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* rightSide */}
          <div className={classNames(styles.storyMain, "w2")}>
            <div className={styles.storyTitle}>
              <p className={classNames(styles.titleMain, "title40x")}>Thumbnail</p>
              <p className={classNames(styles.titleSeb, styles.callout, "body18x")}>
                컬러가이드라인을 참고하여 웹표준 및 접근성가이드라인에 준수할 것을 권장합니다.
              </p>
            </div>
            <hr />
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>01. Contents Thumbnail</p>
              <p className={classNames(styles.textBody, "body16x")}>
                JJUN Creative은 Contents Main Color의 Primary 색상을 브랜드 컬러 메인으로
                사용합니다. <br></br>컨텐츠의 위계 구조에 따라 Secondary 컬러를 부가적으로 사용할
                수 있습니다. JJUN Creative 디자인 시스템의 브랜드 컬러는 서비스에 맞게 색상 변경이
                가능하며, 각 색상은 Contents Sub Color와 대응되어 아이콘, 컴포넌트 등의 요소에
                사용됩니다.
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default ContentsHeader;
