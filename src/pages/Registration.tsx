import { Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../Redux/hooks";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { selectCurrentUser } from "../Redux/features/authSlice";
import { useRegistrationMutation } from "../Redux/features/authApi";
import reader from '.././assets/118046-lf20-oahmox5rjson.json'

import Lottie from "lottie-react";
const Registration = () => {
  const user = useAppSelector(selectCurrentUser);
  const [registration, { isLoading }] = useRegistrationMutation();

  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userInfo = { name, email, password, phone, role: "user", address };
      await registration(userInfo).unwrap();

      toast.success("Registration successful!");

      navigate("/login");
    } catch (err) {
      toast.error("Failed to register");
      console.log(err);
    }
  };

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div className="">
        <div className="py-16">
          <div className="flex  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2">
            <div>
      <Lottie animationData={reader} loop={true} />
      </div>
            </div>
            <div className="w-full p-8 lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                SportsBooking
              </h2>
              <p className="text-xl text-gray-600 text-center">
                Sign Up Here
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

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

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Phone
                    </label>
                  </div>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                  </div>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="bg-button hover:bg-button-dark  font-bold py-2 px-4 w-full rounded"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex gap-3 justify-center items-center text-2xl">
                        <div className="animate-spin ">
                          <TbFidgetSpinner />
                        </div>
                        <span className="text-lg">Please Wait</span>
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;