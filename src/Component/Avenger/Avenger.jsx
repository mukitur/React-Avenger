import PropTypes from 'prop-types';

const Avenger = ({ avenger }) => {
  const { name, image, salary, age } = avenger;
  return (
    <div>
      <img src={image} alt="" />
      <h3>Name: {name} </h3>
      <h4>Salary: {salary}</h4>
      <h4>Age {age}</h4>
    </div>
  );
};

Avenger.propTypes = {
  avenger: PropTypes.object.isRequired,
};

export default Avenger;
