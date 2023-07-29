/* eslint-disable no-unused-vars */
// import React from "react";
import women from "../assets/womenCat.jpg";
import { v4 as uuidv4 } from "uuid";
import { MdAddCircle, MdViewCarousel } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ShowQuickInfo from "./ShowQuickInfo";
import GridSlideDisplay from "./GridSlideDisplay";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-[250px]y h-screen z-[1000] fixed top-0 left-0 bg-[rgba(0,0,0,0.9)] flex justify-center items-center">
        <div className="loader_fetch"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen py-10 z-[1000] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)]y bg-white flex justify-center items-center">
        <div className="space-y-3">
          <p className="font-semibold text-2xl text-gray-300">
            Network Error! Check your network connection
          </p>
          <button
            className="px-3 py-2 border shadow-sm text-base text-gray-400 font-semibold"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  document.body.style.height = "fit";
  document.body.style.overflowY = "scroll";

  // console.log(productData.data);
  return (
    <>
      <GridSlideDisplay data={productData.data} />
    </>
  );
};

export default FeaturedProducts;
