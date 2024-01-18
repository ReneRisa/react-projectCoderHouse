import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const ServiceListContainer = (props) => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {/* Tecnica de renderizado para decirle que esta cargando los productos y
      cuando se cargan que se muestren  */}
        {props.services.length === 0 ? (
          <LoadingComponent />
        ) : (
          props.services.map((service) => (
            //<Col key={producto.id} s={8} md={6} lg={4} xl={4}>
            <Card style={{ width: "18rem", margin: "5px" }} key={service.id}>
              <Link to={`/service/${service.id}`}>
                <Card.Img variant="top" src={service.thumbnail} />
              </Link>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text>${service.price}</Card.Text>
                <Button variant="primary" onClick={handleClick}>
                  More Info
                </Button>
              </Card.Body>
            </Card>
            //</Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ServiceListContainer;
