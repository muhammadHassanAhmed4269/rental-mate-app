// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Backgroundimg from "../../Assets/signupBackground.png";
// import Laptopimg from "../../Assets/signupLaptop.png";
// import Fblogo from "../../Assets/fbLogo.png";
// import { Link } from "react-router-dom";
// import { registerUser, isUserRegistered } from "../../userService";

// const Index = () => {
//   const navigate = useNavigate();
//   const handleSignUp = (userData) => {
//     if (isUserRegistered(userData.email)) {
//       alert("User already exists. Please log in.");
//       return;
//     }

//     const registrationSuccessful = registerUser(userData);

//     if (registrationSuccessful) {
//       alert("Registration successful!");
//     } else {
//       alert("Registration failed. User already exists.");
//     }
//   };

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   let name, value;
//   const handleInputs = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const submitRegister = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = user;

//     const res = await fetch("/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });
//     const data = await res.json();
//     if (data.status === 422 || !data) {
//       window.alert("Invalid Registration");
//       console.log("Invalid Registration");
//     } else {
//       window.alert("Registration Successfully");
//       console.log("Registration Successfully");
//       navigate("/login", { replace: true });
//     }
//   };
//   return (
//     <div
//       className="relative "
//       style={{
//         backgroundImage: `url(${Backgroundimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex justify-between w-11/12 mx-auto h-screen items-center ">
//         <div>
//           <img
//             src={Laptopimg}
//             alt="Laptop"
//             className="w-[586px] h-[416px] mx-auto mb-4"
//           />
//         </div>
//         <div class="rounded-[40px] flex flex-col items-center bg-gradient-box shadow-box w-[700px] h-[650px]  p-8">
//           <h1 class="text-[42px] text-white font-bold mb-4">
//             Create an account{" "}
//           </h1>
//           <p class="text-white  mb-6">
//             Already have an Account ?{" "}
//             <Link to={"/Login"} className="text-[#1976D2]">
//               Log in
//             </Link>
//           </p>
//           <form method="POST" id="register-form">
//             <div class="relative flex items-center mt-7  rounded-2xl bg-[#d9d9d9] bg-opacity-60 h-[52px] w-[437px]">
//               <input
//                 type="text"
//                 name="name"
//                 value={user.name}
//                 onChange={handleInputs}
//                 placeholder="Name"
//                 class="w-full py-2 pl-12 pr-4 text-gray-700 bg-transparent placeholder-gray-400 border-none focus:outline-none"
//               />
//               <div class="absolute left-3 top-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="24"
//                   fill="none"
//                   viewBox="0 0 28 24"
//                   class="text-black "
//                 >
//                   <path
//                     d="M23.3333 22H21V20C21 18.3431 19.4331 17 17.5 17H10.5C8.56701 17 7 18.3431 7 20V22H4.66667V20C4.66667 17.2386 7.27834 15 10.5 15H17.5C20.7216 15 23.3333 17.2386 23.3333 20V22ZM14 13C10.134 13 7 10.3137 7 7C7 3.68629 10.134 1 14 1C17.866 1 21 3.68629 21 7C21 10.3137 17.866 13 14 13ZM14 11C16.5773 11 18.6667 9.20914 18.6667 7C18.6667 4.79086 16.5773 3 14 3C11.4227 3 9.33333 4.79086 9.33333 7C9.33333 9.20914 11.4227 11 14 11Z"
//                     fill="black"
//                     fill-opacity="0.25"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div class="relative mt-5 flex items-center  rounded-2xl bg-[#d9d9d9] bg-opacity-60 h-[52px] w-[437px]">
//               <input
//                 type="email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleInputs}
//                 placeholder="Email Address or Phone Number"
//                 class="w-full py-2 pl-12 pr-4 text-gray-700 bg-transparent placeholder-gray-400 border-none focus:outline-none"
//               />
//               <div class="absolute left-3 top-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="28"
//                   height="24"
//                   viewBox="0 0 28 24"
//                   fill="none"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M4.375 5.25L3.5 6V18L4.375 18.75H23.625L24.5 18V6L23.625 5.25H4.375ZM5.25 7.6955V17.25H22.75V7.69525L13.9999 14.5136L5.25 7.6955ZM21.3615 6.75H6.63817L13.9999 12.4864L21.3615 6.75Z"
//                     fill="black"
//                     fill-opacity="0.25"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div class="relative flex mt-5 items-center  rounded-2xl bg-[#d9d9d9] bg-opacity-60 h-[52px] w-[437px]">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleInputs}
//                 class="w-full py-2 pl-12 pr-4 text-gray-700 bg-transparent placeholder-gray-400 border-none focus:outline-none"
//               />
//               <div class="absolute left-3 top-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="24"
//                   viewBox="0 0 30 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M7.81319 10V9C7.81319 5.68629 11.0382 3 15.0165 3C18.9947 3 22.2198 5.68629 22.2198 9V10H24.6209C25.2839 10 25.8214 10.4477 25.8214 11V23C25.8214 23.5523 25.2839 24 24.6209 24H5.41209C4.74905 24 4.21154 23.5523 4.21154 23V11C4.21154 10.4477 4.74905 10 5.41209 10H7.81319ZM23.4203 12H6.61264V22H23.4203V12ZM13.8159 17.7324C13.0982 17.3866 12.6154 16.7403 12.6154 16C12.6154 14.8954 13.6904 14 15.0165 14C16.3426 14 17.4176 14.8954 17.4176 16C17.4176 16.7403 16.9347 17.3866 16.217 17.7324V20H13.8159V17.7324ZM10.2143 10H19.8187V9C19.8187 6.79086 17.6686 5 15.0165 5C12.3643 5 10.2143 6.79086 10.2143 9V10Z"
//                     fill="black"
//                     fill-opacity="0.25"
//                   />
//                 </svg>
//               </div>
//               <div class="absolute right-3 top-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="27"
//                   height="24"
//                   viewBox="0 0 27 24"
//                   fill="none"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M21.2664 1.32871C20.9078 1.13678 20.4493 1.25068 20.2423 1.58311L17.9494 5.26605C16.3872 4.59728 14.7702 4.25533 13.1333 4.25533C8.73514 4.25533 4.48047 6.7255 1.04953 11.3692L1.03592 11.3875L1.02402 11.4032C0.909734 11.5529 0.906816 11.7289 1.02344 11.8768C3.55517 15.3164 6.53848 17.569 9.69792 18.5158L7.87138 21.4476C7.66432 21.7801 7.78719 22.2051 8.14577 22.397L8.47042 22.5708C8.829 22.7627 9.28751 22.6489 9.49456 22.3164L21.8654 2.45191C22.0725 2.11948 21.9497 1.69442 21.591 1.50248L21.2664 1.32871ZM16.9548 6.86317C15.6834 6.35119 14.3996 6.10164 13.1333 6.10164C9.93764 6.10164 6.62949 7.69122 3.69147 11.0776C3.40943 11.4027 3.40943 11.8766 3.69147 12.2018C5.89379 14.7403 8.30403 16.2695 10.719 16.8763L11.9818 14.8484C10.5393 14.4276 9.34643 13.2537 9.34643 11.6415C9.34643 9.60221 11.0554 7.94885 13.1631 7.94885C14.136 7.94885 15.024 8.30114 15.6982 8.88101L16.9548 6.86317ZM14.656 10.5546C14.3313 10.0943 13.7976 9.79515 13.1631 9.79515C12.1083 9.79515 11.2457 10.6205 11.2457 11.6402C11.2457 12.314 12.0359 13.1015 13.0285 13.1678L14.656 10.5546Z"
//                     fill="black"
//                     fill-opacity="0.25"
//                   />
//                   <path
//                     d="M13.7641 19.0081C17.9286 18.7841 21.9344 16.3446 25.1964 11.9408C25.2647 11.8486 25.3029 11.7532 25.3029 11.6397C25.3029 11.5315 25.2701 11.4412 25.205 11.3533C23.9514 9.658 22.5875 8.25327 21.1468 7.15332L20.1542 8.74729C20.9814 9.3988 21.7915 10.1743 22.5752 11.0776C22.8573 11.4027 22.8573 11.8766 22.5752 12.2017C20.2119 14.9258 17.6092 16.4877 15.0181 16.9945L13.7641 19.0081Z"
//                     fill="black"
//                     fill-opacity="0.25"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="flex justify-between items-center w-[387px] mt-12">
//               <button
//                 onClick={submitRegister}
//                 class="w-[220px] h-[45px] rounded-3xl bg-[#0B2F8A] text-white"
//               >
//                 SignUp
//               </button>
//               <p className="text-white">Or</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="36"
//                 height="36"
//                 viewBox="0 0 36 36"
//                 fill="none"
//                 className="bg-white w-[35px] rounded-xl h-[35px]"
//               >
//                 <path
//                   d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.2405 24.4928 21.9172 27 18 27C13.0297 27 9 22.9702 9 18C9 13.0297 13.0297 9 18 9C20.2943 9 22.3815 9.8655 23.9708 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C9.71625 3 3 9.71625 3 18C3 26.2838 9.71625 33 18 33C26.2838 33 33 26.2838 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
//                   fill="#FFC107"
//                 />
//                 <path
//                   d="M4.72949 11.0182L9.65774 14.6325C10.9912 11.331 14.2207 9 18 9C20.2942 9 22.3815 9.8655 23.9707 11.2792L28.2135 7.0365C25.5345 4.53975 21.951 3 18 3C12.2385 3 7.24199 6.25275 4.72949 11.0182Z"
//                   fill="#FF3D00"
//                 />
//                 <path
//                   d="M18 33C21.8745 33 25.395 31.5172 28.0567 29.106L23.4142 25.1775C21.9082 26.3182 20.0362 27 18 27C14.0985 27 10.7857 24.5122 9.53774 21.0405L4.64624 24.8092C7.12874 29.667 12.1702 33 18 33Z"
//                   fill="#4CAF50"
//                 />
//                 <path
//                   d="M32.7083 15.0623H31.5V15H18V21H26.4773C25.8833 22.6778 24.804 24.1245 23.412 25.1782C23.4127 25.1775 23.4135 25.1775 23.4142 25.1768L28.0568 29.1052C27.7283 29.4037 33 25.5 33 18C33 16.9943 32.8965 16.0125 32.7083 15.0623Z"
//                   fill="#1976D2"
//                 />
//               </svg>
//               <img className="w-[50px] h-[50px]" src={Fblogo} alt="" />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
import React, { useState } from "react";
import coffeeTable from "../../Assets/coffeeTable.svg";
import facebookIcon from "../../Assets/facebook.svg";
import { useForm, Controller } from "react-hook-form";
import googleIcon from "../../Assets/google.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios
        .post("https://rental-mate-backend.vercel.app/auth/register", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", JSON.stringify(res.token));
          navigate("/");
          setMessage("");
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setMessage(err.response.data.message);
        });
    } catch (err) {
      console.log(err);
    }
  };

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
                Create an account
              </div>
              <div>
                Already have an Account ?{" "}
                <Link to="/" className="text-[#1976D2]">
                  Log in
                </Link>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <Controller
                  name="username"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center bg-[#D9D9D9] w-[500px] rounded-3xl h-12 px-5 gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M20.8332 22.9167H18.7498V20.8334C18.7498 19.1075 17.3508 17.7084 15.6248 17.7084H9.37484C7.64895 17.7084 6.24984 19.1075 6.24984 20.8334V22.9167H4.1665V20.8334C4.1665 17.957 6.49836 15.6251 9.37484 15.6251H15.6248C18.5013 15.6251 20.8332 17.957 20.8332 20.8334V22.9167ZM12.4998 13.5417C9.04806 13.5417 6.24984 10.7435 6.24984 7.29175C6.24984 3.83997 9.04806 1.04175 12.4998 1.04175C15.9516 1.04175 18.7498 3.83997 18.7498 7.29175C18.7498 10.7435 15.9516 13.5417 12.4998 13.5417ZM12.4998 11.4584C14.801 11.4584 16.6665 9.59294 16.6665 7.29175C16.6665 4.99056 14.801 3.12508 12.4998 3.12508C10.1986 3.12508 8.33317 4.99056 8.33317 7.29175C8.33317 9.59294 10.1986 11.4584 12.4998 11.4584Z"
                          fill="black"
                          fill-opacity="0.25"
                        />
                      </svg>
                      <input
                        className="bg-[#D9D9D9] w-full focus:outline-none text-[14px]"
                        placeholder="Full Name"
                        onChange={(value) => {
                          field.onChange(value);
                        }}
                      />
                    </div>
                  )}
                  rules={{
                    required: "Name is required",
                  }}
                />
                {errors.username && (
                  <span className="text-[red] px-6 mb-[-20px] text-[13px]">
                    {errors.username.message}
                  </span>
                )}
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
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
                        onChange={(value) => {
                          field.onChange(value);
                        }}
                      />
                    </div>
                  )}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password too short (minimum length is 8)",
                    },
                    maxLength: {
                      value: 16,
                      message: "Password too long (maximum length is 16)",
                    },
                  }}
                />
                {errors.password && (
                  <span className="text-[red] px-6 mb-[-20px] text-[13px]">
                    {errors.password.message}
                  </span>
                )}
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
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
                        onChange={(value) => {
                          field.onChange(value);
                        }}
                      />
                    </div>
                  )}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@[\w-]+(\.[a-zA-Z]{2,3})+$/,
                      message: "*Enter a valid Email",
                    },
                  }}
                />
                {errors.email && (
                  <span className="text-[red] px-6 mb-[-20px] text-[13px]">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-9/12">
                <button
                  onClick={handleSubmit(onSubmit)}
                  className="bg-[#01A664]  py-2 px-12 rounded-xl text-white font-semibold text-[13px] tracking-[1px]"
                >
                  SignUp
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
            <div className="text-center text-[red] px-6 mb-[-20px] text-[15px]">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
