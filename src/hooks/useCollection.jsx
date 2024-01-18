import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const useGetDocumentById = (collectionName = "services", id) => {
  const [datos, setDatos] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const collectionData = collection(db, collectionName);
    const docData = doc(collectionData, id);
    getDoc(docData)
      .then((response) => {
        console.log(response);
        setDatos({ ...response.data(), id: response.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return { datos };
};

export const useGetCollectionDocuments = (collectionName = "services") => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const collectionData = collection(db, collectionName);
    getDocs(collectionData)
      .then((response) => {
        console.log(response);
        setDatos(
          // siempre que traigamos una coleccion entera de firebase, siempre sera de esta forma
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { datos };
};
