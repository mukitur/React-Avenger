import PropTypes from 'prop-types';

const Avenger = ({ avenger, handleAddToCart }) => {
  const { name, image, salary, age } = avenger;
  return (
    <div className="mb-2 space-y-2 ">
      <div className="font-regular">
        <img className="rounded-md" src={image} alt="" />
        <h3 className="text-lg">Name: {name} </h3>
        <h4>Salary: ${salary}</h4>
        <h4>Age {age}</h4>
        <button
          onClick={() => handleAddToCart(avenger)}
          className="btn bg-blue-500 text-white px-4 py-2 rounded-md mt-3"
        >
          Add
        </button>
      </div>
    </div>
  );
};

Avenger.propTypes = {
  avenger: PropTypes.object.isRequired,
};

export default Avenger;
