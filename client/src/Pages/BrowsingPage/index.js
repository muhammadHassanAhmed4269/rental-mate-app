import React from "react";
import Navbar from "../../Components/Navbar/index";
import Slider from "../../Components/HomeSlider/Index";
import Footer from "../../Components/Footer/Index";
import Electronics from "../../Assets/electronics.png";
import construction from "../../Assets/construction.png";
import film from "../../Assets/film.png";
import homegarden from "../../Assets/homegarden.png";
import party from "../../Assets/party.png";
import sport from "../../Assets/sport.png";
import ecology from "../../Assets/ecology.png";
import Handshake from "../../Assets/Handshake.png";
import testimonial1 from "../../Assets/testimonial1.png";
import testimonial2 from "../../Assets/testimonial2.png";
import testimonial3 from "../../Assets/testimonial3.png";
import { Link } from "react-router-dom";
import BrowsingPic from "../../Assets/BrowsingPic.svg";
import BrowsingPic2 from "../../Assets/browsing2.png";
const BrowsingPage = () => {
  const data = [
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
    {
      title: "SONY high resolution camera-92",
      rating: 3,
      price: "Price",
      zipcode: "20001",
      reviews: 2,
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="relative flex justify-center mt-5 mb-20">
        <img src={BrowsingPic} />
        <div className="absolute top-[180px] left-[160px]">
          <div className="absolute w-[116px] h-[24px] top-0 left-[49px]  font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Browse
          </div>
          <p className="relative w-[235px] h-[82px] top-[30px] left-[-10px]  font-normal text-black text-[14px] text-center tracking-[1px] leading-5">
            Search for the item or service you want to borrow, and select a
            listing that suits your needs.
          </p>
        </div>
        <div className="absolute top-[210px] right-[120px]">
          <div className="absolute w-[116px] h-[24px] top-0 left-[45px]  font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Borrow
          </div>
          <p className="relative w-[234px] h-[82px] top-[30px] left-0  font-normal text-black text-[14px] text-center tracking-[1px] leading-5">
            Reserve or book the item, specify your rental dates.
          </p>
        </div>
        <div className="absolute top-[375px] left-[160px]">
          <div className="absolute w-[80px] h-[24px] top-0 left-[59px]  font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Chat
          </div>
          <p className="relative w-[200px] h-[82px] top-[30px] font-normal text-black text-[14px] text-center tracking-[1px] leading-5">
            Communicate with the owner to coordinate logistics, such as pick-up
            or delivery.
          </p>
        </div>
        <div className="absolute top-[430px] right-[110px]">
          <div className="absolute w-[116px] h-[24px] top-0 left-[59px]  font-semibold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Return
          </div>
          <p className="relative w-[234px] h-[82px] top-[30px]   font-normal text-black text-[14px] text-center tracking-[1px] leading-5">
            Return the item in the same condition at the end of the rental
            period.
          </p>
        </div>
        {/* <div className="flex flex-col">
          <p className="text-black "></p>
        </div> */}
      </div>
      <div className="flex items-center justify-between px-5">
        <div className="font-bold">Browse items to rent near you</div>
        <div className="flex items-center gap-2">
          <div className="font-bold text-[12px]">View</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" fill="#D6FFD8" />
            <path
              d="M10.6663 10.667H26.6663M14.6663 16.0003H26.6663M18.6663 21.3337H26.6663M5.33301 10.667H5.34634M9.33301 16.0003H9.34634M13.333 21.3337H13.3463"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
          >
            <g clip-path="url(#clip0_1396_5211)">
              <path
                d="M12.4446 3.55566H5.33344C4.86195 3.55566 4.40976 3.74297 4.07636 4.07636C3.74297 4.40976 3.55566 4.86195 3.55566 5.33344V12.4446C3.55566 12.916 3.74297 13.3682 4.07636 13.7016C4.40976 14.035 4.86195 14.2223 5.33344 14.2223H12.4446C12.916 14.2223 13.3682 14.035 13.7016 13.7016C14.035 13.3682 14.2223 12.916 14.2223 12.4446V5.33344C14.2223 4.86195 14.035 4.40976 13.7016 4.07636C13.3682 3.74297 12.916 3.55566 12.4446 3.55566ZM5.33344 12.4446V5.33344H12.4446V12.4446H5.33344Z"
                fill="black"
              />
              <path
                d="M26.6662 3.55566H19.5551C19.0836 3.55566 18.6314 3.74297 18.298 4.07636C17.9646 4.40976 17.7773 4.86195 17.7773 5.33344V12.4446C17.7773 12.916 17.9646 13.3682 18.298 13.7016C18.6314 14.035 19.0836 14.2223 19.5551 14.2223H26.6662C27.1377 14.2223 27.5899 14.035 27.9233 13.7016C28.2567 13.3682 28.444 12.916 28.444 12.4446V5.33344C28.444 4.86195 28.2567 4.40976 27.9233 4.07636C27.5899 3.74297 27.1377 3.55566 26.6662 3.55566ZM19.5551 12.4446V5.33344H26.6662V12.4446H19.5551Z"
                fill="black"
              />
              <path
                d="M12.4446 17.7773H5.33344C4.86195 17.7773 4.40976 17.9646 4.07636 18.298C3.74297 18.6314 3.55566 19.0836 3.55566 19.5551V26.6662C3.55566 27.1377 3.74297 27.5899 4.07636 27.9233C4.40976 28.2567 4.86195 28.444 5.33344 28.444H12.4446C12.916 28.444 13.3682 28.2567 13.7016 27.9233C14.035 27.5899 14.2223 27.1377 14.2223 26.6662V19.5551C14.2223 19.0836 14.035 18.6314 13.7016 18.298C13.3682 17.9646 12.916 17.7773 12.4446 17.7773ZM5.33344 26.6662V19.5551H12.4446V26.6662H5.33344Z"
                fill="black"
              />
              <path
                d="M26.6662 17.7773H19.5551C19.0836 17.7773 18.6314 17.9646 18.298 18.298C17.9646 18.6314 17.7773 19.0836 17.7773 19.5551V26.6662C17.7773 27.1377 17.9646 27.5899 18.298 27.9233C18.6314 28.2567 19.0836 28.444 19.5551 28.444H26.6662C27.1377 28.444 27.5899 28.2567 27.9233 27.9233C28.2567 27.5899 28.444 27.1377 28.444 26.6662V19.5551C28.444 19.0836 28.2567 18.6314 27.9233 18.298C27.5899 17.9646 27.1377 17.7773 26.6662 17.7773ZM19.5551 26.6662V19.5551H26.6662V26.6662H19.5551Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1396_5211">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="px-5 grid grid-cols-12 gap-6 mt-4">
        <div className="col-span-3 bg-[#D6FFD8] flex flex-col py-10 px-5 gap-5">
          <div className="">Filters</div>
          <div className="">Location</div>
          <div className="relative h-10 border-2 border-black flex items-center bg-white p-2">
            <input
              className="w-full h-12 bg-transparent outline-none placeholder-black pl-12"
              type="text"
              placeholder="Search rental mate for anything"
            />

            <i className="material-icons w-8 h-8 absolute left-4 top-7 transform -translate-y-2/4">
              search
            </i>
          </div>
        </div>
        <div className="col-span-9 bg-[#D6FFD8] px-8 py-5 flex flex-col gap-5">
          {data.map((elem) => (
            <div className="bg-white  flex gap-4 px-2 py-2">
              <img
                className="h-[110px] w-[120px] rounded-2xl "
                src={BrowsingPic2}
              />
              <div className="flex items-center pr-10 w-full justify-between">
                <div className="flex flex-col gap-2 py-2">
                  <div className="font-semibold text-[15px]">{elem.title}</div>
                  <div className="flex items-center">
                    <div className="relative flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="10"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M13.583 4.35974L9.90681 4.05974C9.67506 4.04156 9.47482 3.91428 9.38012 3.72338L8.06339 0.968838C7.85271 0.514294 7.10471 0.514294 6.89403 0.968838L5.58783 3.72338C5.50356 3.91428 5.29289 4.04156 5.06114 4.05974L1.38484 4.35974C0.83708 4.40519 0.615869 4.9961 1.02669 5.31428L3.79708 7.41427C3.97616 7.55064 4.0499 7.75064 3.99723 7.95063L3.16506 10.896C3.03865 11.3597 3.61801 11.7414 4.10257 11.4961L7.16791 9.94145C7.36805 9.84145 7.61033 9.84145 7.81047 9.94145L10.8759 11.4961C11.3605 11.7414 11.9398 11.3688 11.8133 10.896L10.9917 7.95063C10.939 7.75064 11.0128 7.55064 11.1918 7.41427L13.9622 5.31428C14.3625 4.9961 14.1308 4.40519 13.583 4.35974Z"
                          fill="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="10"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M13.583 4.35974L9.90681 4.05974C9.67506 4.04156 9.47482 3.91428 9.38012 3.72338L8.06339 0.968838C7.85271 0.514294 7.10471 0.514294 6.89403 0.968838L5.58783 3.72338C5.50356 3.91428 5.29289 4.04156 5.06114 4.05974L1.38484 4.35974C0.83708 4.40519 0.615869 4.9961 1.02669 5.31428L3.79708 7.41427C3.97616 7.55064 4.0499 7.75064 3.99723 7.95063L3.16506 10.896C3.03865 11.3597 3.61801 11.7414 4.10257 11.4961L7.16791 9.94145C7.36805 9.84145 7.61033 9.84145 7.81047 9.94145L10.8759 11.4961C11.3605 11.7414 11.9398 11.3688 11.8133 10.896L10.9917 7.95063C10.939 7.75064 11.0128 7.55064 11.1918 7.41427L13.9622 5.31428C14.3625 4.9961 14.1308 4.40519 13.583 4.35974Z"
                          fill="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="10"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M13.583 4.35974L9.90681 4.05974C9.67506 4.04156 9.47482 3.91428 9.38012 3.72338L8.06339 0.968838C7.85271 0.514294 7.10471 0.514294 6.89403 0.968838L5.58783 3.72338C5.50356 3.91428 5.29289 4.04156 5.06114 4.05974L1.38484 4.35974C0.83708 4.40519 0.615869 4.9961 1.02669 5.31428L3.79708 7.41427C3.97616 7.55064 4.0499 7.75064 3.99723 7.95063L3.16506 10.896C3.03865 11.3597 3.61801 11.7414 4.10257 11.4961L7.16791 9.94145C7.36805 9.84145 7.61033 9.84145 7.81047 9.94145L10.8759 11.4961C11.3605 11.7414 11.9398 11.3688 11.8133 10.896L10.9917 7.95063C10.939 7.75064 11.0128 7.55064 11.1918 7.41427L13.9622 5.31428C14.3625 4.9961 14.1308 4.40519 13.583 4.35974Z"
                          fill="#FFC107"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="10"
                        viewBox="0 0 15 12"
                        fill="none"
                      >
                        <path
                          d="M13.583 4.35974L9.90681 4.05974C9.67506 4.04156 9.47482 3.91428 9.38012 3.72338L8.06339 0.968838C7.85271 0.514294 7.10471 0.514294 6.89403 0.968838L5.58783 3.72338C5.50356 3.91428 5.29289 4.04156 5.06114 4.05974L1.38484 4.35974C0.83708 4.40519 0.615869 4.9961 1.02669 5.31428L3.79708 7.41427C3.97616 7.55064 4.0499 7.75064 3.99723 7.95063L3.16506 10.896C3.03865 11.3597 3.61801 11.7414 4.10257 11.4961L7.16791 9.94145C7.36805 9.84145 7.61033 9.84145 7.81047 9.94145L10.8759 11.4961C11.3605 11.7414 11.9398 11.3688 11.8133 10.896L10.9917 7.95063C10.939 7.75064 11.0128 7.55064 11.1918 7.41427L13.9622 5.31428C14.3625 4.9961 14.1308 4.40519 13.583 4.35974Z"
                          fill="#FFC107"
                        />
                      </svg>
                      <div className="absolute right-[-20px] top-[-1px] text-[10px]">
                        ({elem.reviews})
                      </div>
                    </div>
                  </div>
                  <div className="text-[#4CAF50] text-[13px] font-normal">
                    {elem.price}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[13px]">Zipcode</div>
                    <div className="text-[13px]">{elem.zipcode}</div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3208 7.62903C13.033 4.96282 9.21001 4.13885 6.34352 6.5803C3.47702 9.02174 3.07346 13.1037 5.32454 15.9912C7.19615 18.3919 12.8603 23.4554 14.7167 25.0943C14.9244 25.2776 15.0282 25.3693 15.1494 25.4053C15.2551 25.4367 15.3708 25.4367 15.4765 25.4053C15.5977 25.3693 15.7015 25.2776 15.9092 25.0943C17.7656 23.4554 23.4297 18.3919 25.3014 15.9912C27.5524 13.1037 27.1981 8.99606 24.2823 6.5803C21.3666 4.16453 17.6086 4.96282 15.3208 7.62903Z"
                      stroke="black"
                      stroke-width="1.90714"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1396_5313)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.9922 25.746C21.9394 25.746 21.085 26.6004 21.085 27.6531C21.085 28.7059 21.9394 29.5603 22.9922 29.5603C24.0449 29.5603 24.8993 28.7059 24.8993 27.6531C24.8993 26.6004 24.0449 25.746 22.9922 25.746ZM13.4564 25.746C12.4037 25.746 11.5493 26.6004 11.5493 27.6531C11.5493 28.7059 12.4037 29.5603 13.4564 29.5603C14.5092 29.5603 15.3636 28.7059 15.3636 27.6531C15.3636 26.6004 14.5092 25.746 13.4564 25.746ZM25.8529 20.0246C25.8529 21.0773 24.9985 21.9317 23.9457 21.9317H13.4564C12.4037 21.9317 11.5493 21.0773 11.5493 20.0246L9.95971 10.4888H28.2368L25.8529 20.0246ZM9.61355 8.5817L7.2344 0.953125H1.06002C0.532692 0.953125 0.106445 1.38033 0.106445 1.9067C0.106445 2.43402 0.532692 2.86027 1.06002 2.86027H5.82787L7.74549 8.5817H7.73502L9.64216 20.0246C9.64216 22.131 11.35 23.8388 13.4564 23.8388H23.9457C26.0522 23.8388 27.76 22.131 27.76 20.0246L30.6207 8.5817H9.61355Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1396_5313">
                        <rect
                          width="30.5143"
                          height="30.5143"
                          fill="white"
                          transform="translate(0.106445)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowsingPage;
