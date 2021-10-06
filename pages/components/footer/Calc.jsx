
import { useContext } from 'react'
import { CardContext } from '../../../contexts/CardContext'
import styles from '../../../styles/components/footer/Calc.module.css'

export default function Calc() {

  const {subtotal, frete, total} = useContext(CardContext)

  return (
    <div>
      <li className={styles.calc}>
        <h1>Subtotal: R${subtotal.toFixed(2)}</h1>
        <h1>Frete: {frete()}</h1>
        <h1>Total: R${total()}</h1>
      </li>
    </div>
  )
}
