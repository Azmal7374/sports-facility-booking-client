import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utlis/ScrollToTop";
import ScrollToTopButton from "../utlis/ScrollToTopButton";

const Mainlayout = () => {
  return (
    <div>
     <ScrollToTop/>
      <Navbar />

      <Outlet />

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Mainlayout;