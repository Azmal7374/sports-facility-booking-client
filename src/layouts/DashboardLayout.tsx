import { Outlet } from "react-router-dom";
import SideDrawer from "../components/SidebarDrawer";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
return (
    <div className="py-4">
      <div className=" w-[90%] mx-auto  ">
        {/* Top Banner */}
        <div
          className="flex items-center justify-center bg-[#E8B86D]  px-6 py-3.5 rounded 
          font-[sans-serif] mb-4 pt gap-5"
        >
          <p className="text-black font-bold text-xl md:text-2xl lg:text-3xl dark:text-white">Welcome to your Dashboard</p>

          <div className="block md:block lg:hidden cursor-pointer">
            <SideDrawer />
          </div>
        </div>

        <div className="flex gap-5 ">
          <Sidebar />
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;