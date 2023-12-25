import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import CountComponent from "../components/CountComponent/CountComponent";

const ItemDetailContainer = () => {
  const { id } = useParams(); //useParams es un hook que nos permite obtener los parametros de la url y asi obtener el id
  const { producto } = useGetProductById(id);
  //console.log(producto);
  return (
    <Card style={{ width: "18rem", margin: "5px" }} /* key={product.id} */>
      <Card.Img variant="top" src={producto.thumbnail} />
      <Card.Body>
        <Card.Title>{producto.title}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>${producto.price}</Card.Text>
        <CountComponent productId={id} />
        {/* <Button variant="primary" onClick={handleClick}>
          BUY
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
