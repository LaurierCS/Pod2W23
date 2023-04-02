import styles from "./Header.module.css";

function Header(){

  return (<>
      <div className={styles.Header}>
        <h1 className={styles.title}>Balance</h1>
        <span className={styles.balance}>$1,670,050.99</span>
      </div>
    </>    

    
  )
}
export default Header;