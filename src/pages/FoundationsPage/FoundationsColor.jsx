import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./FoundationsPage.module.css";
import Grid from "../../components/Grid";
import classNames from "classnames";

import mainColor from "../../assets/Main Color.png";
import SebColor from "../../assets/Seb Color.png";
import PointColor from "../../assets/Point Color.png";
import AlertColor from "../../assets/Alert Color.png";
import Gradient from "../../assets/Gradient.png";
import GrayColor from "../../assets/Gray Color.png";

function FoundationsColor() {
  return (
    <Container className={styles.topics}>
      <Grid>
        <div className={styles.side}>
          {/* leftSide */}
          <div className={styles.navigatorMain}>
            <div className={styles.navigatorWrapper}>
              <p className={classNames(styles.naviTitle, "bodyB20x")}>Foundations</p>
              <ul className={styles.navigator}>
                <li className={styles.menuWrapper_check}>
                  <div>
                    <Link
                      className={classNames(styles.menu, styles.checked, "bodyB16x")}
                      to="/foundations/color"
                    >
                      Color
                    </Link>
                  </div>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/foundations/Typography">
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
              <p className={classNames(styles.titleMain, "title40x")}>Color</p>
              <p className={classNames(styles.titleSeb, styles.callout, "body18x")}>
                컬러가이드라인을 참고하여 웹표준 및 접근성가이드라인에 준수할 것을 권장합니다.
              </p>
            </div>
            <hr />
            {/* 01 */}
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>01. Brand Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                JJUN Creative은 `Brand Main Color`의 `Primary` 색상을 브랜드 컬러 메인으로
                사용합니다. 컨텐츠의 위계 구조에 따라 `Secondary` 컬러를 부가적으로 사용할 수
                있습니다. JJUN Creative 디자인 시스템의 브랜드 컬러는 서비스에 맞게 색상 변경이
                가능하며, 각 색상은 `Brand Sub Color`와 대응되어 아이콘, 컴포넌트 등의 요소에
                사용됩니다.
              </p>
              <p className={classNames(styles.textSeb, "bodyB20x")}>Main Color</p>
              <img src={mainColor} alt="샘플이미지" />
              <p className={classNames(styles.textSeb, "bodyB20x")}>Seb Color</p>
              <img src={SebColor} alt="샘플이미지" />
            </div>
            <hr />

            {/* 02 */}
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>02. Product Colors</p>
              <p className={classNames(styles.textBody, "body16x")}>
                브랜드 요소에 부가적으로 사용되는 컬러입니다.
              </p>
              <p className={classNames(styles.textSeb, "bodyB20x")}>Point Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                JJUN Creative은 `Orange(#ff7a00)` 컬러를 포인트 컬러로 사용합니다. 포인트 컬러는
                컨텐츠 및 아이콘, 컴포넌트 등에 활용됩니다.
              </p>
              <img src={PointColor} alt="샘플이미지" />
              <p className={classNames(styles.textSeb, "bodyB20x")}>Alert Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                인포메이션 요소를 나타냅니다.
              </p>
              <img src={AlertColor} alt="샘플이미지" />
            </div>
            <hr />

            {/* 03 */}
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>03. Gradient Colors</p>
              <p className={classNames(styles.textBody, "body16x")}>
                기본적으로 `Gradient-main` 을 주요 UI에 활용하며, `Primary - Primary Sub` 컬러를
                사용합니다. 방향은 수직이 기본으로, 때에 따라 아이콘, 배경 등의 요소에 대각선 방향이
                지정됩니다. 부가적으로 특별한 용도에 따라 `Gradient-point` 및 `Gradient-gray` 생성할
                수 있습니다.
              </p>
              <img src={Gradient} alt="샘플이미지" />
            </div>
            <hr />

            {/* 04 */}
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>04. Grayscale</p>
              <p className={classNames(styles.textBody, "body16x")}>
                회색조로 사용되는 색상을 정의합니다. `Black` 과 `White` 를 포함해 `Gray 50` 부터
                `Gray 900` 까지 총 12단계로 구성됩니다.
              </p>
              <img src={GrayColor} alt="샘플이미지" />
            </div>
            <hr />

            {/* 05 */}
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>05. System Color </p>
              <p className={classNames(styles.textBody, "body16x")}>
                1:1로 대응되지 않고, 라이트모드와 다크모드에 따라 별도로 지정되는 System Color 를
                정의합니다.
              </p>
              <p className={classNames(styles.textSeb, "bodyB20x")}>Background Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                백그라운드 컬러는 `White - Black` 의 1:1 대응이 아닌, 지정된 단계의 컬러를
                사용합니다. 각 모드에서 `Primary Background`, `Secondary Background`, `Tertiary
                Background` 의 세가지 색상을 적절히 활용합니다. 기본적으로 `Primary Background` 를
                우선으로 사용하며, 컨텐츠에 포함되는 Sub-Background의 경우 `Secondary Background` 를
                사용합니다. 부가적으로 가장 아래에 적용되는 배경요소의 경우에는 `Tertiary
                Background` 색상을 활용합니다.
              </p>
              <p className={classNames(styles.textSeb, "bodyB20x")}>Modal Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                각 모드에서 모달 컬러를 지정해 사용합니다. Pop-up Modal , Center Modal , Bottom
                Modal , Scroll Modal 을 포함한 모든 경우에 적용됩니다.
              </p>
              <p className={classNames(styles.textSeb, "bodyB20x")}>Dim Color</p>
              <p className={classNames(styles.textBody, "body16x")}>
                컨텐츠 구조에 따라 일부 페이지 영역을 투명도가 있는 어두운 색상으로 가려야 할 때
                사용합니다. 주로 `Modal` 등과 함께 사용되며, JJUN Creative에서는 `#1A1A1A,
                60%`기준으로 `Dim Color` 를 활용하고 있습니다. `라이트모드`와 `다크모드` 에서 모두
                동일하게 `Black(#1A1A1A)` 색상을 사용하며, 단계는 상황에 맞게 적절히 적용합니다.
                기본적으로 `50%` Dim Color를 활용하며, `Bottom Sheet`, `Dropdown option tap` 같은
                컴포넌트의 경우 `20%` Dim Color를 사용하기도 합니다.
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default FoundationsColor;
