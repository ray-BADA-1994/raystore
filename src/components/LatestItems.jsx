import axios from "axios";
import GridSlideDisplay from "./GridSlideDisplay";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LatestItems = () => {
  // const productData = [1, 2, 3, 4];

 

  const menCloths = useQuery({
    queryKey: ["mensLatestProducts"],
    queryFn: () =>
      axios.get(
        "https://fakestoreapi.com/products/category/men's clothing?limit=1"
      ),
    refetchOnWindowFocus: false,
    // refetchInterval: 5,
  });
  const womenCloths = useQuery({
    queryKey: ["womensLatestProducts"],
    queryFn: () =>
      axios.get(
        "https://fakestoreapi.com/products/category/women's clothing?limit=2"
      ),
    refetchOnWindowFocus: false,
    // refetchInterval: 5,
  });
  const accessories = useQuery({
    queryKey: ["latestAccessories"],
    queryFn: () =>
      axios.get("https://fakestoreapi.com/products/category/jewelery?limit=1"),
    refetchOnWindowFocus: false,
    // refetchInterval: 5,
  });

  if (menCloths.isLoading || accessories.isLoading || womenCloths.isLoading) {
    return (
      <div className="w-full h-[400px] bg-[rgba(0,0,0,0.01)] flex justify-center items-center">
        <div className="loader_fetch"></div>
      </div>
    );
  }

  if (menCloths.isError || accessories.isError || womenCloths.isError) {
    return;
  }

  // if (menCloths.isError || accessories.isError || womenCloths.isError) {
  //   const currentUrl = window.location.pathname + window.location.search;
  //   // console.log(currentUrl);
  //   document.body.style.height = "100vh";
  //   document.body.style.overflowY = "hidden";
  //   return (
  //     <div className="w-full h-screen py-10 z-[1000] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)]y bg-white flex justify-center items-center">
  //       <div>
  //         <p className="font-semibold text-2xl text-gray-300">
  //           Network Error! Check your network connection!!
  //         </p>
  //         <Link to={currentUrl}>
  //           <button>Refresh</button>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  const data = [
    ...womenCloths.data.data,
    ...menCloths.data.data,
    ...accessories.data.data,
  ];

  return (
    <>
      <GridSlideDisplay data={data} />
    </>
  );
};

export default LatestItems;
