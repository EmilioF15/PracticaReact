//Este es ItemListContainer.jsx
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  console.log(id);

  //Dejar el array de dependencias vacio, asi solo se ejecuta cuando se monta el componente.Si pongo Items ahi, entro en un ciclo infinito
  //Disparo el render cuando cambio Items con setItems (se dispara el use State)
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setItems(data.products);
      });
  }, [id]);

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
