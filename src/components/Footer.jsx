import React from "react";
import LocationIcon from "../assets/locationIcon.svg";
import MainIcon from "../assets/MailIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import FacebookIcon from "../assets/baselineFbIcon.svg";
import ChewLogo from "../assets/logo.svg";

const QuickLinks = [
  {
    link: "/Home",
    text: "Home",
  },
  {
    link: "/Products",
    text: "Products",
  },
  {
    link: "/ContactUs",
    text: "Contact Us",
  },
  {
    link: "/About",
    text: "About Us",
  },
];

const ContactUs = [
  {
    icon: LocationIcon,
    text: "Sacred Heart Plaza 6710 Calbayog City, Philippines",
  },
  {
    icon: MainIcon,
    text: "mynameishaide@gmail.com",
  },
  {
    icon: PhoneIcon,
    text: "0935 581 0218",
  },
  {
    icon: FacebookIcon,
    text: "facebook.com/Chew.aTEAicts/photos",
  },
];

const Footer = () => {
  return (
    <div className="py-10">
      <div
        className="h-full  flex  flex-col lg:flex-row justify-between text-left px-10 lg:px-48 lg:py-14"
        style={{ backgroundColor: "white" }}
      >
        <div className="h-fit w-full lg:w-3/4">
          <p
            className="font-inter font-semibold text-3xl"
            style={{ color: "#FF7D6C" }}
          >
            Quick Links
          </p>
          <div className="text-left mt-5">
            {QuickLinks.map((x, index) => (
              <p
                key={index}
                className="font-inter py-2 font-bold text-sm"
                style={{ color: "black" }}
              >
                {x.text}
              </p>
            ))}
          </div>
        </div>
        <div className="h-fit w-full">
          <p
            className="font-nunito font-extrabold text-2xl text-white pb-5"
            style={{ color: "#FF7D6C" }}
          >
            Contact Us
          </p>
          {ContactUs.map((x, index) => {
            return (
              <div
                key={index}
                className="flex font-inter items-center font-bold py-2 uppercase "
                style={{ color: "black", fontSize: "12px" }}
              >
                <img src={x.icon} alt="" srcset="" className="" />

                <p className="pl-5 w-3/4">{x.text}</p>
              </div>
            );
          })}
        </div>
        <div className="h-fit w-full lg:w-1/2">
          <img src={ChewLogo} alt="" srcset="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
