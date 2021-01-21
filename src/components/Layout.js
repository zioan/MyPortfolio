import React from "react";
import TopBar from "./TopBar";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }, items) {
  return (
    <main>
      <Nav items={items} />
      <TopBar />
      <div className="main-area">{children}</div>
      <Footer />
    </main>
  );
}
