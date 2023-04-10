import styles from './Header.module.css'
function Header(){
  return(
    <div id={styles.Header}>
      <span className={styles.reminders}>Reminders</span>
      <button className={styles.calView}>Calendar View > </button>
    </div>
  );
}

export default Header;