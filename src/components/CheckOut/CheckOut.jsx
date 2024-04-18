import { useState, useRef, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
// import TextInput from "../TextInput";
import InformationForm from "./InformationForm";
import { useNavigate } from "react-router-dom";
// import InputMask from "react-input-mask";
// import { useGlobalContext } from "../../Context/GlobalContext";

import ShippingInfo from "./ShippingInfo";
import { useCheckOutContext } from "./CheckOutContext";
import { useCartStore } from "../../Store/store";
import CartQuantity from "../CartQuantity";
import { BiTrash } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import PaystackComponent from "../Payment/PaymentBtn";
import VerifyPayment from "../Payment/VerifyPayment";

const CheckOut = () => {
  const { toggle } = useCheckOutContext();

  // const { handleShowCO, handleShowLogin } = useGlobalContext();

  const subRef = useRef();

  const [count, setCount] = useState(1);

  const SectionTitle = ["Shopping", "Information", "Shipping", "Payment"];

  const navigate = useNavigate();

  const AddCount = () => {
    if (count >= SectionTitle.length - 2) {
      return;
    }
    setCount((prev) => prev + 1);
  };

  const MinusCount = () => {
    if (count <= 1) {
      navigate("/shop");
      // return handleShowCO();
    }
    setCount((prev) => prev - 1);
  };

  const [cartItems, removeFromCart] = useCartStore((state) => [
    state.cartItems,
    state.removeFromCart,
  ]);

  const totalPrice = () => {
    let total = cartItems
      .map((items) => items.price)
      .reduce((previous, current) => previous + current);
    return Math.floor(total);
  };

  useEffect(() => {
    toggle === null
      ? null
      : toggle === "Address"
      ? subRef.current.confirmBtn.focus()
      : subRef.current.denyBtn.focus();
  }, [toggle]);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    // <CheckOutProvider>
    <div className="h-[100vh] w-full grid  grid-cols-1 lg:grid-cols-2">
      {/*LEFT SIDE  */}
      <div className="bg-white h-fit py-5 md:py-0 md:h-[100vh] py-10y w-full order-last md:order-first">
        <div className="lg:w-[80%] h-[100%] lg:ml-auto flex flex-col items-center  justify-center gap-y-5 text-black">
          <h1 className="text-[1.575rem] tracking-tighter font-semibold font-sans hidden md:block">
            RayStores
          </h1>

          <div className="flex gap-x-2 items-center">
            {SectionTitle.map((title, i) => (
              <div className="flex gap-x-2 items-center" key={i + 24356}>
                <p
                  className={`text-[0.8rem] font-normal tracking-tighter ${
                    count === i ? "text-[#d8cbac]" : "text-gray-600"
                  }`}
                >
                  {title}
                </p>
                <GrFormNext />
              </div>
            ))}
          </div>

          <div className="w-[90%] ">
            <h2 className="mb-7 font-semibold text-[1.05rem]y text-xl">
              Contact Information
            </h2>
            {/* <p className="text-xs mb-4 text-black text-right">
              Already have an account?
              <span
                // onClick={() => handleShowLogin()}
                className="text-white font-medium px-1 py-[2px] bg-red-900 ml-1 cursor-pointer"
              >
                Sign In!
              </span>
            </p> */}
            {count == 1 ? (
              <InformationForm ref={subRef} AddCount={AddCount} />
            ) : (
              <ShippingInfo setCount={setCount} />
            )}
          </div>
          <div className="w-[90%] flex justify-between items-center">
            <button
              className="text-[15px] tracking-tighter text-[rgba(0,0,0,0.7)] flex items-center"
              onClick={MinusCount}
            >
              <GrFormPrevious />
              Return to {count == 1 ? SectionTitle[0] : SectionTitle[count - 1]}
            </button>
            {count === 2 ? (
              // <PaystackComponent />
              <VerifyPayment />
              // <button>hello baby</button>
            ) : (
              <button
                className="text-[15px] tracking-tighter bg-slate-900 px-5 py-3 rounded-md text-white"
                onClick={(e) => {
                  e.preventDefault();
                  if (count === 1) {
                    subRef.current.submitForm();
                    return;
                  }
                  if (count === 2) {
                    // alert(count);
                  }
                }}
              >
                Continue to{" "}
                {count == 3 ? SectionTitle[count] : SectionTitle[count + 1]}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#c8c6c4] h-[100vh]y h-fit md:h-[100vh] py-5 w-full hiddeny flex flex-col items-center p-5 md:p-10 gap-10 lg:block">
        {/* TOP TITLE AND TOTAL PRICE */}
        <div className="flex w-full justify-between items-center">
          <h1 className="font-semibold text-slate-900 text-base md:text-2xl">
            Shopping Cart Item(s)
          </h1>
          <div className="flex items-center md:hidden">
            <p className="text-slate-900 font-bold text-lg px-2 py-1 bg-white md:hidden">
              ${cartItems.length > 0 ? totalPrice() : 0.0}
            </p>
            <span className="px-3" onClick={handleShow}>
              {/* <BsChevronDown /> */}
              {show ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </span>
          </div>
        </div>
        <div
          className={`${
            show ? "" : "hidden"
          } md:block w-full space-y-4 py-5 md:py-10 flex-1 max-h-[700px] overflow-y-scroll `}
        >
          {cartItems.map((item, i) => (
            <div
              className="bordery bg-[rgba(255,255,255,0.8)] p-3 border-red-800y h-fit flex items-center"
              key={i}
            >
              {/* IMAGE CONTAINER */}
              <div className="bordery w-1/3 h-[150px] border-blacky">
                <img
                  className=" w-full h-full object-contain object-center mb-0 mix-blend-darken"
                  src={item.image}
                  alt="content"
                />
              </div>
              {/* COUNTER AND PRICE AND TITLE */}
              <div className="bordery w-2/3 h-full border-blue-800y px-2 flex flex-col items-start justify-center gap-4">
                <div className="space-y-1">
                  <p className="font-medium text-sm text-slate-900">
                    {/* Lorem ipsum dolor sit amet. */}
                    {item.title}
                  </p>
                  <p className="font-normal text-xs text-slate-900">
                    {/* $400 usd */}${item.price}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <CartQuantity quan={item.Quantity} info={item.id} />
                  <span
                    className="p-1 rounded-full border"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <BiTrash />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            show ? "flex" : "hidden"
          } md:flex justify-start  gap-1 items-center`}
        >
          <p className="py-1 px-2 bg-slate-800 text-white font-semibold text-sm">
            Total:
          </p>
          <p className="text-slate-900 font-bold text-lg">
            ${cartItems.length > 0 ? totalPrice() : 0.0}
          </p>
        </div>
      </div>
    </div>
    // </CheckOutProvider>
  );
};

export default CheckOut;
