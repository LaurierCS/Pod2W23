import styles from './Slides.module.css'
import { Carousel } from '@mantine/carousel';

import {astro} from '@/assets';

function Slides(){
  return (
    <>
      <Carousel id={styles.carouselTab} withIndicators
         height={250}
         slideSize="50%"
         slideGap="md"
         loop
         align="center"
         breakpoints={[
           { maxWidth: 'md', slideSize: '50%' },
           { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
         ]}>
          <Carousel.Slide className={styles.slideOne}>
            <div className={styles.divOne}>
              <button className={styles.addButton}>
                <span className={styles.plusOne}>+</span>
              </button>
            </div>
          </Carousel.Slide>

          <Carousel.Slide className={styles.slideTwo}>
            <div className={styles.divTwo}>
              <button className={styles.addButton}> 
              <span className={styles.plusTwo}>+</span>
              </button>
            </div>
          </Carousel.Slide>

          <Carousel.Slide className={styles.slideThree}>
            
           <div className={styles.divThree}>
            <button className={styles.addButton}>
             <span className={styles.plusThree}>+</span>
            </button>
           </div>
          </Carousel.Slide>

      </Carousel>
    </>
  );
}

export default Slides;