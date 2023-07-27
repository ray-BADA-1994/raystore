const ScrollBar = () => {
  return (
    <div className="scroll-div">
      <p
        className="scroll-p flex items-center 
      md:justify-between gap-10 uppercase text-[8px] md:text-sm font-semibold text-[#f1f1f1]"
      >
        <span className="block whitespace-nowrap">
          Exclusive special discount for newcomers and existing customers
        </span>
        <span className="block whitespace-nowrap">
          10% discount on all products
        </span>
        <span className="block whitespace-nowrap">
          Free shipping within Nigeria
        </span>
      </p>
    </div>
  );
};

export default ScrollBar;
