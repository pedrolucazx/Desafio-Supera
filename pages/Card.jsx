/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Card.module.css'

const Card = ({image, name,price}) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <span className={styles.nome}>{name}</span>
        <button className={styles.button}>
          R${price}
        </button>
      </div>
    </div>
  )
}

export default Card
