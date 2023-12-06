import React, { useEffect, useState } from "react";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import CountComponent from "../components/CountComponent/CountComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CartWidgetComponent from "../components/CartWidgetComponent/CartWidgetComponent";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import axios to make HTTP requests(se usa en lugar de fetch)
import axios from "axios";

//llamada a API asyncrona
//forma mas comun

const MainLayout = ({ children }) => {
  /*  const promesa = new Promise((resolve, reject) => {
    const flag = false;
    if (flag) {
      resolve("Promesa resuelta correctamente");
    } else {
      reject("Promesa no resuelta correctamente");
    }
  }); */
  /*  promesa
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    }); */

  /* const array = [1, 2, 3, 4, 5, 6];
  const productsData = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      image: "https://picsum.photos/100",
    },
    {
      id: 2,
      name: "Laptop Apple",
      price: 3000,
      image: "https://picsum.photos/100",
    },
  ]; */
  //const testApi = new Promise((resolve, reject) => {});
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        setProductos([...res.data.products]);
        //console.log(productos);
        return productos;
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
      <ItemListContainer greeting="Item 1" />
      <ItemListContainer greeting="Item 2" />
      <ItemListContainer greeting="Item 3" />
      <ItemListContainer greeting="Rene Irias" />
      <div>
        {productos.map((producto) => (
          <Container key={producto.id}>
            <Row>
              <Col>
                <Image
                  src={producto.images[0]}
                  style={{ width: "171px", height: "180px" }}
                  thumbnail
                ></Image>
              </Col>
              <Col>
                <h1>{producto.title}</h1>
              </Col>
              <Col>
                <h2>${producto.price}</h2>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
      {/* <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ol>
        {productsData.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image} alt="" />
          </li>
        ))}
      </ol> */}
      {children}
    </div>
  );
};

export default MainLayout;
