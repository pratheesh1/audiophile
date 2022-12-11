"use client";

import React, { useState } from "react";
import SearchIcon from "../svg/Search";

export type TSearchProps = {
  placeholder?: string;
  value?: string;
};

export default function Search(props: TSearchProps) {
  const { placeholder, value } = props;
  const [search, setSearch] = useState<string>(value || "");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: search
    console.log("search", search);
  };

  return (
    <span className="relative lg:m-0 text-gray-600">
      <form onSubmit={onSubmit}>
        <input
          className="border-2 border-gray-300 bg-white h-9 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-full"
          type="search"
          name="search"
          value={value || search}
          onChange={onChangeSearch}
          placeholder={placeholder || "Search"}
        />
        <button
          type="submit"
          className="absolute right-0 top-1 mt-2 mr-2"
          aria-label="search"
        >
          <SearchIcon />
        </button>
      </form>
    </span>
  );
}
