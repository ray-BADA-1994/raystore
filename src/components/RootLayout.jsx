import { useEffect } from "react";
// import Footer from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, [pathname]);
  return (
    <>
      <div className="lg:w-[80%] mx-auto">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      {/* <div className="w-[90%] md:w-[75%] mx-auto space-y-10k"> */}
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default RootLayout;
