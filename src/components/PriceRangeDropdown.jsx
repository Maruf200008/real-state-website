import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiWallet3Line,
} from "react-icons/ri";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { useGetHomesQuery } from "../feature/houseApi";
import { addPriceRange } from "../feature/housesSlice";
const PriceRangeDropdown = () => {
  const [isOpen, seIsOpen] = useState(false);
  const [price, setPrice] = useState("Price Range (Any)");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setPrice(value);
    dispatch(addPriceRange(value));
  };

  const { isLoading, isError, error, data: priceRanges } = useGetHomesQuery();

  const uniquePrice = {};

  // what to render
  let conente;
  if (isLoading) {
    conente = <ReactLoading height={667} width={375} />;
  } else if (!isLoading && isError) {
    conente = <div> {error?.data}</div>;
  } else if (!isLoading && !isError && priceRanges.length === 0) {
    conente = <div> Content not found!!!</div>;
  } else if (!isLoading && !isError && priceRanges.length > 0) {
    conente = (
      <Menu.Items className="dropdown-menu">
        {priceRanges
          .slice()
          .sort((a, b) => b.price - a.price)
          .filter((p) => {
            if (uniquePrice[p.price]) {
              return false;
            }
            uniquePrice[p.price] = true;
            return true;
          })
          .map((p) => {
            return (
              <Menu.Item
                onClick={() => handleClick(p.price)}
                as="li"
                key={p.id}
                className=" cursor-pointer hover:text-violet-700 transition"
              >
                {p.price}
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
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
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

export default PriceRangeDropdown;
