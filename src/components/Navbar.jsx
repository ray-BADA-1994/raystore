import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShopping,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
// import { MdOutlineAccountCircle } from "react-icons/md";
import { useEffect, useState } from "react";
// import { useStore } from "zustand"
import { useCartStore } from "../Store/store";
import { createPortal } from "react-dom";
import CartModal from "./CartModal";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation()

  // console.log(location);

  const navigate = useNavigate();

  const handleNavigateToPage = (path) => {
    setToggleMenu(!toggleMenu);
    navigate(path);
  };

  const handleOnClickOfLogo = (path) => {
    setToggleMenu(false);
    navigate(path);
  };

  // const cartnum = useStore((state) => state.cartnum);
  const cartnum = useCartStore((state) => state.cartnum);

  const [showCart, setShowCart] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "scroll";
    }
  }, [toggleMenu]);

  const handleScrollToSection = (path) => {
    setToggleMenu(false);
    const element = document.getElementById(path);
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [onResize, setOnResize] = useState(false);

  // const navigate = useNavigate();

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
    <nav className="py-5  flex lg:justify-between gap-3 md:gap-0 relative items-center border-b border-gray-300">
      {/* TITLE */}
      <span
        onClick={() => handleOnClickOfLogo("/")}
        to={"/"}
        className="font-semibold cursor-pointer text-2xl text-black order-2 md:order-[0]"
      >
        RayStore
      </span>
      <div
        className="toggle-btn pl-4 md:hidden order-1 text-2xl"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {!toggleMenu ? <GiHamburgerMenu /> : <AiOutlineClose />}
        {/* <input
          hidden
          className="check-icon"
          id="check-icon"
          name="check-icon"
          type="checkbox"
          value={!toggleMenu}
          onChange={handleMenu}
        />
        <label className="icon-menu" htmlFor="check-icon">
          <div className="bar bar--1"></div>
          <div className="bar bar--2"></div>
          <div className="bar bar--3"></div>
        </label> */}
      </div>
      <button
        onClick={() => setShowCart(true)}
        disabled={toggleMenu}
        className="---layout--- order-last md:hidden relative ml-auto flex items-center justify-center gap-2 text-base cursor-pointer font-medium text-slate-500 disabled:text-gray-300 hover:text-slate-700 md:text-sm border-r border-slate-300 transition-all py-1y mr-1 px-2 hover:border-slate-800  "
      >
        <BsCart4 className="mt-[2px]" />
        {cartnum > 0 && (
          <span
            className={`absolute top-[20%] -left-3 font-bold grid place-content-center h-4 w-4 rounded-full text-[10px]  text-white   ${
              toggleMenu ? "animate-none bg-gray-300" : "animate-pulse bg-black"
            }`}
          >
            {cartnum}
          </span>
        )}
      </button>
      {toggleMenu && (
        <div className="fixed top-[73px] left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] z-20"></div>
      )}
      <ul
        className={`${
          toggleMenu
            ? " absolute bg-[#f1f1f1] text-slate-900 top-[100%] z-20 gap-7 w-fit flex flex-col py-6 shadow-md"
            : " hidden md:flex md:gap-5 md:text-white"
        }`}
      >
        <span
          onClick={() => (onResize ? handleNavigateToPage("/") : navigate("/"))}
          // to={"/"}
          className="---layout--- cursor-pointer flex items-center justify-center gap-1  text-base   font-medium text-slate-500 hover:text-slate-700 md:text-sm border-r border-slate-300 transition-all py-1y mr-1 px-2 hover:border-slate-800  "
        >
          <AiOutlineHome className="mt-[2px]" />
          Home
        </span>
        <button
          onClick={() => handleScrollToSection("categories")}
          className={`---layout---  ${location.pathname === '/' ? "flex" : "hidden"} items-center justify-center gap-2 text-base  font-medium text-slate-500 hover:text-slate-700 md:text-sm border-r border-slate-300 transition-all py-1y mr-1 px-2 hover:border-slate-800`}
        >
          <BiCategory className="mt-[2px]" />
          Categories
        </button>
        <span
          onClick={() =>
            onResize ? handleNavigateToPage("/shop") : navigate("/shop")
          }
          // to={"/shop"}
          className="---layout--- cursor-pointer flex items-center justify-center gap-2 text-base  font-medium text-slate-500 hover:text-slate-700 md:text-sm border-r border-slate-300 transition-all py-1y mr-1 px-2 hover:border-slate-800  "
        >
          <AiOutlineShopping className="mt-[2px]" />
          Shop
        </span>
        <span
          onClick={() => setShowCart(true)}
          className="---layout--- relative hidden md:flex items-center justify-center gap-2 text-base cursor-pointer font-medium text-slate-500 hover:text-slate-700 md:text-sm border-r border-slate-300 transition-all py-1y mr-1 px-2 hover:border-slate-800  "
        >
          <BsCart4 className="mt-[2px]" />
          {cartnum > 0 && (
            <span
              className={`absolute top-[20%] -left-3 font-bold grid place-content-center h-4  aspect-square rounded-full text-[10px]  text-white bg-black animate-pulse`}
            >
              {cartnum}
            </span>
          )}
          Cart
        </span>
      </ul>
      {showCart &&
        createPortal(
          <CartModal closeModal={setShowCart} />,
          document.querySelector("#cart-modal")
        )}
    </nav>
  );
};
