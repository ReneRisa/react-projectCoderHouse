import React from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";

const MainLayout = ({ children }) => {
  const promesa = new Promise((resolve, reject) => {
    const flag = false;
    if (flag) {
      resolve("Promesa resuelta correctamente");
    } else {
      reject("Promesa no resuelta correctamente");
    }
  });
  promesa
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      <NavBarComponent>
        <CartWidgetComponent />
      </NavBarComponent>
      <CountComponent />
      <ItemListContainer greeting="Item 1" />
      <ItemListContainer greeting="Item 2" />
      <ItemListContainer greeting="Item 3" />
      <ItemListContainer greeting="Rene Irias" />
      {children}
    </div>
  );
};

export default MainLayout;
