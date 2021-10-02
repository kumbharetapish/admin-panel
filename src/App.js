import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Footer from "../src/Components/Footer/Footer";
import Topbar from "../src/Components/Topbar/Topbar";
import Account from "../src/Containers/Accounts/Account";
import AddNewProduct from "../src/Containers/AddNewProduct/AddNewProduct";
import Dashboard from "../src/Containers/Dashboard/Dashboard";
import Login from "../src/Containers/Login/Login";
import Product from "../src/Containers/Products/Product";
import {
  Account_Link,
  Add_New_Link,
  Dashboard_Link,
  Login_Link,
  Product_Link,
} from "../src/Utils/Network";

function App(props) {
  return (
    <Router>
      <div className="container">
        <Topbar />

        <Switch>
          <Route
            exact
            path={Dashboard_Link}
            render={(data) =>
              props.loginStatus ? <Dashboard {...data} /> : <Redirect to={Login_Link} />
            }
          />
          <Route path={Product_Link} component={Product} />
          <Route path={Account_Link} component={Account} />
          <Route path={Login_Link} render={(routeProps) => <Login {...routeProps} />} />
          <Route path={Add_New_Link} component={AddNewProduct} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { count: state.counter, loginStatus: state.status };
};

export default connect(mapStateToProps)(App);
