import React from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { useCart } from '../../context/cartContext';
import { createOrder } from '../../firebase/db';
import Swal from 'sweetalert2';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function CheckoutForm() {
    const { cart, getTotal } = useCart();
    const isCartEmpty = cart.length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, mail, phone } = e.target.elements;

        const order = {
            buyer: {
                name: name.value,
                email: mail.value,
                phone: phone.value,
            },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        };

        try {
            await createOrder(order);
            Swal.fire({
                title: '¡Orden creada!',
                html: `
                    <p>Gracias por su compra, ${order.buyer.name}!</p>
                    <p><strong>Detalles de la orden:</strong></p>
                    <p><strong>Email:</strong> ${order.buyer.email}</p>
                    <p><strong>Teléfono:</strong> ${order.buyer.phone}</p>
                    <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
                    <p><strong>Artículos:</strong></p>
                    <ul>
                        ${order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}
                    </ul>
                `,
                icon: 'success',
                confirmButtonText: 'Volver a la tienda'
            });
        } catch (error) {
            Swal.fire({
                title: '¡Error!',
                text: 'Hubo un error al crear su orden. Por favor, inténtelo de nuevo.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" name="name" required />
            <input type="email" placeholder="email@dominio" name="mail" required />
            <input type="text" placeholder="Numero de telefono" name="phone" required />
            <OverlayTrigger
                overlay={
                    <Tooltip>
                        {isCartEmpty ? "El carrito está vacío, agrega un artículo para poder continuar" : ""}
                    </Tooltip>
                }
            >
                <span className="d-inline-block">
                    <button type="submit" disabled={isCartEmpty} style={isCartEmpty ? { pointerEvents: 'none' } : {}}>
                        Crear Orden
                    </button>
                </span>
            </OverlayTrigger>
        </form>
    );
}

export default CheckoutForm;
