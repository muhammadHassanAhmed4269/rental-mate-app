import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/index";
import CategoryCard from "../../Components/CategoryCard/Index";
import Footer from "../../Components/Footer/Index";
import cameraImage1 from "../../Assets/product-img-1.jpg";
import cameraImage2 from "../../Assets/cameraImage2.svg";
import cameraImage3 from "../../Assets/cameraImage3.svg";
import cameraImage4 from "../../Assets/cameraImage4.svg";
import customer1 from "../../Assets/customer1.png";
import customer2 from "../../Assets/customer2.png";
import customer3 from "../../Assets/customer3.png";
import customer4 from "../../Assets/customer4.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GridItems } from "../../Components/BrowsingPagination/GridView";
import { addToCart, addToWishlist } from "../../redux/Main/mainSlice";
import { Alert } from "@mui/material";
const Index = () => {
  const [rating, setRating] = useState(0);
  const [moreToRentData, setMoreToRentData] = useState([]);
  const [img, setImg] = useState(cameraImage1);
  const [selectedImg, setSelectedImg] = useState(1);
  const token = useSelector((state) => state.userID);
  const productDescription = useSelector((state) => state.productDescription);

  useEffect(() => {
    axios

      .get("https://rental-mate-backend.vercel.app/products/filter", {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        setMoreToRentData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const handleCart = async (item) => {
    dispatch(addToCart(item));
    setShowAlert(true);
    setAlertMessage("Item Added to Cart Successfully");
    setSeverity("success");
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };
  const handleWishlist = (item) => {
    console.log(item);
    const matchedItem = wishlist.find((elem) => elem._id == item._id);
    if (!matchedItem) {
      dispatch(addToWishlist(item));
      setShowAlert(true);
      setAlertMessage("Item Added to Wishlist Successfully");
      setSeverity("success");
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
    } else {
      setShowAlert(true);
      setAlertMessage("Item Already in Wishlist");
      setSeverity("error");
      setTimeout(() => {
        setShowAlert(false);
      }, 500);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6">
        <div className="my-14">
          <ul className="productDetailBread text-grayBr inline-block font-medium">
            <li className="inline">Film and Photograph</li>
            <li className="inline-block px-2">/</li>
            <li className="inline-block">Camera</li>
            <li className="inline-block px-2">/</li>
            <li className="inline-block">SONY high resolution camera-92</li>
          </ul>
        </div>
        <div className="mb-10">
          {showAlert && (
            <Alert
              onClose={() => {
                setShowAlert(false);
              }}
              severity={severity}
              className="mb-10"
            >
              {alertMessage}
            </Alert>
          )}
          <div className="grid grid-cols-12 gap-x-10">
            <div className="lg:col-span-7 col-span-12">
              <div className="flex gap-x-6 h-[600px]">
                <div className="md:w-[20%] w-full overflow-hidden flex flex-col gap-y-4">
                  <img
                    className={`${
                      selectedImg === 1 ? "border-4 border-white" : ""
                    }w-full h-[150px] object-cover object-center rounded-xl`}
                    src={cameraImage1}
                    alt="Card "
                    onClick={() => {
                      setImg(cameraImage1);
                      setSelectedImg(1);
                    }}
                  />
                  <img
                    className={`${
                      selectedImg === 2 ? "border-4 border-white" : ""
                    }w-full h-[170px] object-cover object-center rounded-xl`}
                    src={cameraImage2}
                    alt="Card "
                    onClick={() => {
                      setImg(cameraImage2);
                      setSelectedImg(2);
                    }}
                  />
                  <img
                    className={`${
                      selectedImg === 3 ? "border-4 border-white" : ""
                    }w-full h-[170px] object-cover object-center rounded-xl`}
                    src={cameraImage3}
                    alt="Card "
                    onClick={() => {
                      setImg(cameraImage3);
                      setSelectedImg(3);
                    }}
                  />
                  <img
                    className={`${
                      selectedImg === 4 ? "border-4 border-white" : ""
                    }w-full h-[170px] object-cover object-center rounded-xl`}
                    src={cameraImage4}
                    alt="Card "
                    onClick={() => {
                      setImg(cameraImage4);
                      setSelectedImg(4);
                    }}
                  />
                </div>
                <div className="md:w-[80%] w-full">
                  <img
                    className="w-full h-[600px]  rounded-xl"
                    src={img}
                    alt="Card "
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-12">
              <div className="">
                <h1 className="font-semibold text-xl mb-4">
                  {productDescription.title}
                </h1>
                <p className="text-md mb-6">{productDescription.description}</p>
                <div className="flex gap-4">
                  <div className="bg-primaryLig rounded-2xl text-center p-3">
                    <h3 className="font-semibold text-sm">Daily</h3>
                    <h4 className="text-sm">
                      {productDescription.pricePerDay}{" "}
                      {productDescription.currency === "USD" && "$"}/ Day
                    </h4>
                  </div>
                  <div className="bg-primaryLig rounded-2xl text-center p-3">
                    <h3 className="font-semibold  text-sm">Hourly</h3>
                    <h4 className=" text-sm">
                      5.02 {productDescription.currency === "USD" && "$"}/ Hour
                    </h4>
                  </div>
                  <div className="flex items-center ml-2">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${
                            index < 5 ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <p className="text-grayBr text-sm pl-3">(150 Reviews)</p>
                  </div>
                </div>
                <hr className="my-6 "></hr>
                {/* <div className="flex  gap-x-10 px-8 py-4 border-grayHead rounded-xl border-[2px] mb-6">
                  <h2 className="font-bold text-md">Select rental hours</h2>
                  <h3 className="font-medium text-md">10:00-12:00</h3>
                </div>
                <div className="flex  gap-x-10 px-8 py-4 border-grayHead rounded-xl border-[2px] mb-6">
                  <h2 className="font-bold text-md">Select rental dates</h2>
                  <h3 className="font-medium text-md">Nov 30-Dec 01</h3>
                </div> */}
                <div className="gap-6 mb-6 grid grid-cols-12">
                  <button
                    onClick={() => handleCart(productDescription)}
                    className="col-span-10 py-4 bg-primary rounded-lg text-center font-bold text-white text-lg"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleWishlist(productDescription)}
                    className="col-span-2 flex justify-center items-center p-4 bg-transparent border border-grayHead rounded-lg text-center font-bold text-white text-xl"
                  >
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4">Owner of the item</h2>
                  <div className="flex gap-x-4">
                    <img
                      className="w-[60px] h-[60px] object-cover object-center rounded-full"
                      src={cameraImage1}
                      alt="Card "
                    />
                    <div>
                      <h3 className="font-medium text-md">
                        {productDescription.manufacturer.name}
                      </h3>
                      <div className="flex items-center">
                        <div>
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={` text-2xl ${
                                index < 4 ? "text-yellow-500" : "text-gray-300"
                              }`}
                            >
                              &#9733;
                            </span>
                          ))}
                        </div>
                        <div className="flex text-sm gap-x-2 pl-2 text-grayBr">
                          <p>(34)</p>
                          <p>({productDescription.manufacturer.address})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-6">
                  <a
                    href="#"
                    className="bg-primaryLig py-3 text-center w-full rounded-xl font-medium text-md"
                  >
                    View Profile
                  </a>
                  <a
                    href="#"
                    className="bg-primaryLig py-3 text-center w-full rounded-xl font-medium text-md"
                  >
                    Chat with renter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-16">
          <div className="text-xl font-medium flex items-center">
            <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
            <div className="font-semibold ">Other items by owner</div>
          </div>
          <div className="">
            <button class="px-10 h-11 rounded-xl text-md bg-primaryLig border border-grayBr text-black font-semibold">
              View all listings by the owner {""}
            </button>
          </div>
        </div>
        <div className="mb-10">
          <GridItems
            currentItems={moreToRentData}
            parentClassName="grid grid-cols-4  px-5"
            boxWidth="w-[250px]"
            imageHeight="h-[170px]"
            itemsToRender={4}
          />
        </div>
      </div>
      <div className="grid mb-36 bg-[#D6FFD8] mx-0 grid-cols-12 gap-12 md:mt-15 mt-16 p-14">
        <div className="lg:col-span-6 col-span-12 bg-white p-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex gap-x-4">
                <img
                  className="w-[60px] h-[60px] object-cover object-center rounded-full"
                  src={customer1}
                  alt="Card "
                />
                <div>
                  <h3 className="font-medium text-md">Louis max</h3>
                  <div className="flex items-center">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${
                            index < 4 ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium">22-12-2023</h3>
            </div>
            <p className="text-md mt-2">
              “Renting a camera from Louis Max was like stepping into a portal
              to photographic paradise. From the moment I messaged them, I felt
              like I was talking to a fellow shutterbug, not just a random
              renter. They knew exactly what I needed, recommended the perfect
              lens for my wildlife adventure, and even threw in a couple of
              handy filters for good measure.” - Angela
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 bg-white p-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex gap-x-4">
                <img
                  className="w-[60px] h-[60px] object-cover object-center rounded-full"
                  src={customer2}
                  alt="Card "
                />
                <div>
                  <h3 className="font-medium text-md">Louis max</h3>
                  <div className="flex items-center">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${
                            index < 5 ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium">22-12-2023</h3>
            </div>
            <p className="text-md mt-2">
              “Renting a camera from Louis Max was like stepping into a portal
              to photographic paradise. From the moment I messaged them, I felt
              like I was talking to a fellow shutterbug, not just a random
              renter. They knew exactly what I needed, recommended the perfect
              lens for my wildlife adventure, and even threw in a couple of
              handy filters for good measure.” - Angela
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 bg-white p-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex gap-x-4">
                <img
                  className="w-[60px] h-[60px] object-cover object-center rounded-full"
                  src={customer3}
                  alt="Card "
                />
                <div>
                  <h3 className="font-medium text-md">Louis max</h3>
                  <div className="flex items-center">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${
                            index < 4 ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium">22-12-2023</h3>
            </div>
            <p className="text-md mt-2">
              “Renting a camera from Louis Max was like stepping into a portal
              to photographic paradise. From the moment I messaged them, I felt
              like I was talking to a fellow shutterbug, not just a random
              renter. They knew exactly what I needed, recommended the perfect
              lens for my wildlife adventure, and even threw in a couple of
              handy filters for good measure.” - Angela
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 bg-white p-6">
          <div>
            <div className="flex justify-between items-start">
              <div className="flex gap-x-4">
                <img
                  className="w-[60px] h-[60px] object-cover object-center rounded-full"
                  src={customer4}
                  alt="Card "
                />
                <div>
                  <h3 className="font-medium text-md">Louis max</h3>
                  <div className="flex items-center">
                    <div>
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`text-2xl ${
                            index < 5 ? "text-yellow-500" : "text-gray-300"
                          }`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-md font-medium">22-12-2023</h3>
            </div>
            <p className="text-md mt-2">
              “Renting a camera from Louis Max was like stepping into a portal
              to photographic paradise. From the moment I messaged them, I felt
              like I was talking to a fellow shutterbug, not just a random
              renter. They knew exactly what I needed, recommended the perfect
              lens for my wildlife adventure, and even threw in a couple of
              handy filters for good measure.” - Angela
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
