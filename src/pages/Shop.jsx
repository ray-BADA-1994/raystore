/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import GridSlideDisplay from "./GridSlideDisplay";
import { Link, useParams } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { motion } from "framer-motion";
import GridSlideDisplay from "../components/GridSlideDisplay";
import ScrollToTop from "../components/ScrollToTop";

const Shop = () => {
  //   const { category } = useParams();
  //   console.log(category.replace("-", " "));

  const GridProduct = useQuery({
    queryKey: ["gridProduct", "allItemsInStore"],
    queryFn: () => axios.get("https://fakestoreapi.com/products"),
  });

  if (GridProduct.isLoading) {
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    return (
      <div className="w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader_fetch"></div>
      </div>
    );
  }

  if (GridProduct.isError) {
    return (
      <div className="w-full py-10 text-gray-400  flex items-center justify-center gap-3">
        <p className="text-xl font-medium">
          Error Loading Data, Network Error!
        </p>
        <Link to={`/all/${category}`}>
          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.9 }}
            className=" px-2 py-1 text-grey-500 font-semibold border shadow-sm grid place-content-center gap-1"
          >
            Click Reload <AiOutlineReload />
          </motion.button>
        </Link>
      </div>
    );
  }

  if (GridProduct.data.data.length < 1) {
    return (
      <div className="w-full py-10 text-gray-400  flex items-center justify-center gap-3">
        <p className="text-xl font-medium">
          Error Loading Data, Incorrect Url!
        </p>
        <Link to={"/"}>
          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.9 }}
            className=" px-2 py-1 text-grey-500 font-semibold border shadow-sm"
          >
            Click to Go Home
          </motion.button>
        </Link>
      </div>
    );
  }

  document.body.style.height = "fit";
  document.body.style.overflowY = "scroll";

  let productsData = GridProduct.data.data;

  return (
    <div className="py-10 w-[80%] mx-auto space-y-4">
      <h1 className="font-semibold text-xl text-slate-800 uppercase ">
        All Products
      </h1>

      <GridSlideDisplay data={productsData} />
      <ScrollToTop />
    </div>
  );
};

export default Shop;
