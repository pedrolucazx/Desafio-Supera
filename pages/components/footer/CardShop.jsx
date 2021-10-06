/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/components/footer/CardShop.module.css';

const CardShop = ({ image, name, price,index, handleRemoveitens}) => {

  return (
    <div>
      <li className={styles.card}>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h2>R${price}</h2>
        <button
          onClick={ () => handleRemoveitens(index)}
        >
          REMOVER
        </button>
      </li>
    </div>
  )
}
export default CardShop
