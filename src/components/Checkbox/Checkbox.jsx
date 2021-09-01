import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ checked, onChangeChecked }) => {
  return <input type="checkbox" checked={checked} onChange={onChangeChecked} />;
};

Checkbox.propType = {
  checked: PropTypes.bool,
  onChangeChecked: PropTypes.func,
};

export default Checkbox;
