import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const add = () => setcount((prev) => prev + 1);
  const subtract = () => setcount((prev) => prev - 1);

  // useEffect - Permite executar efeitos colaterais em componentes funcionais!
  // Sintaxe básica
  // useEffect(() => {
  // }, [dependencies]);
  //
  // Dependencies array: 3 ways
  // Empty Dependency Array - useEffect runs only once after the initial render.
  useEffect(() => {
    console.log('useEffect with empty array');
  }, []);
  // No Dependency Array - useEffect will run after every render of the component.
  useEffect(() => {
    console.log('Effect runs after every render');
  });
  // State Variables - When we define a dependency array based on one or more state variables the effect runs when those state variables change
  useEffect(() => {
    console.log(`Value changed to ${count}`);
  }, [count]);

  return (
    <div className="mt-5 px-3 py-4">
      <h1 className="h1 display-1">Counter Component</h1>
      <h2 className="h1 display-1 mt-5 mb-3">{count}</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
          onClick={add}
        >
          Add
        </button>
        <button
          className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2"
          onClick={subtract}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;