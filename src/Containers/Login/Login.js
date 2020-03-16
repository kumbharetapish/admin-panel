import React, { Component } from "react";
import { Dashboard_Link } from "../../Utils/Network";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import getResponse from "../../Web Service/WebServices";
import Button from "../../Components/Button/Button";
import LoginFrom from "../../Components/LoginFrom/LoginFrom";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: { username: "", password: "" }
    };
  }

  render() {
    return <LoginFrom />;
  }
}

export default Login;
