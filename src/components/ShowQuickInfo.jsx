/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious, GrClose } from "react-icons/gr";
// import heroImg1 from "../assets/heroimg1.png";
// import heroImg2 from "../assets/heroimg3.png";
// import mencat from "../assets/mencat.jpg";
// import mencat2 from "../assets/mencat2.jpg";
import { motion } from "framer-motion";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      //   delay: 0.8,
      duration: 2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const listItem2 = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ShowQuickInfo = ({ index, closeModal, data }) => {
  const [productIndex, setProductIndex] = useState(index);
  //   console.log(index);
  // data;

  // const displayedProduct = data.filter((product) => product.id === index);

  // const productData = [
  //   {
  //     img: heroImg1,
  //   },
  //   {
  //     img: heroImg2,
  //   },
  //   {
  //     img: mencat,
  //   },
  //   {
  //     img: mencat2,
  //   },
  // ];

  useEffect(() => {
    setProductIndex(index);
  }, []);

  return (
    <div className="h-screen py-10 w-screen fixed z-[300] top-0 left-0 bg-[rgba(255,255,255,0.5)] flex justify-center items-center">
      <motion.div
        key={data}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        // variants={container}
        // initial="hidden"
        // animate="show"
        className="lg:w-1/2 bg-white h-full flex justify-center items-center relative"
      >
        <motion.div
          //   variants={listItem}
          className="img-container  h-full lg:w-1/2 bg-blend-screen"
        >
          <img
            src={data[productIndex].image}
            alt=""
            className="w-full h-full object-contain bg-blend-screen"
          />
        </motion.div>
        <motion.div
          //   variants={listItem2}
          className="short-description h-full lg:w-1/2 bg-red-500y bg-white flex items-start px-5 justify-center gap-5 flex-col"
        >
          <p className="text-lg font-semibold">{data[productIndex].title}</p>
          <p className="text-xs lg:w-[90%] text-justify font-semibold text-slate-500 leading-relaxed">
            {data[productIndex].description}
          </p>

          {/* <p className="text-lg text-[#e1b13891]y text-white font-semibold bg-black py-1 px-4">
            $ {data[productIndex].price}
          </p> */}

          <p className="price-tag">$ {data[productIndex].price}</p>
          <Link
            to={`/${data[productIndex].category.replace(/\s+/g, "-")}/${
              data[productIndex].id
            }/${data[productIndex].title.replace(/\s+/g, "-")}`}
            className="h-fit flex items-center mt-10 justify-center gap-2 px-3 py-1 text-sm bg-[#7f611391] text-white cursor-pointer"
          >
            <GrFormView className=" text-base" />
            View Product
          </Link>
        </motion.div>
        <button
          className="absolute top-[50%] translate-y-[-50%] left-[-70px] p-3 rounded-full bg-[#f1f1f1] text-black text-3xl"
          onClick={() => {
            if (productIndex == 0) {
              return setProductIndex(data.length - 1);
            }
            setProductIndex((prev) => prev - 1);
          }}
        >
          <GrFormPrevious />
        </button>
        <button
          className="absolute top-[50%] translate-y-[-50%] right-[-70px] p-3 rounded-full bg-[#f1f1f1] text-black text-3xl"
          onClick={() => {
            if (productIndex >= data.length - 1) {
              return setProductIndex(0);
            }
            setProductIndex((prev) => prev + 1);
          }}
        >
          <GrFormNext />
        </button>
      </motion.div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 0.95 }}
        className="fixed top-5 right-10 p-2 border border-slate-900 rounded-full bg-[#f1f1f1]y text-black text-lg"
        onClick={() => closeModal(false)}
      >
        <GrClose />
      </motion.button>
    </div>
  );
};

export default ShowQuickInfo;
