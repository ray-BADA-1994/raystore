/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";
import women from "../assets/womenCat.jpg";
import { v4 as uuidv4 } from "uuid";
import { MdAddCircle, MdViewCarousel } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ShowQuickInfo from "./ShowQuickInfo";
import { Link, useNavigate } from "react-router-dom";

const GridSlideDisplay = ({ data }) => {
  // console.log(data);
  //   const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const [showQuickInfo, setShowQuickInfo] = useState(false);
  const [number, setNumber] = useState(null);
  const handleQuickView = (index) => {
    setNumber(index);
    setShowQuickInfo(true);
  };

  const [onResize, setOnResize] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth);
      // do magic for resize
      if (window.innerWidth < 720) {
        setOnResize(true);
      } else {
        setOnResize(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {data.map((element, i) => (
          <div
            className="shadow cursor-pointer card-div transition-all ease-linear duration-[1s]"
            key={uuidv4()}
            onClick={() =>
              onResize
                ? navigate(
                    `/${element.category.replace(/\s+/g, "-")}/${
                      element.id
                    }/${element.title.replace(/\s+/g, "-")}`
                  )
                : ""
            }
          >
            <div className="h-[18rem] relative card-img-div">
              <img
                className=" w-full h-full object-cover object-center mb-0 mix-blend-darken"
                src={element.image}
                alt="content"
              />
              <span
                onClick={() => handleQuickView(i)}
                className=" hidden lg:flex items-center gap-1 absolute left-5 bottom-3 z-10 text-[10px] font-bold text-white bg-[#e1b138] opacity-0 py-1 px-2"
              >
                <MdViewCarousel className="text-white" />
                Quick View
              </span>
            </div>
            <div className="bg-gray-100 p-6 pt-2">
              <h2 className="text-base text-gray-900 font-medium title-font mb-1">
                {/* Chichen Itza */}
                <Link
                  to={`/${element.category.replace(/\s+/g, "-")}/${
                    element.id
                  }/${element.title.replace(/\s+/g, "-")}`}
                >
                  {element.title}
                </Link>
              </h2>
              <h3 className=" text-gray-400 text-xs font-semibold title-font">
                {/* Cloth Type */}
                {element.category}
              </h3>
              <hr className="bg-gray-500 my-3" />
              <div className="flex items-center justify-between leading-relaxed text-base">
                <p className="text-sm text-[#e1b13891] font-semibold">
                  {/* $10.34 */}${element.price}
                </p>
                <Link
                  to={`/${element.category.replace(/\s+/g, "-")}/${
                    element.id
                  }/${element.title.replace(/\s+/g, "-")}`}
                  className="text-gray-300 relative add-to-cart hidden md:inline-block"
                >
                  <MdAddCircle />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showQuickInfo &&
        createPortal(
          <ShowQuickInfo
            index={number}
            closeModal={setShowQuickInfo}
            data={data}
          />,
          document.querySelector("#product-quick-info")
        )}
    </>
  );
};

export default GridSlideDisplay;
