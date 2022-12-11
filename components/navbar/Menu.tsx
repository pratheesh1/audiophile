"use client";

import React from "react";
import HamburgerIcon from "../svg/Hamburger";

export type TMenuProps = {
  open: boolean;
  onClick: (open: boolean) => void;
};

export default function Menu(props: TMenuProps) {
  const { open, onClick } = props;

  const toggleMenu = () => {
    onClick(!open);
  };

  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="p-2 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40focus:ring-blue-300 focus:ring focus:outline-none"
          aria-label="toggle menu"
          onClick={toggleMenu}
        >
          <HamburgerIcon open={open} />
        </button>
      </div>
    </>
  );
}
