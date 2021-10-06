import styles from '../../../styles/components/main/Product.module.css';
import Drowpdown from '../../components/main/Dropdown';
import Carousel from '../../components/main/Carousel';
import {CardContext} from '../../../contexts/CardContext'
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
