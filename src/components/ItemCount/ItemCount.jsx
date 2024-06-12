
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
            <button className="btn btn-secondary me-1 mb-1" onClick={decrement} disabled={count <= 1}>-</button>
            <span className="me-1">{count}</span>
            <button className="btn btn-secondary me-1 mb-1" onClick={increment} disabled={count >= stock}>+</button>
            <button className="btn btn-primary me-1 mb-1" onClick={handleAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
