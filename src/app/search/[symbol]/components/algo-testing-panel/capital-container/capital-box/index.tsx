import { CapitalContext } from "@/app/search/[symbol]/providers/capital-provider";
import classNames from "classnames";
import React from "react";
import { RxReload } from "react-icons/rx";

/**
 * Props interface for the CapitalBox component.
 */
interface IProps {
  capitalType: "INITIAL" | "REMAINING"; // The type of capital (INITIAL or REMAINING).
  capital: number; // The amount of capital to be displayed.
}

/**
 * CapitalBox component represents a box displaying capital information.
 * @param capital The amount of capital to be displayed.
 * @param capitalType The type of capital (INITIAL or REMAINING).
 * @returns JSX element representing the CapitalBox component.
 */
export default function CapitalBox({ capital, capitalType }: IProps): JSX.Element {
  // Accessing capital data from context
  const capitalData = React.useContext(CapitalContext);

  // Function to handle resetting remaining capital
  const handleReset = () => {
    capitalData.changeRemainingCapital(capitalData.capital);
  };

  // Render the capital box
  return (
    <div className="flex gap-2 items-center text-xl">
      {/* Display capital type */}
      <span className="text-xs">{capitalType} {`->`}</span>
      {/* Display capital amount */}
      {capitalType === "REMAINING" ? (
        <h3
          className={classNames("", {
            "text-red-600": capitalData.remainingCapital < capitalData.capital,
            "text-green-600": capitalData.remainingCapital > capitalData.capital,
            "text-white": capitalData.remainingCapital === capitalData.capital,
          })}
        >
          {capital.toFixed(2)}
        </h3>
      ) : (
        <h3>{capital.toFixed(2)}</h3>
      )}
      {/* Display currency symbol */}
      <p className="text-green-700">{`$`}</p>
      {/* Render reload button for remaining capital */}
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
