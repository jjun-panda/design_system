import { Link } from "react-router-dom";
import Container from "../components/Container";
import styles from "./HomePage.module.css";
import GridBody from "../components/GridBody";
import classNames from "classnames";
import pcVideo from "../assets/PC_video.mp4";
import mVideo from "../assets/Mobile_video.mp4";
import { ReactComponent as Iconlinkright } from "../assets/svg/ico_link_right.svg";

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <div className={styles.visual_area}>
        <div className={styles.pc_video}>
          <video muted autoPlay loop id="main_video_01">
            <source src={pcVideo} type="video/mp4" />
          </video>
        </div>
        <div className={styles.mobile_video}>
          <video muted autoPlay loop id="main_video_01">
            <source src={mVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            일관되고 지속적인 경험을 디자인하기 위한 단 하나의 시스템
          </h1>
          <p className={classNames(styles.description, "title24x")}>
            JJUN Creative는 디자인 전반을 구성하는 통합 가이드라인 입니다.
          </p>
        </div>
      </Container>
      <div className={styles.boxs}>
        <div className={styles.box_bran}>
          <div className={styles.box_one}>
            <p className={classNames(styles.box_title, "title32x")}>What is JJUN Creative?</p>
            <p className={classNames(styles.box_body, "body24x")}>
              JJUN Creative은 JJUN 디자인 전반을 구성하는 컴포넌트, 인터랙션, 그리고 UX의 통합
              가이드라인 입니다. JJUN Creative은 서비스를 효율적으로 만들고 일관된 사용자 경험을
              제공하는데 필수적인 역할을 합니다. 이는 시각적으로 심플하고 사용성 높은 UI를, 다양한
              디바이스와 시스템에 유연하고 가볍게 최적화하여 적용할 수 있는 UI 디자인 표준의 제공을
              의미합니다.
            </p>
          </div>
        </div>
      </div>
      <GridBody>
        <div className={styles.boxs}>
          <div className={styles.box_size}>
            <div className={styles.box_info}>
              <p className={classNames(styles.box_content, "title24x")}>Main</p>
            </div>
          </div>
          <Link className={styles.box_size} to="/brand">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Brand</p>
                <span className={"body16x"}>
                  브랜드 아이엔티티의 일관되고 지속적인 경험을 가이드하고 만들어 갑니다. 효과적이고
                  정확하게 전달하기 위해 마케팅 홍보 및 콘텐츠 활용에 쓰이며, 본 관리규정을 준수하는
                  것이 중요합니다.
                </span>
              </div>
              <Iconlinkright className={styles.svgSize} />
            </div>
          </Link>
          <Link className={styles.box_size} to="/Foundations">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Foundations</p>
                <span className={"body16x"}>
                  UX 가이드라인은 LINE 서비스 고유의 일관성있는 UX를 유지하기 위한 가이드라인입니다.
                  LINE 디자인 시스템은 LINE 메신저 사용 경험을 고려한 의미있는 UX 가이드라인을
                  제시합니다.
                </span>
              </div>
              <Iconlinkright className={styles.svgSize} />
            </div>
          </Link>
          <Link className={styles.box_size} to="/Components">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Components</p>
                <span className={"body16x"}>
                  UX 가이드라인은 LINE 서비스 고유의 일관성있는 UX를 유지하기 위한 가이드라인입니다.
                  LINE 디자인 시스템은 LINE 메신저 사용 경험을 고려한 의미있는 UX 가이드라인을
                  제시합니다.
                </span>
              </div>
              <Iconlinkright className={styles.svgSize} />
            </div>
          </Link>
          <Link className={styles.box_size} to="/Contents">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Contents</p>
                <span className={"body16x"}>
                  UX 가이드라인은 LINE 서비스 고유의 일관성있는 UX를 유지하기 위한 가이드라인입니다.
                  LINE 디자인 시스템은 LINE 메신저 사용 경험을 고려한 의미있는 UX 가이드라인을
                  제시합니다.
                </span>
              </div>
              <Iconlinkright className={styles.svgSize} />
            </div>
          </Link>
          <Link className={styles.box_size} to="/Resources">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Resources</p>
                <span className={"body16x"}>
                  UX 가이드라인은 LINE 서비스 고유의 일관성있는 UX를 유지하기 위한 가이드라인입니다.
                  LINE 디자인 시스템은 LINE 메신저 사용 경험을 고려한 의미있는 UX 가이드라인을
                  제시합니다.
                </span>
              </div>
              <Iconlinkright className={styles.svgSize} />
            </div>
          </Link>
        </div>
      </GridBody>
    </>
  );
}

export default HomePage;
