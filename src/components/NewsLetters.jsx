import { useState } from "react";
import { motion } from "framer-motion";

const NewsLetters = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="py-20 flex justify-between flex-col gap-3 items-center bg-[#D8CBAC]">
      <div className="text-slate-700 text-xs uppercase space-y-3">
        <p className="font-semibold text-center">10% off your first purchase</p>
        <p className="font-bold text-base text-center tracking-wider">
          Subscribe
        </p>
        <p className="font-normal text-center">
          Discover exclusive new collections
        </p>
      </div>
      <div className="space-x-5y flex gap-5 flex-col items-center justify-center">
        <input
          type="email"
          className="w-[300px] lg:w-[500px] px-4 py-4 font-semibold text-black placeholder:text-slate-300 placeholder:italic placeholder:font-normal placeholder:text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
        />
        <motion.button
          whileHover={{
            // scale: 0.98,
            fontSize: "15px",
          }}
          className="font-semibold text-base px-4 py-3 uppercase bg-black text-[#f1f1f1]"
        >
          Subscribe
        </motion.button>
      </div>
    </div>
  );
};

export default NewsLetters;
