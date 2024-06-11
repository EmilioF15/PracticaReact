// src/components/CartWidget.jsx
import React from 'react';
import cartIcon from '../../assets/CartWidget.svg'; // Ajusta la ruta según tu estructura de archivos

function CartWidget() {
  return (
    <button type="button" className="btn position-relative cartPos">
      <div>
        <img className="cartSize" src={cartIcon} alt="Carrito" />
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
}

export default CartWidget;
