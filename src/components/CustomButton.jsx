import React from "react";

const CustomButton = (props) => {
  return (
    <>
      <button
        className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-nunito font-extrabold tracking-widest font-extrabold text-2xl p-4 text-white rounded mt-10  drop-shadow-lg ${props.style}`}
        style={{ backgroundColor: `#${props.color}` }}
      >
        {props.text}
      </button>
    </>
  );
};

export default CustomButton;
