// Este componente es el encargado de armar cada tarjeta individual, es un componente de vista
import { Button, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useContext } from "react";

function Item({ producto }) {
  const { addToCart } =useCart();
  const handleAddToCart = () => {
    addToCart(producto);
  };
  return (
    <Col className="justify-content-md-center">
      <Card style={{ width: "18rem" }} className="m-2">
        <Card.Img variant="top" src={producto.img}></Card.Img>
        <Card.Body>
          <Card.Title>Producto: {producto.name}</Card.Title>
          <Card.Text>Precio: {producto.price} USD</Card.Text>
          <Card.Text>Stock: {producto.stock} Unidades</Card.Text>
          <Button className="m-2" variant="primary" to={`/item/${producto.id}`} as={Link}>
            Ver detalles
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
