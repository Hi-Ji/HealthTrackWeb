/* Code generated with AutoHTML Plugin for Figma */
import styles from "../styles/About.module.css";
import NaviBar from "../assets/components/navi/NaviBar";
import WebLogo from "../assets/components/images/WebLogo";
import TextConsants from "../data/TextConstants.json";
import FrontText from "../assets/components/text/FrontText";
import StartButton from "../assets/components/button/StartButton";
import NextButton from "../assets/components/button/NextButton";
import FrontPageDoctor from "../assets/components/images/FrontPageDoctor";
import AimText from "../assets/components/text/AimText";
import DiseaseBook from "../assets/components/images/DiseaseBook";
import DiseaseText from "../assets/components/text/DiseaseText";
import FrontPageHand from "../assets/components/images/FrontPageHand";
import DiseaseLines from "../assets/components/images/DiseaseLines";
import FrontBlankSpace from "../assets/components/others/FrontBlankSpace";
import FrontPageBotText from "../assets/components/text/FrontPageBotText";
import Caret from "../assets/components/others/Caret";

export const About = ({ ...props }) => {
  return (
    <div className={styles["about"]}>
      <NaviBar />
      <WebLogo />
      <div className={styles["scroll-down"]}>
        <FrontText />
        <StartButton />
        <NextButton left ="18rem" top ="600rem"/>
        <FrontPageDoctor />
        <AimText />


        <div className={styles["illustration-2"]}>
          <div className={styles["illustration2"]}>
            <DiseaseBook />
          </div>
          <DiseaseText />

          <DiseaseLines />
        </div>

        <div className={styles["next"]}>
          <svg
            className={styles["vector219"]}
            viewBox="0 0 120 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M120 60.048C120 93.1851 93.1371 120.048 60 120.048C26.8629 120.048 0 93.1851 0 60.048C0 26.9109 26.8629 0.0479736 60 0.0479736C93.1371 0.0479736 120 26.9109 120 60.048Z"
              fill="#F0F8EC"
            />
            <path
              d="M75.4035 74.7895C75.1668 74.5508 74.8852 74.3614 74.5749 74.2322C74.2647 74.1029 73.9319 74.0364 73.5958 74.0364C73.2597 74.0364 72.9269 74.1029 72.6167 74.2322C72.3064 74.3614 72.0248 74.5508 71.7881 74.7895L62.5461 84.0315V32.0419C62.5461 31.3667 62.2779 30.7191 61.8004 30.2416C61.3229 29.7642 60.6753 29.4959 60.0001 29.4959C59.3248 29.4959 58.6772 29.7642 58.1998 30.2416C57.7223 30.7191 57.4541 31.3667 57.4541 32.0419V84.006L48.2375 74.7895C48.0193 74.4911 47.7387 74.2438 47.4153 74.0648C47.0918 73.8858 46.7333 73.7794 46.3646 73.753C45.9959 73.7265 45.6258 73.7807 45.2801 73.9117C44.9345 74.0427 44.6215 74.2474 44.3629 74.5116C44.1043 74.7758 43.9064 75.0931 43.7829 75.4415C43.6593 75.7899 43.6131 76.1611 43.6475 76.5291C43.6818 76.8972 43.7959 77.2534 43.9818 77.5729C44.1678 77.8924 44.421 78.1676 44.724 78.3793L54.7044 88.3597C56.1365 89.7901 58.0778 90.5935 60.1019 90.5935C62.126 90.5935 64.0673 89.7901 65.4995 88.3597L75.4798 78.3793C75.944 77.8923 76.1966 77.2413 76.1823 76.5686C76.1679 75.896 75.8879 75.2563 75.4035 74.7895Z"
              fill="#F0F8EC"
            />
          </svg>

          <NextButton left="18rem" top="2036rem"/>
        </div>

        <FrontBlankSpace />

        <FrontPageHand />

        <div className={styles["title"]}>
          <div className={styles["before-using-health-track"]}>
            {TextConsants.Before}
          </div>

          <FrontPageBotText />

          <div className={styles["group-1"]}>
            <div className={styles["rectangle-11"]}></div>

            <Caret />

            <div className={styles["start-of-health-assessment"]}>
              {TextConsants.StartOfHealth}
            </div>
          </div>

          <div className={styles["group-2"]}>
            <div className={styles["rectangle-12"]}></div>

            <button className={styles["start-it-later"]}>{TextConsants.StartIt}</button>
          </div>

          <div className={styles["group-3"]}>
            <div className={styles["takes-about"]}>{TextConsants.Takes}</div>

            <div className={styles["_10-mins"]}>{TextConsants[10]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
