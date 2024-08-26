import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoginMutation } from "../Redux/features/authApi";
import { selectCurrentUser, setUser } from "../Redux/features/authSlice";
import Lottie from "lottie-react";
import reader from '.././assets/38435-register.json'

const Login = () => {
  const [email, setEmail] = useState("web@programming-hero.com");
  const [password, setPassword] = useState("programming-hero");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userInfo = { email, password };
      const res = await login(userInfo).unwrap();

      console.log(res);

      dispatch(setUser({ user: res?.data, token: res?.token }));

      toast.success("Logged in successfully");

      navigate("/");
    } catch (err: any) {
      if (err.data.success === false) {
        toast.error(err.data.message);
      }
    }
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="">
      <div className="py-16">
        <div className="flex  rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2">
          <Lottie animationData={reader} loop={true} />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              SportsBooking
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Login Here
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  defaultValue="azmal@gmail.com"
                />
               
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-8">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="bg-button hover:bg-button-dark  font-bold py-2 px-4 w-full rounded"
                >
                  {isLoading ? (
                    <div className="flex gap-3 justify-center items-center text-2xl">
                      <div className="animate-spin ">
                        <TbFidgetSpinner />
                      </div>
                      <span className="text-lg">Please Wait</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>

            <div className="">
              <span className="border-b"></span>
              <p className="text-lg text-gray-600 mt-4">
              New Here? {" "}
                <Link
                  to={"/registration"}
                  className="text-button-dark hover:underline"
                >
                 Create an Account
                </Link>
              </p>

              <span className="border-b w-1/5 md:w-1/4">
              
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;