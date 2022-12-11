"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import DropdownIcon from "../svg/Dropdown";
import Link from "next/link";
import styles from "./User.module.css";
import type { TUser } from "./user.d";

export type TUserProps = {
  user: TUser;
};

export default function User(props: TUserProps) {
  const { user } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const logout = () => {
    // TODO: logout
    console.log("logout");
  };

  return (
    <>
      <div className="flex flex-row items-center focus:outline-none mx-2">
        <span className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
          {user?.imageUrl ? (
            <Image
              src={user.imageUrl}
              className="object-cover w-full h-full"
              alt="avatar"
              height={32}
              width={32}
            />
          ) : (
            <Image
              src="/images/avatar.png"
              className="object-cover w-full h-full"
              alt="avatar"
              height={32}
              width={32}
            />
          )}
        </span>
        <h3 className="mx-2 text-sm font-medium text-gray-700">
          {`Hi, ${user.firstName}`}
        </h3>
        <button
          className="relative z-10 mx-2 block p-2 text-gray-700 border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40focus:ring-blue-300 focus:ring focus:outline-none"
          aria-label="toggle dropdown menu"
          onClick={toggleDropdown}
        >
          <DropdownIcon />
          {/* dropdown menu */}
          <span
            className={`absolute right-auto lg:right-10 top-9 z-20 w-48 py-2 mt-2 bg-gray-300 rounded-md shadow-xl ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            ref={menuRef}
          >
            <span className="flex flex-col">
              <Link href="/orders" className={styles.accountDropdown}>
                Your Orders
              </Link>
              <Link
                href="/"
                className={styles.accountDropdown}
                onClick={logout}
              >
                Sign Out
              </Link>
            </span>
          </span>
        </button>
      </div>
    </>
  );
}
