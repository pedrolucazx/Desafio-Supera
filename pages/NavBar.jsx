import styles from '../styles/NavBar.module.css'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavBar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.wrapper}>
        <div className={styles.logo}>
          <h1>SuperaShop</h1>
        </div>
        <div className={styles.shop}>
          {/* criar função para ler o valor do JSON e somar */}
          <h2>R$200,00</h2>
          {/* criar função para ler o click */}
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
        <div className={styles.button}>
          <button> Limpar </button>
        </div>
      </nav>
      <div className={styles.promo}>
        <span>O frete é grátis para compras acima de R$ 250,00</span>
      </div>
    </header>
  )
}
