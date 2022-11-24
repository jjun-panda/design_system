import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./FoundationsPage.module.css";
import Grid from "../../components/Grid";
import classNames from "classnames";
import mainColor from "../../assets/Main Color.png";
import SebColor from "../../assets/Seb Color.png";

function FoundationsIcon() {
  return (
    <Container className={styles.topics}>
      <Grid>
        <div className={styles.side}>
          {/* leftSide */}
          <div className={styles.navigatorMain}>
            <div className={styles.navigatorWrapper}>
              <p className={classNames(styles.naviTitle, "bodyB20x")}>Foundations</p>
              <ul className={styles.navigator}>
                <li className={styles.menuWrapper}>
                  <div>
                    <Link className={classNames(styles.menu, "body16x")} to="/foundations/color">
                      Color
                    </Link>
                  </div>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/typorgaphy">
                    Typorgaphy
                  </Link>
                </li>
                <li className={styles.menuWrapper_check}>
                  <Link
                    className={classNames(styles.menu, styles.checked, "bodyB16x")}
                    to="/foundations/icon"
                  >
                    Icon
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/grid">
                    Grid
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/radius">
                    Radius
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/shadow">
                    Shadow
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/border">
                    Border
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* rightSide */}
          <div className={classNames(styles.storyMain, "w2")}>
            <div className={styles.storyTitle}>
              <p className={classNames(styles.titleMain, "title40x")}>Color</p>
              <p className={classNames(styles.titleSeb, styles.callout, "body18x")}>
                컬러가이드라인을 참고하여 웹표준 및 접근성가이드라인에 준수할 것을 권장합니다.
              </p>
            </div>
            <hr />
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>01. Brand Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                마로솔은 `Brand Main Color`의 `Primary` 색상을 브랜드 컬러 메인으로 사용합니다.{" "}
                <br></br>컨텐츠의 위계 구조에 따라 `Secondary` 컬러를 부가적으로 사용할 수 있습니다.
                마로솔 디자인 시스템의 브랜드 컬러는 서비스에 맞게 색상 변경이 가능하며, 각 색상은
                `Brand Sub Color`와 대응되어 아이콘, 컴포넌트 등의 요소에 사용됩니다.
              </p>

              <p className={classNames(styles.textSeb, "bodyB20x")}>Main Color</p>
              <img src={mainColor} alt="샘플이미지" />

              <p className={classNames(styles.textSeb, "bodyB20x")}>Seb Color</p>
              <img src={SebColor} alt="샘플이미지" />
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default FoundationsIcon;
