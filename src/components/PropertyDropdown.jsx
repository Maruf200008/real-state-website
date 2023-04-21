import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from "react-icons/ri";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { useGetHomesQuery } from "../feature/houseApi";
import { addProperty } from "../feature/housesSlice";
const PropertyDropdown = () => {
  const [isOpen, seIsOpen] = useState(false);
  const [property, setProperty] = useState("Property (Any)");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setProperty(value);
    dispatch(addProperty(value));
  };

  const { isLoading, isError, error, data: propertys } = useGetHomesQuery();
  const uniqueProperty = {};

  // what to render
  let conente;
  if (isLoading) {
    conente = <ReactLoading height={667} width={375} />;
  } else if (!isLoading && isError) {
    conente = <div> {error?.data}</div>;
  } else if (!isLoading && !isError && propertys.length === 0) {
    conente = <div> Content not found!!!</div>;
  } else if (!isLoading && !isError && propertys.length > 0) {
    conente = (
      <Menu.Items className="dropdown-menu">
        {propertys
          .filter((p) => {
            if (uniqueProperty[p.type]) {
              return false;
            }
            uniqueProperty[p.type] = true;
            return true;
          })
          .map((p) => {
            return (
              <Menu.Item
                onClick={() => handleClick(p.type)}
                as="li"
                key={p.id}
                className=" cursor-pointer hover:text-violet-700 transition"
              >
                {p.type}
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
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
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

export default PropertyDropdown;
