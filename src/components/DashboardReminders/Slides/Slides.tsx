import styles from './Slides.module.css'
import { Carousel } from '@mantine/carousel';

import { astro} from '@/assets';
// import astro from 'src/assets/images/astro.png'
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
          <div>
            <img src={astro.src}/>
          </div>
          </Carousel.Slide>

          <Carousel.Slide className={styles.slideTwo}><img className={styles.pictureTwo} src={astro.src}/>
          </Carousel.Slide>

          <Carousel.Slide className={styles.slideThree}><img className={styles.pictureThree} src={astro.src}/>
          </Carousel.Slide>

      </Carousel>
    </>
  );
}

export default Slides;