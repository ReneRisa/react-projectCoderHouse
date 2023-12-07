import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";

// import axios to make HTTP requests(se usa en lugar de fetch)
import axios from "axios";

const MainLayout = ({ children }) => {
  const [productos, setProductos] = useState([]);
  //llamada a API asyncrona
  //forma mas comun
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProductos([...res.data.products]);
        //return productos;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    fetchData();
  }, []);

  console.log(productos);
  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      <NavBarComponent>
        <CartWidgetComponent />
      </NavBarComponent>
      <CountComponent />
      <ItemListContainer productos={productos} />
      {children}
    </div>
  );
};

export default MainLayout;
