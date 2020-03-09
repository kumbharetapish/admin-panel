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
      addClass: false,
      link: [Dashboard_Link, Product_Link, Account_Link],
      linkCSS: ""
    };
  }

  toggle = () => {
    this.setState({ addClass: !this.state.addClass });
  };

  render() {
    const linkCSS = ["navLink"];
    if (this.state.addClass) {
      linkCSS.push("navLinkClick");
    }
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
              onClick={this.toggle}
              to={Dashboard_Link}
              className={TopbarStyle.navLink}
            >
              <i className="fas fa-tachometer-alt"></i>
              <samp>{"Dashboard"}</samp>
            </Link>
            <Link
               onClick={this.toggle}
               to={Product_Link}
               className={TopbarStyle.navLink}
            >
              <i className="fas fa-shopping-cart"></i>
              <samp> {"Product"} </samp>
            </Link>
            <Link
              onClick={this.toggle}
              to={Account_Link}
              className={TopbarStyle.navLink}
            >
              <i className="fas fa-user"></i>
              <samp>{"Account"} </samp>
            </Link>
          </div>

          <div className={TopbarStyle.statusWrapper}>
            <Link to={Login_Link}>
              <span> {"Admin"},</span> <strong>{"Login"} </strong>{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Topbar;
