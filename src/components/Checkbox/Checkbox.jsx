import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ isChecked, onChangeChecked }) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChangeChecked}
      className="checkbox"
    />
  );
};

Checkbox.propType = {
  isChecked: PropTypes.bool,
  onChangeChecked: PropTypes.func,
};

export default Checkbox;
