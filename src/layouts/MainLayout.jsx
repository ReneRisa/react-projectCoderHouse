import React from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const MainLayout = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <CountComponent />
      <ItemListContainer greeting="Item 1" />
      <ItemListContainer greeting="Item 2" />
      <ItemListContainer greeting="Item 3" />
      {children}
    </div>
  );
};

export default MainLayout;
