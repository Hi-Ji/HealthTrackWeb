import styles from "../../../styles/About.module.css";
import TextConstants from "../../../data/TextConstants.json";

const AimText = () => (
    <div className={styles["title"]}>
        <div className={styles["we-aim-to"]}>{TextConstants.Aim}</div>

        <div
            className={
                styles[
                "provide-a-simple-to-use-aesthetic-and-interactive-website-with-vast-useful-knowledge-and-information-for-useusers-as-well-as-raise-their-awarenesses-of-health-isuues"
                ]
            }
        >
            {TextConstants.AimText}
        </div>
    </div>
)

export default AimText;