import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/index";
// import CategoryBanner from "../../Assets/CategoryBanner.png";
import CategoryCard from "../../Components/CategoryCard/Index";
import WishlistCard from "../../Components/WishlistCard/Index";
import Footer from "../../Components/Footer/Index";
import { GridItems } from "../../Components/BrowsingPagination/GridView";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { moveAllToCart } from "../../redux/Main/mainSlice";
// import { Link } from "react-router-dom";
const Index = () => {
  const [moreToRentData, setMoreToRentData] = useState([]);
  const token = useSelector((state) => state.userID);
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
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
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6 pb-36">
        <div className="text-3xl font-bold text-grayHead text-center mt-14">
          Wishlist
        </div>
        <div className="flex justify-between items-center my-12">
          <div className="text-2xl font-semibold">
            Wishlist ({wishlist.length})
          </div>
          <div className="">
            <button
              onClick={() => {
                dispatch(moveAllToCart());
              }}
              class="w-56 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold"
            >
              Move All To Cart{" "}
            </button>
          </div>
        </div>
        <div className="mb-10">
          <GridItems
            currentItems={wishlist}
            parentClassName="grid grid-cols-4  px-5"
            boxWidth="w-[250px]"
            imageHeight="h-[150px]"
            itemsToRender={9999}
            deleteBtn
          />
        </div>
        <div className="flex justify-between items-center my-16">
          <div className="text-2xl font-medium flex items-center">
            <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
            <div className="font-semibold">Move to Rent</div>
          </div>
          <div className="">
            <button class="px-12 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
              See All
            </button>
          </div>
        </div>
        <div className="mb-10 ">
          <GridItems
            currentItems={moreToRentData}
            parentClassName="grid grid-cols-4  px-5"
            boxWidth="w-[250px]"
            imageHeight="h-[150px]"
            itemsToRender={4}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
