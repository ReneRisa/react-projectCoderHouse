import { useState } from "react";

//Components
import MainRouter from "./router/MainRouter";

import { useEffect } from "react";
//Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //to change the title of the page(tab in the browser)
  useEffect(() => {
    document.title = "CMR Cleaning Services";
  });

  return (
    <div style={{ width: "80vw", height: "100vh" }}>
      <MainRouter />
    </div>
  );
}

export default App;
