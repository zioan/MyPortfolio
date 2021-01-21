import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function TopBar() {
  return (
    <div className="top-bar">
      <a href="https://github.com/zioan" target="_blank">
        <AiFillGithub className="ico" />
      </a>
      <button>Dark Mode</button>
    </div>
  );
}
