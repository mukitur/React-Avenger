import { useEffect, useState } from 'react';
import Avenger from '../Avenger/Avenger';

const Home = ({ handleAddToCart }) => {
  const [avengers, setAvengers] = useState([]);
  useEffect(() => {
    fetch('./api.json')
      .then((res) => res.json())
      .then((data) => setAvengers(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-2xl"> Total Avengers: {avengers.length}</h1>
      <div className="grid md:grid-cols-3 gap-6 my-5">
        {avengers.map((avenger) => (
          <Avenger
            key={avenger.id}
            handleAddToCart={handleAddToCart}
            avenger={avenger}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
