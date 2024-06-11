import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(
    () => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    },
    [id])
  ;

  return (
    <ItemDetail detail={detail}/>
 
  );
}

export default ItemDetailContainer;
