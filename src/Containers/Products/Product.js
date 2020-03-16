import React, { Component } from "react";
import getResponse from "../../Web Service/WebServices";
import ProductList from "../../Components/ProductList/ProductList";
import TableBody from "../../Components/ProductList/TableBody";
import { Link } from "react-router-dom";
import ProductCategories from "../../Components/ProductCategories/ProductCategories";
import ProductStyle from "./Product.module.css";
import { Add_Product_Link } from "../../Utils/Network";
export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], createdProduct: [] };
  }

  componentDidMount() {
    getResponse()
      .then(response => {
        this.setState({
          products: response.productsPage.products,
          createdProduct: response.productsPage.categories
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const list = this.state.products.map(res => <TableBody listData={res} />);
    const categories = this.state.createdProduct.map(res => (
      <ProductCategories categoriesName={res} />
    ));
    return (
      <div className={ProductStyle.productContainer}>
        <div className={ProductStyle.productListContainer}>
          <div className={ProductStyle.productListWrapper}>
            <ProductList>{list}</ProductList>
          </div>

          <button type="submit" className={ProductStyle.button}>
            {"Add New Product"}
          </button>
          <button type="submit" className={ProductStyle.button}>
            {"Delete Selected Products"}
          </button>
        </div>
        <div className={ProductStyle.productCategoriesContainer}>
          <div className={ProductStyle.productCategoriesWrapper}>
            <div className={ProductStyle.categoriesName}>
              <h2>Product Categories </h2>
            </div>
            {categories}
            <button type="submit" className={ProductStyle.button}>
              {"Add categories"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
