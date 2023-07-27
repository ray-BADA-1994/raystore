/* eslint-disable no-unused-vars */
// import React from "react";
import women from "../assets/womenCat.jpg";
import { v4 as uuidv4 } from "uuid";
import { MdAddCircle, MdViewCarousel } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useState } from "react";
import { createPortal } from "react-dom";
import ShowQuickInfo from "./ShowQuickInfo";
import GridSlideDisplay from "./GridSlideDisplay";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FeaturedProducts = () => {
  // const productData = [1, 2, 3, 4];
  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["FeaturedProducts"],
    queryFn: () => axios.get("https://fakestoreapi.com/products?limit=4"),
    // refetchOnWindowFocus: false,
    // refetchInterval: 5,
  });

  if (isLoading) {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    return (
      <div className="w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader_fetch"></div>
      </div>
    );
  }

  document.body.style.height = "fit";
  document.body.style.overflowY = "scroll";

  console.log(productData.data);
  return (
    <>
      <GridSlideDisplay data={productData.data} />
    </>
  );
};

export default FeaturedProducts;
