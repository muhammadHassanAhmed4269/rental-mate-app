// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar/index";
// // import CategoryBanner from "../../Assets/CategoryBanner.png";
// import CategoryCard from "../../Components/CategoryCard/Index";
// import CartCard from "../../Components/CartCard/Index";
// import PickupCard from "../../Components/PickupCard/Index";
// import Footer from "../../Components/Footer/Index";
// import { useSelector } from "react-redux";
// // import { Link } from "react-router-dom";

// const Index = () => {
//   const [showComponents, setShowComponents] = useState(false);

//   const toggleComponents = () => {
//     if (showComponents) {
//       setShowComponents(false);
//     }
//   };
//   const cart = useSelector((state) => state.cart);
//   console.log(cart);
//   return (
//     <div>
//       <Navbar />
//       <div className="w-11/12 mx-auto mt-6 pb-36">
//         <div className="text-3xl font-bold text-grayHead text-center mt-14 mb-12">
//           {showComponents ? <div>Cart</div> : <div>Pickup</div>}
//         </div>
//         {showComponents ? (
//           <div>
//             <div className="grid grid-cols-12 gap-x-6">
//               <div className="lg:col-span-8 col-span-12">
//                 <div className="flex justify-between items-center mb-12">
//                   <div className="text-2xl font-semibold">Cart (4)</div>
//                   <div className="pr-1">
//                     <button class="w-56 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
//                       Delete All Items{" "}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//         <div className="mb-10">
//           <div className="grid grid-cols-12 gap-x-10">
//             <div className="lg:col-span-8 col-span-12">
//               {showComponents ? (
//                 <div>
//                   <form>
//                     <div id="group1">
//                       <div className="flex gap-x-3 ">
//                         <input
//                           type="radio"
//                           id="prodcut_1"
//                           name="group1"
//                           value="prodcut_1"
//                         />
//                         <label
//                           for="prodcut_1"
//                           className="w-full cursor-pointer"
//                         >
//                           <CartCard />
//                         </label>
//                       </div>
//                       <div className="flex gap-x-3 ">
//                         <input
//                           type="radio"
//                           id="prodcut_2"
//                           name="group1"
//                           value="prodcut_2"
//                         />
//                         <label
//                           for="prodcut_2"
//                           className="w-full cursor-pointer"
//                         >
//                           <CartCard />
//                         </label>
//                       </div>
//                       <div className="flex gap-x-3 ">
//                         <input
//                           type="radio"
//                           id="prodcut_3"
//                           name="group1"
//                           value="prodcut_3"
//                         />
//                         <label
//                           for="prodcut_3"
//                           className="w-full cursor-pointer"
//                         >
//                           <CartCard />
//                         </label>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               ) : (
//                 <div>
//                   <PickupCard />
//                 </div>
//               )}
//             </div>
//             <div className="lg:col-span-4 col-span-12">
//               <div className="bg-primaryLig md:py-12 py-8 md:px-6 px-4">
//                 <h2 className="font-bold text-2xl text-center">
//                   Order Summary
//                 </h2>
//                 <div className="px-6 py-12">
//                   <div className="grid grid-cols-12 mb-4">
//                     <div className="col-span-8">
//                       <h3 className="font-bold md:text-lg text-base">
//                         Dates
//                         <span className="font-medium pl-3">30-Dec-2023</span>
//                       </h3>
//                     </div>
//                     <div className="col-span-4">
//                       <h3 className="font-semibold md:text-lg text-base">
//                         Day <span className="font-medium pl-3">1</span>
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-12 mb-4">
//                     <div className="col-span-8">
//                       <h3 className="font-bold md:text-lg text-base">
//                         Price
//                         <span className="font-medium px-2">x</span>1 Day
//                       </h3>
//                     </div>
//                     <div className="col-span-4">
//                       <h3 className="font-semibold md:text-lg text-base">
//                         Price{" "}
//                       </h3>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-12">
//                     <div className="col-span-8">
//                       <h3 className="font-bold md:text-lg text-base">Total</h3>
//                     </div>
//                     <div className="col-span-4">
//                       <h3 className="font-semibold md:text-lg text-base">
//                         Price{" "}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-center flex gap-x-6">
//                   <button class="w-[50%] py-3 tracking-widest rounded-[18px] text-base bg-white buttonShadow font-bold">
//                     Cancel{" "}
//                   </button>
//                   <button
//                     onClick={toggleComponents}
//                     class="w-[50%] py-3 tracking-widest rounded-[18px] text-base bg-primary text-white buttonShadow font-bold"
//                   >
//                     Continue{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between items-center my-16">
//           <div className="text-2xl font-medium flex items-center">
//             <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
//             <div className="font-semibold">Move to Rent</div>
//           </div>
//           <div className="">
//             <button class="px-12 h-11 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold">
//               See All{""}
//             </button>
//           </div>
//         </div>
//         <div className="mb-10">
//           <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
//             <div className="">
//               <CategoryCard />
//             </div>
//             <div className="">
//               <CategoryCard />
//             </div>
//             <div className="">
//               <CategoryCard />
//             </div>
//             <div className="">
//               <CategoryCard />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/index";
import CategoryCard from "../../Components/CategoryCard/Index";
import CartCard from "../../Components/CartCard/Index";
import PickupCard from "../../Components/PickupCard/Index";
import Footer from "../../Components/Footer/Index";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../../Components/BrowsingPagination/ListView";
import { GridItems } from "../../Components/BrowsingPagination/GridView";
import axios from "axios";
import {
  calculateCartPrice,
  deleteWholeCart,
} from "../../redux/Main/mainSlice";
import { Link } from "react-router-dom";

