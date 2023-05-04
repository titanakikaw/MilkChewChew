import React from "react";

const ContactUs = () => {
  return (
    <div className="px-10 lg:px-48 py-10">
      <p className="font-nunito font-extrabold text-4xl text-pink-300">
        Contact Us
      </p>

      <div className="flex flex-col lg:flex-row">
        <div className="form w-full lg:w-1/2 bg-gray-100 rounded p-4 px-10">
          <div className="m-1">
            <p className="font-nunito text-sm font-bold">Full Name :</p>
            <input className="shadow w-full mt-2 rounded shadow-md"></input>
          </div>
          <div className="m-1">
            <p className="font-nunito text-sm font-bold">Email :</p>
            <input className="shadow w-full mt-2 rounded shadow-md"></input>
          </div>
          <div className="m-1">
            <p className="font-nunito text-sm font-bold">Phone Number :</p>
            <input className="shadow w-full mt-2 rounded shadow-md"></input>
          </div>
          <div className="m-1">
            <p className="font-nunito text-sm font-bold">Subject :</p>
            <input className="shadow w-full mt-2 rounded shadow-md"></input>
          </div>
          <div className="m-1">
            <p className="font-nunito text-sm font-bold">Details :</p>
            <textarea className="shadow w-full mt-2 rounded shadow-md" />
          </div>
          <div className="m-1">
            <button className="w-full px-4 py-2 font-semibold text-sm bg-pink-500 text-white rounded-md shadow-sm hover:scale-125 ease-in-out duration-300 delay-150">
              Submit
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 lg:mt-0 lg:px-10">
          <p className="font-bold font-inter text-xs">
            Thank you for your interest in our products and services. For any
            concerns, queries, and reservations please fill out the form beside.
            <br />
            <br />
            <br />
            You can also visit us on :
            <br />
            <br />
            Sacred Heart Plaza 6710 Calbayog City, Philippines
            <br />
            FACEBOOK.COM/CHEW.ATEAICTS/PHOTOS
            <br />
            <br />
            or
            <br />
            <br />
            Contact us:
            <br />
            <br />
            MYNAMEISHAIDE@GMAIL.COM
            <br />
            +63935 581 0218
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
