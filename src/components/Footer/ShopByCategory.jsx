import { Link } from "react-router-dom";

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

  // const category = ["Men's Clothings", "Women's Clothings", "Jewerys"]
  const category = [
    { cat: "Men's Clothings", link: "all/men's-clothing" },
    { cat: "Women's Clothings", link: "all/women's-clothing" },
    { cat: "Jewerys", link: "all/jewelery" },
  ];
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
            <Link
              key={index}
              to={item.link}
              className="text-slate-500 hover:text-slate-600"
            >
              {item.cat}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;
