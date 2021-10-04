/* eslint-disable jsx-a11y/alt-text */
import { useRef } from 'react';
import Card from '../pages/Card'
import styles from '../styles/Carousel.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import data from '../products.json';
 
export default function Carousel( {handleAddItens}) {
  const carousel = useRef(null)

  const handleLeftClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (event) => {
    event.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div className={styles.container}>
      <button className={styles.buttons} onClick={handleLeftClick}>
        <ArrowBackIosIcon />
      </button>
      <div className={styles.carousel} ref={carousel}>
      {data.map((data) => (
        <Card
          key={data.id}
          image={data.image}
          price={data.price}
          name={data.name}
          handleAddItens={handleAddItens}
        />
      ))}
      </div>
      <button className={styles.buttons} onClick={handleRightClick}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}