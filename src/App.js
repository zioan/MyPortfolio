import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Work from "./components/Work";
import items from "./components/Work/data";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [isDarkMode, setDarkMode] = useState("true");

  const handlerToggle = () => {
    setDarkMode(!isDarkMode);
    console.log("clicked");
  };

  return (
    <div className={`app ${isDarkMode} ? "dark" : ""`}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/work">
              <Work items={items} />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
