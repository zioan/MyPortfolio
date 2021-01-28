import React from "react";
import "./components/DarkMode.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Work from "./components/Work";
import Contact from "./components/Contact";
import items from "./components/Work/projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Curriculum from "./components/Curriculum/Curriculum";

function App() {
  return (
    <div className="shadow">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/work">
              <Work items={items} />
            </Route>
            <Route path="/curriculum">
              <Curriculum />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
