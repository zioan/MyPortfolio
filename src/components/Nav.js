import React, { useState } from "react";
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
        <h3>My Work</h3>
        <li>
          <NavLink exact to="/work" activeClassName="active" className="normal">
            HTML & CSS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
