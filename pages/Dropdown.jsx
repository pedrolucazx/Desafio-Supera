import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import styles from '../styles/Dropdown.module.css'


const people = [
  { id: 1, name: 'padrão', unavailable: false },
  { id: 2, name: 'preço', unavailable: false },
  { id: 3, name: 'popularidade', unavailable: false },
  { id: 4, name: 'ordem alfabética', unavailable: false },
]

export default function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className={styles.listBox}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={styles.button}>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options className={styles.options}>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}