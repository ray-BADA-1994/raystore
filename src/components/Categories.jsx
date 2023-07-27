import { v4 as uuidv4 } from "uuid";
import accessories from "../assets/accessories.jpg";
import women from "../assets/womenCat.jpg";
import men from "../assets/mencat2.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesArray = [
    {
      name: "Women Clothings",
      img: women,
      path: "women's-clothing",
    },
    {
      name: "Men Clothings",
      img: men,
      path: "men's-clothing",
    },
    {
      name: "Jewelery",
      img: accessories,
      path: "jewelery",
    },
  ];
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10" id="categories">
      {categoriesArray.map((category) => (
        <div
          className="h-[200px] overflow-hidden cat transition-all ease-in-out duration-200  flex justify-start items-center border px-0 relative"
          key={uuidv4()}
        >
          <img
            src={category.img}
            className="absolute top-0 w-full h-[200px] object-cover scale-100 -z-10 ease-in-out duration-[0.3s] cursor-pointer transition-all"
          />
          <Link
            to={`/all/${category.path}`}
            className="py-5 px-2 bg-[#e6e4dc]y bg-[#f1f1f1] text-slate-800 mx-5 shadow-lg"
          >
            <p className="font-semibold">{category.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
