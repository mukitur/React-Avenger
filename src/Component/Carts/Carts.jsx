import Cart from '../Cart/Cart';

const Carts = ({ carts, remaining, totalCost }) => {
  //   console.log(carts);
  return (
    <div className="w-1/3 ">
      <div className="border px-6 py-3">
        <h3>Total Select: {carts.length}</h3>
        <h5>Total Budjet: $25000</h5>
        <p> Remaining: {remaining}</p>
        <h5>Total Cost: {totalCost}</h5>
      </div>

      {carts.map((cart, idx) => (
        <Cart key={idx} remaining={remaining} cart={cart} />
      ))}
    </div>
  );
};

export default Carts;
