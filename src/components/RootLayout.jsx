import Footer from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
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
