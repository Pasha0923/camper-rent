import PropTypes from "prop-types";
import sprite from "/src/assets/symbol-defs.svg";

const Iconsvg = ({ iconName, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};
Iconsvg.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Iconsvg;
