import { v4 as uuidv4 } from "uuid";
import accessories from "../assets/FTaccessories.jpg";
import streetwear from "../assets/FTstreetwear.png";
import suits from "../assets/FTsuits.jpg";

const FashionTrend = () => {
  
  const categoriesArray = [
    {
      title: "Street fashion",
      catchPhrase: "Fitted for the busy lifestyle",
      img: streetwear,
    },
    {
      title: "Office Outfits",
      catchPhrase: "Official but stylish",
      img: suits,
    },
    {
      title: "Accessories",
      catchPhrase: "It is not complete without some accessories",
      img: accessories,
    },
  ];

  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-10y">
      {categoriesArray.map((category) => (
        <div
          className="h-[500px] overflow-hidden cat transition-all ease-in-out duration-200  flex justify-center items-center border px-0 relative"
          key={uuidv4()}
          style={{
            backgroundColor:
              "linear-gradient(90deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.7))",
          }}
        >
          <img
            src={category.img}
            className="absolute  top-0 w-full h-[500px] object-cover scale-100 z-[-100] ease-in-out duration-[0.3s] cursor-pointer transition-all"
          />
          <div
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.5))",
            }}
            className="absolute top-0 left-0 h-full w-full z-[-10]"
          ></div>
          <div className="py-5 w-[200px] outline-offset-4 uppercase outline-white outline outline-2 px-2 bg-[#e6e4dc]y text-[#f1f1f1] space-y-2 bg-[#f1f1f1]y text-slate-800y mx-5 shadow-lg">
            <p className="font-semibold text-lg  text-center">
              {category.title}
              {/* Street Fashion style */}
            </p>
            <hr className="bg-white w-[90%] mx-auto h-[2px]" />
            <p className="font-normal leading-relaxed tracking-wide text-xs text-center">
              {category.catchPhrase}
              {/* fitted for the busy lifestyle */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FashionTrend;
