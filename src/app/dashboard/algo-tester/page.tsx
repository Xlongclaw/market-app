"use client"
import React from "react";
import SearchBar from "./_components/serach-bar";
import DateInput from "./_components/date-input";

export default function Page() {
  return (
    <div className="my-3 w-full">
      <div className="flex gap-3">
        <SearchBar />
        <DateInput title="From"/>
        <DateInput title="To"/>
      </div>
    </div>
  );
}
