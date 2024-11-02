import React from "react";
import "./style.scss";

export default function ProductInfo(props) {
  return (
    <div className="products-info-wrapper">
      <div className="inner-product-info">
        {props.children}
        </div>
     <div className="image-wrapper">
     <img src={props.image} />
     </div>
    </div>
  );
}
