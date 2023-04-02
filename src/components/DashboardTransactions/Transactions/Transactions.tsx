import styles from "./Transactions.module.css"
function Transaction(){
  return (
    
    <div className={styles.transactions}>
      <div className={styles.transDesc}>
        <p className={styles.title}>Netflix and Chill</p>
        <p className={styles.date}>2023-03-15</p>
      </div>

      <div className={styles.transCatAmount}>
        <div className={styles.transCat}>Misc</div>  
        <div className={styles.transAmnt}>-$9.99</div>
      </div>
    </div>

  )
}

export default Transaction;