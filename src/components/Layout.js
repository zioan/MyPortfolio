import React from "react";
import TopBar from "./TopBar";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main>
      <Nav />
      <TopBar />
      <div className="main-area">{children}</div>
      <Footer />
    </main>
  );
}
