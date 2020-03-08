import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Products/Product";
import Account from "../Accounts/Account";
import Login from "../Login/Login";
import Topbar from "../../Components/Topbar/Topbar";

export class Container extends Component {
  render() {
    return (
      <Router>
        <div>
          <Topbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/account" component={Account} />
            <Route path="/product" component={Product} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Container;
