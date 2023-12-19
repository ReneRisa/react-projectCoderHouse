import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";
import { useEffect } from "react";

const Home = () => {
  //to change the title of the page(tab in the browser)
  //El icono de la pagina se cambia en la carpeta public en el archivo index.html
  useEffect(() => {
    document.title = "CMR Cleaning Services - Home";
  });
  const { productos } = useGetProducts(8);
  /* useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (Math.ceil(scrolled) === scrollable) {
        console.log("bottom");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    }; 
  }); */
  return (
    <div>
      <ItemListContainer productos={productos} />
    </div>
  );
};

export default Home;
