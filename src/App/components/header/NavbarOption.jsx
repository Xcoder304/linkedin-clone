import React from "react";
import { NavLink } from "react-router-dom";

const NavbarOption = ({ Link, Icon, Name }) => {
  return (
    <NavLink to={Link} style={{ textDecoration: "none" }}>
      <li>
        <Icon className="icon" />
        <p>{Name}</p>
        <span></span>
      </li>
    </NavLink>
  );
};

export default NavbarOption;
