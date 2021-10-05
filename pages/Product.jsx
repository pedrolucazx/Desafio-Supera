import styles from '../styles/Product.module.css';
import Drowpdown from '../pages/Dropdown';
import Carousel from './Carousel';
import {CardContext} from '../contexts/CardContext'
import { useContext } from 'react';

export default function Product() {

  const {handleAddItens, card} = useContext(CardContext)

  return (
    <main className={styles.product}>
      <Drowpdown />
      <Carousel handleAddItens={handleAddItens} card={card}/>
    </main>
  )
}
