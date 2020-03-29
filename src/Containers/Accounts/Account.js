import React, { Component } from "react";
import AccountStyle from "./Accounts.module.css";
import getResponse from "../../Web Service/WebServices";
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: null,
      userAccountArr: [],
      AccountName: [],
      userAccount: {},
      img: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        img: reader.result
      });
    };

    reader.readAsDataURL(file);
    console.log(this.state.img); 
  };

  handleResponseSend = e => {
    e.preventDefault();
    console.log(e.target.files.value);

    const formData = {
      password: e.target.password.value,
      email: e.target.email.value,
      name: e.target.accountName.value,
      phone: e.target.phone.value,
      profilePic: this.state.img
    };

    console.log(formData);
  };

  selectAccount = e => {
    this.setState({
      userValue: e.target.value,
      userAccount: this.state.userAccountArr[e.target.value],
      img: this.state.userAccountArr[e.target.value].profilePic
    });
  };

  handleEmailChange = e => {
    this.setState({
      userAccount: e
    });
  };

  componentDidMount() {
    getResponse()
      .then(response => {
        this.setState({
          userAccountArr: Object.values(response.accountsPage),
          userAccount:
            this.state.userValue === null
              ? Object.values(response.accountsPage)[0]
              : Object.values(response.accountsPage)[
                  parseInt(this.state.userValue)
                ],
          AccountName: Object.keys(response.accountsPage),
          img: Object.values(response.accountsPage)[0].profilePic
        });
      })
      .catch(Error => {
        console.log(Error);
      });
  }

  render() {
    const img =
      this.state.img === null ? (
        <div className={AccountStyle.uploadBtnWrapper}>
          <input type="file" onChange={this.handleChange} name="files" />
          <button onChange={this.handleChange} className={AccountStyle.btn}>
            <i className="fas fa-cloud-upload-alt"></i>
          </button>
        </div>
      ) : (
        <img className={AccountStyle.previewImg} src={this.state.img} alt="" />
      );
    return (
      <div className={AccountStyle.accountContainer}>
        <div className={AccountStyle.accountListWrapper}>
          <label for="accounts">
            <h2> List of Accounts</h2>
            <select name="accounts" onChange={this.selectAccount} required>
              {this.state.AccountName.map((name, key) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <form
          onSubmit={this.handleResponseSend}
          className={AccountStyle.fromContainer}
        >
          <div className={AccountStyle.uploadWrapper}>
            <h2> Change Avatar </h2>
            <div className={AccountStyle.uploadImg}>{img}</div>

            <div className={AccountStyle.uploadTextBtnWrapper}>
              <input type="file" onChange={this.handleChange} name="files" />
              <button
                onChange={this.handleChange}
                className={AccountStyle.button}
              >
                Upload New Photo
              </button>
            </div>
          </div>

          <div className={AccountStyle.fromWrapper}>
            <h2> Account Settings </h2>
            <div>
              <div className={AccountStyle.colum}>
                <label for="accountName">
                  Account Name
                  <input
                    type="text"
                    name="accountName"
                    onChange={e => this.handleEmailChange(e.target.value)}
                    value={this.state.userAccount.name}
                    required
                  />
                </label>
                <label for="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    onChange={e => this.handleEmailChange(e.target.value)}
                    value={this.state.userAccount.password}
                    required
                  />
                </label>
                <label for="phone">
                  Phone
                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    name="phone"
                    onChange={e => this.handleEmailChange(e.target.value)}
                    value={this.state.userAccount.phone}
                  />
                </label>
              </div>

              <div className={AccountStyle.colum}>
                <label for="expireDate">
                  Account Email
                  <input
                    type="email"
                    name="email"
                    onChange={e => this.handleEmailChange(e.target.value)}
                    value={this.state.userAccount.email}
                    required
                  />
                </label>
                <label for="rePassword">
                  Re-enter Password
                  <input
                    type="password"
                    name="rePassword"
                    value={this.state.userAccount.password}
                    required
                  />
                </label>
                <label for="productName">
                  <button
                    type="submit"
                    onSubmit={this.handleResponseSend}
                    className={AccountStyle.button}
                  >
                    {"Update Profile"}
                  </button>
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className={AccountStyle.button}>
                {"Delete Your Profile"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
