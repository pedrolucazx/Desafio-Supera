import styles from '../styles/Product.module.css';
import Drowpdown from '../pages/Dropdown';
import Carousel from './Carousel';

export default function Product() {

  return (
    <main className={styles.product}>
      <Drowpdown />
      <Carousel/>
    </main>
  )
}
