//Este es ItemList.jsx
//Este componente sera el encargado de recorrer el array de Items.
import Item from "../Item/Item"

function ItemList({ productos }) {
  return (
    <>
      {productos.map((producto) => (
        <Item producto ={producto} key={producto.id}></Item>
  
      ))}
    </>
  );
}

export default ItemList;
