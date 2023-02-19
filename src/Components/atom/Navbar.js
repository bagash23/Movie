import React from "react";
import PropTypes from "prop-types";
const Navbar = (props) => {
  console.log(props);
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.age}</span>
    </div>
  );
};

Navbar.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default Navbar;
