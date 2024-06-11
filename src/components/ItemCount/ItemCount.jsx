import React, { useState } from 'react';

function ItemCount({ initial = 1, stock, onAdd }) {
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
    };

    return (
        <div>
            <button onClick={decrement} disabled={count <= 1}>-</button>
            <span>{count}</span>
            <button onClick={increment} disabled={count >= stock}>+</button>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );
}

export default ItemCount;
