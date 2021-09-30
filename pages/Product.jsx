import styles from '../styles/Product.module.css';
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const order = [
  { id: 1, name: 'Preço', unavailable: false },
  { id: 2, name: 'Popularidade (score)', unavailable: false },
  { id: 3, name: 'Ordem alfabética', unavailable: false },
]



export default function Product() {
  const [selectedPerson, setSelectedPerson] = useState(order[0])

  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <h2>Produto</h2>
        <h2>Shop</h2>
        <div className={styles.dropdown}>
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>{selectedPerson.name}</Listbox.Button>
            <Listbox.Options>
              {order.map((order) => (
                <Listbox.Option
                  key={order.id}
                  value={order}
                  disabled={order.unavailable}
                >
                  {order.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
    </div>
  )
}
