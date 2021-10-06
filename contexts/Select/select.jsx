import { createContext, useState, useEffect } from "react";
import product from '../../products.json'

export const SelectContext = createContext({});

export function SelectProvider({ children }) {

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        padrao: "padrão",
        preco: "price",
        score: "score",
        alphabetical: "name"
      };
      const sortProperty = types[type];
      const sorted = [...product].sort((a, b) => b[sortProperty] - a[sortProperty]);
      const sorted2 = product.sort((a, b) => {
        let fa = a.name;
        let fb = b.name;

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1
        }
        return 0;
      });

      if(sortProperty === "name"){
        setData(sorted2)
      }else if(sortProperty === "padrão"){
        setData(product)
      }else{
        setData(sorted)
      }
      
    };
    sortArray(sortType)
  }, [sortType])

  function handleSelec(event) {
    setSortType(event.target.value)
  }

  return (
    <SelectContext.Provider value={{ data, handleSelec }}>
      {children}
    </SelectContext.Provider>
  )
}