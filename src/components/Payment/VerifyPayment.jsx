import React, { useEffect, useState } from "react";
import PaystackComponent from "./PaymentBtn";
import { useCartStore } from "../../Store/store";
import { shallow } from "zustand/shallow";
import axios from "axios";

const VerifyPayment =  () => {
  const [price, setPrice] = useState(0);
  const cartItems = useCartStore((state) => state.cartItems, shallow);

  useEffect(() => {
    const verifyPrice = async () => {
      const itemVerifiedPrice = [];
      const itemIds = cartItems.map((el) => el.id);
      for (let i = 0; i < itemIds.length; i++) {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${itemIds[i]}`
        );

        if (response.status == 200) {
          itemVerifiedPrice.push(response.data.price);
        }
      }
      return setPrice(itemVerifiedPrice.reduce((prev, acc) => prev + acc, 0));
    };
    verifyPrice();
  }, []);

  return (
    <div>
      {price === 0 ? <p className="text-sm">...Loading</p> : <PaystackComponent price={price} />}
    </div>
  );
};

export default VerifyPayment;
