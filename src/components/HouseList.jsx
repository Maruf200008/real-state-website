import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetHomesQuery } from "../feature/houseApi";
import House from "./House";

// import House from "../components/House";
// import {ImSpinner2} from 'react-icons/im'
const HouseList = () => {
  const { isFiltering } = useSelector((state) => state.house);
  const {
    isLoading,
    isError,
    error,
    data: homes,
  } = useGetHomesQuery(isFiltering);

  //   what to render
  let content = undefined;

  if (isLoading) {
    content = <div> Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>{error?.data}</div>;
  } else if (!isLoading && !isError && homes.length === 0) {
    content = <div> Content was not found!!!</div>;
  } else if (!isLoading && !isError && homes.length > 0) {
    isFiltering
      ? (content = homes.map((home) => (
          <Link key={home.id} to={`/property/${home.id}`}>
            {" "}
            <House home={home} />{" "}
          </Link>
        )))
      : (content = homes.map((home) => (
          <Link key={home.id} to={`/property/${home.id}`}>
            {" "}
            <House home={home} />{" "}
          </Link>
        )));
  }

  return (
    <section className=" mb-20">
      <div className="container mx-auto">
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {content}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
