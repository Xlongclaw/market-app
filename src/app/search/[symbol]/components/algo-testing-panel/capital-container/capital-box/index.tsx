import { CapitalContext } from "@/app/search/[symbol]/providers/capital-provider";
import classNames from "classnames";
import React from "react";
import { RxReload } from "react-icons/rx";

interface IProps {
  capitalType: "INITIAL" | "REMAINING";
  capital: number;
}

export default function CapitalBox({ capital, capitalType }: IProps) {
  const capitalData = React.useContext(CapitalContext);

  const handleReset = () => {
    capitalData.changeRemainingCapital(capitalData.capital);
  };

  return (
    <div className=" flex gap-2 items-center text-xl">
      <span className="text-xs">
        {capitalType} {`->`}
      </span>
      {capitalType === "REMAINING" ? (
        <h3
          className={classNames("", {
            "text-red-600": capitalData.remainingCapital < capitalData.capital,
            "text-green-600":
              capitalData.remainingCapital > capitalData.capital,
            "text-white": capitalData.remainingCapital === capitalData.capital,
          })}
        >
          {capital.toFixed(2)}
        </h3>
      ) : (
        <h3>{capital.toFixed(2)}</h3>
      )}

      <p className="text-green-700">{`$`}</p>
      {capitalType === "REMAINING" && (
        <button
          onClick={handleReset}
          className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-xl"
        >
          <RxReload size={16} />
        </button>
      )}
    </div>
  );
}
