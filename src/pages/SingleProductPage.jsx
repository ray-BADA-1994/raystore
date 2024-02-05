/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import {
  TiSocialFacebook,
  TiSocialTumbler,
  TiSocialTwitter,
} from "react-icons/ti";

import suites from "../assets/FTsuits2.jpg";
import Quantity from "../components/Quantity";
import { useEffect, useRef, useState } from "react";
import GridSlideDisplay from "../components/GridSlideDisplay";
import { useCartStore } from "../Store/store";
import { shallow } from "zustand/shallow";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ScrollToTop from "../components/ScrollToTop";

const SingleProductPage = () => {
  const [clicked, setClicked] = useState(false);

  const [selected, setSelected] = useState("");

  const location = useLocation();

  const { id, category: productCategory } = useParams();

  useEffect(() => {
    setClicked(false);
  }, [id]);

  // console.log(productCategory.replace("-", " "));

  // console.log(id, productCategory);

  // useEffect(()=>{
  //   if(productCategory === "men's-clothing") {
  //     setSelected("men")
  //   }
  // },[])

  const addToCart = useCartStore((state) => state.addToCart, shallow);

  const socials = [
    <TiSocialFacebook />,
    <TiSocialTumbler />,
    <TiSocialTwitter />,
  ];

  const countRef = useRef(null);

  const socialstyles = "text-[1.1rem] cursor-pointer";
  const spacing = "mb-4 lg:mb-6 ";

  const relatedProduct = useQuery({
    queryKey: ["relatedProductItem"],
    queryFn: () =>
      axios.get(
        `https://fakestoreapi.com/products/category/${productCategory.replace(
          "-",
          " "
        )}`
      ),
  });

  const singleProduct = useQuery({
    queryKey: ["singleProductItem", id],
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`),
  });

  if (singleProduct.isLoading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader_fetch"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    let product = singleProduct.data.data;
    console.log(countRef.current.textContent);
    addToCart({
      id: product.id,
      image: product.image,
      title: product.title,
      Quantity: countRef.current.textContent,
      price: product.price * Number(countRef.current.textContent),
    });
    setClicked(true);
  };

  // console.log(countRef);

  // console.log(singleProduct.data.data);

  const { image, title, description, category, price } =
    singleProduct.data.data;

  return (
    <div className="w-[90%] md:w-[75%] mx-auto mb-10">
      <div className=" py-10 grid grid-col-1 lg:grid-cols-2 gap-5 space-y-10k">
        {/* PRODUCT IMAGE */}
        <div className="h-[70vh] ">
          <img
            src={image}
            alt=""
            className="w-full h-full object-contain mix-blend-darken "
          />
        </div>
        {/* Description of product */}
        <div className="space-y-3 lg:w-[300px]">
          {/* TITLE */}
          <p className="title capitalize font-medium text-xl md:text-2xl text-slate-700">
            {/* Lorem ipsum. */}
            {title}
          </p>
          {/* CATEGORY */}
          <p className="category text-slate-500 text-[12px] capitalize border p-1 w-fit shadow-sm">
            {/* lorem */}
            {category}
          </p>
          {/* DESCRIPTION */}
          <p className="description text-sm text-slate-600">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            necessitatibus accusantium ipsam veritatis perspiciatis quisquam. */}
            {description}
          </p>
          {/* PRICE */}
          <p className="price text-2xl pt-2 text-[#66490191] font-semibold">
            {/* $100.00 */}${price}
          </p>

          <Quantity ref={countRef} />

          {/* ADD TO CART BUTTON */}
          <div className={`add-to-cart-btn ${spacing} relative`}>
            {/* {clicked && <span className='text-sm font-bold bg-slate-800 text-white absolute -top-8 right-0 py-1 px-2  '>Added To Cart</span>} */}
            <button
              className="py-2 block text-center border w-full text-[12px] font-semibold text-white bg-black hover:bg-[rgba(0,0,0,0.8)] transition-all disabled:bg-red-800"
              onClick={handleAddToCart}
              disabled={clicked}
            >
              {clicked ? "ADDED TO CART" : "ADD TO CART"}
            </button>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <div className="socials flex items-center gap-x-2 text-[rgba(0,0,0,0.6)]">
              <span className="font-bold text-[0.8em] mr-2 text-[rgba(0,0,0,0.4)] tracking-widest">
                SHARE
              </span>
              {socials.map((social, index) => (
                <span className={socialstyles} key={index + 1000}>
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* OTHER PRODUCTS */}
      {relatedProduct.isLoading && (
        <div className="w-full h-[400px] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
          <div className="loader_fetch"></div>
        </div>
      )}
      {relatedProduct.isLoading === false && relatedProduct.data.data && (
        <div className="other-products pt-10 space-y-5">
          <hr />
          <p className="title capitalize font-medium text-xl md:text-2xl text-slate-700">
            Related products
          </p>
          <GridSlideDisplay data={relatedProduct.data.data} />
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default SingleProductPage;
