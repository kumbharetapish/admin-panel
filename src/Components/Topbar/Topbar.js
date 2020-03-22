import React, { Component } from "react";
import TopbarStyle from "./Topbar.module.css";
import {
  Dashboard_Link,
  Product_Link,
  Account_Link,
  Login_Link
} from "../../Utils/Network";
import { Link } from "react-router-dom";
class Topbar extends Component {
  constructor(props) {
    super(props);
    this.myLink = React.createRef();
    this.state = {
      barClick: true
    };
  }

  clickBar = () => {
    this.setState({ barClick: !this.state.barClick });
  };

  render() {
    const dropDown = (
      <div className={TopbarStyle.sideBarNavigation}>
        <Link to={Dashboard_Link}> Dashboard </Link>
        <Link to={Product_Link}>Product</Link>
        <Link to={Account_Link}>Account</Link>
      </div>
    );
    return (
      <div className={TopbarStyle.topbarWrapper}>
        <div className={TopbarStyle.topbar}>
          <div className={TopbarStyle.logoWrapper}>
            <Link to={Dashboard_Link}>
              <h2> {"Product Admin"} </h2>
            </Link>
          </div>
          <div className={TopbarStyle.navWrapper}>
            <Link
              to={Dashboard_Link}
              className={
                window.location.pathname === Dashboard_Link
                  ? TopbarStyle.navLinkClick
                  : TopbarStyle.navLink
              }
            >
              <i className="fas fa-tachometer-alt"></i>
              <samp>{"Dashboard"}</samp>
            </Link>
            <Link
              to={Product_Link}
              className={
                window.location.pathname === Product_Link
                  ? TopbarStyle.navLinkClick
                  : TopbarStyle.navLink
              }
            >
              <i className="fas fa-shopping-cart"></i>
              <samp> {"Product"} </samp>
            </Link>

            <Link
              to={Account_Link}
              className={
                window.location.pathname === Account_Link
                  ? TopbarStyle.navLinkClick
                  : TopbarStyle.navLink
              }
            >
              <i className="fas fa-user"></i>
              <samp>{"Account"} </samp>
            </Link>
          </div>

          <div className={TopbarStyle.statusWrapper}>
            <div className={TopbarStyle.Sidebar} onClick={this.clickBar}>
              <i class="fas fa-bars"></i>
              {this.state.barClick ? "" : dropDown}
            </div>
            <Link to={Login_Link}>
              <span> {"Admin"}</span> <strong>{"Login"} </strong>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Topbar;
