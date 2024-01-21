import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetDocumentById } from "../hooks/useCollection";
import { useParams, Link } from "react-router-dom";
import CountComponent from "../components/CountComponent/CountComponent";

const ServiceDetailContainer = () => {
  const { id } = useParams(); //useParams es un hook que nos permite obtener los parametros de la url y asi obtener el id
  const { data } = useGetDocumentById("services", id);

  return (
    <Card style={{ width: "18rem", margin: "5px" }} /* key={product.id} */>
      <Card.Img variant="top" src={data.thumbnail} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>${data.price}</Card.Text>
        <CountComponent productId={id} />
        <Button variant="link">
          <Link to={`/update-service/${id}`}>Update Service</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetailContainer;
