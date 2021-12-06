import db from "./firebaseConfig";
import { collection, getDocs, query, orderBy, where, doc, getDoc } from "firebase/firestore";

export const firestoreFetchAll = async (idCategory) => {
  let q;
  if(idCategory) {
    q = query(collection(db, "data"), where("categoryId", "==", idCategory));
  } else {
    q = query(collection(db, "data"), orderBy("title"));
  }
  const querySnapshot = await getDocs(q);
  const firestoreData = querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  }));
  return firestoreData;
}

export const firestoreFetchOne = async (idProduct) => {
  const docRef = doc(db, "data", idProduct);
  console.log(docRef);
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    return {
      id: idProduct,
      ...docSnap.data()
    }
  } else {
    console.log("No se encontró el producto.");
  }
}