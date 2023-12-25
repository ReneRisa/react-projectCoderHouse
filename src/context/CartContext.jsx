import React, { createContext, useState } from "react";

// Create the CartContext
export const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  // State to store the cart items
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0); //para el contador de items en el carrito
  console.log(cartItems);
  // Function to add an item to the cart
  const addItemToCart = (item) => {
    if (cartItems.find((cartItem) => cartItem.id === item.id)) {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        }
        return cartItem;
      });
      setCartItems(newCartItems);
      //return;
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Value object to be passed to consumers of the CartContext
  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  // Render the CartProvider with the cartContextValue and children components
  return (
    <CartContext.Provider value={{ count, setCount, addItemToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
