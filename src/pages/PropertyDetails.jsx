import React from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { useGetHomeQuery } from "../feature/houseApi";

const PropertyDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, error, data: house } = useGetHomeQuery(id);
  console.log(house);

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
        <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 md:mb-3">
          <div>
            <h2 className=" text-2xl font-semibold">{house.name}</h2>
            <h3 className=" text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className=" bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <div className=" bg-violet-500 text-white px-3 rounded-full">
              {house.country}
            </div>
          </div>
          <div className=" text-3xl font-semibold text-violet-600">
            {" "}
            $ {house.price}
          </div>
        </div>
        <div className=" flex flex-col items-start gap-8 lg:flex-row">
          <div className=" max-w-[768px]">
            <div className=" mb-8">
              <img src={house.imageLg} alt="photo" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className=" flex gap-x-2 items-center">
                <BiBed size={25} />
                <div>{house.bedrooms}</div>
              </div>
              <div className=" flex gap-x-2 items-center">
                <BiBath size={25} />
                <div>{house.bathrooms}</div>
              </div>
              <div className=" flex gap-x-2 items-center">
                <BiArea size={25} />
                <div>{house.surface}</div>
              </div>
            </div>
            <div>{house.description}</div>
          </div>
          <div className=" flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className=" flex items-center gap-x-4 mb-8">
              <div className=" w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={house.agent.image} alt="agent image" />
              </div>
              <div>
                <div className=" font-bold text-lg">{house.agent.name}</div>
                <Link to="" className=" text-violet-700 text-sm">
                  {" "}
                  View Listing
                </Link>
              </div>
            </div>
            {/* form */}
            <form className=" flex flex-col gap-y-4">
              <input
                className="border border-gray-300 focus:border-violet-700 focus:outline-none rounded w-full px-4 h-14 text-base"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 focus:outline-none rounded w-full px-4 h-14 text-base"
                type="text"
                placeholder="Email"
              />

              <input
                className="border border-gray-300 focus:border-violet-700 focus:outline-none rounded w-full px-4 h-14  text-base"
                type="text"
                placeholder="Phone"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-base text-gray-400"
                placeholder="Message"
                defaultValue="Hellow, I am interested in [Mordern Apartment]"
              ></textarea>
              <div className=" flex gap-x-2">
                <button className=" bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-base font-semibold w-full transition">
                  Send Message
                </button>
                <button className=" border border-violet-700 text-violet-700 hover:border-violet-500 rounded p-4 w-full transition font-semibold   text-base">
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">{content}</div>
    </section>
  );
};

export default PropertyDetails;
