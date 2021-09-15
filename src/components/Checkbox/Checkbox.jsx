import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ isChecked, onChangeChecked }) => {
  return (
    <input type="checkbox" checked={isChecked} onChange={onChangeChecked} />
  );
};

Checkbox.propType = {
  isChecked: PropTypes.bool,
  onChangeChecked: PropTypes.func,
};

export default Checkbox;
