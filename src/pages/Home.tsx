import FeaturedFacilities from "../components/FeaturedFacilities";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-[#F5EDED]">
      <Hero />
      <FeaturedFacilities />
      <HowItWorks />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;