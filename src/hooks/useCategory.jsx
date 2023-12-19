import React from "react";
import { useEffect, useState } from "react";
import { fetchCategories } from "../services";

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        console.log(response);
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { categories };
};
