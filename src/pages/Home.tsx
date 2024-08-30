import FacilityAvailabilityCalendar from "../components/FacilityAvailabilityCalendar";
import FeaturedFacilities from "../components/FeaturedFacilities";
import Gallery from "../components/Gallery";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import VirtualFacilityTour from "../components/VirtualFacilityTour ";
import Banner from "./Banner";
import KeySponsor from "./KeySponsor";
import { motion } from "framer-motion";
// bg-[#A1D6B2]
const Home = () => {
  return (
    <div className="">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
    ></motion.div>
       <Banner/>
      <FeaturedFacilities />
      <HowItWorks />
      <Testimonials />
      <FacilityAvailabilityCalendar/>
      <VirtualFacilityTour/>
      <Gallery />
      <KeySponsor/>
    </div>
  );
};

export default Home;