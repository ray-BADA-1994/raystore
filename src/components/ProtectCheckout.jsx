/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useCartStore } from "../Store/store";

const ProtectCheckout = ({ children }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const location = useLocation();
  if (location.state === "checkout" || cartItems.length) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectCheckout;
