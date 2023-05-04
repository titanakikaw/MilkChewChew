import React from "react";
import { Link } from "react-router-dom";
import foodpandaIcon from "../assets/FoodPanda-logo1.svg";
import nomnomIcon from "../assets/Frame31.svg";

const Delivery = () => {
  return (
    <div className="">
      <div
        className="border flex justify-center py-20"
        style={{ backgroundColor: "#FDF7F7" }}
      >
        <p
          className="lg:text-5xl uppercase font-inter font-bold"
          style={{ color: "#FB9DBF" }}
        >
          Trusted Delivery Services
        </p>
      </div>
      <div className="px-10 lg:px-60 lg:py-14 flex flex-col lg:flex-row justify-between align-center">
        <Link
          to={"#"}
          className="align-center rounded p-10 bg-white border-4 border-white hover:border-red-100 hover:border-4 transition delay-150 duration-300 ease-in-out"
        >
          <img src={foodpandaIcon} alt="" srcset="" />
        </Link>
        <Link
          to={"#"}
          className="rounded p-10 bg-white border-4 border-white hover:border-red-100 hover:border-4 transition delay-150 duration-300 ease-in-out"
        >
          <img src={nomnomIcon} alt="" srcset="" />
        </Link>
      </div>
    </div>
  );
};

export default Delivery;
