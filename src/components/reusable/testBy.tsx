"use client";
import React, { useState } from "react";
import TextIcon from "../../app/svgs/textIcon";
import ClockIcon from "../../app/svgs/clockIcon";
import useTestStore from "../stores/store";
export function TestBy({}) {
  const {testBy, setTestBy}=useTestStore()
  return (
    <>
      <div className={`flex flex-row items-center space-x-1 cursor-pointer hover:text-gray-300 ${testBy =="time"?"text-yellow-500" :"text-gray-500"}`} onClick={()=>setTestBy("time")} >
        <ClockIcon />
        <p>By Time</p>
      </div>

      <div className={`flex flex-row items-center space-x-1 cursor-pointer hover:text-gray-300 ${testBy =="word"?"text-yellow-500" :"text-gray-500"}`} onClick={()=>setTestBy("word")}>
        <TextIcon />
        <p>By Word</p>
      </div>
    </>
  );
}
