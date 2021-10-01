/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Shop.module.css'
import CardShop from './CardShop'
export default function Shop() {
  return (
    <footer className={styles.shop} >
      <ul>
        <CardShop />
        <CardShop />
        <CardShop />
        <CardShop />
      </ul>
    </footer>
  )
}
