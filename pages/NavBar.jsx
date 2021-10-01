import styles from '../styles/NavBar.module.css'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.wrapper}>

        <div className={styles.logo}>
          <h2>SuperaShop</h2>
        </div>

        <div className={styles.shop}>
          <h2>R$200,00</h2>
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          <button> Limpar </button>
        </div>
        
      </nav>
      <div className={styles.promo}>
        <span>O frete é grátis para compras acima de R$ 250,00</span>
      </div>
    </header>
  )
}
