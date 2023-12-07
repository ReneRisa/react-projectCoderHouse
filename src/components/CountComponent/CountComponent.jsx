import { useState, useEffect } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  //se va a ejectuar siempre que el componente se monte
  //useEffect es una funcion que se ejecuta cada vez que se renderiza el componente
  //useEffect sin dependecias.
  useEffect(() => {
    console.log(count);
    console.log("se ejecuta el useEffect sin dependencias");
  });
  // se va a ejecutar la primera vez que el componente se monte
  //useEffect con array de dependecias vacias
  useEffect(() => {
    console.log(count);
    console.log(
      "se ejecuta una unica vez por que tiene dependencias y se renderiza una unica vez"
    );
  }, []);

  //useEffect con array de dependecias.
  useEffect(() => {
    console.log(count);
    console.log("se ejecuta el useEffect con dependencias");
  }, [count]);

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default CountComponent;
