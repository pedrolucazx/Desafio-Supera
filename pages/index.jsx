import styles from '../styles/Home.module.css'
import NavBar from './NavBar'
import Product from './Product'
import Shop from './Shop'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Product/>
      <Shop />
    </div>
  )
}
