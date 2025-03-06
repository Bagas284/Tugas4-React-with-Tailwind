import Proptypes from "prop-types";
import classNames from "classnames";

export const Button = ({
  message,
  onClick,
  type = "",
  color,
  disabled = false,
}) => {
  const styleButton = classNames(`rounded-lg px-4 py-2 text-white `, {
    "btn-green": color == "green" && !disabled,
    "btn-red": color == "red" && !disabled,
    "btn-blue": color == "blue" && !disabled,
    "btn-disable": disabled,
  });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styleButton}
    >
      {message}
    </button>
  );
};

Button.propTypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  disabled: Proptypes.bool.isRequired,
  message: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
