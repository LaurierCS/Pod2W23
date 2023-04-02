import styles from './columns.module.css';

function Columns(){
  return (
    <div className={styles.columnTitles}>
      <div className={styles.nameDate}>
        <p className={styles.name}>Name</p>

        <p className={styles.date}>Date</p>
      </div>

      <div className={styles.catAmount}>
        <p className={styles.category}>Category </p>

        <p className={styles.amount}>Amount</p>
      </div>
    </div>
  )
}
export default Columns;