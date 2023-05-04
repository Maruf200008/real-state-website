import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { useParams } from "react-router-dom";
import { useGetHomeQuery } from "../feature/houseApi";

const PropertyDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data: house } = useGetHomeQuery(id);
  console.log(house);
  const {
    address,
    bathrooms,
    bedrooms,
    country,
    description,
    name,
    type,
    imageLg,
    price,
    surface,
  } = house;

  // what to render
  let content;
  if (isLoading) {
    return (content = (
      <ImSpinner2 className=" mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    ));
  } else if (!isLoading && isError) {
    return (content = (
      <div className=" text-center text-3xl font-semibold text-gray-400 mt-48 ">
        {" "}
        {error?.data}
      </div>
    ));
  } else if (!isLoading && !isError && !house?.id) {
    return (content = (
      <div className=" text-center text-3xl font-semibold text-gray-400 mt-48 ">
        {" "}
        Sorry, nothing found
      </div>
    ));
  } else if (!isLoading && !isError && house?.id) {
    return (
      <div>
        <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className=" text-2xl font-semibold">{name}</h2>
            <h3 className=" text-lg mb-4">{address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className=" bg-green-500 text-white px-3 rounded-full">
              {type}
            </div>
            <div className=" bg-violet-500 text-white px-3 rounded-full">
              {country}
            </div>
          </div>
          <div className=" text-3xl font-semibold text-violet-600">
            {" "}
            $ {price}
          </div>
        </div>
        <div className=" flex flex-col items-start gap-8 lg:flex-row">
          <div className=" max-w-[768px]">
            <div className=" mb-8">
              <img src={imageLg} alt="photo" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className=" flex gap-x-2 items-center">
                <BiBed size={25} />
                <div>{bedrooms}</div>
              </div>
              <div className=" flex gap-x-2 items-center">
                <BiBath size={25} />
                <div>{bathrooms}</div>
              </div>
              <div className=" flex gap-x-2 items-center">
                <BiArea size={25} />
                <div>{surface}</div>
              </div>
            </div>
            <div>{description}</div>
          </div>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  console.log(house);

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">{content}</div>
    </section>
  );
};

export default PropertyDetails;
