import styles from './Header.module.css'
function Header(){
  return(
    <div id={styles.Header}>
      <span className={styles.reminders}>Reminders</span>
      <span className={styles.calView}>Calendar View ></span>
    </div>
  );
}

export default Header;