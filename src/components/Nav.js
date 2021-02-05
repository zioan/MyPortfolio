import React from "react";
import { NavLink } from "react-router-dom";
import Ioan from "./ioan.jpeg";
import Footer from "./Footer";

import { RiHome8Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { RiBriefcase2Line } from "react-icons/ri";
import { RiGitRepositoryLine } from "react-icons/ri";
import { RiMailOpenLine } from "react-icons/ri";

export default function Nav() {
  return (
    <nav>
      <div>
        <img src={Ioan} alt="Ioan Zaharia" height="200" width="200" />
        <h2 className="name">IOAN ZAHARIA</h2>
      </div>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active" className="normal">
            <RiHome8Line className="menu-icon" />
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/work" activeClassName="active" className="normal">
            <RiBriefcase2Line className="menu-icon" />
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/curriculum"
            activeClassName="active"
            className="normal"
          >
            <RiGitRepositoryLine className="menu-icon" />
            RESUME
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="normal"
          >
            <RiMailOpenLine className="menu-icon" />
            CONTACT
          </NavLink>
        </li>
      </ul>

      <Footer />
    </nav>
  );
}
