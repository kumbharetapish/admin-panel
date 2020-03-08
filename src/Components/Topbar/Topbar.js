import React from "react";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <h2> {"Product Admin"} </h2>
        </Link>
      </div>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/product">Product</Link>
        <Link to="/account">Account</Link>
      </div>

      <div>
        <Link to="/login">
          <span> {"Admin"},</span> <strong>{"Login"} </strong>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
