import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex(item => item.id === obj.id);
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += obj.quantity;
        return updatedCart;
      } else {
        return [...prevCart, obj];
      }
    });
  };

  const getTotal = () => {
    const prices = cart.map(item => item.price * item.quantity);
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
