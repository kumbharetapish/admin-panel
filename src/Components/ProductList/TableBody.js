import React from "react";
import ProductListStyle from "./ProductList.module.css";
import ProductCategories from "../ProductCategories/ProductCategories";
const TableBody = props => {
  return (
    <tr>
      <td className={ProductListStyle.selProduct}>
        <label className={ProductListStyle.container}>
          <input type="checkbox" />
          <span className={ProductListStyle.checkmark}></span>
        </label>
      </td>
      <td className={ProductListStyle.name}>{props.listData.name}</td>
      <td className={ProductListStyle.stock}>{props.listData.unitSold}</td>
      <td className={ProductListStyle.stock}>{props.listData.stock}</td>
      <td className={ProductListStyle.expireDate}>
        {props.listData.expireDate}
      </td>
      <td className={ProductListStyle.selProduct}>
        <div className={ProductListStyle.deleteBtn}>
          <i className="far fa-trash-alt"></i>
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
