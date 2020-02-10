import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./mainHeader/Header";
import Dashboard from "./dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
