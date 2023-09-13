const Cart = ({ cart }) => {
  const { name, image } = cart;
  //   console.log(cart);
  return (
    <div className="mt-6">
      <h2 className="text-bold"> {name}</h2>
      <img className="w-1/5 rounded-md mt-2" src={image} alt="" />
    </div>
  );
};

export default Cart;
