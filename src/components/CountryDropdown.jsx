import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from "react-icons/ri";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { useGetHomesQuery } from "../feature/houseApi";
import { addLocation } from "../feature/housesSlice";
const CountryDropdown = () => {
  const [isOpen, seIsOpen] = useState(false);
  const [country, setCountry] = useState("Loaction (Any)");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    console.log(value);
    setCountry(value);
    dispatch(addLocation(value));
  };

  const { isLoading, isError, error, data: countries } = useGetHomesQuery();
  const uniqueCountries = {};

  // what to render
  let conente;
  if (isLoading) {
    conente = <ReactLoading height={667} width={375} />;
  } else if (!isLoading && isError) {
    conente = <div> {error?.data}</div>;
  } else if (!isLoading && !isError && countries.length === 0) {
    conente = <div> Content not found!!!</div>;
  } else if (!isLoading && !isError && countries.length > 0) {
    conente = (
      <Menu.Items className="dropdown-menu">
        {countries
          .filter((c) => {
            if (uniqueCountries[c.country]) {
              return false;
            }
            uniqueCountries[c.country] = true;
            return true;
          })
          .map((c) => {
            return (
              <Menu.Item
                onClick={() => handleClick(c.country)}
                as="li"
                key={c.id}
                className=" cursor-pointer hover:text-violet-700 transition"
              >
                {c.country}
              </Menu.Item>
            );
          })}
      </Menu.Items>
    );
  }

  return (
    <Menu as="div" className=" dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => seIsOpen(!isOpen)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select Your Place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      {conente}
    </Menu>
  );
};

export default CountryDropdown;
