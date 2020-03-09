import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Dashboard_Link,
  Product_Link,
  Account_Link,
  Login_Link
} from "../../Utils/Network";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Products/Product";
import Account from "../Accounts/Account";
import Login from "../Login/Login";
import Topbar from "../../Components/Topbar/Topbar";

export class Container extends Component {
  constructor(props) {
    super(props);
    console.log("constructor Container");
  }

  render() {
    console.log("Render Container");
    return (
      <Router>
        <div className="container">
          <Topbar />
          <Switch>
            <Route exact path={Dashboard_Link} component={Dashboard} />
            <Route path={Product_Link} component={Product} />
            <Route path={Account_Link} component={Account} />
            <Route path={Login_Link} component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Container;
