import './App.css';
import Carts from './Component/Carts/Carts';
import Home from './Component/Home/Home';

function App() {
  return (
    <>
      <div className="flex">
        <Home />
        <Carts />
      </div>
    </>
  );
}

export default App;
