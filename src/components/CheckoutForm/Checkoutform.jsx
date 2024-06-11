import { serverTimestamp } from 'firebase/firestore';
import { useCart } from '../../context/cartContext';
import { createOrder } from '../../firebase/db';

function CheckoutForm() {
    const { cart, getTotal } = useCart();

    const handleSubmit = (e) => {
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

        console.log(order); // Log the order to the console
        createOrder(order);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" name="name" required />
            <input type="email" placeholder="pepito@gmail.com" name="mail" required />
            <input type="text" placeholder="phone number" name="phone" required />
            <button type="submit">Create Order</button>
        </form>
    );
}

export default CheckoutForm;
