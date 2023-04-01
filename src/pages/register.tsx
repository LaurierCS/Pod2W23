// Styles | Images
import styles from '../styles/auth.module.css';

function Register() {
    return  (
        <>
            <div className={styles.authBackground}>
                <div className={styles.topbar}>
                    <a href="/">
                        <div className={styles.topbarBrand}>
                            <div className={styles.topbarLogo}>
                                <span className={styles.circle}></span>
                                <span className={styles.circle}></span>
                            </div>
                            <h1>ExTracker</h1>
                        </div>
                    </a>
                </div>
                <div className={styles.authContainer}>
                    <div className={styles.authHero}>
                        <h3>START FOR FREE</h3>
                        <h1>Create New Account</h1>
                        <h3>Already A Member? <span>Log in</span></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register