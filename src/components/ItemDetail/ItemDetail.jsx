import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({detail}){

    return(
        <div>
        <p>{detail?.title}</p>
        <p>{detail?.price}</p>
        <p>{detail?.stock}</p>
        <ItemCount initial={1} stock={detail?.stock} onAdd={handleAddToCart} />
      </div>
    )

}

export default ItemDetail;