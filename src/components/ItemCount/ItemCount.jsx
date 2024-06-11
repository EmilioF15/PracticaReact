// src/components/ItemCount.jsx
import React, { useState } from 'react';
import { useCart } from '../../context/cartContext';

function ItemCount({ initial = 1, stock, onAdd, item }) {
    const { addToCart } = useCart();
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
        addToCart({ ...item, quantity: count });
    };

    return (
        <div>
            <button onClick={decrement} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count >= stock}>+</button>
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
