import React, { Component } from "react";
import addProduct from "./AddNewProduct.module.css";
import { Product_Link } from "../../Utils/Network";

class AddNewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      product:
        localStorage.getItem("products") !== null
          ? JSON.parse(localStorage.getItem("products"))
          : []
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

    const product = JSON.parse(localStorage.getItem("products"));
    this.setState({
      product: [...this.state.product].concat(formData)
    });
    localStorage.setItem("products", JSON.stringify(this.state.product));
    this.props.history.push(Product_Link);
    console.log(this.state.product);
  };
  render() {
    const img =
      this.state.file === null ? (
        <div className={addProduct.uploadBtnWrapper}>
          <input type="file" onChange={this.handleChange} name="myfile" />
          <button onChange={this.handleChange} className={addProduct.btn}>
            <i className="fas fa-cloud-upload-alt"></i>
          </button>
        </div>
      ) : (
        <div className={addProduct.previewImgWrapper}>
          <img className={addProduct.previewImg} src={this.state.file} alt="" />
        </div>
      );
    return (
      <div className={addProduct.addProductContainer}>
        <h1> Add Product </h1>

        <div className={addProduct.fromContainer}>
          <form onSubmit={this.handleResponseSend}>
            <div>
              <div className={addProduct.uploadWrapper}>
                <div className={addProduct.uploadImg}>{img}</div>

                <div className={addProduct.uploadTextBtnWrapper}>
                  <input
                    type="file"
                    onChange={this.handleChange}
                    name="myfile"
                  />
                  <button
                    onChange={this.handleChange}
                    className={addProduct.button}
                  >
                    Upload Product Image
                  </button>
                </div>
              </div>
              <div className={addProduct.fromWrapper}>
                <label for="productName">
                  Product Name
                  <input type="text" name="productName" required />
                </label>
                <label for="description">
                  Description
                  <textarea
                    name="description"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </label>

                <label for="category">Category</label>
                <select name="category" required>
                  <option value="">Select category</option>
                  <option value="New Arrival">New Arrival</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Trending">Trending</option>
                </select>
                <div>
                  <label for="expireDate">
                    Expire Date
                    <input
                      type="date"
                      name="expireDate"
                      placeholder="XX-XX-XXX"
                      min="2000-01-02"
                      required
                    />
                  </label>
                  <label for="stockUnits">
                    Units In Stock
                    <input type="number" name="stockUnits" min="0" required />
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                onSubmit={this.handleResponseSend}
                className={addProduct.button}
              >
                {"Add New Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddNewProduct;
