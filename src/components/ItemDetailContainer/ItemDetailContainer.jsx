import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div>
      <p>{detail?.title}</p>
      <p>{detail?.price}</p>
      <p>{detail?.stock}</p>
    </div>
  );
}

export default ItemDetailContainer;
