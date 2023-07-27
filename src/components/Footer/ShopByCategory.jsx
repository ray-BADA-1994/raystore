
const ShopByCategory = () => {
  // const category = [
  //   "   SWIMWEAR",
  //   " RESORTWEAR",
  //   "    DRESSES",
  //   "  JUMPSUITS",
  //   "       TOPS",
  //   "      PANTS",
  //   "ACCESSORIES",
  //   " BRIDALWEAR",
  // ];

  const category = ["Men's Clothings", "Women's Clothings", "Jewerys"]
  return (
    <div
      id="footer-shopCategory-media-links"
      className="text-slate-600 space-y-7"
    >
      <p className="text-xs uppercase font-mono tracking-[0.3em] font-semibold text-slate-500 ">
        Shop by category
      </p>
      <div
        id="links"
        className="flex flex-col text-[10px] items-start gap-6 text-slate-500"
      >
        {category.map((item, index) => {
          return (
            <a
              key={index}
              href="#"
              className="text-slate-500 hover:text-slate-600"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
