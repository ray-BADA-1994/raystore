/* eslint-disable react/prop-types */
import React, {
  // useState,
  // forwardRef,
  useImperativeHandle,
  useRef,
  // useEffect,
} from "react";
import { useCheckOutContext } from "./CheckOutContext";
import TextInput from "../TextInput";
// import { useGlobalContext } from "../../Context/GlobalContext";

const InformationForm = ({ AddCount }, ref) => {
  const btnRef = useRef();
  const AddressRef = useRef();
  const ymailRef = useRef();
  const inputRefy = useRef("hi");

  // User That has already logged in
  // const { user } = useGlobalContext();

  useImperativeHandle(ref, () => {
    return {
      submitForm: () => btnRef.current.click(),
      confirmBtn: AddressRef.current,
      denyBtn: ymailRef.current,
      inputdat: inputRefy.current,
    };
  });

  const validationCheck = (e) => {
    if (
      checkOutInfo.firstname === "" ||
      checkOutInfo.lastname === "" ||
      checkOutInfo.Email === "" ||
      checkOutInfo.Address === "" ||
      checkOutInfo.state === "" ||
      checkOutInfo.city === "" ||
      checkOutInfo.phoneNumber === ""
    ) {
      return;
    }
    e.preventDefault();
    const message = {
      email: checkOutInfo.Email,
      firstname: checkOutInfo.firstname,
      Lastname: checkOutInfo.lastname,
    };
    // console.log(message);

    // const config2 = {
    //   // SecureToken:'4df9bc2c-7e3d-45f8-b1a5-5f514d59591d',
    //   Username:'rchukwu94@gmail.com',
    //   Password:'9E63D1A24C32E0999E37754F8444B8413F0C',
    //   Host:'smtp.elasticemail.com',
    //   Port:2525,
    //   To : 'rchukwu94@gmail.com',
    //   From : message.email,
    //   Subject : "This is from my contact form",
    //   Body :`This message is from ${message.firstname}. ${message.Lastname}`
    //  }

    // if (window.Email) {
    //     window.Email.send(config2).then(()=> alert('Email sent successful'))
    // }

    AddCount();
  };

  const {
    checkOutInfo,
    handleCheckInfo,
    //  toggle,
    //  setCheckOutInfo
  } = useCheckOutContext();

  // useEffect(() => {
  //   AddressRef.current.focus()
  // }, [])

  // useEffect(() => {
  //   // if the user is logged in, then prepopulate the firstname, lastname and email address fields with the user's details
  //   if (user) {
  //     setCheckOutInfo({
  //       ...checkOutInfo,
  //       firstname: user.firstname,
  //       lastname: user.lastname,
  //       email: user.email,
  //     });
  //   }
  // }, []);

  // console.log(checkOutInfo)

  return (
    <form className="flex flex-col gap-y-5">
      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <TextInput
          field="text"
          value={checkOutInfo.firstname}
          onChange={handleCheckInfo}
          name="firstname"
          InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium"
          label="first name:"
          errorMessage="Please Enter your first name"
        />
        <TextInput
          field="text"
          value={checkOutInfo.lastname}
          onChange={handleCheckInfo}
          name="lastname"
          InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium"
          label="Last name:"
          errorMessage="Please Enter your Last name"
        />
      </div>

      {/* EMAIL */}
      <TextInput
        field="email"
        value={checkOutInfo.Email}
        ref={ymailRef}
        onChange={handleCheckInfo}
        name="Email"
        InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium"
        label="Email:"
        errorMessage="Please Enter your email address"
        placeholder="Please Enter Your Email"
      />

      {/* ADDRESS */}
      <TextInput
        field="text"
        value={checkOutInfo.Address}
        ref={AddressRef}
        onChange={handleCheckInfo}
        name="Address"
        InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium addy"
        label="Address:"
        errorMessage="Please Enter your address"
        placeholder="Please Enter Your Address"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <TextInput
          field="text"
          value={checkOutInfo.state}
          onChange={handleCheckInfo}
          name="state"
          InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium"
          label="state :"
          errorMessage="Please Enter your state "
        />
        <TextInput
          field="text"
          value={checkOutInfo.city}
          onChange={handleCheckInfo}
          name="city"
          InputStyle="w-full px-3 py-2 border border-gray-200 rounded-sm text-[15px] font-medium"
          label="city:"
          errorMessage="Please Enter your city"
        />
      </div>
      <TextInput
        field="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        value={checkOutInfo.phoneNumber}
        onChange={handleCheckInfo}
        name="phoneNumber"
        InputStyle="w-full px-3 py-2 border border-gray-200 text-[15px] font-medium"
        label="Phone Number :"
        errorMessage="Please Enter your state "
        placeholder="Enter Your Phone Number"
      />
      <button
        type="submit"
        className="hidden"
        onClick={(e) => validationCheck(e)}
        ref={btnRef}
      ></button>
    </form>
  );
};

export default React.forwardRef(InformationForm);
