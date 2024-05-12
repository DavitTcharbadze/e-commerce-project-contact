import React from 'react'
import classes from '../modules/ImageCarousel.module.scss'
import image1 from '../assets/images/advertisement-image.png'
import image2 from '../assets/images/advertisement-image2.png'
import image3 from '../assets/images/advertisement-image3.jpg'
import image4 from '../assets/images/advertisement-image4.png'
import Carousel from 'react-image-carousel';

const images = [image1, image2, image3, image4]

export default function ImageCarousel() {
  return (
    <div className={classes['carousel']}>
      <Carousel 
        images={images} 
        thumb={true}
        loop={true}
        autoplay={5000}/>
    </div>
  )
}
