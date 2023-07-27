import SocialMediaLinks from "./SocialMediaLinks";
import ShopByCategory from "./ShopByCategory";
import Info from "./Info";
import FooterLogo from "./FooterLogo";

const Footer = () => {
  return (
    <footer className="lg:flex grid grid-cols-1 gap-10 h-fit md:h-[60vh] bg-white py-10 px-10 lg:px-[10%]">
      <div className="basis-2/5">
        <SocialMediaLinks />
      </div>
      <div className="basis-1/5">
        <ShopByCategory />
      </div>
      <div className="basis-1/5">
        <Info />
      </div>
      <div>
        <FooterLogo />
      </div>
    </footer>
  );
};

export default Footer;
