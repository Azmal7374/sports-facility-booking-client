
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                It seems you've stumbled upon the entrance to the vast emptiness.
                </h1>
              
                <Link to="/">
                  <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-[#E8B86D] text-white hover:bg-[#CEDF9F] focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 font-bold">
                    Back To Home Page!
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://img.freepik.com/premium-photo/basketball-player-man-isolated-white-wall-doing-surprise-gesture-while-looking-side_1368-195693.jpg?uid=R91079514&ga=GA1.1.1302518135.1720608685&semt=ais_hybrid" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
