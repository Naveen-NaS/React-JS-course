import { useState, Fragment } from "react";

function Counter() {
  /* const myStateArray = useState(0); // Basically use state return a array containing two elements in array, 1st elment have value and 2nd element hav changer function which updates the value of variable
  const count = myStateArray[0]; // Value Store
  const setCount = myStateArray[1]; // Changer Function */

  // Instead of using this we can directly create array using inline JS
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count < 100) {
            setCount(count + 1);
          }
        }}
        style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
      >
        Decrease Count
      </button>
      <button
        onClick={() => {
          if (count < 100) {
            // setCount(count + 1);
            // setCount(count + 1); // This is will not work correctly
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }
        }}
        style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
      >
        Increase (By 2)
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            // setCount(count - 1);
            // setCount(count - 1); // This is will not work correctly
            setCount((prev) => prev - 1);
            setCount((prev) => prev - 1);
          }
        }}
        style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
      >
        Decrease (By 2)
      </button>
    </div>
  );
}

export default Counter;
