/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const CheckOutContext = createContext();

export const CheckOutProvider = ({ children }) => {
  const [checkOutInfo, setCheckOutInfo] = useState({
    firstname: "",
    lastname: "",
    Address: "",
    state: "",
    city: "",
    phoneNumber: "",
    Email: "",
  });

  const [inputFocus, setInputFocus] = useState("");

  //   const handleValidate = () => {
  //     if (condition) {

  //     }
  //   }

  const [toggle, setToggle] = useState(null);

  const handleCheckInfo = (e) => {
    setCheckOutInfo({ ...checkOutInfo, [e.target.name]: e.target.value });
  };
  return (
    <CheckOutContext.Provider
      value={{
        checkOutInfo,
        setCheckOutInfo,
        handleCheckInfo,
        toggle,
        setToggle,
        inputFocus,
        setInputFocus,
      }}
    >
      {children}
    </CheckOutContext.Provider>
  );
};

export const useCheckOutContext = () => {
  return useContext(CheckOutContext);
};
