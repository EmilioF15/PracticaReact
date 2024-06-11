import { getFirestore } from "firebase/firestore";
import { app } from "./config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore(app);

export const getItem = async (id) => {
  try {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw new Error("Failed to get item");
  }
};

export const getItemsByCategory = async (category) => {
  try {
    const q = category
      ? query(collection(db, "items"), where("category", "==", category))
      : collection(db, "items");

    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      items.push({ ...doc.data(), id: doc.id });
    });
    return items;
  } catch (error) {
    console.error("Error getting items by category:", error);
    throw new Error("Failed to get items by category");
  }
};

export const getItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
      console.log(doc.data());
    });
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw new Error("Failed to get items");
  }
};
