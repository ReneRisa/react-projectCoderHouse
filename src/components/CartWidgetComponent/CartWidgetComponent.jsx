import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidgetComponent = () => {
  const { count } = useContext(CartContext);
  return (
    <div>
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
