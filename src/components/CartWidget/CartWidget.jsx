import React from 'react';
import { useCart } from '../../context/cartContext';
import cartIcon from '../../assets/CartWidget.svg'; // Ajusta la ruta según tu estructura de archivos

function CartWidget() {
  const { cart } = useCart();

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalItems = getTotalItems();

  return (
    <button type="button" className="btn position-relative cartPos">
      <div>
        <img className="cartSize" src={cartIcon} alt="Carrito" />
      </div>
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
          <span className="visually-hidden">unread messages</span>
        </span>
      )}
    </button>
  );
}

export default CartWidget;
