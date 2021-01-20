import "./App.css";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Work from "./components/Work";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
