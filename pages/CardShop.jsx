/* eslint-disable @next/next/no-img-element */
import styles from '../styles/CardShop.module.css'
const CardShop = () => {
  return (
    <div>
      <div className={styles.card}>
        <img src="/call-of-duty-infinite-warfare.png" alt="" />
        <h1>Call of Duty</h1>
        <h2>R$200.000</h2>
        <button> REMOVER</button>
      </div>
    </div>
  )
}

export default CardShop
