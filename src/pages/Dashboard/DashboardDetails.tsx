import { NavLink } from "react-router-dom";
import { selectCurrentUser } from "../../Redux/features/authSlice";
import { useAppSelector } from "../../Redux/hooks";
import AnimationBanner from "../../assets/14529-soccer-player.json";
import Lottie from "lottie-react";

const DashboardDetails = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user)
  return (
    <div>
      <div className=" from-[#F1F3C2] to-[#E3F0D3] font-[sans-serif] relative  shadow-lg shadow-[#e9d9f3] mx-auto rounded overflow-hidden">
        <div className="grid sm:grid-cols-2 max-sm:gap-6">
          <div className="text-center p-6 flex flex-col justify-center items-center">
            <h3 className="font-extrabold text-3xl text-secondary leading-tight">
              <span className="text-gray-800">Welcome</span> {user?.name}
            </h3>
            <h6 className="text-lg text-gray-800 mt-4">
              Manage your bookings and activities from here.
            </h6>

            {/* User Statistics Section */}
            <div className="mt-8">
              <h4 className="text-2xl font-semibold text-gray-700">
                Your Stats
              </h4>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-600">
                  Total Bookings: <span className="font-bold">15</span>
                </li>
                <li className="text-sm text-gray-600">
                  Upcoming Bookings: <span className="font-bold">3</span>
                </li>
                <li className="text-sm text-gray-600">
                  Total Amount Spent: <span className="font-bold">$200</span>
                </li>
              </ul>
            </div>

            <h1 className="mt-10 text-lg font-semibold text-gray-700">
              Need any help?
            </h1>

            <ul className="flex flex-wrap justify-center gap-6 mt-3">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#1976d2"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-gray-700 text-sm ml-2"
                >
                  +0081799590273
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#1976d2"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a
                  href="javascript:void(0)"
                  className="text-gray-700 text-sm ml-2"
                >
                  amar@sportspace.com
                </a>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="flex justify-end items-center p-2 rounded-bl-[230px] w-full h-full">
          <div className="mx-auto lg:px-6  animate-pulse">
            <Lottie animationData={AnimationBanner} loop={true} />
          </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-8 flex justify-around py-6 bg-gray-100 rounded-b-lg">

        {user?.role === "admin" && (
                <NavLink to="/facility-management"
                >
                   <button className="bg-blue-500  text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 font-bold">
            Book a Facility
          </button>
                </NavLink>
              )}
        
        {user?.role === "user" && (
                <NavLink to="/my-bookings"
                >
                   <button className="bg-[#E8B86D] text-white py-2 px-4 rounded shadow-md font-bold hover:bg-[#ce891a]">My  Bookings</button>
                </NavLink>
              )}
          {user?.role === "admin" && (
                <NavLink to="//all-bookings"
                >
                   <button className="bg-[#E8B86D] text-white py-2 px-4 rounded shadow-md font-bold hover:bg-[#ce891a]">  All Bookings</button>
                </NavLink>
              )}
{user?.role === "user" && (
                <NavLink to="/"
                >
                   <button className="bg-blue-500  text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 font-bold">
        Home Page
          </button>
                </NavLink>
              )}
              
        </div>
      </div>


      <div className="bg-white shadow-md rounded-lg p-6 mt-10 border border-[#E8B86D]">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Bookings</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    {/* Booking Card 1 */}
    <div className="border border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Football Practice</h3>
      <p className="text-sm text-gray-500">Date: September 10, 2024</p>
      <p className="text-sm text-gray-500">Time: 10:00 AM - 12:00 PM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
    {/* Booking Card 2 */}
    <div className="border border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Yoga Session</h3>
      <p className="text-sm text-gray-500">Date: September 12, 2024</p>
      <p className="text-sm text-gray-500">Time: 8:00 AM - 9:30 AM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
    {/* Booking Card 3 */}
    <div className="border border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Tennis Match</h3>
      <p className="text-sm text-gray-500">Date: September 15, 2024</p>
      <p className="text-sm text-gray-500">Time: 2:00 PM - 4:00 PM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
    {/* Booking Card 3 */}
    <div className="border border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Cricket Practice</h3>
      <p className="text-sm text-gray-500">Date: September 17, 2024</p>
      <p className="text-sm text-gray-500">Time: 10:00 PM - 1:00 PM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
    {/* Booking Card 3 */}
    <div className="border  border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Hocky Match</h3>
      <p className="text-sm text-gray-500">Date: September 20, 2024</p>
      <p className="text-sm text-gray-500">Time: 3:00 PM - 5:00 PM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
    {/* Booking Card 3 */}
    <div className="border border-[#E8B86D] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-700">Shuttle Match</h3>
      <p className="text-sm text-gray-500">Date: September 18, 2024</p>
      <p className="text-sm text-gray-500">Time: 10:00 PM - 1:00 PM</p>
      <button className="mt-4 text-sm text-black hover:underline">
        View Details
      </button>
    </div>
  </div>
</div>


<div className="bg-[#e8f5e9] p-6 mt-8 rounded shadow-lg">
  <h3 className="text-xl font-bold text-gray-800">
    Facility Guidelines & Rules
  </h3>
  <p className="mt-4 text-gray-700">
    Please review the following guidelines to ensure a safe and enjoyable
    experience for all users:
  </p>
  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
    <li>Arrive 10 minutes before your booking time to check in.</li>
    <li>
      Proper sports attire, including non-marking shoes, is required at all
      times.
    </li>
    <li>
      No food or drinks (except water) are allowed inside the facilities.
    </li>
    <li>Respect other users by keeping noise levels to a minimum.</li>
    <li>
      Report any equipment issues or facility damages to the management
      immediately.
    </li>
    <li>
      Failure to follow these rules may result in booking cancellation or
      facility access restrictions.
    </li>
  </ul>
  <p className="mt-4 text-gray-700 font-medium">
    Thank you for your cooperation!
  </p>
</div>


<footer className="bg-[#A1D6B2] text-gray-700 p-6 mt-12">
  <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">
    <div>
      <h3 className="text-xl font-bold">SportSpace Dashboard</h3>
      <p className="mt-2 text-sm">
        Manage your bookings and stay on top of your game with our user-friendly
        dashboard. Your one-stop solution for all your sports facility needs.
      </p>
    </div>
    <div>
      <h4 className="text-lg font-semibold">Quick Links</h4>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <a href="/bookings" className="hover:underline">
            My Bookings
          </a>
        </li>
        <li>
          <a href="/facilities" className="hover:underline">
            Browse Facilities
          </a>
        </li>
        <li>
          <a href="/help" className="hover:underline">
            Help & Support
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold">Contact Information</h4>
      <p className="mt-4 text-sm">
        <strong>Email:</strong> support@sportspace.com
        <br />
        <strong>Phone:</strong> 180-123-4567
        <br />
        <strong>Address:</strong> 1234 Sports Lane, Springfield
      </p>
    </div>
  </div>
  <div className="mt-8 text-center text-xs md:text-lg text-gray-800">
    &copy; {new Date().getFullYear()} SportSpace. All rights reserved.
  </div>
</footer>


    </div>
  );
};

export default DashboardDetails;
