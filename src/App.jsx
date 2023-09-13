import { useState } from 'react';
import './App.css';
import Carts from './Component/Carts/Carts';
import Home from './Component/Home/Home';

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddToCart = (avenger) => {
    // console.log('cart added soon', avenger);

    const isExists = carts.find((item) => item.id === avenger.id);
    // console.log(isExists);
    let count = avenger.salary;
    if (isExists) {
      alert('Already Added for Avenger Movie');
    } else {
      carts.forEach((item) => {
        count = count + item.salary;
      });
      // console.log(count);

      const newAvenger = [...carts, avenger];
      setCarts(newAvenger);
    }
  };
  return (
    <>
      <div className="flex">
        <Home handleAddToCart={handleAddToCart} />
        <Carts carts={carts} />
      </div>
    </>
  );
}

export default App;
