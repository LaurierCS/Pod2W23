import styles from './Improvement.module.css'

function Improvement(){
  return (
    <div id={styles.improvement}>
      <div className={styles.changeContainer}>
        <span className={styles.change}>+27%</span> from last month  
      </div>
    </div>  
  )
}
export default Improvement;