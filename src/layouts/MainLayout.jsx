import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";
import { useGetProducts } from "../hooks/useProducts";
import UserData from "../components/UserData/UserData";

const MainLayout = ({ children }) => {
  const { productos } = useGetProducts(4);
  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      <NavBarComponent>
        <CartWidgetComponent />
      </NavBarComponent>
      <UserData firstName="Rene" lastName="Irias" age={20} />
      <CountComponent />
      <ItemListContainer productos={productos} />
      {children}
    </div>
  );
};

export default MainLayout;
