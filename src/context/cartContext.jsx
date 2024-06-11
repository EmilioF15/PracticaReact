import { createContext, useState } from "react";

const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    setCart([...cart, obj])
    console.log(obj)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart  }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
