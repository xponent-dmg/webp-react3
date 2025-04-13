import PropTypes from "prop-types";

function PropHandling({ message }) {
  return (
    <div>
      <h3>Message from Parent:</h3>
      <p>{message}</p>
    </div>
  );
}

PropHandling.propTypes = {
  message: PropTypes.string.isRequired,
};
export default PropHandling;
