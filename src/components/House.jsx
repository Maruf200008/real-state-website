import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const House = ({ home }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    home;

  return (
    <div className=" bg-white shadow-md w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition p-5 rounded-lg rounded-tl-[90px]">
      <img src={image} alt="image" className="mb-8" />
      <div className=" mb-4 flex gap-x-2 text-sm">
        <div className=" bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className=" bg-violet-600 rounded-full text-white px-3">
          {country}
        </div>
      </div>
      <div className=" text-lg font-semibold max-w-[260px]">{address}</div>
      <div className=" flex gap-x-4 my-4">
        <div className=" flex items-center text-gray-600 gap-1">
          <div className=" text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className=" flex items-center text-gray-600 gap-1">
          <div className=" text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className=" flex items-center text-gray-600 gap-1">
          <div className=" text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className=" text-lg font-semibold text-violet-600 mb-4">{price}</div>
    </div>
  );
};

export default House;
