import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const useGetCollectionByCategory = (
  collectionName = "services",
  name
) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const collectionData = collection(db, collectionName);
    const categoryQuery = query(collectionData, where("category", "==", name));
    getDocs(categoryQuery)
      .then((response) => {
        console.log(response);
        setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return { data };
};

export const useGetDocumentById = (collectionName = "services", id) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const db = getFirestore();
    const collectionData = collection(db, collectionName);
    const docData = doc(collectionData, id);
    getDoc(docData)
      .then((response) => {
        console.log(response);
        setData({ ...response.data(), id: response.id });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return { data };
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
