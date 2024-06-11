//Este es ItemListContainer.jsx
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const {cart} = useContext(CartContext)
  console.log("esto es el valor del context",cart);
  const { id } = useParams();
  console.log(id);

  //Dejar el array de dependencias vacio, asi solo se ejecuta cuando se monta el componente.Si pongo Items ahi, entro en un ciclo infinito
  //Disparo el render cuando cambio Items con setItems (se dispara el use State)
  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.products);
          setItems(data.products);
        });
    } else {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.products);
          setItems(data.products);
        });
    }
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
