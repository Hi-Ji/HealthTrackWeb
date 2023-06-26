import TextConsants from "../../../data/TextConstants.json";
import HealthAssPersonLogo from "../images/HealthAssPersonLogo";
import styles from "../../../styles/About.module.css";
import ellipse from "../../pics/Ellipse 2.png";


const NaviBar = () => (
    <div className={styles["navi-bar"]}>
        <div className={styles["homepage"]}>{TextConsants.Home}</div>

        <div className={styles["rectangle-1"]}></div>

        <img className={styles["ellipse-2"]} src={ellipse}/>
        
        <HealthAssPersonLogo />

        <div className={styles["health-assessment"]}>{TextConsants.HealthAss}</div>

        <div className={styles["drug-interactions"]}>{TextConsants.Drug}</div>

        <div className={styles["life-advices"]}>{TextConsants.Life}</div>

        <div className={styles["health-risk-evaluation"]}>
            {TextConsants.Health}
        </div>
    </div>

)

export default NaviBar;

