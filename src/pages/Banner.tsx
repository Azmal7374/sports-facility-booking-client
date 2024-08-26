import { Typewriter, Cursor } from "react-simple-typewriter";

import AnimationBanner from "../assets/14529-soccer-player.json";
import Lottie from "lottie-react";
import "./Banner.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="bg-gradient duration-500  relative  "
    >
      <div>
        <div className="area  ">
          <ul className="circles ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>

      <div>
        <div className="hero-overlay  "></div>

        <div className="flex flex-col-reverse lg:flex-row  max-w-7xl mx-auto ">
          <div className="w-full lg:w-1/2 p-5 lg:mt-24  ">
            <h1 className="text-3xl lg:text-6xl  font-bold text-[#191a19] font-LeagueSpartan">
            Enhancing<span className="text-[#E8B86D]"> Sports Booking</span>{" "}
              Through Expertise 
            </h1>

            <p className="md:py-10 py-5  md:h-80  lg:h-36 font-Raleway tracking-wider md:text-lg md:mb-28 mt-6">
              <Typewriter
                words={[
                  "Our goal for Sports Booking Facilities is to empower sports through technology, making learning accessible and enjoyable for everyone, from players to professionals, through our online Sports Booking Platform.",
                ]}
                typeSpeed={50}
              />

              <span className="text-white">
                <Cursor cursorStyle="|"></Cursor>
              </span>
            </p>

            <div className="lg:mt-10 flex gap-5  mb-14  relative ">
             <Link to="/registration">
             <button className=" text-white border-2 font-bold border-white rounded-xl px-4 bg-[#E8B86D] text-[12px] md:text-sm font-Raleway cursor-pointer  py-2">
                Get Stared
              </button>
             </Link>

             <Link className=" justify-center items-center flex text-[#E8B86D] border-2 font-bold  rounded-xl px-4 bg-white  font-Raleway text-[12px] md:text-sm  cursor-pointer border-[#E8B86D] duration-500 
                hover:bg-[#daac63] hover:text-gray-800   " to="/courseCategories?category=All">
             <button
               
              >
                View Booking
              </button></Link>
            </div>
          </div>
          <div className="  w-52   lg:w-1/2 mx-auto lg:px-6  animate-pulse">
            <Lottie animationData={AnimationBanner} loop={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;