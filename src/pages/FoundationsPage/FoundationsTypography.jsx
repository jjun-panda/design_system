import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./FoundationsPage.module.css";
import Grid from "../../components/Grid";
import classNames from "classnames";
import Button from "../../components/Button";

import fontFile from "../../assets/Pretendard-1.3.6.zip";

function FoundationsTypography() {
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
                <li className={styles.menuWrapper_check}>
                  <Link
                    className={classNames(styles.menu, styles.checked, "bodyB16x")}
                    to="/foundations/Typography"
                  >
                    Typography
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/icon">
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
              <p className={classNames(styles.titleMain, "title40x")}>Typography</p>
              <p className={classNames(styles.titleSeb, styles.callout, "body18x")}>
                반응형 정책에 따라 PC / Tab / Mobile 에서 대응되는 텍스트 규정을 적용합니다.
              </p>
            </div>
            <hr />
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>01. JJUN Creative Web Fonts</p>
              <p className={classNames(styles.textBody, "body16x")}>
                기본적으로 PretendardVariable 를 사용하며, 한/영 통일된 텍스트 타입을 활용하고
                있습니다. JJUN Creative 웹사이트는 ‘PretendardVariable’서체를 기준으로
                PretendardVariable R PretendardVariable M PretendardVariable B 서체를
                공식서체로 지정합니다.
                <br /> 웹접근성기준에 의하여 최소 1.5이상 1.75 권장합니다.
              </p>
              <a href={fontFile} download="PretendardVariable_1.3.6.zip">
                <Button size="Medium">Download Fonts</Button>
              </a>
            </div>
            <hr />
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>02. Text Type</p>
              <p className={classNames(styles.textBody, "body16x")}>
                서체크기와 행간 사이는 타이틀 기준 125%, 나머지는 160% 기준에 따르며 스토리(기사형
                본문)은 예외적으로 175%기준에 따릅니다. 이를 통해 가독성을 최대한 높여서 웹접근성에
                어긋나지 않도록 주의해야합니다.
              </p>
              {/* <p className={classNames(styles.textSeb, "bodyB20x")}>Title</p> */}
              {/* <img src={mainColor} alt="샘플이미지" /> */}

              <div className={styles.typor_list}>
                <p className="title40x">
                  <span>타이틀</span>
                  40px 1.25 Bold
                </p>
                <p className="title32x">
                  <span>타이틀</span>
                  32px 1.25 Bold
                </p>
                <p className="title24x">
                  <span>타이틀</span>
                  1.5rem 1.25 Bold
                </p>
                <p className="title20x">
                  <span>타이틀</span>
                  20px 1.25 Bold
                </p>
                <p className="title18x">
                  <span>소제목</span>
                  18px 1.25 Bold
                </p>
                <p className="title16x">
                  <span>본문강조</span>
                  16px 1.25 Bold
                </p>
                <p className="title14x">
                  <span>소소제목</span>
                  1.25rem 1.25 Bold
                </p>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default FoundationsTypography;
