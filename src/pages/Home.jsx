import React from "react";
import Navbar from "../components/Navbar";
import image1 from "../assets/main_sample.svg";
import image2 from "../assets/sample_product.svg";
import Icetea from "../assets/ep_ice-tea.svg";
import InstagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/fe_facebook.svg";
import bgImage from "../assets/bg2.jpg";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="px-5 py-10 lg:px-48 lg:py-28 bg-red-100">
        <div className="h-full flex flex-col lg:flex-row md:flex-row sm:flex-col xs:flex-col justify-center items-center">
          <div className="w-full lg:w-1/2 h-fit">
            <img src={image1} className="w-full" />
          </div>
          <div className="w-full lg:w-1/2 h-fit lg:pl-10 text-center">
            <p
              className="font-nunito font-extrabold text-5xl lg:text-7xl"
              style={{ color: "#FB9DBF" }}
            >
              Milk Chew Chew
            </p>
            <p
              className="mt-3 font-nunito text-1xl font-bold uppercase text-md lg:text-3xl"
              style={{ color: "#B85555" }}
            >
              Derived from the characteristics of the product and the rest is
              history
            </p>
            <CustomButton color={"FF7D6C"} text="ORDER NOW" />
          </div>
        </div>
      </div>
      <div
        className=" py-10 lg:py-28 lg:px-48 "
        style={{ backgroundColor: "#FFFFEB" }}
      >
        <div className="px-10 h-full flex flex-col lg:flex-row justify-center items-center">
          <div className="w-3/2 h-fit order-last lg:order-first">
            <p
              className="font-nunito font-extrabold text-5xl lg:text-6xl"
              style={{ color: "#FB9DBF" }}
            >
              Check out OUR Menu
            </p>
            <p
              className="font-nunito font-extrabold text-1xl lg:text-3xl mt-8 w-3/4"
              style={{ color: "#B85555" }}
            >
              Find the right beverage and snack for you. You may check out our
              complete line of products here.
            </p>

            <CustomButton color={"FAC9C9"} text="View Menu" />
          </div>
          <div className="w-1/2 h-fit">
            <img src={image2} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div
        className="py-10 px-5 lg:py-28 lg:px-48"
        style={{ backgroundColor: "#262224" }}
      >
        <div className="h-full flex flex-row justify-center items-center text-center">
          <div className="h-fit w-full lg:w-1/2">
            <p className="font-nunito font-extrabold text-3xl lg:text-6xl flex justify-between text-white">
              <img src={Icetea} alt="" />
              Join the Chew’in
              <img src={Icetea} alt="" />
            </p>
            <p className="font-nunito text-white text-sm lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <p
              className="font-nunito text-2xl  mt-5"
              style={{ color: "#FFFFEB" }}
            >
              Follow us on :
            </p>
            <div className="flex justify-around pt-5">
              <img src={facebookIcon} alt="" />
              <img src={InstagramIcon} alt="" />
              <img src={InstagramIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="py-10 h-full flex flex-row justify-center items-center text-center px-5 lg:px-48"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.67)" }}
        >
          <div className="h-fit w-full">
            <p className="font-nunito font-extrabold text-2xl lg:text-6xl  text-white">
              The Chew Story
            </p>
            <p className="font-nunito text-white text-sm lg:text-3xl mt-10">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication. . . .
            </p>
            <CustomButton
              color={"FF543E"}
              text="Full Story"
              style={"py-1 px-9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
