import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const CartWidgetComponent = () => {
  return (
    <div>
      <Button variant="light">
        🛒
        <Badge pill variant bg="primary">
          3
        </Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
    </div>
  );
};

export default CartWidgetComponent;
