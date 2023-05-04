import React from "react";
import Product from "../components/Product";

const Menu = () => {
  return (
    <div className="px-10 lg:px-44 py-10 bg-gray-100">
      <div className="flex flex-col lg:flex-row">
        <div className="w-60">
          <p
            className="font-inter text-3xl font-bold"
            style={{ color: "#FB9DBF" }}
          >
            the Menu
          </p>
          <div className="mt-10">
            <p>BASIC TEA`S</p>
            <p>CHEESE CAKE INSPIRED</p>
            <p>HEALTHY TEA’S</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(5).keys()].map((x) => {
            return <Product key={x} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
