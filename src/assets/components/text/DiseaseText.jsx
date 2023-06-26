import styles from "../../../styles/About.module.css";
import Diseases from "../../../data/Diseases.json";

const DiseaseText = () => (
    <div className={styles["common-helath-isuues"]}>
        <div className={styles["cancer"]}>{Diseases.Cancer}</div>

        <div className={styles["stroke"]}>{Diseases.Stroke}</div>

        <div className={styles["chronic-diseases"]}>{Diseases.Chronic}</div>

        <div className={styles["obesity"]}>{Diseases.Obesity}</div>

        <div className={styles["heart-disease"]}>{Diseases.Heart}</div>

        <div className={styles["diabetes"]}>{Diseases.Diabetes}</div>

        <div className={styles["asthma"]}>{Diseases.Asthma}</div>

        <div className={styles["high-blood-pressure"]}>
            {Diseases.High}
        </div>
    </div>
)

export default DiseaseText;