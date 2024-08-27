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
        path: "/book-facility/:id",
        element: (
          <PrivateRoute>
            <Booking />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;