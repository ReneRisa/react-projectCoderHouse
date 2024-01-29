import { useState, useEffect } from "react";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "../services";

/**
 * @function useGetProducts
 * @description Custom hook to get the products
 * @param {number} limit
 * @returns {Array}
 */
export const useGetProducts = (limit = 10) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getProducts(limit)
        .then((response) => {
          console.log(response);
          setProductos(response.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 400);
  }, []);
  return { productos };
};

export const useGetProductById = (id) => {
  const [producto, setProducto] = useState({});
  useEffect(() => {
    getProductById(id)
      .then((response) => {
        console.log(response);
        setProducto(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { producto };
};

export const useGetProductsByCategory = (category) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => {
        console.log(response);
        setProductos(response.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]); //<-- category is a dependency of the useEffect(evrery time category changes, useEffect will be executed)
  return { productos };
};
