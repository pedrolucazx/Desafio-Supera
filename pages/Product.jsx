import styles from '../styles/Product.module.css';
import Drowpdown from '../pages/Dropdown';


export default function Product() {

  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <h2>Produto</h2>
        <h2>Shop</h2>
        <div className={styles.dropdown}>
          <Drowpdown />
        </div>
      </div>
    </div>
  )
}
