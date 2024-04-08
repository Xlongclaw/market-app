"use client";
import React from "react";
import SearchBar from "./_components/serach-bar";
import DateInput from "./_components/date-input";
import AlgoSelectList from "./_components/algo-select-list";

export default function Page() {
  return (
    <div className="my-4 w-full flex flex-col gap-3 mr-3 h-full">
      <div className="flex gap-3 items-center text-xs font-medium justify-between relative z-10">
        <div className="text-zinc-300 text-[13px] tracking-[1px]">
          ALGORITHM MACHINE
        </div>
        <div className="flex gap-4">
          <SearchBar />
          <DateInput title="From" />
          <DateInput title="To" />
          <AlgoSelectList />
        </div>
      </div>
      <div className="bg-zinc-90 p-0 flex  border-zinc-800 borde rounded-xl relative gap-4">
        <div className="bg-zinc-950 h-[40rem] w-[21rem] rounded-3xl"></div>
        <div className="bg-new-dark1/30 h-[40rem] flex-1 rounded-3xl flex justify-center items-center  text-zinc-700">
          <div className="border-4 border-zinc-800 h-64 w-64 flex justify-center items-center rounded-full text-sm font-bold">NO ALGORITHM TESTED YET</div>
        </div>
      </div>
    </div>
  );
}
