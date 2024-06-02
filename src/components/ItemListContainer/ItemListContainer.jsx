//Este es ItemListContainer.jsx
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";

function ItemListContainer() {
  const productos = [
    { id: 1, name: "Testing", des: "Descripcion", price: 45, stock: 40 },
    { id: 2, name: "Testing 2", des: "Descripcion 2", price: 20, stock: 4 },
    { id: 3, name: "Testing 3", des: "Descripcion", price: 30, stock: 400 },
    { id: 4, name: "Testing 4", des: "Descripcion 2", price: 50, stock: 14 },
  ];

  const [items, setItems] = useState([]);

  

  //Dejar el array de dependencias vacio, asi solo se ejecuta cuando se monta el componente.Si pongo Items ahi, entro en un ciclo infinito
  //Disparo el render cuando cambio Items con setItems (se dispara el use State)
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    });
    promise.then((resp) => setItems(resp));
  }, []);

  return (
    <Container fluid>
      Testing
      <Row>
        <ItemList productos={items}></ItemList>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
