import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Category from "../pages/Category";
import Services from "../pages/Services";
import ServiceDetailContainer from "../pages/ServiceDetailContainer";
import CreateService from "../pages/CreateService";
import UpdateService from "../pages/UpdateService";
import CategoryService from "../pages/CategoryService";

NavBarComponent;
const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetailContainer />} />
        <Route path="/create-service/" element={<CreateService />} />
        <Route path="/update-service/:id" element={<UpdateService />} />
        <Route path="/categoryServices/:name" element={<CategoryService />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;

//examples
//https://myappp.com/ ---> Home
//https://myappp.com/productos/ ---> Productos
