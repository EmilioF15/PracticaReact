import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ detail }) {
  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} items to cart`);
  };

  return (
    <div>
      <p>{detail.name}</p>
      <p>{detail.price}</p>
      <ItemCount initial={1} stock={detail?.stock} onAdd={handleAdd} item={detail} />
    </div>
  );
}

export default ItemDetail;
