"use client";
import React from "react";
import { CgSearch } from "react-icons/cg";

interface IProps {
  onSearch:(value:string)=>void
}

export default function SearchBar({onSearch}:IProps) {
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className=" border rounded-xl w-[30rem] border-zinc-900 px-6 flex ">
      {/* SEARCH */}
      <input
      className="bg-transparent py-3 focus:outline-none flex-1 text-xs font-semibold"
        type="text"
        value={inputValue}
        placeholder="Which crypto are you serching for?"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={()=>onSearch(inputValue)}><CgSearch/></button>
    </div>
  );
}
