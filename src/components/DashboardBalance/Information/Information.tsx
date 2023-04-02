import styles from './Information.module.css'

function Information(){
  return (
    <div id={styles.info}>
      <div className={styles.profitContainer}>
        <span className={styles.profits}>Profits</span>
        <span className={styles.profitAmount}>+$1050.99</span>
      </div>
      <div className={styles.lossesContainer}>
        <span className={styles.losses}>Losses</span>
        <span className={styles.lossesAmount}>-$544.97</span>
      </div>
    </div>
  )
}

export default Information;