import { createContext, useState } from 'react';

export const CardContext = createContext({});

export const CardProvider = ({ children }) => {
  
  const [card, setCard] = useState([]);

  function handleAddItens(image, name, price) {
    const itensShop = { image, name, price}
    setCard([...card, itensShop])
  }

  function handleRemoveitens(itemIndex){
    const filteredCard = card.filter(
      cardItem => card.indexOf(cardItem) !== itemIndex 
    );
    setCard(filteredCard);
  };

  function clearShop(){};

  return (
    <CardContext.Provider value={{ card, handleAddItens, handleRemoveitens, clearShop}}>
      {children}
    </CardContext.Provider>)
};

