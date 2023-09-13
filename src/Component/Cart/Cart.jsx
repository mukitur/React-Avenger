const Cart = ({ cart }) => {
  const { name, image } = cart;
  //   console.log(cart);
  return (
    <div className="mt-6">
      <div className="flex gap-4 items-center border bg-gray-200 rounded-lg p-4 w-2/4">
        <img className="w-1/5 rounded-md mt-2" src={image} alt="" />
        <h2 className="text-bold"> {name}</h2>
      </div>
    </div>
  );
};

export default Cart;
