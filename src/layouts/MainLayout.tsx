import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../utlis/ScrollTpTop";

const Mainlayout = () => {
  return (
    <div>
     <ScrollToTop/>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Mainlayout;