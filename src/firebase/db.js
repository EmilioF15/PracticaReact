import { getFirestore } from "firebase/firestore";
import { app } from "./config";

import { collection, getDocs ,query, where } from "firebase/firestore";

export const getItemsByCateogry = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

const db = getFirestore(app);

export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};
