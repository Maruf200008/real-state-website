import React from "react";
import { FiRefreshCw } from "react-icons/fi";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { addFiltering, removeFiltering } from "../feature/housesSlice";
import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";

const Search = () => {
  const dispatch = useDispatch()
  const { poperty, location, priceRange,  } = useSelector(
    (state) => state.house
  );
  const handleClick = () => {
    dispatch(addFiltering({poperty, location, priceRange}))
  }
  const handleRefresh = () => {
    dispatch(removeFiltering({poperty:"Poperty (Any)", location: "Location (Any)", priceRange: "Price (Any)"}))
  }

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-lg bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={handleClick} className=" bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
      <button onClick={handleRefresh} className=" bg-red-500 hover:bg-red-700 transition w-full lg:max-w-[52px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <FiRefreshCw />
      </button>
    </div>
  );
};

export default Search;
