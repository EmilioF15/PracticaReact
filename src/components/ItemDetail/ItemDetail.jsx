import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ detail }) {
  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div>
      <h2>{detail.name}</h2>
      <img src={detail.img}/>
      <h3>Precio :{detail.price} USD</h3>
      <ItemCount initial={1} stock={detail?.stock} onAdd={handleAdd} item={detail} />
    </div>
  );
}

export default ItemDetail;
