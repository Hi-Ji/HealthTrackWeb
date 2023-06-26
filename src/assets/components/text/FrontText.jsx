import styles from "../../../styles/About.module.css";
import TextConsants from "../../../data/TextConstants.json";

const FrontText = () => (
    <div className={styles["title"]}>
        <div className={styles["health-track"]}>{TextConsants.HealthTrack}</div>

        <div
            className={
                styles[
                "the-health-track-calculator-utilizes-user-provided-information-including-age-lifestyle-and-medical-conditions-to-effectively-analyze-relevant-databases-this-analysis-yields-real-life-disease-data-tailored-to-the-user-s-specific-information-furthermore-the-healthtrack-calculator-offers-personalized-advice-on-adopting-healthy-lifestyles"
                ]
            }
        >
            {TextConsants.TheHealthTrack}
        </div>
    </div>
)

export default FrontText;