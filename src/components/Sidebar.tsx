import { List, ListItemPrefix } from "@material-tailwind/react";
import { FaCalendarCheck, FaPowerOff } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { BsBuildingFillAdd } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { logout, selectCurrentUser, useCurrentToken } from "../Redux/features/authSlice";
import { CustomJwtPayload } from "../types/types";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedInUser = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);

  const user = jwtDecode<CustomJwtPayload>(token as string);

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="flex">
  <div className="hidden lg:block w-full max-w-[20rem] bg-[#CEDF9F] rounded-xl p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="mb-2 p-4 flex items-center gap-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1IR2XGBC_2lvTehp_LhYQ9Wj9NKkwORPfw&s"
        className="w-[60px] h-[60px] border-2 border-[#E8B86D] rounded-full object-cover"
      />
      <h1 className="text-lg font-bold">{loggedInUser?.name}</h1>
    </div>
    <List  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active" : "text-lg rounded-lg hover:bg-[#E8B86D]"
        }
        to="/dashboard"
      >
        <div className="flex p-3 font-bold">
          <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
            <MdDashboard fontSize={"20"} />
          </ListItemPrefix>
          Overview
        </div>
      </NavLink>

      {/* User Routes */}
      {user?.role === "user" && (
        <NavLink
          className={({ isActive }) =>
            isActive ? "active" : "text-lg rounded-lg hover:bg-[#E8B86D]"
          }
          to="/my-bookings"
        >
          <div className="flex p-3 font-bold">
            <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <FaCalendarCheck fontSize={"20"} />
            </ListItemPrefix>
            My Bookings
          </div>
        </NavLink>
      )}

      {/* Admin Routes */}
      {user?.role === "admin" && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "text-lg rounded-lg hover:bg-[#E8B86D]"
            }
            to="/facility-management"
          >
            <div className="flex p-3 font-bold">
              <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
                <BsBuildingFillAdd fontSize={"20"} />
              </ListItemPrefix>
              Facilities
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "text-lg rounded-lg hover:bg-[#E8B86D]"
            }
            to="/all-bookings"
          >
            <div className="flex p-3 font-bold">
              <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
                <FaCalendarCheck fontSize={"20"} />
              </ListItemPrefix>
              All Bookings
            </div>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "active" : "text-lg rounded-lg hover:bg-[#E8B86D]"
            }
            to="/add-new-admin"
          >
            <div className="flex p-3 font-bold">
              <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
                <RiAdminFill fontSize={"20"} />
              </ListItemPrefix>
              Add New Admin
            </div>
          </NavLink>
        </>
      )}

      {/* Common route */}
      <button className="bg-transparent hover:bg-[#E8B86D] rounded-lg">
        <Link to={"/"} className="flex p-3 font-bold">
          <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
            <IoMdArrowRoundBack fontSize={"20"} />
          </ListItemPrefix>
          Home
        </Link>
      </button>

      <button
        onClick={handleLogOut}
        className="bg-transparent hover:bg-[#E8B86D] rounded-lg"
      >
        <div className="flex p-3 font-bold">
          <ListItemPrefix  placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
            <FaPowerOff fontSize={"20"} />
          </ListItemPrefix>
          Log Out
        </div>
      </button>
    </List>
  </div>
</div>

  );
};

export default Sidebar;