import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Category from "../pages/Category";

NavBarComponent;
const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent>
        <CartWidgetComponent />
      </NavBarComponent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

//examples
//https://myappp.com/ ---> Home
//https://myappp.com/productos/ ---> Productos
