import styles from '../styles/Home.module.css'
import NavBar from '../pages/components/header/NavBar'
import Product from '../pages/components/main/Product'
import Shop from '../pages/components/footer/Shop'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Product />
      <Shop/>
    </div>
  )
}
