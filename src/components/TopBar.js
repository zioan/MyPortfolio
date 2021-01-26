import React from "react";
import { AiFillGithub } from "react-icons/ai";
import DarkMode from "./DarkMode";

export default function TopBar() {
  return (
    <div className="top-bar">
      <a href="https://github.com/zioan" target="_blank" rel="noreferrer">
        <AiFillGithub className="ico" />
      </a>
      <DarkMode />
    </div>
  );
}
