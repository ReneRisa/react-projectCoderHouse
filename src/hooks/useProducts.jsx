import { useState, useEffect } from "react";
import { getProducts } from "../services";

/**
 * @function useGetProducts
 * @description Custom hook to get the products
 * @param {number} limit
 * @returns {Array}
 */
export const useGetProducts = (limit = 10) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProducts(limit)
      .then((response) => {
        setProductos(response.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { productos };
};
