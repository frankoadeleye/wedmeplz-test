import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout.component";
import { routes } from "./components/routes/routes.component";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
