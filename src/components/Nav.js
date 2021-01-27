import React from "react";
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
        <li>
          <NavLink
            exact
            to="/curriculum"
            activeClassName="active"
            className="normal"
          >
            Curriculum Vitae
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="normal"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
