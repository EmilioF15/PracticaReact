import { getFirestore } from "firebase/firestore";
import { app } from "./config";

import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

 export const getItems = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};
