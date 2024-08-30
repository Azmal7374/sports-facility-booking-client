import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Booking from "../pages/Bookings";
import Facilities from "../pages/Facilities";
import FacilitiesDetails from "../pages/FacilitiesDetails";
import ViewAllBookings from "../pages/Dashboard/ViewAllBookings";
import ProtectedRoute from "./ProtectedRoute";
import DashboardDetails from "../pages/Dashboard/DashboardDetails";
import MyBookings from "../pages/Dashboard/MyBookings";
import CreateNewAdmin from "../pages/Dashboard/CreateNewAdmin";
import FacilityManage from "../pages/Dashboard/FacilityManage";
import DashboardLayout from "../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/about-us",
        element:<AboutUs/>,
      },
      {
        path: "/contact-us",
        element:<ContactUs/>,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/facilities/:id",
        element: <FacilitiesDetails />,
      },
      {
        path: "/book-facility/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/facility-management",
        element: (
          <ProtectedRoute role="admin">
            <FacilityManage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-bookings",
        element: (
          <ProtectedRoute role="admin">
            <ViewAllBookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/add-new-admin",
        element: (
          <ProtectedRoute role="admin">
            <CreateNewAdmin />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;