import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({detail}){

    return(
        <div>
        <p>{detail.name}</p>
        <p>{detail.price}</p>
        <ItemCount initial={1} stock={detail?.stock} />
      </div>
    )

}

export default ItemDetail;