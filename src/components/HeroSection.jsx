import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import heroImg1 from "../assets/heroimg1.png";
import heroImg2 from "../assets/heroImg3.png";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.2,
      delay: 0.8,
      duration: 0.7,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  // const ref = useRef(null);
  // useEffect(() => {
  //   const element3d = document.querySelector(".effects");

  //   // console.log(element3d);

  //   document.addEventListener("mousemove", (e) => {
  //     rotateElement(e, element3d);
  //   });

  //   function rotateElement(event, element) {
  //     // get mouse position
  //     const x = event.clientX;
  //     const y = event.clientY;
  //     console.log(x, y);

  //     console.log(element);

  //     // find the middle
  //     const middleX = window.innerWidth / 2;
  //     const middleY = window.innerHeight / 2;
  //     // console.log(middleX, middleY)

  //     // get offset from middle as a percentage
  //     // and tone it down a little
  //     const offsetX = ((x - middleX) / middleX) * 45;
  //     const offsetY = ((y - middleY) / middleY) * 45;
  //     // console.log(offsetX, offsetY);

  //     // set rotation
  //     element?.style?.setProperty("--rotateX", offsetX + "deg");
  //     element?.style?.setProperty("--rotateY", -1 * offsetY + "deg");
  //   }

  //   return () => {
  //     document.removeEventListener("mousemove", (e) => {
  //       rotateElement(e, element3d);
  //     });
  //   };
  // }, []);
  return (
    <div>
      <Slide autoplay={false}>
        <div className="each-slide-effect">
          <div className="md:pl-20 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="basis-1/3 h-full"
              style={{
                backgroundImage: `url(${heroImg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPositionY: "center",
              }}
            ></motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className=" basis-1/3 md:basis-2/3 bg-center h-full flex flex-col justify-center gap-5 md:gap-10"
            >
              <motion.div className="space-y-3" variants={listItem}>
                <h2 className="md:text-2xl font-serif font-normal text-black">
                  Exclusive Offer
                </h2>
                <p className="text-lg md:text-3xl font-medium text-black">
                  Little Black Dress
                </p>
              </motion.div>
              <motion.div className="space-y-3" variants={listItem}>
                <p className="price text-bold font-bold flex items-baseline gap-5 text-2xl md:text-3xl text-[#e1b13891]">
                  $100
                  <span className="text-gray-400 bg-transparent text-base font-bold olderprice">
                    $150
                  </span>
                </p>
                <p className="text-[8px] md:text-[10px] text-gray-400 uppercase font-medium">
                  *free shipping worldwide
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="md:pl-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="basis-1/3 h-full flex flex-col justify-center gap-5 md:gap-10"
            >
              <motion.div className="space-y-3" variants={listItem}>
                <h2 className="md:text-2xl font-serif font-normal text-black">
                  Exclusive Offer
                </h2>
                <p className="text-lg md:text-3xl font-medium text-black">
                  Buy Our Super Comfortable Shirt
                </p>
              </motion.div>
              <motion.div className="space-y-3" variants={listItem}>
                <p className="price text-bold font-bold flex items-baseline gap-5 text-2xl md:text-3xl text-[#e1b13891]">
                  $100
                  <span className="text-gray-400 bg-transparent text-base font-bold olderprice">
                    $150
                  </span>
                </p>
                <p className="text-[8px] md:text-[10px] text-gray-400 uppercase font-medium">
                  *free shipping worldwide
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="basis-1/3 h-full"
              style={{
                backgroundImage: `url(${heroImg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPositionY: "center",
              }}
            ></motion.div>
          </div>
        </div>
        {/* <div className="each-slide-effect">
          <div className="pl-20">
            <div
              className="flex w-fit h-full items-center text-[40px] effects"
              ref={ref}
            >
              <p className="font-normal mr-[-40px] text-[40px] text-black w-fit ">
                Don't
                <br /> be <br />
                Afraid
              </p>
              <div
                className="w-[500px] h-full"
                style={{
                  backgroundImage: `url(${heroImg2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="font-normal ml-[-50px] text-[40px] text-black ">
                {" "}
                To <br />
                Express <br />
                your <br />
                style
              </p>
            </div>
          </div>
        </div> */}
        {/* <div className="each-slide-effect">
          <div
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)",
          // }}
          >
            <span>Slide 2</span>
          </div>
        </div> */}
      </Slide>
    </div>
  );
};

export default HeroSection;
