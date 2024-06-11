import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader";
import { getItemsByCategory } from "../../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar el loading
  const { cart } = useContext(CartContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true); // Empieza el loading

    const fetchItems = async () => {
      try {
        const products = await getItemsByCategory(id);
        setItems(products);
      } catch (error) {
        console.error("Error fetching items: ", error);
      } finally {
        setLoading(false); // Finaliza el loading
        console.log(items)
      }
    };
    fetchItems();
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
