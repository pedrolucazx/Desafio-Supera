import { createContext, useState } from 'react';

export const CardContext = createContext({});

export const CardProvider = ({ children }) => {

  const [card, setCard] = useState([]);

  function handleAddItens(image, name, price) {
    const itensShop = { image, name, price }
    setCard([...card, itensShop])
  }

  function handleRemoveitens(itemIndex) {
    const filteredCard = card.filter(
      cardItem => card.indexOf(cardItem) !== itemIndex
    );
    setCard(filteredCard);
  };
  function clearShop() {
    setCard([])
  };

  const subtotal = card.reduce((acc, current) => acc + current.price, 0);
  const frete = () => subtotal > 250 ? 'GRATIS' : `R$${(card.length * 10).toFixed(2)}`;
  const total = () => subtotal > 250 ? subtotal.toFixed(2) : (card.length * 10 + subtotal).toFixed(2);

  return (
    <CardContext.Provider value={{ card, handleAddItens, handleRemoveitens, clearShop, subtotal, frete, total}}>
      {children}
    </CardContext.Provider>)
};

