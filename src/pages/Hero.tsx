import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='mt-12'>
            <section className="relative flex items-center justify-center  bg-center" >
  <div className="absolute "></div>
  <div className="relative z-10 text-center  max-w-2xl px-4">
    <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gray-800 dark:text-white">Welcome to SportsSpace</h1>
    <p className="text-lg md:text-xl mb-8 text-gray-700 ">
      Book Your Favorite Sports Facilities Seamlessly.
    </p>
    <div className="flex justify-center gap-4">
      <Link to="/book-now" className="bg-[#E8B86D] hover:bg-[#d7a75c] text-black font-bold py-3 px-6 rounded-lg shadow-md transition-all">
        Book Now
      </Link>
      <Link to="/learn-more" className="bg-transparent border border-[#E8B86D] hover:bg-[#E8B86D] hover:text-black text-black font-bold py-3 px-6 rounded-lg shadow-md transition-all">
        Learn More
      </Link>
    </div>
  </div>
</section>

        </div>
    );
};

export default Hero;