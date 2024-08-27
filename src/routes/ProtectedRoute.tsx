import { ReactNode } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../types/types";
import { useCurrentToken } from "../Redux/features/authSlice";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = jwtDecode<CustomJwtPayload>(token);
  }

  console.log(user);

  if (role !== undefined && role !== user?.role) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;