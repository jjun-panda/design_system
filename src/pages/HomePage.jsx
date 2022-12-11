import { Link } from "react-router-dom";
import Container from "../components/Container";
import styles from "./HomePage.module.css";
import GridBody from "../components/GridBody";
import classNames from "classnames";

import pcImg from "../assets/PC_img.png";
import mImg from "../assets/Mobile_img.png";
import { ReactComponent as Iconlinkright } from "../assets/svg/ico_link_right.svg";

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <div className={styles.visual_area}>
        <div className={styles.pc_video}>
          <img src={pcImg} alt="pcImg" />
        </div>

        <div className={styles.mobile_video}>
          <img src={mImg} alt="mImg" />
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
          <div className={classNames(styles.box_size, styles.box_textmain)}>
            <div className={styles.box_info}>
              <p className={classNames(styles.box_content, "title40x")}>
                빠르고 효율적인 JJUN Creative, 간편하게 만나보세요!
              </p>
            </div>
          </div>
          <Link className={styles.box_size} to="/brand">
            <div className={styles.box_two}>
              <div className={styles.box_text}>
                <p className={classNames(styles.box_content, "title24x")}>Brand</p>
                <span className={"body16x"}>
                  브랜드는 일관되고 지속적인 경험을 가이드하고 만들어 갑니다. 효과적이고 정확하게
                  전달하기 위해 마케팅 홍보 및 콘텐츠 활용에 쓰이며, 본 관리규정을 준수하는 것이
                  중요합니다.
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
                  파운데이션은 일관된 레이아웃과 그에 따른 사용자 경험을 만드는 데 필수적인 시각적
                  요소입니다.
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
                  컴포넌트는 디자인시스템의 재사용 가능한 구성요소입니다. 각 구성요소는 상호 작용
                  또는 UI 요구를 충족합니다.
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
                  콘텐츠는 JJUN Creative에 의한 기준으로 각 콘텐츠별 어떤 유형의 디자인을 원하는지
                  대략적으로 설명합니다.
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
                  리소스는 업무를 효율화하기 위한 툴 또는 이미지로 관련 다운로드 가능한 파일 또는
                  링크를 일괄 취합해 제공합니다.
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
