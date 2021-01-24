import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Ioan from "./me1.png";

export default function Nav() {
  return (
    <nav className="shadow">
      <img src={Ioan} alt="Ioan Zaharia" height="200" width="200" />
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" className="normal">
            Ioan Zaharia
          </NavLink>
        </li>
        <br />
        <li>
          <NavLink exact to="/work" activeClassName="active" className="normal">
            My Work
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
