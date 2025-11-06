import React, { useState } from 'react';

function OurCounter() {
  // `useState` hook ka istemaal
  const [count, setCount] = useState(0); // `count` variable aur `setCount` function

  // Increment (badhane) ka function
  const increment = () => {
    setCount(count + 1); // `count` ko 1 se badhaana
  };

  // Decrement (ghatane) ka function
  const decrement = () => {
    setCount(count - 1); // `count` ko 1 se ghatana
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default OurCounter;
