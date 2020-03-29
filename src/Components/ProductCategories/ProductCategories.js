import React from "react";
import categoriesStyle from "./ProductCategories.module.css";
function ProductCategories(props) {
  return (
    <div key={props.key+"categories"} className={categoriesStyle.categoriesWrapper}>
      <p>{props.categoriesName}</p>
      <div className={categoriesStyle.deleteBtn}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default ProductCategories;
