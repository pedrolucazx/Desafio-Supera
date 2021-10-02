import { createContext } from 'react';

export const CardContext = createContext({});

export const CardProvider = ({children}) =>{
  const hellowWordl = "Olá, mundo"
  
  return (<CardContext.Provider value={{hellowWordl}}>{children}</CardContext.Provider>)
}

