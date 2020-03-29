import React, { Component } from "react";
import { Dashboard_Link } from "../../Utils/Network";
import LoginFrom from "../../Components/LoginFrom/LoginFrom";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: { username: "", password: "" }
    };
  }

  randerDashboard = () => {
    this.props.history.push(Dashboard_Link);
  };

  render() {
    return <LoginFrom rander={this.randerDashboard} />;
  }
}

export default Login;
