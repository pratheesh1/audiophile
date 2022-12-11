"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../svg/Logo";
import ShoppingCartIcon from "../svg/ShoppingCart";
import NavLink from "./NavLink";
import Search from "./Search";
import User from "./User";
import Menu from "./Menu";
import type { TUser } from "./user.d";

export type TNavbarProps = {
  user?: TUser;
};

export default function Navbar(props: TNavbarProps) {
  const { user } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* navbar */}
      <nav className="bg-gray-50 shadow py-1" ref={navRef}>
        <div className="container mx-auto px-6 py-1 lg:flex lg:justify-between lg:items-center">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div aria-label="brand logo">
              <NavLink
                href="/"
                innerContent={<Logo />}
                className="flex text-gray-800 text-xl font-bold lg:text-2xl hover:text-gray-700"
              />
            </div>

            {/* menu toggle button */}
            <Menu open={isMenuOpen} onClick={setIsMenuOpen} />
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`lg:flex items-center mt-3 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-6">
              <NavLink href="/" innerContent="Home" />
              <NavLink href="/shop" innerContent="Shop" />
              <NavLink href="/orders" innerContent="Orders" />
              <NavLink href="/contact-us" innerContent="Contact Us" />

              {/* search */}
              <Search />
            </div>

            {/* user/login-register */}
            <div className="flex lg:flex-row lg:mx-6 justify-between">
              {user ? (
                <User user={user} />
              ) : (
                <span>
                  <NavLink href="/login" innerContent="Login" />
                  <NavLink href="/register" innerContent="Register" />
                </span>
              )}

              {/* cart */}
              <Link
                className="relative text-gray-700 hover:text-gray-600 pt-2 pr-5"
                href="/cart"
              >
                <ShoppingCartIcon numberOfItems={user?.cartItems} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
