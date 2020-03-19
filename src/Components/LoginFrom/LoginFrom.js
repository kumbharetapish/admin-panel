import React, { Component } from "react";
import * as EmailValidator from "email-validator";
import LoginFromStyle from "./LoginFrom.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
export class LoginFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDate: { username: "", password: "" }
    };
  }

  getFromResponse = e => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log(formData);
  };

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Required"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum.")
            .matches(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
              "Password must contain a number.Should be uppercase , lowercase letter and number."
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

export default LoginFrom;
