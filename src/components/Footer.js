import React from "react";
import { AiFillGithub } from "react-icons/ai";

import DarkMode from "./DarkMode";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/zioan" target="_blank" rel="noreferrer">
        <AiFillGithub className="ico" />
      </a>
      <DarkMode />
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  );
}
