/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Shop.module.css'
import CardShop from './CardShop'

export default function Shop({ card }) {
  return (
    <footer className={styles.shop} >
      <ul>
        {card.map((cardItem, id) => <CardShop key={id} />)}
      </ul>
    </footer>
  )
}
