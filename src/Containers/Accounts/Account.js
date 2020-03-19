import React, { Component } from "react";
import { Add_New_Link, Product_Link } from "../../Utils/Network";
import AccountStyle from "./Accounts.module.css";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      product: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  handleResponseSend = e => {
    e.preventDefault();
    const formData = {
      category: e.target.category.value,
      description: e.target.description.value,
      expireDate: e.target.expireDate.value,
      name: e.target.productName.value,
      stock: e.target.stockUnits.value,
      unitSold: e.target.stockUnits.value,
      file: this.state.file === null ? "" : this.state.file.split("blob:")[1]
    };

    

  };
  render() {
    const img =
      this.state.file === null ? (
        <div className={AccountStyle.uploadBtnWrapper}>
          <input type="file" onChange={this.handleChange} name="myfile" />
          <button onChange={this.handleChange} className={AccountStyle.btn}>
            <i className="fas fa-cloud-upload-alt"></i>
          </button>
        </div>
      ) : (
        <img className={AccountStyle.previewImg} src={this.state.file} alt="" />
      );
    return (
      <div className={AccountStyle.accountContainer}>
        <div className={AccountStyle.accountListWrapper}>
          <label for="category">
            <h2> List of Accounts</h2>
            <select name="category" required>
              <option value="">Select category</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Most Popular">Most Popular</option>
              <option value="Trending">Trending</option>
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
              <input type="file" onChange={this.handleChange} name="myfile" />
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
                <label for="productName">
                  Account Name
                  <input type="text" name="productName" required />
                </label>
                <label for="productName">
                  Password
                  <input type="password" name="productName" required />
                </label>
                <label for="productName">
                  Phone
                  <input type="text" name="productName" required />
                </label>
              </div>

              <div className={AccountStyle.colum}>
                <label for="expireDate">
                  Account Email
                  <input type="email" name="expireDate" required />
                </label>
                <label for="productName">
                  Re-enter Password
                  <input type="password" name="productName" required />
                </label>
                <label for="productName">
                  <button
                    type="submit"
                    onSubmit={this.handleResponseSend}
                    className={AccountStyle.button}
                  >
                    {"Add New Product"}
                  </button>
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onSubmit={this.handleResponseSend}
                className={AccountStyle.button}
              >
                {"Add New Product"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Account;