const Index = () => {
  const [showComponents, setShowComponents] = useState(true);
  const cart = useSelector((state) => state.cart);
  const cartPrice = useSelector((state) => state.cartPrice);
  const [moreToRentData, setMoreToRentData] = useState([]);
  const dispatch = useDispatch();

  const toggleComponents = () => {
    if (showComponents) {
      setShowComponents(false);
    }
  };
  console.log(cart);
  const token = useSelector((state) => state.userID);
  useEffect(() => {
    axios
      .get("https://rental-mate-backend.vercel.app/products/filter", {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        setMoreToRentData(res.data);
      })
      .catch((err) => console.log(err));
    dispatch(calculateCartPrice());
  }, []);
  const deleteCart = () => {
    dispatch(deleteWholeCart());
    dispatch(calculateCartPrice());
  };
  return (
    <div>
      <Navbar />
      <div className="w-11/12 mx-auto mt-6 pb-36">
        <div className="text-3xl font-bold text-grayHead text-center mt-14 mb-12">
          {showComponents ? <div>Cart</div> : <div>Pickup</div>}
        </div>
        {showComponents ? (
          <div>
            <div className="grid grid-cols-12 gap-x-6">
              <div className="lg:col-span-8 col-span-12">
                <div className="flex justify-between items-center mb-12">
                  <div className="text-xl font-semibold">
                    Cart ({cart.length})
                  </div>
                  <div className="pr-1">
                    <button
                      onClick={deleteCart}
                      class="w-48 h-11 text-sm rounded-xl bg-primaryLig border border-grayBr text-black font-semibold"
                    >
                      Delete All Items
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="mb-10">
          <div className="grid grid-cols-12 gap-x-10">
            <div className="lg:col-span-8 col-span-12">
              {showComponents ? (
                // <div>
                //   <form>
                //     <div id="group1">
                //       <div className="flex gap-x-3 ">
                //         <input
                //           type="radio"
                //           id="prodcut_1"
                //           name="group1"
                //           value="prodcut_1"
                //         />
                //         <label
                //           for="prodcut_1"
                //           className="w-full cursor-pointer"
                //         >
                //           <CartCard />
                //         </label>
                //       </div>
                //       <div className="flex gap-x-3 ">
                //         <input
                //           type="radio"
                //           id="prodcut_2"
                //           name="group1"
                //           value="prodcut_2"
                //         />
                //         <label
                //           for="prodcut_2"
                //           className="w-full cursor-pointer"
                //         >
                //           <CartCard />
                //         </label>
                //       </div>
                //       <div className="flex gap-x-3 ">
                //         <input
                //           type="radio"
                //           id="prodcut_3"
                //           name="group1"
                //           value="prodcut_3"
                //         />
                //         <label
                //           for="prodcut_3"
                //           className="w-full cursor-pointer"
                //         >
                //           <CartCard />
                //         </label>
                //       </div>
                //     </div>
                //   </form>
                // </div>
                <div className="space-y-5">
                  {cart.length > 0 ? (
                    <Items currentItems={cart} deleteBtn />
                  ) : (
                    <div className="py-20 text-2xl font-semibold text-center">
                      Cart Empty
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <PickupCard />
                </div>
              )}
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className="bg-primaryLig md:py-12 py-8 md:px-6 px-4">
                <h2 className="font-bold text-2xl text-center">
                  Order Summary
                </h2>
                <div className="px-6 py-12">
                  <div className="grid grid-cols-12 mb-4">
                    <div className="col-span-8">
                      <h3 className="font-bold md:text-lg text-base">
                        Dates
                        <span className="font-medium pl-3">30-Dec-2023</span>
                      </h3>
                    </div>
                    <div className="col-span-4">
                      <h3 className="font-semibold md:text-lg text-base">
                        Day <span className="font-medium pl-3">1</span>
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 mb-4">
                    <div className="col-span-8">
                      <h3 className="font-bold md:text-lg text-base">
                        Price
                        <span className="font-medium px-2">x</span>1 Day
                      </h3>
                    </div>
                    <div className="col-span-4">
                      <h3 className="font-semibold md:text-lg text-base">
                        {cartPrice}
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-12">
                    <div className="col-span-8">
                      <h3 className="font-bold md:text-lg text-base">Total</h3>
                    </div>
                    <div className="col-span-4">
                      <h3 className="font-semibold md:text-lg text-base">
                        {cartPrice}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="text-center flex gap-x-6">
                  <button class="w-[50%] py-3 tracking-widest rounded-[18px] text-base bg-white buttonShadow font-bold">
                    Cancel{" "}
                  </button>
                  <button
                    onClick={toggleComponents}
                    class="w-[50%] py-3 tracking-widest rounded-[18px] text-base bg-primary text-white buttonShadow font-bold"
                  >
                    Continue{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-16">
          <div className="text-2xl font-medium flex items-center">
            <div className="w-[15px] h-[30px] bg-primary rounded-sm block mr-2"></div>
            <div className="font-semibold">Move to Rent</div>
          </div>
          <div className="">
            <Link
              to={"/Browsing"}
              class="px-12 py-3 rounded-xl bg-primaryLig border border-grayBr text-black font-semibold"
            >
              See All{""}
            </Link>
          </div>
        </div>
        <div className="mb-10">
          {/* <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6">
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
            <div className="">
              <CategoryCard />
            </div>
          </div> */}
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
