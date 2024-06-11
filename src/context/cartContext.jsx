import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    setCart([...cart, obj]);
  };

  const getTotal = () => {
    const prices = cart.map(item => item.price);
    const total = prices.reduce((acc, current) => acc + current, 0);
    return total;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
export const useCart = () => useContext(CartContext);
