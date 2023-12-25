import { useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CountComponent = ({ productId }) => {
  const [countItem, setCountItem] = useState(1);
  const { cartItems, setCarItems, addItemToCart, count, setCount } =
    useContext(CartContext);

  const incrementCount = () => setCountItem(countItem + 1);
  const decrementCount = () => setCountItem(countItem - 1);
  //console.log(productId);
  //se va a ejectuar siempre que el componente se monte
  //useEffect es una funcion que se ejecuta cada vez que se renderiza el componente
  //useEffect sin dependecias.
  /* useEffect(() => {
    console.log(count);
    console.log("se ejecuta el useEffect sin dependencias");
  }); */
  // se va a ejecutar la primera vez que el componente se monte
  //useEffect con array de dependecias vacias
  /*  useEffect(() => {
    console.log(count);
    console.log(
      "se ejecuta una unica vez por que tiene dependencias y se renderiza una unica vez"
    );
  }, []); */

  //useEffect con array de dependecias.
  /*  useEffect(() => {
    console.log(count);
    console.log("se ejecuta el useEffect con dependencias");
  }, [count]); */
  const addItem = (productId) => {
    addItemToCart({ id: productId, quantity: countItem });
    setCount(count + countItem);
    //console.log(cartItems);
    //cartItems.filter((item) => item.id !== itemId)
  };

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <h1>{countItem}</h1>
      <button onClick={decrementCount}>-</button>
      <div>
        <button
          onClick={() => {
            addItem(productId);
            setCountItem(1);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CountComponent;
