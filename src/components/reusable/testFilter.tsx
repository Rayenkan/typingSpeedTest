"use client";
import React, { useState } from "react";
import useTestStore from "../stores/store";
export function TestFilter({}) {
  const {filter, setFilter}=useTestStore()

  const handleFilterClick = (value: string) => {
    setFilter((prevFilter:string[]) =>
      prevFilter.includes(value)
        ? prevFilter.filter((item :string) => item !== value)
        : [...prevFilter, value]
    );
  };
  return (
    <>
      <p
        className={`${
          filter.includes("Punctuation") ? "text-yellow-500" : "text-gray-500"
        } hover:text-gray-300 cursor-pointer `}
        onClick={() => handleFilterClick("Punctuation")}
      >
        @ Punctuation
      </p>
      <p
        className={`${
          filter.includes("Numbers") ? "text-yellow-500" : "text-gray-500"
        } hover:text-gray-300 cursor-pointer`}
        onClick={() => handleFilterClick("Numbers")}
      >
        # Numbers
      </p>
    </>
  );
}
