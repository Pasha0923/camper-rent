import css from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({
  onClick,
  children,
  style = "primary",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      className={css[style]}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
