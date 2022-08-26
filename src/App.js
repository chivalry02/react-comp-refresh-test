import React, { useEffect, useState } from 'react';
import './style.css';

function Comp() {
  console.log('Comp');
  return <div>Comp</div>;
}

export default function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
      console.log(counter);
      setCounter(counter + 1);
    }, 2000);
  }, []);
  return (
    <div>
      <div>{counter}</div>
      <Comp />
    </div>
  );
}
