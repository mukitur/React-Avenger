import { useEffect, useState } from 'react';
import Avenger from '../Avenger/Avenger';

const Home = () => {
  const [avengers, setAvengers] = useState([]);
  useEffect(() => {
    fetch('./api.json')
      .then((res) => res.json())
      .then((data) => setAvengers(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-2xl"> Total: {avengers.length}</h1>
      {avengers.map((avenger) => (
        <Avenger key={avenger.id} avenger={avenger} />
      ))}
    </div>
  );
};

export default Home;
