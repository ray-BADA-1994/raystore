/* eslint-disable react/no-unknown-property */
/* eslint-disable react/display-name */
import React from "react";
import { useState, forwardRef } from "react";
import { LayoutGroup, motion, useIsPresent } from "framer-motion";

const TextInput = forwardRef(
  ({ field, InputStyle, label, errorMessage, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    const handleFocused = () => {
      setFocused(!focused);
    };

    const animation = {
      // initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: {
        type: "fade",
        duration: 0.3,
      },
      exit: { scale: 0, opacity: 0 },
    };

    return (
      <motion.div layout {...animation}>
        <label className="font-medium text-[0.9rem] text-gray-900 capitalize block mb-1 w-fit tracking-tighter">
          {label}
        </label>
        <input
          type={field}
          className={InputStyle}
          {...props}
          required
          onBlur={handleFocused}
          focused={focused.toString()}
          onKeyUp={() => setFocused(false)}
          ref={ref}
        />
        <span className="text-[12px] text-red-500 font-normal mt-2 capitalize hidden">
          {errorMessage}
        </span>
      </motion.div>
    );
  }
);

export default TextInput;
