import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" className="normal">
            Ioan Zaharia
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/work" activeClassName="active" className="normal">
            Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
