import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function TopBar() {
  return (
    <div className="top-bar">
      <AiFillGithub className="ico" />
      <button>Dark Mode</button>
    </div>
  );
}
