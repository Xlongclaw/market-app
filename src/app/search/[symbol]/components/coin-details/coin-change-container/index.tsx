import React from "react";
import { CoinDataContext } from "../../../providers/coin-current-data-provider";
import ChangeBox from "./change-box";

/**
 * CoinChangeContainer component displays change information for a specific cryptocurrency over different time intervals.
 * @returns JSX element representing the CoinChangeContainer component.
 */
export default function CoinChangeContainer(): JSX.Element {
  // Accessing coin data from context
  const marketData = React.useContext(CoinDataContext);

  // Render change information over different time intervals
  return (
    <div className="flex gap-2 my-4">
      {/* Display change box for hourly change */}
      <ChangeBox time={"HOUR"} delta={marketData!.coinData.delta.hour} />
      {/* Display change box for daily change */}
      <ChangeBox time={"DAY"} delta={marketData!.coinData.delta.day} />
      {/* Display change box for weekly change */}
      <ChangeBox time={"WEEK"} delta={marketData!.coinData.delta.week} />
      {/* Display change box for quarterly change */}
      <ChangeBox time={"QUARTER"} delta={marketData!.coinData.delta.quarter} />
      {/* Display change box for yearly change */}
      <ChangeBox time={"YEAR"} delta={marketData!.coinData.delta.year} />
    </div>
  );
}
