"use client";
import React from "react";

interface IProps {
  onSearch:(value:string)=>void
}

export default function SearchBar({onSearch}:IProps) {
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className=" border">
      {/* SEARCH */}
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Symbol"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={()=>onSearch(inputValue)}>search</button>
    </div>
  );
}
