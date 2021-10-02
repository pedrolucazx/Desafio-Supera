/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Card.module.css';
import data from '../products.json';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRef } from 'react'

export default function Card() {
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
    <>
      <div className={styles.carousel} ref={carousel}>
        {data.map((dataProduct) => {
          return (
            <div className={styles.card} key={dataProduct.id}>
              <div className={styles.img}>
                <img src={dataProduct.image} alt="" />
              </div>
              <div className={styles.info}>
                <span className={styles.nome}>{dataProduct.name}</span>
                <button className={styles.button}>
                  R${dataProduct.price}
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.buttons}>
        <button className={styles.left} onClick={handleLeftClick}>
          <ArrowBackIosIcon />
        </button>
        <button className={styles.right} onClick={handleRightClick}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  )
}