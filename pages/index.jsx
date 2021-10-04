import { useState } from 'react'
import styles from '../styles/Home.module.css'
import NavBar from './NavBar'
import Product from './Product'
import Shop from './Shop'

export default function Home() {

  const [card, setCard] = useState([]);

  return (
    <div className={styles.container}>
      <NavBar/>
      <Product/>
      <Shop card={card}/>
    </div>
  )
}
