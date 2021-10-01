/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Card.module.css';
//import data from '../products.json'

export default function Card() {
  return (
    <li className={styles.card}>
      <img src="/call-of-duty-infinite-warfare.png" alt="" />
      <h1>Call of Duty</h1>
      <h2>R$200.000</h2>
      <button> ADICIONAR</button>
    </li>
  )
}
