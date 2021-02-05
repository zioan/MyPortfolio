import React from "react";
import Nav from "./Nav";

export default function Layout({ children }, items) {
  return (
    <main>
      <Nav items={items} />
      <div className="main-area">{children}</div>
    </main>
  );
}
