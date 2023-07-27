/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../Store/store";
import CartQuantity from "./CartQuantity";
import { BiTrash } from "react-icons/bi";
import { shallow } from "zustand/shallow";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";

const CartModal = ({ closeModal }) => {
  const [cartItems, removeFromCart, clearCart] = useCartStore(
    (state) => [state.cartItems, state.removeFromCart, state.clearCart],
    shallow
  );

  let navigate = useNavigate();

  const handleNavigateToCheckOut = () => {
    closeModal(false);
    navigate("/checkout");
  };

  //   const totalPrice = () => {
  //     // let price = 500;
  //     let totalP = cartItems
  //       .map((cinfo) => [cinfo.quantity, cinfo.price])
  //       .map((cinfo) => cinfo.reduce((previous, current) => previous * current))
  //       .reduce((previous, current) => previous + current);
  //     setTotalCost(totalP);
  //   };

  const totalPrice = () => {
    let total = cartItems
      .map((items) => items.price)
      .reduce((previous, current) => previous + current);
    return Math.floor(total);
  };

  // useEffect(() => {
  //   document.body.style.height = "100vh";
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.height = "auto";
  //     document.body.style.overflow = "scroll";
  //   };
  // }, []);

  //   console.log(cartItems);

  return (
    // Modal container
    <div
      className="fixed top-0 z-[1000] right-0 w-full min-h-screen overflow-scroll bg-[rgba(0,0,0,0.6)] flex justify-end"
      onClick={() => closeModal(false)}
    >
      {/* WHITE CONTAINER BG */}
      <div
        className="bg-white w-[400px] h-screen overflow-scroll pb-24"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LAYOUT DIV */}
        <div className="h-screen flex flex-col items-start justify-start py-5 px-3">
          {/* close button */}
          <div className=" w-full flex justify-end pb-3">
            <span
              className="text-lg  border-2 border-red-900 rounded-full p-1"
              onClick={() => closeModal(false)}
            >
              <AiOutlineClose />
            </span>
          </div>
          {/* TOP SECTION */}
          <div className="top-section space-y-4 w-full flex-1y">
            {/* HEADING */}
            <h1 className="font-bold text-2xl py-3 text-center bg-slate-800 text-white w-full">
              Cart Items
            </h1>
            {/* CART CARD */}
            {cartItems.length == 0 ? (
              <p className="font-extrabold text-gray-200 text-3xl w-full text-center pt-20 ">
                No Item In Your Cart
              </p>
            ) : (
              // <div className="h-full overflow-scroll">
              cartItems.map((item, i) => (
                <div
                  className="bordery  border-red-800y h-[150px] flex items-center"
                  key={i}
                >
                  {/* IMAGE CONTAINER */}
                  <div className="bordery w-1/3 h-full border-blacky">
                    <img
                      className=" w-full h-full object-cover object-center mb-0 mix-blend-darken"
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
              ))
              // </div>
            )}
          </div>
          {/* BOTTOM SECTION */}
          <div className="font-semibold flex flex-col mt-auto  py-3 text-slate-700 w-full space-y-2">
            {/* TOTAL PRICE SPAN */}
            <span className="font-semibold">
              Total : ${cartItems.length > 0 ? totalPrice() : 0.0}
            </span>
            <span className="text-xs">
              *Shipping and Tax will be calculated at checkout
            </span>
            <button
              disabled={cartItems.length == 0}
              onClick={() => clearCart()}
              className="font-semibold disabled:bg-slate-600 text-white bg-slate-900 py-2 px-3"
            >
              Clear
            </button>
            <button
              disabled={cartItems.length == 0}
              onClick={handleNavigateToCheckOut}
              className="text-xl disabled:bg-slate-600 uppercase py-2 bg-slate-800 text-white text-center relative scale-100 hover:bg-slate-700 transition-all ease-in-out duration-300"
            >
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
