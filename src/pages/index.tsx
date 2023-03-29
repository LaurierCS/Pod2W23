import landingPageStyles from '../styles/landingpage.module.css';

export default function LandingPage() {
  return (
    <>
      <div className={landingPageStyles.mainSection}>
        <div className={landingPageStyles.topbar}>
          <a href="#">
            <div className={landingPageStyles.topbarBrand}>
              <div className={landingPageStyles.topbarLogo}>
                <span className={landingPageStyles.circle}></span>
                <span className={landingPageStyles.circle}></span>
              </div>
              <h1>ExTracker</h1>
            </div>
          </a>
          <ul className={landingPageStyles.topbarLinks}>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <div className={landingPageStyles.userReg}>
            <button className={landingPageStyles.loginButton}>Log In</button>
            <button className={landingPageStyles.rgstrButton}>Sign Up</button>
          </div>
        </div>
        <div className={landingPageStyles.mainHero}>
          <h1>An easy way to manage your expenses</h1>
          <h6>Keep track of your spending across all bank accounts with ExTracker</h6>
          <button className={landingPageStyles.getStartedButton}>Get Started</button>
        </div>
        <div className={landingPageStyles.mainImageContainer}>
          <div className={landingPageStyles.mainImage}></div>
          <div className={landingPageStyles.imageBackgroundExtension}></div>
        </div>
      </div>
      

      <div className={landingPageStyles.overviewSection}>
        <div><h1>TESTTTTT</h1></div>
      </div>
    </>
  );
}
