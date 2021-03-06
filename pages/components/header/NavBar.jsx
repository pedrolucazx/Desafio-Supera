import styles from '../../../styles/components/header/NavBar.module.css'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { CardContext } from '../../../contexts/CardContext'
import { useContext } from 'react';

export default function NavBar() {

  const {card, clearShop, total} = useContext(CardContext);

  return (
    <header className={styles.navbar}>
      <nav className={styles.wrapper}>

        <div className={styles.logo}>
          <h2>SuperaShop</h2>
        </div>

        <div className={styles.shop}>
          <h2>R${total()}</h2>
          <Badge badgeContent={card.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          <button onClick={clearShop}> Limpar </button>
        </div>
        
      </nav>
      <div className={styles.promo}>
        <span>O frete é grátis para compras acima de R$ 250,00</span>
      </div>
    </header>
  )
}
