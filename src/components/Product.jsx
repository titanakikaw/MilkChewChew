import React from "react";
import prod1 from "../products/product1.svg";

const Product = () => {
  return (
    <div className="p-4 flex flex-col text-center justify-center bg-white rounded-md shadow-md">
      <div className="cardImage">
        <img src={prod1} alt="" srcset="" />
      </div>
      <div className="cardContent">
        <p className="font-inter font-semibold" style={{ color: "#B85555" }}>
          Basic Tease Thai
        </p>
        <p className="text-xs">Basic Tease</p>
        <p className="font-inter text-sm">PHP 1000</p>
      </div>
    </div>
  );
};

export default Product;
