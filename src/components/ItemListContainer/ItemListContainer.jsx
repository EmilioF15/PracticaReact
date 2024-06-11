import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { getItems } from "../../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar el loading
  const { cart } = useContext(CartContext);
  console.log("esto es el valor del context", cart);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true); // Empieza el loading
    if (id) {
      fetch(`https://dummyjson.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.products);
          setItems(data.products);
          setLoading(false); // Termina el loading
        });
    } else {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.products);
          setItems(data.products);
          setLoading(false); // Termina el loading
        });
    }
  }, [id]);

  return (
    <Container fluid>
      <Row>
        {loading ? <Loader loading={true} /> : <ItemList productos={items} />}
      </Row>
    </Container>
  );
}

export default ItemListContainer;
