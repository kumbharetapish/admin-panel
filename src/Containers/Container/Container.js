import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Dashboard_Link,
  Product_Link,
  Account_Link,
  Login_Link,
  Add_New_Link
} from "../../Utils/Network";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Products/Product";
import Account from "../Accounts/Account";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import Login from "../Login/Login";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";

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
          {console.log("inside Router")}
          <Switch>
            <Route exact path={Dashboard_Link} component={Dashboard} />
            <Route path={Product_Link} component={Product} />
            <Route path={Account_Link} component={Account} />
            <Route path={Login_Link} component={Login} />
            <Route path={Add_New_Link} component={AddNewProduct} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Container;
