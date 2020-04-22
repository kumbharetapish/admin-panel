import React, { Component } from "react";
import LoginFromStyle from "./LoginFrom.module.css";
import { Formik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Dashboard_Link } from "../../Utils/Network";
import getResponse from "../../Web Service/WebServices";

export class LoginFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: { username: "", password: "" },
      loginStatus: props.loginStatus,
      path: Dashboard_Link,
      userName: ""
    };
  }

  getFromResponse = e => {
    getResponse()
      .then(response => {
        var user = Object.entries(response.accountsPage).filter(data => {
          return data[1].email === e.email && data[1].password === e.password;
        });
        if (
          user[0][1].email === e.email &&
          user[0][1].password === e.password
        ) {
          console.log(e);
          this.props.handleLogin(user[0][0]);
          localStorage.setItem("userName", user[0][0]);
          this.props.rander();
        } else {
          alert("Wrong Password or Invalid  Email");
        }
      })
      .catch(err => {
        alert("Wrong Password or Invalid  Email");
        console.log(err);
      });
  };

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            this.getFromResponse(values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password should be 8 chars minimum.")
            .matches(
              /(?=.*\d)(?=.*[a-z]).{8,}/,
              "Password must have lowercase letter and number."
            )
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;
          return (
            <div className={LoginFromStyle.loginFromContainer}>
              <div className={LoginFromStyle.headingWrapper}>
                <h1> Welcome to Dashboard, Login</h1>
              </div>
              <div className={LoginFromStyle.fromWrapper}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">
                    Email
                    <input
                      name="email"
                      type="text"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email && touched.email && "error"}
                      required
                    />
                    {errors.email && touched.email && (
                      <p className={LoginFromStyle.inputFeedback}>
                        {errors.email}
                      </p>
                    )}
                  </label>

                  <label htmlFor="password">
                    Password
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error"}
                      required
                    />
                    {errors.password && touched.password && (
                      <p className={LoginFromStyle.inputFeedback}>
                        {errors.password}{" "}
                      </p>
                    )}
                  </label>

                  <button
                    type="submit"
                    className={LoginFromStyle.button}
                    disabled={isSubmitting}
                    // path={Dashboard_Link}
                  >
                    Login
                  </button>

                  <button
                    onClick={() => this.props.history.push("/")}
                    type="submit"
                    className={LoginFromStyle.button}
                    disabled={isSubmitting}
                  >
                    Forgot your password?
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: name => dispatch({ type: "LOGIN_STATUS", username: name })
  };
};

const mapStateToProps = state => {
  return { loginStatus: state.status };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom);
