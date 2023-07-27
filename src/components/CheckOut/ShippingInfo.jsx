/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useCheckOutContext } from "./CheckOutContext";
// import { useCheckOutContext } from "../../Context/CheckOutContext";

const ShippingInfo = ({ setCount, EditAdressAndEmail }) => {
  const { checkOutInfo, setToggle } = useCheckOutContext();

  const handleClick = (e, inputType) => {
    e.preventDefault();
    setToggle(inputType);
    setCount((prev) => prev - 1);
  };

  return (
    <div className="border py-2 px-3 rounded">
      <div className="flex gap-4 border-b py-3">
        <span className="headtitle text-[14px] text-gray-400">Contact</span>
        <span className="headbody text-[14px] text-[#333333]">
          {checkOutInfo.Email}
        </span>
        <button
          className="ml-auto text-[12px] text-red-600"
          onClick={(e) => handleClick(e, "Email")}
        >
          Change
        </button>
      </div>
      <div className="flex gap-4 border-b py-3">
        <span className="headtitle text-[14px] text-gray-400">Ship To</span>
        <span className="headbody text-[#333333] text-[14px]">
          {checkOutInfo.Address}
        </span>
        <button
          className="ml-auto text-[12px] text-red-600"
          onClick={(e) => handleClick(e, "Address")}
        >
          Change
        </button>
      </div>
      <div className="flex gap-4 py-3">
        <span className="headtitle text-[14px]  text-gray-400">Method</span>
        <span className="headbody text-[#333333] text-[14px]">
          Korea Service
        </span>
        <button
          className="ml-auto text-[12px] text-red-600"
          onClick={() => setCount((prev) => prev - 1)}
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default ShippingInfo;
