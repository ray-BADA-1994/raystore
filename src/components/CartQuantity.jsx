/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useRef, forwardRef } from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartStore } from "../Store/store";
import { shallow } from "zustand/shallow";

const CartQuantity = forwardRef((props, ref) => {
  const [count, setCount] = useState(1);

  const [addMoreQuantity, cartItems] = useCartStore(
    (state) => [state.addMoreQuantity, state.cartItems],
    shallow
  );

  const { quan, info } = props;

  const [isdisabled, setIsDisabled] = useState(false);

  const handleAddCount = () => {
    setIsDisabled(false);
    setCount((prev) => prev + 1);

    addMoreQuantity(info, count + 1);
  };

  const handleMinusCount = () => {
    if (count <= 1) {
      setCount(1);
      setIsDisabled(true);
      return;
    } else {
      setCount((prev) => prev - 1);

      addMoreQuantity(info, count - 1);
    }
  };

  useEffect(() => {
    setCount(Number(quan));
  }, []);
  return (
    <div className="mb-5r">
      {/* <p className="quantity mb-3 text-sm font-thin">Quantity :</p> */}
      <div className="counter border w-fit flex items-start">
        <button
          onClick={() => handleAddCount()}
          className="border-none h-8 px-5 text-sm"
        >
          <AiOutlinePlus className="text-slate-600" />
        </button>
        <button className="m-0 px-3 h-8" ref={ref}>
          {count}
        </button>
        <button
          disabled={isdisabled}
          onClick={() => handleMinusCount()}
          className="border-none h-8 px-5 text-sm"
        >
          <AiOutlineMinus className="text-slate-600" />
        </button>
      </div>
    </div>
  );
});

export default CartQuantity;
