/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Card.module.css';
import StarIcon from '@mui/icons-material/Star';

const Card = ({image, name,price,score, handleAddItens}) => {
  
  return (
    <div className={styles.card}>

      <div className={styles.img}>
        <img src={image} alt="" />
      </div>

      <div className={styles.info}>
        <span className={styles.nome}>{name}</span>
        <span className={styles.score}><StarIcon/>{score}</span>
        <button className={styles.button} onClick={ () => handleAddItens(image, name, price)}>R${price}</button>
      </div>
      
    </div>
  )
}
export default Card
