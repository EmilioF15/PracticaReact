import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ItemListContainer() {
  const productos = [
    { id: 1, name: "Testing", des: "Descripcion", price: 45, stock: 40 },
    { id: 2, name: "Testing 2", des: "Descripcion 2", price: 35, stock: 4 },
  ];

  return (
    <div>
    Testing
      {productos.map(producto=>
        (<Card style={{ width: "18rem" }} key={producto.id}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Cj00c0IaeuqmsDcej3W3_A19Vxg19KLXlQ&s"
        />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>{producto.des}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
      )}
    </div>
  );
}

export default ItemListContainer;
