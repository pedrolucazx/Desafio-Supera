/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Card.module.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import data from '../products.json'

export default function Card() {
  return (
    <main className={styles.container}>
      {data.map((dataProducts) => {
        return (
          <div className={styles.card} key={dataProducts.id}>
            <div className={styles.buttons}>
              <button> <AddShoppingCartIcon/> </button>
            </div>
            <img src={dataProducts.image} />
            <h2>{dataProducts.name}</h2>
            <h3>R${dataProducts.price}</h3>
          </div>
        )
      }
      )}
    </main>
  )
}
