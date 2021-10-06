/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/components/footer/Shop.module.css'
import CardShop from './CardShop'


import { CardContext } from '../../../contexts/CardContext'
import { useContext } from 'react';
import Calc from './Calc';

export default function Shop() {

  const { card, handleRemoveitens } = useContext(CardContext)

  return (
    <footer className={styles.container}>
      <section className={styles.shop} >
        <ul>
          {card.map((cardItem, id) =>
            <CardShop
              key={id}
              index={id}
              image={cardItem.image}
              price={cardItem.price}
              name={cardItem.name}
              handleRemoveitens={handleRemoveitens}
            />
          )}
          <Calc />
        </ul>
      </section>
    </footer>
  )
}
