import Categories from "../components/Categories";
import FashionTrend from "../components/FashionTrends";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import LatestItems from "../components/LatestItems";
import NewsLetters from "../components/NewsLetters";
import ScrollBar from "../components/ScrollBar";
import SectionDivider from "../components/SectionDivider";

const Home = () => {
  return (
    <div>
      <ScrollBar />
      <HeroSection />
      <div className="w-[90%] md:w-[75%] mx-auto space-y-10k">
        <Categories />
        <SectionDivider title={"Featured Item"} />
        <FeaturedProducts />
        <SectionDivider title={"Latest Item"} />
        <LatestItems />
      </div>
      <FashionTrend />
      {/* <div className="w-[75%] mx-auto space-y-10k"> */}
      <NewsLetters />
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Home;
