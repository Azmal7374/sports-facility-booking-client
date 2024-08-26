import FeaturedFacilities from "../components/FeaturedFacilities";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import KeySponsor from "./KeySponsor";

const Home = () => {
  return (
    <div className="bg-[#A1D6B2]">
      <Hero />
      <FeaturedFacilities />
      <HowItWorks />
      <Testimonials />
      <Gallery />
      <KeySponsor/>
    </div>
  );
};

export default Home;