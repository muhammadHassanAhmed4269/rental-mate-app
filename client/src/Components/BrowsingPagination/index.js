import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import BrowsingPic2 from "../../Assets/browsing2.png";

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const items = [
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

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="bg-white  flex gap-4 px-2 py-2">
            <img
              className="h-[110px] w-[120px] rounded-2xl "
              src={BrowsingPic2}
            />
            <div className="flex items-center pr-10 w-full justify-between">
              <div className="flex flex-col gap-2 py-2">
                <div className="font-semibold text-[15px]">{item.title}</div>
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
                      ({item.reviews})
                    </div>
                  </div>
                </div>
                <div className="text-[#4CAF50] text-[13px] font-normal">
                  {item.price}
                </div>
                <div className="flex justify-between">
                  <div className="text-[13px]">Zipcode</div>
                  <div className="text-[13px]">{item.zipcode}</div>
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
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        containerClassName="flex items-center gap-3 justify-center text-black font-semibold text-[15px]"
        activeClassName="bg-[#01A664]  w-[30px] h-[30px] items-center flex justify-center rounded-full"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems;
