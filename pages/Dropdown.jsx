import styles from '../styles/Dropdown.module.css'
import { useContext } from 'react'
import { SelectContext } from '../contexts/Select/select'


export default function MyListbox() {

  const { handleSelec } = useContext(SelectContext)

  return (
    <div className={styles.container}>
      <select onChange={handleSelec}>
        <option value="preco">preço</option>
        <option value="score">popularidade</option>
        <option value="alphabetical">alfabética</option>
      </select>
    </div>
  )
}