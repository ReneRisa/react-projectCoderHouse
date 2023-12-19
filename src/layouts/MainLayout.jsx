import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";
import UserData from "../components/UserData/UserData";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBarComponent>
        <CartWidgetComponent />
      </NavBarComponent>
      {/* <UserData
        firstName="Rene"
        lastName="Irias"
        age={31}
        myObject={{
          product: "nuevo producto",
          price: 100,
        }}
      /> */}
      {/* <CountComponent /> */}
    </div>
  );
};

export default MainLayout;
