import styles from "../../../styles/About.module.css";

const NextButton = ({ left, top, leftA, topA }) => (
    <div className={styles["next"]}>
        <button style={{ left: left, top: top }} className={styles["ellipse-22"]}>

            <svg
                style={{ left: leftA, top: topA }}
                className={styles["fi-rr-arrow-down"]}
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_3_30)">
                    <path
                        d="M46.4035 45.7414C46.1668 45.5028 45.8852 45.3134 45.5749 45.1841C45.2647 45.0548 44.9319 44.9883 44.5958 44.9883C44.2597 44.9883 43.9269 45.0548 43.6167 45.1841C43.3064 45.3134 43.0248 45.5028 42.7881 45.7414L33.5461 54.9834V2.99386C33.5461 2.31861 33.2779 1.67102 32.8004 1.19356C32.3229 0.716085 31.6753 0.447845 31.0001 0.447845V0.447845C30.3249 0.447845 29.6773 0.716085 29.1998 1.19356C28.7223 1.67102 28.4541 2.31861 28.4541 2.99386V54.958L19.2375 45.7414C19.0193 45.443 18.7387 45.1957 18.4153 45.0167C18.0918 44.8377 17.7333 44.7313 17.3646 44.7049C16.9959 44.6785 16.6258 44.7326 16.2802 44.8636C15.9345 44.9946 15.6215 45.1994 15.3629 45.4635C15.1044 45.7277 14.9064 46.0451 14.7829 46.3935C14.6593 46.7419 14.6131 47.113 14.6475 47.4811C14.6819 47.8491 14.796 48.2053 14.9819 48.5248C15.1678 48.8443 15.421 49.1195 15.724 49.3313L25.7044 59.3116C27.1365 60.742 29.0779 61.5454 31.1019 61.5454C33.126 61.5454 35.0674 60.742 36.4995 59.3116L46.4799 49.3313C46.944 48.8442 47.1966 48.1932 47.1823 47.5206C47.168 46.8479 46.888 46.2083 46.4035 45.7414Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_3_30">
                        <rect
                            width="61.1043"
                            height="61.1043"
                            fill="white"
                            transform="translate(0.447876 0.447845)"
                        />
                    </clipPath>
                </defs>
            </svg>
        </button>
    </div>
)

export default NextButton;