/* eslint-disable react/display-name */
import React from "react";
import { useRef, forwardRef } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Quantity = forwardRef((props, ref) => {
  const [count, setCount] = useState(1);

  const [isdisabled, setIsDisabled] = useState(false);

  const handleAddCount = () => {
    setIsDisabled(false);
    setCount((prev) => prev + 1);
  };

  const handleMinusCount = () => {
    if (count <= 1) {
      setCount(1);
      setIsDisabled(true);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="mb-5 flex items-baseline justify-start gap-3">
      <p className="quantity mb-3 text-sm font-normal">Quantity :</p>
      <div className="counter border border-slate-400 w-fit flex items-start">
        <button
          onClick={handleAddCount}
          className="border-none h-8 px-5 text-sm font-semibold"
        >
          <AiOutlinePlus className="text-slate-600" />
        </button>
        <button className="m-0 px-3 h-8 pointer-events-none" ref={ref}>
          {count}
        </button>
        <button
          disabled={isdisabled}
          onClick={handleMinusCount}
          className="border-none h-8 px-5 text-sm font-semibold"
        >
          <AiOutlineMinus className="text-slate-600" />
        </button>
      </div>
    </div>
  );
});

export default Quantity;
