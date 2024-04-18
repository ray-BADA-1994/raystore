import React from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate, useLocation } from "react-router-dom";
import { useCartStore } from "../../Store/store";
import { shallow } from "zustand/shallow";

const PaystackComponent = ({ price }) => {
  const priceInNaira = price * 500 * 100;
  const clearItems = useCartStore((state) => state.clearCart, shallow);

  const navigate = useNavigate();

  const publicKey = "pk_test_79e7b7a306bb845f16c7710315b8347b5cddcd49"; // Replace with your actual public key

  const onSuccess = (reference) => {
    // Handle successful payment
    clearItems();
    navigate("/shop");
  };

  const onClose = () => {
    // Handle closed payment
    // alert("Payment closed.");
    // // navigate("shop");
  };

  return (
    <PaystackButton
      text="Make Payment"
      class="payButton"
      callback={onSuccess}
      close={onClose}
      disabled={false}
      embed={false}
      reference={new Date().getTime()}
      email="rchukwu94@gmail.com"
      amount={priceInNaira} // Amount in kobo (100000 kobo = ₦1000)
      publicKey={publicKey}
      channels={["card", "bank_transfer"]}
      paystackkey={publicKey}
      onSuccess={onSuccess}
      onClose={onClose}
    />
  );
};

export default PaystackComponent;
