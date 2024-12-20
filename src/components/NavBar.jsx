import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="navbar">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/actors">Actors</NavLink>
    <NavLink to="/directors">Directors</NavLink>
  </div>
);

export default NavBar;



