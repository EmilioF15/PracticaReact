import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const productos = [
    { id: 1, name: "Testing", des: "Descripcion", price: 45, stock: 40 },
    { id: 2, name: "Testing 2", des: "Descripcion 2", price: 20, stock: 4 },
    { id: 3, name: "Testing 3", des: "Descripcion", price: 30, stock: 400 },
    { id: 4, name: "Testing 4", des: "Descripcion 2", price: 50, stock: 14 },
  ];

  return (
    <Container fluid>
      Testing
      <Row>
      <ItemList productos ={productos}></ItemList>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
