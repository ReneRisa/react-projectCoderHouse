import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidgetComponent = () => {
  const { count, setCount } = useContext(CartContext);
  console.log(count);
  return (
    <div
    /* className={`cartWidgetContainer ${
        count <= 0
          ? "cartWidgetContainerBackground"
          : "cartWidgetContainerBackground2"
      }`} */
    >
      <Button variant="light">
        🛒
        <Badge pill variant bg="primary">
          {count}
        </Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
    </div>
  );
};

export default CartWidgetComponent;
