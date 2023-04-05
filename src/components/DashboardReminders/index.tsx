import styles from './index.module.css'
import Header from './Header/Header'
import Slides from './Slides/Slides'
export default function Home() {
  return (
    <div id={styles.remindersTab}>
      <Header></Header>
      <Slides></Slides>
    </div>
  );
}
