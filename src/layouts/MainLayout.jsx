import React from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";

const MainLayout = ({ children }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <CountComponent />
      {children}
    </div>
  );
};

export default MainLayout;
