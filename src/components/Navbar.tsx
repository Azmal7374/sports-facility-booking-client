import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import ProfileMenu from "./ProfileMenu";
import { useAppSelector } from "../Redux/hooks";
import { selectCurrentUser } from "../Redux/features/authSlice";
import logo from "../assets/sports.png"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const user = useAppSelector(selectCurrentUser);
  

  return (
    <div className="bg-[#F1F3C2] flex justify-between items-center bg-primary py-3 px-10 md:px-10 lg:px-20 shadow-xl sticky top-0 z-20">
    <div className="flex items-center gap-1">
    <img src={logo} className="w-[40px] md:w-[40px] lg:w-[60px]" />
    <h1 className="text-2xl lg:text-4xl">SportSpace</h1>
    </div>

      <div className="hidden md:hidden lg:flex gap-7 justify-center items-center text-lg font-bold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about-us"}>About Us</NavLink>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>

        {user ? (
          <div>
            <ProfileMenu />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="cursor-pointer transition-all bg-[#E8B86D]  px-4 py-1 rounded-lg  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Login
            </button>
          </Link>
        )}
      </div>

      <div className="flex md:flex lg:hidden">
        <GiHamburgerMenu
          size={"20"}
          className="cursor-pointer"
          onClick={openDrawer}
        />
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 w-[180px] "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-6 flex flex-col items-center justify-between">
          <img src="" className="w-[150px] mb-7" />

          <div className="flex flex-col gap-4 text-center">
          
            <NavLink onClick={closeDrawer}  to={"/"}>Home</NavLink>
        <NavLink className="hover:bg-[#E8B86D] px-4 py-2 rounded-lg hover:font-bold"  onClick={closeDrawer}  to={"/about-us"}>About Us</NavLink>
        <NavLink className="hover:bg-[#E8B86D] px-4 py-2 rounded-lg hover:font-bold" onClick={closeDrawer}  to={"/contact-us"}>Contact Us</NavLink>
           
            {user ? (
          <div>
            <ProfileMenu />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="cursor-pointer transition-all bg-[#E8B86D]  rounded-lg  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] font-bold px-4 py-1">
              Login
            </button>
          </Link>
        )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
