function ItemDetail({detail}){

    return(
        <div>
        <p>{detail?.title}</p>
        <p>{detail?.price}</p>
        <p>{detail?.stock}</p>
      </div>
    )

}

export default ItemDetail;