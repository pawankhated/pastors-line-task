import React from 'react';
import { Link } from 'react-router-dom';
const ButtonNav = (children) => {
  return (
<div className="button-container d-flex justify-content-center align-items-center w-100">
<div className="text-center">
<Link to="/buttonA">
  <button className=" m-2 buttonA button">Button A</button>
  </Link>

  <Link to="/buttonB">
  <button className=" m-2 buttonB button">Button B</button>
  </Link>
  
</div>
</div>

  );
};

export default ButtonNav;
