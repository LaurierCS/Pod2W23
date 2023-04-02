import styles from './Header.module.css'
function Header(){

  return (
    <>
    <div className={styles.Header}>
      <h2 className={styles.recent}>Recent Transactions</h2>
      <a className={styles.allTrans}>All Transactions ></a>
    </div>
    </>
  )
}
export default Header;