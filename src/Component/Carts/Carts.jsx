import Cart from '../Cart/Cart';

const Carts = ({ carts }) => {
  //   console.log(carts);
  return (
    <div className="w-1/3">
      <h3>Total Select : {carts.length}</h3>
      {carts.map((cart, idx) => (
        <Cart key={idx} cart={cart} />
      ))}
    </div>
  );
};

export default Carts;
