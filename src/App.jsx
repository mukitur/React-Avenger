import { useState } from 'react';
import './App.css';
import Carts from './Component/Carts/Carts';
import Home from './Component/Home/Home';

function App() {
  const [carts, setCarts] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

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
      const totalRemaining = 20000 - count;

      if (count > 20000) {
        return alert('Budjet over');
      } else {
        setTotalCost(count);
        setRemaining(totalRemaining);
        const newAvenger = [...carts, avenger];
        setCarts(newAvenger);
      }
    }
  };
  return (
    <>
      <div className="flex">
        <Home handleAddToCart={handleAddToCart} />
        <Carts carts={carts} remaining={remaining} totalCost={totalCost} />
      </div>
    </>
  );
}

export default App;
