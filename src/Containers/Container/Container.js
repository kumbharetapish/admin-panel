import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Dashboard_Link,
  Product_Link,
  Account_Link,
  Login_Link,
  Add_New_Link,
} from "../../Utils/Network";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Products/Product";
import Account from "../Accounts/Account";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import Login from "../Login/Login";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import { connect } from "react-redux";

export class Container extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Topbar />

          <Switch>
            <Route
              exact
              path={Dashboard_Link}
              render={(data) =>
                this.props.loginStatus ? (
                  <Dashboard {...data} />
                ) : (
                  <Redirect to={Login_Link} />
                )
              }
            />
            <Route path={Product_Link} component={Product} />
            <Route path={Account_Link} component={Account} />
            <Route
              path={Login_Link}
              render={(routeProps) => <Login {...routeProps} />}
            />
            <Route path={Add_New_Link} component={AddNewProduct} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.counter, loginStatus: state.status };
};

export default connect(mapStateToProps)(Container);
