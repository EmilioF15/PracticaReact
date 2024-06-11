import { getFirestore } from "firebase/firestore";
import { app } from "./config";

import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "items"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

const getItems = async () =>{

}