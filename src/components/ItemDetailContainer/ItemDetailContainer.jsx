import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../../firebase/db";

function ItemDetailContainer() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAndSetItemDetail = async (id) => {
      try {
        const itemDetail = await getItem(id);
        setDetail(itemDetail);
        console.log(itemDetail);
      } catch (error) {
        console.error("Failed to fetch item detail:", error);
      }
    };

    if (id) {
      getAndSetItemDetail(id);
    }
  }, [id]);

  return (
    <div>
      {detail ? <ItemDetail detail={detail} /> : <p>Loading...</p>}
    </div>
  );
}

export default ItemDetailContainer;
