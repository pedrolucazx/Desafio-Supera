/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Card.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Card() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img src="/call-of-duty-infinite-warfare.png" />
        <h2>Call of Duty</h2>
        <h3>R$200,00</h3>
        <div className={styles.buttons}>
          <button>
            <AddShoppingCartIcon />
          </button>
          <button>
            <DeleteOutlineIcon />
          </button>
        </div>
      </div>
    </main>
  )
}
