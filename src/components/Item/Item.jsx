// Este componente es el encargado de armar cada tarjeta individual, es un componente de vista
import { Button, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Item({producto}){
    return(
        <Col lg={4}  className="m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={producto.images[0]}></Card.Img>
          <Card.Body>
            <Card.Title>Producto: {producto.title}</Card.Title>
            <Card.Text>Descripcion: {producto.description}</Card.Text>
            <Card.Text>Precio: {producto.price} USD</Card.Text>
            <Card.Text>Stock: {producto.stock} Unidades</Card.Text>
            <Button variant="secondary">Agregar al carro</Button>
          </Card.Body>
        </Card>
      </Col>

    )
}

export default Item;