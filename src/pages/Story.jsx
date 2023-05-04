import React from "react";
import logo from "../assets/logo.svg";
import branding from "../assets/branding_1.svg";

const Story = () => {
  return (
    <div className="px-10 py-10 lg:px-48 lg:py-28 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col justify-center content-center">
        <img src={logo} alt="" className="w-52" />
        <p className="mt-5 text-3xl lg:text-6xl font-extrabold tracking-wide font-nunito text-pink-400">
          the Chew`tastic
          <br />
          Story
        </p>
      </div>
      <div className="flex-1">
        <img
          src={branding}
          alt=""
          srcset=""
          className="w-full hidden lg:block"
        />
        <p className="mt-5 font-nunito font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br /> <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
          <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo .
        </p>
      </div>
    </div>
  );
};

export default Story;
