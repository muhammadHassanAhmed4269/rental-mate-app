import React from "react";
import coffeeTable from "../../Assets/coffeeTable.svg";
import facebookIcon from "../../Assets/facebook.svg";
import googleIcon from "../../Assets/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid h-full grid-cols-12">
      <div className="relative col-span-4 flex flex-col py-20 items-center h-full gap-4 bg-[#01A664]">
        <div className="text-white text-[30px] font-bold px-10">
          Need it? Rental Mate delivers.{" "}
        </div>
        <div className=" px-10 text-white text-[20px]">
          No more buying, just renting with Rental Mate{" "}
        </div>
        <img className="absolute bottom-0 left-40 z-10" src={coffeeTable} />
      </div>
      <div className="bg-[#01A664] col-span-8 relative">
        <div className=" h-full rounded-l-3xl flex justify-center items-center flex-col bg-white">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="font-bold text-[#01A664] text-[30px]">
                Welcome
              </div>
              <div>
                Login to Rental Mate or{" "}
                <Link className="text-[#1976D2] " to={"/Signup"}>
                  Create an account
                </Link>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex items-center bg-[#D9D9D9] w-[500px] rounded-3xl h-12 px-5 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M4.54102 7.78936L10.9993 12.6331C12.1105 13.4664 13.6382 13.4664 14.7493 12.6331L21.2077 7.78931"
                      stroke="black"
                      stroke-opacity="0.25"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.1662 5.70581H5.58284C4.43225 5.70581 3.49951 6.63855 3.49951 7.78914V18.2058C3.49951 19.3564 4.43225 20.2891 5.58284 20.2891H20.1662C21.3168 20.2891 22.2495 19.3564 22.2495 18.2058V7.78914C22.2495 6.63855 21.3168 5.70581 20.1662 5.70581Z"
                      stroke="black"
                      stroke-opacity="0.25"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <input
                    className="bg-[#D9D9D9] w-full focus:outline-none text-[14px]"
                    placeholder="Email Address or Phone Number"
                  />
                </div>
                <div className="flex items-center bg-[#D9D9D9] w-[500px] rounded-3xl h-12 px-5 gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 26 25"
                    fill="none"
                  >
                    <path
                      d="M6.80273 10.4167V9.375C6.80273 5.92322 9.60095 3.125 13.0527 3.125C16.5045 3.125 19.3027 5.92322 19.3027 9.375V10.4167H21.3861C21.9614 10.4167 22.4277 10.883 22.4277 11.4583V23.9583C22.4277 24.5336 21.9614 25 21.3861 25H4.7194C4.14411 25 3.67773 24.5336 3.67773 23.9583V11.4583C3.67773 10.883 4.14411 10.4167 4.7194 10.4167H6.80273ZM20.3444 12.5H5.76107V22.9167H20.3444V12.5ZM12.0111 18.4712C11.3884 18.111 10.9694 17.4378 10.9694 16.6667C10.9694 15.516 11.9021 14.5833 13.0527 14.5833C14.2034 14.5833 15.1361 15.516 15.1361 16.6667C15.1361 17.4378 14.7171 18.111 14.0944 18.4712V20.8333H12.0111V18.4712ZM8.88607 10.4167H17.2194V9.375C17.2194 7.07381 15.3539 5.20833 13.0527 5.20833C10.7515 5.20833 8.88607 7.07381 8.88607 9.375V10.4167Z"
                      fill="black"
                      fill-opacity="0.25"
                    />
                  </svg>
                  <input
                    className="bg-[#D9D9D9] w-full focus:outline-none text-[14px]"
                    placeholder="Password"
                  />
                </div>
                <button className="px-6 text-[14px]">Forgot Password?</button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-9/12">
                <button className="bg-[#01A664]  py-2 px-12 rounded-xl text-white font-semibold text-[13px] tracking-[1px]">
                  Login
                </button>
                <div>Or</div>
                <div className="flex items-center gap-5">
                  <button className="shadow-lg rounded-lg">
                    <img className="mt-1" src={facebookIcon} />
                  </button>
                  <button className="shadow-xl rounded-lg">
                    <img src={googleIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
