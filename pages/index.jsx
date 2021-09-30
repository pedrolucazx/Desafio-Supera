import styles from '../styles/Home.module.css'
import Card from './Card'
import NavBar from './NavBar'
import Product from './Product'

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar/>
      <Product/>
      <Card />
    </div>
  )
}
