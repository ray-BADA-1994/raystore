import { HiShoppingBag } from "react-icons/hi";

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center justify-start">
        <p className="text-xl font-mono font-semibold text-slate-700">
          RayStores
        </p>
        <HiShoppingBag />
      </div>
      <address className="text-xs text-slate-500">
        <span className=" font-semibold">Address</span> : Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Officiis, obcaecati!
      </address>
      <p className="text-xs text-slate-500">
        <span className=" font-semibold">Phone Numbes</span> -09087654321
      </p>
    </div>
  );
};

export default FooterLogo;
