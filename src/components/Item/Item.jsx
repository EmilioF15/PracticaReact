// Este componente es el encargado de armar cada tarjeta individual, es un componente de vista
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Item({producto}){
    return(
        <Col lg={4}  className="m-2">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Cj00c0IaeuqmsDcej3W3_A19Vxg19KLXlQ&s"
          />
          <Card.Body>
            <Card.Title>Producto: {producto.name}</Card.Title>
            <Card.Text>Descripcion: {producto.des}</Card.Text>
            <Card.Text>Precio: {producto.price}</Card.Text>
            <Card.Text>Stock: {producto.stock}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

    )
}

export default Item;