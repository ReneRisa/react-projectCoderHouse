import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetDocumentById } from "../hooks/useCollection";
import { useParams } from "react-router-dom";
import CountComponent from "../components/CountComponent/CountComponent";

const ServiceDetailContainer = () => {
  const { id } = useParams(); //useParams es un hook que nos permite obtener los parametros de la url y asi obtener el id
  const { datos } = useGetDocumentById("services", id);
  return (
    <Card style={{ width: "18rem", margin: "5px" }} /* key={product.id} */>
      <Card.Img variant="top" src={datos.thumbnail} />
      <Card.Body>
        <Card.Title>{datos.title}</Card.Title>
        <Card.Text>{datos.description}</Card.Text>
        <Card.Text>${datos.price}</Card.Text>
        <CountComponent productId={id} />
        {/* <Button variant="primary" onClick={handleClick}>
      BUY
    </Button> */}
      </Card.Body>
    </Card>
  );
};

export default ServiceDetailContainer;
