import React from 'react';
import { useCart } from '../../context/cartContext';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, getTotal } = useCart();

    return (
        <Container>
            <h1>Cart</h1>
            <ListGroup>
                {cart.map((item, index) => (
                    <ListGroup.Item key={index}>
                        <Row>
                            <Col>{item.name}</Col>
                            <Col>${item.price.toFixed(2)} USD</Col>
                            <Col>Cantidad: {item.quantity}</Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Row className="mt-3">
                <Col>
                    <h4>Total: ${getTotal().toFixed(2)} USD</h4>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    {cart.length > 0 ? (
                        <Link variant="primary" to="/checkout">Finalizar Compra</Link>
                    ) : null}
                </Col>
            </Row>
        </Container>
    );
}

export default Cart;
