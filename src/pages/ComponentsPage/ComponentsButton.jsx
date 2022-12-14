import { Link } from "react-router-dom";
import Container from "../../components/Container";
import styles from "./ComponentsPage.module.css";
import Grid from "../../components/Grid";
import classNames from "classnames";
import Button from "../../components/Button";

function ComponentsButton() {
  return (
    <Container className={styles.topics}>
      <Grid>
        <div className={styles.side}>
          {/* leftSide */}
          <div className={styles.navigatorMain}>
            <div className={styles.navigatorWrapper}>
              <p className={classNames(styles.naviTitle, "bodyB20x")}>Components</p>
              <ul className={styles.navigator}>
                <li className={styles.menuWrapper_check}>
                  <div>
                    <Link
                      className={classNames(styles.menu, styles.checked, "bodyB16x")}
                      to="/components/botton"
                    >
                      Button
                    </Link>
                  </div>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/text-field">
                    Text field
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link
                    className={classNames(styles.menu, "body16x")}
                    to="/components/selection-control"
                  >
                    Selection Control
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/tab">
                    Tab
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/badge-tag">
                    Badge Tag
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/tooltip">
                    Tooltip
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link
                    className={classNames(styles.menu, "body16x")}
                    to="/components/action-sheets"
                  >
                    Action Sheets
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/navigation">
                    Navigation
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/modals">
                    Modals
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/loading">
                    Loading
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/carousel">
                    Carousel
                  </Link>
                </li>
                <li className={styles.menuWrapper}>
                  <Link className={classNames(styles.menu, "body16x")} to="/components/toast">
                    Toast
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* rightSide */}
          <div className={classNames(styles.storyMain, "w2")}>
            <div className={styles.storyTitle}>
              <p className={classNames(styles.titleMain, "title40x")}>Button</p>
              <p className={classNames(styles.titleSeb, styles.callout, "body18x")}>
                ???????????????????????? ???????????? ????????? ??? ??????????????????????????? ????????? ?????? ???????????????.
              </p>
            </div>
            <hr />
            <div>
              <p className={classNames(styles.textMain, "bodyB24x")}>01. Brand Button</p>
              <p className={classNames(styles.textBody, "body16x")}>
                JJUN Creative??? `Brand Main Button`??? `Primary` ????????? ????????? ?????? ????????????
                ???????????????. <br></br>???????????? ?????? ????????? ?????? `Secondary` ????????? ??????????????? ?????????
                ??? ????????????. JJUN Creative ????????? ???????????? ????????? ????????? ???????????? ?????? ?????? ?????????
                ????????????, ??? ????????? `Brand Sub Button`??? ???????????? ?????????, ???????????? ?????? ?????????
                ???????????????.
              </p>
            </div>
            <div>
              <Button size="exSmall">exSmall</Button>
              <Button size="Small">Small</Button>
              <Button size="Medium">Medium</Button>
              <Button size="Large">Large</Button>
            </div>
            <div>
              <pre>
                <code>
                  <p>Button_exSmall</p>c &#60;Button size="exSmall"&#62;exSmall&#60;/Button&#62;
                  <br />
                  print(word)
                  <br />
                  exit()
                </code>
              </pre>
            </div>
          </div>
        </div>
      </Grid>
    </Container>
  );
}

export default ComponentsButton;
