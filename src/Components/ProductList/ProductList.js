import React, { Component } from "react";
import ProductListStyle from "./ProductList.module.css";

class ProductList extends Component {
  render() {
    console.log(this.props);

    return (
      <table className={ProductListStyle.tableScroll}>
        <thead>
          <tr>
            <th className={ProductListStyle.selProduct}></th>
            <th className={ProductListStyle.name}>PRODUCT NAME</th>
            <th className={ProductListStyle.stock}>UNIT SOLD</th>
            <th className={ProductListStyle.stock}>IN STOCK</th>
            <th className={ProductListStyle.expireDate}>EXPIRE DATE </th>
            <th className={ProductListStyle.selProduct}> </th>
          </tr>
        </thead>
        <tbody>{this.props.children}</tbody>
      </table>
    );
  }
}
export default ProductList;
