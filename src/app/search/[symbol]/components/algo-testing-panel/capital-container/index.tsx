import React from "react";
import { BiMoney } from "react-icons/bi";
import { RxReload } from "react-icons/rx";

interface Iprops {
  capital: number;
  remainingCapital: number;
  setRemainingCapital: any;
}

export default function CapitalContainer({
  capital,
  remainingCapital,
  setRemainingCapital,
}: Iprops) {
  const handleReset = () => {
    setRemainingCapital(capital);
  };

  return (
    <div className="flex justify-between px-2">
      <h5 className=" text-xl flex items-center gap-2">
        <span className="text-xs">INITIAL {`->`}</span>
        {capital} <BiMoney className="text-green-700" />
      </h5>
      <div className=" flex gap-2 items-center text-xl">
        <span className="text-xs">REMAINING {`->`}</span>
        <h3
          className={
            remainingCapital < capital ? "text-red-600" : " text-green-600"
          }
        >
          {remainingCapital.toFixed(2)}
        </h3>
        <BiMoney className="text-green-700" />
        <button
          onClick={handleReset}
          className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl"
        >
          <RxReload size={16} />{" "}
        </button>
      </div>
    </div>
  );
}
