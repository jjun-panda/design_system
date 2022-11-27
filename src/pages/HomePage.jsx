import Button from "../components/Button";
import Container from "../components/Container";
import Lined from "../components/Lined";
import styles from "./HomePage.module.css";
import landingImg from "../assets/landing.svg";
import classNames from "classnames";
import pcVideo from "../assets/PC_video.mp4";
import mVideo from "../assets/Mobile_video.mp4";
import { Link } from "react-router-dom";

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
            <div className={styles.content}>
              <Link to="/brand">test</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxs}>
        <Link to="/brand">
          <div className={styles.box_two}>
            <div className={styles.content}>Brand</div>
          </div>
        </Link>
        <Link to="/Foundations">
          <div className={styles.box_two}>
            <div className={styles.content}>Foundations</div>
          </div>
        </Link>
        <Link to="/Components">
          <div className={styles.box_two}>
            <div className={styles.content}>Components</div>
          </div>
        </Link>
        <Link to="/Contents">
          <div className={styles.box_two}>
            <div className={styles.content}>Contents</div>
          </div>
        </Link>
        <Link to="/Resources">
          <div className={styles.box_two}>
            <div className={styles.content}>Resources</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
