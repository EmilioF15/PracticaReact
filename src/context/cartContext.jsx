import { createContext, useState,useContext } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    setCart([...cart, obj])
  };

  return (
    <CartContext.Provider value={{ cart, addToCart  }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export const useCart = () => useContext(CartContext)