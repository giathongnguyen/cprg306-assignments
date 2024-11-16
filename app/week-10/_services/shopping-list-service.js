import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const itemsQuery = query(itemsRef);
        const querySnapshot = await getDocs(itemsQuery);

        const mappedItems = querySnapshot.docs.map(postDoc => ({
            id: postDoc.id,
            ...postDoc.data()
          }));
      
          return mappedItems;
    } catch (error) {
        console.error("Error getting documents: ", error);
    };
}

export const addItem = async (item, userId) => {
    try {
        const itemsRef = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemsRef, item);

        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
    };
}